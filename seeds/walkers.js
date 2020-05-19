exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('walker_table')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('walker_table').insert([
        {
          id: 1,
          first_name: 'Sebastian',
          last_name: 'KLoogh',
          blurb: 'I love dogs',
          photo: 'https://pbs.twimg.com/profile_images/1086905886369472512/0_wEzxNm_400x400.jpg',
          city_name: 'Dunedin',
          email: 'sebastiankloogh@gmail.com',
        },
      ]);
    });
};
