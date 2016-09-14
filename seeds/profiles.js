
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({user_id: 99924, url: 'abc', school: 'aut'}),
        knex('profiles').insert({user_id: 99925, url: 'def', school: 'auckland uni'}),
        knex('profiles').insert({user_id: 99926, url: 'ghi', school: 'eda'})
      ]);
    });
};
