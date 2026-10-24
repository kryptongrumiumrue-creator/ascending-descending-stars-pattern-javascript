const readline = require('readline-sync');

const ascending = Number(readline.question('Enter ascending stars number: '));

let row = '';
for (let i = 1; i <= ascending; i++) {
    row +='*';
    console.log(row);

} console.log(' ');

const descending = Number(readline.question('Enter descending stars number: '));

for (let i = descending; i >= 1; i--) {
    let row ='';

    for (let j = 1; j <= i; j++) {
        row +='*';
    }
    console.log(row);
}