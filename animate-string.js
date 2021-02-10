const chalk = require("chalk-animation");

// list valide methods
const validMethods = ['glitch', 'neon', 'pulse', 'karaoke', 'rainbow', 'radar'];

// grab 3rd position in args array
const scriptArg = process.argv[2];

// check the arg is valid and use it or default to 'rainbow'
const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';

function animateString(string){
    // const animation = chalk.rainbow(string);
    // use the method that was selected
    const animation = chalk[method](string);
    
    setTimeout(() => animation.stop(), 1300);
};

// named export
module.exports = { animateString: animateString};