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

## Configure your AWS credentials

You’ll need to configure your AWS dev account credentials if you want to deploy a private copy of the function to AWS.

To create/retrieve your AWS security access keys:

* Log into the AWS dev account console: https://oes-s1-portal-non-prod.signin.aws.amazon.com/console
* Go to the [IAM](https://console.aws.amazon.com/iam/home) page
* Click 'Users' from the side nav
* Click your username in the list of Users
* Click the 'Security credentials' tab
* Click 'Create access key' under 'Access keys'
* Click 'Download .csv file' to save a copy of the Access key ID and Secret access key

Note: You can't retrieve the secret access key later so either copy it now or save the `.csv` file to your computer.

Install the [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) for your operating system.

Then configure your AWS security access keys:

```sh
aws --profile developer configure
AWS Access Key ID [None]: xxxxxxxxxxxxxxxx
AWS Secret Access Key [None]: xxxxxxxxxxxxxxxxxxxx
Default region name [None]: ap-southeast-2
Default output format [None]: json
```

You activate the `developer` profile:

```sh
export AWS_PROFILE=developer
```

**Note:** If you want `developer` to be your default profile then simply omit the `--profile <profile_name>` option when configuring the AWS CLI. You then can also omit setting the `AWS_PROFILE` environment variable.

For detailed instructions, refer to the [Serverless AWS - Credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) guide.'

## Configure slack incoming webhook

Go to your slack team, `Custom Integrations` -> `Incoming WebHooks` and then create a new webhook.

Copy the webhook url and set it as an environment variable:

```sh
export WEBHOOK_URL=https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/xxxxxxxxxx
```

## Deployment scripts

* `npm run deploy` - deploy the function to your AWS account
* `npm run remove` - remove the function stack from your AWS account
* `npm run invoke` - invoke the function remotely
* `npm run invoke-local` - invoke the function locally

## Release

`npm run release`.

This will generate a release on github.

For more information please check [release-it](https://github.com/bpro/release-it)

## Resources

* [License (MIT)][license]
* [Releases][releases]

[license]: ./LICENSE
[releases]: https://github.com/jaypeng2015/aws-this-week/releases
