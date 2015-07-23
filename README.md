# Stupid Simple Software Portfolio Website
(Using as little resources as possible)

**IMPORANT:** This is not production-ready yet!

# Getting Started

## Configuration

There are a handful of environment variables you should use to make this website reflect your personal information, and they are:

  * GITHUB_TOKEN
  * WEBSITE_TITLE
  * WEBSITE_SUBTITLE
  * GRAVATAR_EMAIL

These should be fairly self-evident, but to expound quickly:
GITHUB_TOKEN is your oauth api token from github (the token should be configured to be read-only, for public repos only),
WEBSITE_TITLE and WEBSITE_SUBTITLE are displayed on the website header, along with your GRAVATAR_EMAIL gravatar image.

If you don't have gravatar (or don't have an appropriate photo on your main gravatar account), create a new gravatar with your business/professional email address.  It's free, and let's you do a small handful of neat things to manage your global professional persona.

## Local development

**DO NOT USE THIS SETUP FOR PRODUCTION:** webpack-dev-server

To get the server up and running, open your terminal, and type:

    $ cd this/git/repo
    $ npm install webpack-dev-server
    $ npm install
    $ npm run webpack:development

To take the pain out of typing out all the environment variables, you can copy over a small template file inside ./lib

    $ cp ./lib/start.dev.sh.example ./start.dev.sh
    $ chmod +x ./start.dev.sh
    $ ./start.dev.sh

Make sure you edit the file with your appropriate information so your site is properly configured at launch.

## Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Follow the install directions, then give it a spin.

## Your own production server

You will first want to have both coffeescript and webpack installed globally (you may need sudo for this):

    $ npm install coffee-script webpack

Then install dependencies, and compile the scripts:

    $ npm install

From here, you can run the app similar to a local dev install

    $ cp ./lib/start.prod.sh.example ./start.prod.sh
    $ chmod +x ./start.prod.sh
    $ ./shart.prod.sh

If you are doing things more manually:

    $ GITHUB_TOKEN=my_token ... node index.js

This may be a better task to hand off to systemd, upstart, or similar.

