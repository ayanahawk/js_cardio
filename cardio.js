// 🏃🏼🏊🏼🏋🏼🏄🏼

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */
function filterByLength(people, length) {
  return people.filter(people => people.length > length);
}

/**
 * Returns an array of every nth person.
 * Note that counting starts
 * at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  if (n === 0) {
    return [...people];
  }
  return people.filter((_, i) => i % n === 0 || n === 0);
}

/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */
function initials(people) {
  // const newArr = [];
  const people2 = people.map(person => {
    const fullName = person.split(' ');
    const [first, last] = fullName;

    return `${first} ${last}`;
  });
}

/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 *    // → ['1. Kanye', '2. Barack']
 */
function peopleWithPosition(people) {
  return people.map((name, index) => `${index}: ${name}`);
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  return people.concat().sort();

  // return [...people].sort();
}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */

function sortByLastName(people) {
  const sortedArray = [...people];
  return sortedArray.sort((a, b) => {
    const alastName = a.split(' ')[1];
    const blastName = b.split(' ')[1];
    if (alastName > blastName) {
      return 1;
    }
    return -1;
  });

  // const people2 = [...people];
  // return people2.sort((left, right) => left.split(' ')[1] > right.split(' ')[1] ? 1 : -1);
}

/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */

function countTotalCharacters(people) {
  return people.reduce((arr, current) => arr + current.length, 0);
}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {
  return people.every(person => person.includes(letter));
  // const returnValue = false;
  // people.forEach(names => {
  //   if (!names.includes(letter)) {
  //     return false;
  //   }
  // });
  // return true;
}

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition,
};
