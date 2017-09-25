var isFairPos = Math.random() < 0.9 ? true : false;
var isFairNeg = Math.random() < 0.1 ? true : false;

let commentsNeg = ["not too good food", "too expensive", "did not like the food", "not suotable for families", "unpleasant staff", "not sure"];
let commentsPos = ["good food", "great value for money", "super fresh food", "great for families", "nice staff", "nice climate", "quick service", "amazing food"];

const pickContent = (value) =>
  (value == "pos" ? commentsPos[Math.floor(Math.random()*commentsPos.length)] : commentsNeg[Math.floor(Math.random()*commentsNeg.length)]);
const getRandomUserId = (min, max) => Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1) + min);

var createCommForRest = function(numNeg, numPos, restrId) {
    let commentsForRest = []
    for (var i=0; i<=numNeg; i++) {
        let comment = {
            user_id: getRandomUserId(1, 27),
            restaurant_id: restrId,
            content: pickContent(),
            is_pos: false,
            is_fair: isFairNeg
         };
        commentsForRest.push(comment)
    };
    for (var i=0; i<=numPos; i++) {
        let comment = {
            user_id: getRandomUserId(1, 27),
            restaurant_id: restrId,
            content: pickContent("pos"),
            is_pos: true,
            is_fair: isFairPos
         };
         commentsForRest.push(comment)
    };
    return commentsForRest
 };

var createCommForAllRest = function(restIndexMin, restIndexMax) {
  let comments = []
  for (var i=restIndexMin; i<=restIndexMax; i++) {
    let numNeg = Math.floor(Math.random() * 4)
    let numPos = Math.floor(Math.random() * 6)
    comments = comments.concat(createCommForRest(numNeg, numPos, i))
  };
  console.log(comments.length);
  return comments
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
        return knex('comments').insert(
              // Create random comments for restaurants with index numbers 1-28 - we have 28 in DB!
              createCommForAllRest(1,28)
        );
    });
}
