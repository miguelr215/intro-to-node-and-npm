const chalk = require("chalk-animation");

function animateString(string){
    const animation = chalk.rainbow(string);

    setTimeout(() => animation.stop(), 1300);
};

// named export
module.exports = { animateString: animateString};