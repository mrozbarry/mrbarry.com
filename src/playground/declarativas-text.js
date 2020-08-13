import { render, c } from 'https://unpkg.com/declarativas?module=1';
const canvas = document.querySelector('canvas');

function* stateMachine(init) {
  let state = { ...init };
  while (true) {
    const updateFn = yield state;
    state = updateFn(state);
  }
}

const initialState = {
  gravity: 15,
  letters: [],
  lastFrameTime: null,
};

const addLetter = char => (state) => ({
  ...state,
  letters: [
    ...state.letters,
    {
      char,
      hue: Math.random() * 360,
      p: { x: Math.random() * canvas.width, y: canvas.height - 20 },
      v: { x: (Math.random() * 50) - 25, y: canvas.height * -1.5 },
      angle: 0,
      torque: (Math.random() * 3) - 1.5,
    },
  ],
});

const simulate = now => (state) => {
  const delta = state.lastFrameTime === null ? 0 : (now - state.lastFrameTime) / 1000;
      
  return {
    ...state,
    lastFrameTime: now,
    letters: state.letters.reduce((memo, letter) => {
      if (letter.p.y > canvas.height && letter.v.y > 0) return memo;

      const v = { x: letter.v.x / 1.1, y: letter.v.y + state.gravity };

      return [
        ...memo,
        {
          ...letter,
          v,
          p: {
            x: letter.p.x + (v.x * delta),
            y: letter.p.y + (v.y * delta),
          },
          angle: letter.angle + (letter.torque * delta),
        }
      ];
    }, []),
  };
}

const app = stateMachine(initialState);
app.next(s => s);

let rafHandle = null;
const tick = () => {
  cancelAnimationFrame(rafHandle);

  const { value: state } = app.next(simulate(performance.now()));
  if (state.letters.length > 0) {
    rafHandle = requestAnimationFrame(tick);
  }

  render(canvas.getContext('2d'), [
    c('save'),
    c('fillStyle', { value: 'white' }),
    c('fillRect', { x: 0, y: 0, width: canvas.width, height: canvas.height }),
    
    c('font', { value: '48px sans-serif' }),
    c('textBaseline', { value: 'middle' }),
    c('textAlign', { value: 'center' }),
    
    c('fillStyle', { value: `#aaa` }),
    c('fillText', { x: canvas.width / 2, y: canvas.height / 2, text: 'Start typing something' }), 

    state.letters.map((l) => [
      c('save'),
      c('translate', l.p),
      c('rotate', { value: l.angle }),
      c('fillStyle', { value: `hsl(${l.hue}, 50%, 50%)` }),
      c('fillText', { x: 0, y: 0, text: l.char }),      
      c('restore'),
    ]),
    c('restore'),
  ]);
};

document.addEventListener('keydown', (event) => {
  app.next(addLetter(event.key));
  tick();
});

requestAnimationFrame(() => {
  canvas.width = window.innerWidth - 9;
  canvas.height = window.innerHeight - 9;
  tick();
});
