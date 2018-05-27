require('dot-env')
const ghPages = require('gh-pages')
const gitRemoteUrl = require('git-remote-url')
const cli = require('cli')
const chalk = require('chalk')

const ghPagesConfig = {
  branch: 'master',
  cloneDir: '.gh-pages-cache',
  message: `[${(new Date()).toLocaleDateString('es-419', { timeZone: 'America/Santiago' })}]: Auto-generated commit for deploying site`,
  add: true
}

const deployToMaster = () => new Promise((resolve, reject) => {
  gitRemoteUrl('./', 'origin').then(function(url) {
    // We can't log on Travis because it would leak the GitHub token.
    // We can't use the gh-pages silent option because it makes error messages
    // less informative (https://github.com/mozilla/oghliner/pull/58#issuecomment-147550610).
    ghPagesConfig.logger = function () {}

    if ('GH_TOKEN' in process.env) {
      const match = url.match(/^git@github.com:([^/]+)\/([^.]+)\.git$/) ||
      url.match(/^https:\/\/github.com\/([^/]+)\/([^.]+)\.git$/)

      if (match) {
        url = 'https://' + process.env.GH_TOKEN + '@github.com/' + match[1] + '/' + match[2] + '.git'
      }

      ghPagesConfig.repo = url
    }

    ghPages.publish('build', ghPagesConfig, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  }, reject)
})

cli.spinner(chalk.yellow.bold('Deploying to Github Pages...'))

deployToMaster()
  .then(() => {
    cli.spinner(chalk.green.bold('✓ ') + '… Site published to Github Pages!\n', true)

    process.exit(0)
  })
  .catch(err => {
    cli.spinner(chalk.red.bold('✗ ') + '… An error ocurred during the deployment process!\n', true)

    console.error(err)
    process.exit(1)
  })
