
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
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 2,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 3,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 4,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 4,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 4,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 4,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 4,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 5,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 5,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 5,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 5,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 5,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 5,
          content: "not good",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 6,
          content: "not good",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 6,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 7,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 8,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "very very bad ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 9,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 10,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 10,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 10,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 10,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 10,
          content: "good price and great food",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 11,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 12,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 12,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 12,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 12,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 12,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 12,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 12,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 12,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 13,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 13,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 13,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 3,
          restaurant_id: 13,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 14,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 14,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 14,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 14,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 15,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 15,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 15,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 15,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 15,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 15,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 15,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 16,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 16,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 16,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 16,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 16,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 16,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 16,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 16,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 24,
          restaurant_id: 17,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 24,
          restaurant_id: 17,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 24,
          restaurant_id: 17,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 17,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 17,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 17,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 18,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 18,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 18,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 18,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 18,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },

        {
          user_id: 1,
          restaurant_id: 18,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 19,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 19,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 19,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 19,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 20,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 20,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 20,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 20,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 20,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 20,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 6,
          restaurant_id: 20,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 21,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 21,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 21,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 21,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 21,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 21,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 22,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 22,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 22,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 22,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 7,
          restaurant_id: 22,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 22,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 5,
          restaurant_id: 23,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 23,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 5,
          restaurant_id: 23,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 3,
          restaurant_id: 23,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 23,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 23,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 24,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 24,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 24,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 6,
          restaurant_id: 24,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 1,
          restaurant_id: 24,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 2,
          restaurant_id: 24,
          content: "good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 4,
          restaurant_id: 25,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 4,
          restaurant_id: 25,
          content: "not too good ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 7,
          restaurant_id: 25,
          content: "the salad was too green ...",
          is_pos: false,
          is_fair: false
        },
        {
          user_id: 2,
          restaurant_id: 25,
          content: "very good price and great food",
          is_pos: true,
          is_fair: true
        },
        {
          user_id: 1,
          restaurant_id: 25,
          content: "good price and great food",
        },
      ]);
    });
};
