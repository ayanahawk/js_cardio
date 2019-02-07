// 🏃🏼🏊🏼🏋🏼🏄🏼
// from Wes Bos' JavaScript30 course: javascript30.com

// Some data we can work with
// prettier-ignore
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// prettier-ignore
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who were born in the 1500's

// 2. Give us an array of the inventors' first and last names

// 3. Sort the inventors by birthdate, oldest to youngest

// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. Sort the people alphabetically by last name

// 7. Sum up the instances of each of these vehicles
// prettier-ignore
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// 8. is at least one person 19 or older?
// 9. is everyone 19 or older?
const team = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

/** ************** ***** */
/** For the following, complete the functions so that they satisfy the documentation */
// Use this comment data for testing
const commentData = [
  {
    text: 'Love this!',
    id: 523423,
    timestamp: 1549581565,
  },
  {
    text: 'Super good',
    id: 823423,
    timestamp: 1549577965,
  },
  {
    text: 'You are the best',
    id: 2039842,
    timestamp: 1549495165,
  },
  {
    text: 'Ramen is my fav food ever',
    id: 123523,
    timestamp: 1548976765,
  },
  {
    text: 'Nice Nice Nice!',
    id: 542328,
    timestamp: 1546903165,
  },
];

/**
 * Adds a new comment to the comments array
 * @param {object} newComment Comment object
 * @param {array} comments Array of comment objects
 * @returns {array} Updated comments array
 */
function addComment(newComment, comments) {}

/**
 * Updates comment text
 * @param {string} commentText Updated comment text
 * @param {number} commentId Unique Id for comment
 * @param {array} comments Array of comment objects
 * @returns {array} Updated comments array
 */
function updateComment(commentText, commentId, comments) {}

/**
 * Removes comment from the list
 * @param {number} commentId Unique Id for comment to be removed
 * @param {array} comments Array of comment objects
 * @returns {array} Updated comments array
 */
function removeComment(commentId, comments) {}

/**
 * Lists comments sorted by timestamp in desc or asc order
 * @param {array} comments Array of comment objects
 * @param {boolean} asc If true sorts by oldest to newest, else sorts newest to oldest
 *  @returns {array} Sorted array of comment objects
 */
function getCommentsSortedByTime(comments, asc) {}

/**
 * Filters comments by a substring contained in the text
 * @param {array} comments Array of comment objects
 * @param {string} substring Substring to be filtered
 * @returns {array} Filtered array of comment objects
 */
function filterCommentsByText(comments, substring) {}
