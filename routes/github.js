
var Github = require('github-api');

module.exports = function(app) {
  github = new Github({
    token: process.env.GITHUB_TOKEN,
    auth: 'oauth'
  });

  var me = github.getUser()

  app.param('repo_name', function(req, res, next, repo_name) {
    repository = new Github.Repository({
      name: repo_name,
      user: me.login
    })

    repository.contents('master', 'showoff.json', function(err, showoff) {
      if (err) {
        res.status(404).send('Not found');
        return next(new Error('404 - Repository not found!'));
      }
      req.showoff = JSON.parse(showoff) || {}

      next();
    });
  })

  app.get('/repos.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    me.repos(function(err, repos) {
      res.send(JSON.stringify(repos));
    });
  });

  app.get('/repos/:repo_name.json', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.showoff))
  });
};
