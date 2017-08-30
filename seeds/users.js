const {generate} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, user_name: 'Bob', hash: "adsew3r23rdsds"},
        {user_id: 2, user_name: 'Matthew', hash: "adscxvcxvds"},
        {user_id: 3, user_name: 'Mick', hash: "adsew3r23rdsds"},
        {user_id: 4, user_name: 'Ella', hash: "adsew3r2ddvdxv3rdsds"},
        {user_id: 5, user_name: 'Ula', hash: "cvxxzcxzcxzccv"},
        {user_id: 6, user_name: 'Olivia', hash: "adsew3rcxvcxv23rdsds"},
        {user_id: 7, user_name: 'Liam', hash: generate('password')}
      ]);
    });
};
