var isFairPos = Math.random() < 0.9 ? true : false;
var isFairNeg = Math.random() < 0.1 ? true : false;
const getRandomUserId = (min, max) => Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1) + min);

let commentsNeg = ["not too good food", "too expensive", "did not like the food", "not suotable for families", "unpleasant staff", "not sure"];
let commentsPos = ["good food", "great value for money", "super fresh food", "great for families", "nice staff", "nice climate", "quick service", "amazing food"];
const pickContent = (value) => (value == "pos" ? commentsPos[Math.floor(Math.random()*commentsPos.length)] : commentsNeg[Math.floor(Math.random()*commentsNeg.length)])

var createCommForRest = function(numNeg, numPos, restrId) {
    let CommentsForRest = []
    for (var i=0; i<=numNeg; i++) {
        let comment = {
            user_id: getRandomUserId(1, 14),
            restaurant_id: restrId,
            content: pickContent(),
            is_pos: false,
            is_fair: isFairNeg
         };
        CommentsForRest.push(comment)
    };
    for (var i=0; i<=numPos; i++) {
        let comment = {
            user_id: getRandomUserId(1, 14),
            restaurant_id: restrId,
            content: pickContent("pos"),
            is_pos: true,
            is_fair: isFairPos
         };
         CommentsForRest.push(comment)
    };
    return CommentsForRest
 };

var createCommForAllRest = function(indexMin, indexMax) {
  let comments = []
  for (var i=indexMin; i<=indexMax; i++) {
    let numNeg = Math.floor(Math.random() * 2)
    let numPos = Math.floor(Math.random() * 3)
    comments = comments.concat(createCommForRest(numNeg, numPos, i))
  };
  console.log(comments);
  return comments
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
        return knex('comments').insert(
              createCommForAllRest(1,28)
        );
    });
}
