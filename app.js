const loggerModule = require('./utils/logger');
const info = loggerModule.info;
const warm = loggerModule.warn;
const error = loggerModule.error;

info('Here', 'is', 'a', 'green', 'string');
warm('Here', 'is', 'a', 'yellow', 'string');
error('Here', 'is', 'a', 'red', 'string');

