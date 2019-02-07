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
