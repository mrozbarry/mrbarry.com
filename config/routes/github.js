
var Github = require('github-api');

var _ = require('lodash')
var allowedOwners = ['mrozbarry', 'pairshaped', 'whatisinternet'];

function getOwner(ownerName, res) {
  if (_.contains(allowedOwners, ownerName)) return true;

  res.status(404).send('404 - Resource not found!');
  return false;
}

function getRepo(ownerName, repoName, res) {
  if (getOwnerName(ownerName, res)) {
  }
  return false
}

module.exports = function(app) {
  github = new Github({
    token: process.env.GITHUB_TOKEN,
    auth: 'oauth'
  });

  var me = github.getUser()

  app.param('repo_name', function(req, res, next, repo_name) {
    repository = new Github.Repository({
      name: res.github,
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
  });

  app.get('/repos.json', function(req, res) {

    me.repos(function(err, repos) {
      if (err) {
        res.status(404).send(JSON.stringify(err));
        return;
      }
      console.log('TODO: Finish config/routes/github.js');
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(repos));
    });
  });

  app.get('/repos/:repo_owner.json', function(req, res, next) {
    var repoOwner = req.params.repo_owner;

    if (getOwner(repoOwner, res)) {
      res.setHeader('Content-Type', 'application/json');
      me.userRepos(repoOwner, function(err, repos) {
        res.send(JSON.stringify(repos))
      });
    }
  });

  app.get('/repos/:repo_owner/:repo_name.json', function(req, res, next) {
    var repoOwner = req.params.repo_owner;
    var repoName = req.params.repo_name;

    if (getRepo(repoOwner, repoName, res)) {
      res.setHeader('Content-Type', 'application/json');
      var repository = github.getRepo(repoOwner, repoName);
      repository.contents('master', '/', function(err, contents){
        if (err) return next(err);
        res.send(JSON.stringify(contents));
      });
    }
  });
};
