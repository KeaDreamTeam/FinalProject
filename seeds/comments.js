var isFairPos = Math.random() < 0.9 ? true : false;
var isFairNeg = Math.random() < 0.1 ? true : false;
const getRandomUserId = (min, max) => Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1) + min);

let commentsNeg = ["not too good food", "too expensive", "did not like the food", "not suotable for families", "unpleasant staff", "not sure ..."];
let commentsPos = ["good food", "great value for money", "super fresh food", "great for families", "nice staff", "nice climate", "quick service", "amazing food"];
const pickContent = (value) => (value == "pos" ? commentsPos[Math.floor(Math.random()*commentsPos.length)] : commentsNeg[Math.floor(Math.random()*commentsPos.length)])

const pickContentNeg = function() {
    let i = Math.floor(Math.random() * commentsNeg.length)
    return commentsNeg[i]
};
const pickContentPos = function() {
    let i = Math.floor(Math.random() * commentsPos.length)
    return commentsPos[i]
};


var createCommForRest = function(numNeg, numPos, restrId) {
    let CommentsForRest = []

    for (i=0; i<=numNeg; i++) {
        let comment = {
            user_id: getRandomUserId(1, 14),
            restaurant_id: restrId,
            content: pickContent(),
            is_pos: false,
            is_fair: isFairNeg
         };
        CommentsForRest.push(comment)
    };
    for (i=0; i<=numPos; i++) {
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

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([

            createCommForRest(1,3,1)
            createCommForRest(12,3,2)
            createCommForRest(3,3,3)
            createCommForRest(5,3,4)
            createCommForRest(15,3,5)
            createCommForRest(15,3,6)
            createCommForRest(15,3,7)
            createCommForRest(15,3,8)
            createCommForRest(15,3,9)
            createCommForRest(15,3,10)
            createCommForRest(15,3,11)
            createCommForRest(15,3,12)
            createCommForRest(15,3,13)
            createCommForRest(15,3,14)
            createCommForRest(15,3,15)
            createCommForRest(15,3,16)
            createCommForRest(15,3,17)
            createCommForRest(15,3,18)
            createCommForRest(15,3,19)
            createCommForRest(15,3,20)
            createCommForRest(15,3,21)
            createCommForRest(15,3,22)
            createCommForRest(15,3,23)
            createCommForRest(15,3,24)
            createCommForRest(15,3,25)
            createCommForRest(15,3,26)
            createCommForRest(15,3,27)
            createCommForRest(15,3,28)

      ]);
    });
};



// {
//   user_id: 2,
//   restaurant_id: 25,
//   content: "very good price and great food",
//   is_pos: true,
//   is_fair: true
// },
