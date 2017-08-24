
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          user_id: 1,
          restaurant_id: 1,
          content: "the carrots are too orange",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 1,
          content: "all ok!",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 1,
          content: "I was happy with the food and service",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 1,
          content: "not too good",
          is_pos: false,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id:5,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 6,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 10,
          content: "good price and great food"
        },
        {
          user_id: 4,
          restaurant_id: 1,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 12,
          content: "good price and great food"
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 14,
          content: "not good"
        },
        {
          user_id: 1,
          restaurant_id: 15,
          content: "good price and great food"
        },
        {
          user_id: 2,
          restaurant_id: 1,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 2,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 14,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 3,
          content: "good price and great food",
        },
        {
          user_id: 2,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
        },
        {
          user_id: 3,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 16,
          content: "good price and great food",
        },
        {
          user_id: 1,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 17,
          content: "good price and great food",
        },
        {
          user_id: 3,
          restaurant_id: 11,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
      ]);
    });
};
