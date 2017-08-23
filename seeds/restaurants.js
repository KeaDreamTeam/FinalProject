
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          net_rating: 5,
          pricing: "$$",
          restaurant_name: 'Dream Team Restaurant',
          restaurant_url: "www.dream-team-restaurant.com",
          image_url: "www.dream-team-restaurant.com",
          address: "275 Cuba St, Te Aro, Wellington 6023",
          description: "Dine with the best",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: true
        }
      ]);
    });
};
