# AWS This Week

[![Node version](https://img.shields.io/badge/node-_8.10.0-green.svg?style=flat)](http://nodejs.org/download/)
[![Dependency Status](https://david-dm.org/jaypeng2015/aws-this-week/status.svg)](https://david-dm.org/jaypeng2015/aws-this-week)
[![devDependency Status](https://david-dm.org/jaypeng2015/aws-this-week/dev-status.svg)](https://david-dm.org/jaypeng2015/aws-this-week?type=dev)

A cron lambda function which gets the link of the latest AWS This Week youtube video and send it to a slack webhook.
By default it runs on 00:00 every Monday UTC time.

## Getting Started

* git clone https://github.com/jaypeng2015/aws-this-week
* cd aws-this-week
* nvm install
* npm install
* npm test

## Deployment scripts

* npm run deploy
* npm run remove
* npm run invoke
* npm run invoke-local

## Release

`npm run release`.
This will generate a release on github.
For more information please check [release-it](https://github.com/
bpro/release-it)

## Resources

* [License (MIT)][license]
* [Releases][releases]

[license]: ./LICENSE
[releases]: https://github.com/jaypeng2015/aws-this-week/releases
