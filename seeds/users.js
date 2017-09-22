const {generate} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Bob', hash: "adsew3r23rdsds"},
        {user_name: 'Matthew', hash: "adscxvcxvds"},
        {user_name: 'Mick', hash: "adsew3r23rdsds"},
        {user_name: 'Ella', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Ula', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Olivia', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Jan', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Mark', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Hans', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Bruno', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Carla', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Peter', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Ingrid', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Liam', hash: generate('password')}
      ]);
    });
};
