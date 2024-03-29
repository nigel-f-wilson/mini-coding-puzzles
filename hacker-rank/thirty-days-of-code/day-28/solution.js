'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
  const N = parseInt(readLine().trim(), 10);

  let table = []

  // Build Table
  for (let currentRow = 0; currentRow < N; currentRow++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const firstName = firstMultipleInput[0];
    const emailID = firstMultipleInput[1];
    table[currentRow] = [firstName, emailID]
  }

  // Filter to only Gmail
  let gmailUsers = table.filter(row => row[1].includes("@gmail.com"))

  // Filter to only names
  let names = gmailUsers.map(row => row[0])

  // Alphabetize
  names.sort()

  // Print
  names.forEach(name => {
    console.log(name)
  });
}
