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
    return people;
  }
  // return people.filter((people, n) => n % 2);
  return people.filter((people, i) => i % n === 0);
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
  const newArr = [];

  people.map(name => {
    const splitName = name.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[1];
    newArr.push(firstName[0] + lastName[0]);
  });
  return newArr;
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
  // const newArr = [];
  return people.map((name, index) => `${index}: ${name}`);
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  const newArr = people.sort();
  return newArr;
}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {
  const newArr = [];

  people.sort(names => {
    // const split = names.split(' ');
    const firstName = names.split(' ')[0];
    const lastName = names.split(' ')[1];
    const newName = `${lastName} ${firstName}`;
    newArr.push(newName);
  });
  return newArr;
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
  // const returnValue = true;
  people.forEach(names => {
    if (!names.includes(letter)) {
      return false;
    }
  });
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
