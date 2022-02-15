const chalk = require('chalk');
const log = console.log;

function info(...args) {
debugger;
    args.forEach(item => {
        log(chalk.green(item));
    });

}

function warn(...args) {

    args.forEach(item => {
        debugger;
        log(chalk.yellow(item));
    });

}

function error(...args) {

    args.forEach(item => {
        log(chalk.red(item));
    });

}

module.exports = {info,warn,error};