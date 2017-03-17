const fs = require('fs');
const path = require('path');

const peopleCsv = path.join(__dirname, 'files', 'people.csv');
const headers = ['id', 'firstName', 'lastName', 'email', 'gender', 'ip'];

function parsePeopleCsv(contents){
  const lines = contents.split('\n');
  return lines.map((line) => {

    const tokens = line.split(',');

    /*  forEach example:
     const person = {};
     tokens.forEach((token, i) => {
     person[headers[i]] = token;
     });
     return person;
     */

    return tokens.reduce((person, next, i) => {
      person[headers[i]] = next;
      return person;
    }, {});

  });
}

//sync example
console.log('Reading File Sync');
const contents = fs.readFileSync(peopleCsv, 'utf8');
console.log(`Finished Reading File of length ${contents.length}`);
console.log('Other unrelated stuff...');
const people = parsePeopleCsv(contents);
console.log(`Succesfully parsed ${people.length} people`);

console.log(' ------------ ');

//async example
console.log('Reading File Async');
fs.readFile(peopleCsv, 'utf8', (err, contentsAsync) => {
  if (err) {
    throw err;
  }
  console.log(`Finished Reading File of length ${contentsAsync.length}`);
  const peopleAsync = parsePeopleCsv(contentsAsync);
  console.log(`Succesfully parsed ${peopleAsync.length} people`);
});
console.log('Other unrelated stuff...');
