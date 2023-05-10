const chalk = require('chalk');
const myLog = console.log;

const sayHello = (name) => {
  myLog(chalk.green('Hello ') + chalk.blue(name) + '!');
}

module.exports = {
  sayHello
}
