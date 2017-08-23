
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          id: 1,
          rating: 5,
          pricing: "$$",
          name: 'Dream Team Restaurant',
          url: "www.dream-team-restaurant.com",
          address: "275 Cuba St, Te Aro, Wellington 6023",
          description: "Dine with the best",
          meat: true,
          vegan: true,
          breakfast: true,
          dinner: true,
          dinein: true,
          takeaway: true,
          preorder: true,
          pricing_cheap: true,
          pricing_mid: true,
          pricing_fine: false
        },
      ]);
    });
};
