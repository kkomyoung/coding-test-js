const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const size = Number(input[0]);
    const array = [];

    for(let i=1; i<=size; i++) {
        let star = '';
        for(let j=1; j<=i; j++) {
            star = star + '*';
        }
        array.push(star);
    }
    
    console.log(array.join('\n'));
});