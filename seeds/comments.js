var isFairPos = Math.random() < 0.9 ? true : false;
var isFairNeg = Math.random() < 0.1 ? true : false;

let commentsNeg = ["not too good food", "too expensive", "did not like the food", "not suotable for families", "unpleasant staff", "not sure"];
let commentsPos = ["good food", "great value for money", "super fresh food", "great for families", "nice staff", "nice climate", "quick service", "amazing food"];
const generateComment = (isPos) => (isPos == true ? commentsPos[Math.floor(Math.random() * commentsPos.length)] : commentsNeg[Math.floor(Math.random() * commentsNeg.length)]);

var commForRestaurant = function(numNeg, numPos, restrId) {
      let comments = []
      let usedUsrIds = []

      const generateUsrId = function() {
          let getRandomUserId = 0;
          let maxUsrId = 30; let minUsrId = 1
          do {
              getRandomUserId = Math.floor(Math.random() * (Math.ceil(maxUsrId) - Math.ceil(minUsrId) + 1) + minUsrId)
          } while (usedUsrIds.includes(getRandomUserId) === true)

          usedUsrIds.push(getRandomUserId)
          return getRandomUserId
      };
      for (var i=0; i<=numNeg; i++) {
          let comment = {
              user_id: generateUsrId(),
              restaurant_id: restrId,
              content: generateComment(),
              is_pos: false,
              is_fair: isFairNeg
           };
          comments.push(comment)
      };
      for (var i=0; i<=numPos; i++) {
          let comment = {
              user_id: generateUsrId(),
              restaurant_id: restrId,
              content: generateComment(true),
              is_pos: true,
              is_fair: isFairPos
           };
           comments.push(comment)
      };
      return comments
 };

var createCommForAllRest = function(restIndexMin, restIndexMax) {
  let comments = []
  for (var i=restIndexMin; i<=restIndexMax; i++) {
      let numNeg = Math.floor(Math.random() * 4)
      let numPos = Math.floor(Math.random() * 6)
      comments = comments.concat(commForRestaurant(numNeg, numPos, i))
  };
  // console.log(comments);
  console.log("The number of comments created is ", comments.length);
  return comments
}

exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
        return knex('comments').insert(
              // Create random comments for restaurants with index numbers 1-28 - we have 28 in DB!
              createCommForAllRest(1,28)
        );
    });
}
