// 🏃🏼🏊🏼🏋🏼🏄🏼
/* 
const people = [
  'Faber Guerreau',
  'Gilbertine Stichall',
  'Cristina Cuckoo',
  'Johnette Chatelot',
  'Trish Mayou',
  'Ruth Connell',
  'Hamid Elsegood',
  'Thorstein Woodward',
  'Bethena Porte',
  'Nelle Durek',
  'Bastien Leyrroyd',
  'Albie Tranfield',
  'Bryce Temprell',
  'Darya Chinery',
  'Rea Matoshin',
  'Tommie Benda',
  'Lowell Trowel',
  'Wayne Claughton',
  'Teena Bansal',
  'Basile Phonix',
];
*/

// Filter people with names longer than
function filterByLength(people, length) {}

function everyNPerson(people, n) {}

function groupsOfSizeN(people, n) {}

function nGroups(people, n) {}

// Returns array of first initial last initial
function initials(people) {
  return people.map(peep => `${peep.split(' ')[0][0]}${peep.split(' ')[1][0]}`);
}

function peopleWithPosition(people) {}

function sortByFirstName(people) {}

function sortByLastName(people) {}

// Use reduce
function countLetter(people, letter) {}

function everyoneHasLetter(people, letter) {}

function someoneHasLetter(people, letter) {}

/* ===== */

// Create
// Read
// Update
// Delete

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countLetter,
  everyoneHasLetter,
  someoneHasLetter,
};
