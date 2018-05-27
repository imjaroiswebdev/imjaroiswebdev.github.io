require('dot-env')
const ghPages = require('gh-pages')
const cli = require('cli')
const chalk = require('chalk')

const ghPagesConfig = {
  branch: 'master',
  cloneDir: '.site-src-cache',
  repo: `https://${process.env.GH_TOKEN}@github.com/imjaroiswebdev/imjaroiswebdev.github.io.git`,
  message: `[${(new Date()).toLocaleDateString('es-419', { timeZone: 'America/Santiago' })}]: Auto-generated commit for deploying site`,
  add: true
}

const deployToMaster = () => new Promise((resolve, reject) => {
  // We can't log on Travis because it would leak the GitHub token.
  // We can't use the gh-pages silent option because it makes error messages
  // less informative (https://github.com/mozilla/oghliner/pull/58#issuecomment-147550610).
  ghPagesConfig.logger = function () {}

  ghPages.publish('build', ghPagesConfig, function (err) {
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
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
  })
