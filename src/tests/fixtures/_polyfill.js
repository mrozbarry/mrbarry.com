function dateChunk () {
  return `${(new Date()).valueOf()}`
}

function randomChunk () {
  const randomSource = 'abcdefABCDEF0123456789'

  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (randomIdx) {
    return randomSource[Math.floor(randomSource.length * Math.random())]
  }).join('')
}

function generateId () {
  const now = dateChunk()
  const random = randomChunk()
  return '-' + (new Buffer(now).toString('base64')).slice(0, -2) + random
}

export function addToCollection (collection, item) {
  const id = generateId()

  return Object.assign({}, collection, {
    [id]: item
  })
}
