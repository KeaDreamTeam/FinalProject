
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          restaurant_id: 1,
          text: "Great food, low prices and nice staff",
          rating_pos: 1,
          rating_neg: 0,
          created_at: 12/8/2017
        },
        {
          id: 2,
          restaurant_id: 1,
          text: "Nice food, large portions",
          rating_pos: 1,
          rating_neg: 0,
          created_at: 13/8/2017
        },
      ]);
    });
};
