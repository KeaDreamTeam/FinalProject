
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          net_rating: 5,
          pricing: "$$",
          restaurant_name: 'Midnight Espresso',
          restaurant_url: "",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-w/0e/70/1b/da/photo2jpg.jpg",
          address: "178 Cuba St, Te Aro, Wellington 6011",
          phone: ""
          description: "Warm, cosy, and yummy!",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: false,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 1,
          pricing: "$$",
          restaurant_name: 'Deluxe cafe',
          restaurant_url: "",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/03/5e/87/54/deluxe-at-the-embassy.jpg",
          address: "10 Kent Terrace, Mount Victoria, Wellington 6011",
          description: "All about the coffee",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: false,
          is_dinein: true,
          is_takeaway: false
        },
        {
          net_rating: 9,
          pricing: "$$$",
          restaurant_name: 'Enigma Cafe',
          restaurant_url: "http://enigmacafe.co.nz/2017/",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/0b/09/93/4e/enigma.jpg",
          address: "128 Courtenay Pl, Te Aro, Wellington 6011",
          description: "Good food, great service",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 3,
          pricing: "$$",
          restaurant_name: "Fidel's Cafe",
          restaurant_url: "http://www.fidelscafe.com/",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/56/b3/b1/photo0jpg.jpg",
          address: "234 Cuba St, Te Aro, Wellington 6011",
          description: "Cuban tastes",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 8,
          pricing: "$$",
          restaurant_name: "Burger Liquor",
          restaurant_url: "http://www.burgerliquor.co.nz/",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/56/b3/b1/photo0jpg.jpg",
          address: "129 Willis St, Te Aro, Wellington 6011",
          description: "Cool atmosphere, good burgers",
          is_meat: true,
          is_vegan: true,
          is_breakfast: false,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: false
        },
        {
          net_rating: 8,
          pricing: "$",
          restaurant_name: "Astoria",
          restaurant_url: "http://www.astoria.co.nz/",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/03/a3/ee/20/astoria.jpg",
          address: "159 Lambton Quay, Wellington 6011",
          description: "Great place for breakfast",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: false,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 18,
          pricing: "$",
          restaurant_name: "Baobab Wellington",
          restaurant_url: "http://baobabcafe.co.nz/",
          image_url: "http://baobabcafe.co.nz/wp-content/uploads/coffee-hands.jpg",
          address: "152 Riddiford St, Newtown, Wellington 6021",
          description: "Coffee with turmeric - the perfect winter warmer!",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 6,
          pricing: "$$",
          restaurant_name: "Flight Coffee Hangar",
          restaurant_url: "https://flightcoffee.co.nz/hangar",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/07/03/63/3a/flight-coffee-hangar.jpg",
          address: "119 Dixon St, Te Aro, Wellington 6011",
          description: "Great coffee!",
          is_meat: true,
          is_vegan: true,
          is_breakfast: true,
          is_dinner: false,
          is_dinein: true,
          is_takeaway: true
        },
        {
          net_rating: 16,
          pricing: "$",
          restaurant_name: "Laundry",
          restaurant_url: "http://www.laundry.net.nz/",
          image_url: "https://media-cdn.tripadvisor.com/media/photo-o/06/26/17/8c/relaxing-at-laundry.jpg",
          address: "242 Cuba St, Te Aro, Wellington 6011",
          description: "Fun spot, great service",
          is_meat: true,
          is_vegan: true,
          is_breakfast: false,
          is_dinner: true,
          is_dinein: true,
          is_takeaway: true
        },


      ]);
    });
};
