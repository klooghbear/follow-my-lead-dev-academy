exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('owner_table')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('owner_table').insert([
        {
          id: 1,
          first_name: 'Sebastian',
          last_name: 'Kloogh',
          photo: '',
          city_name: 'Dunedin',
          suburb_name: 'St Clair',
          street_name: 'Surrey Street',
          street_number: '',
          post_code: 0,
          email: '',
          mobile_number: 0,
          user_id: 0,
          feedback_id: 0,
        },
        {
          id: 2,
          first_name: '',
          last_name: '',
          photo: '',
          city_name: '',
          suburb_name: '',
          street_name: '',
          street_number: '',
          post_code: 0,
          email: '',
          mobile_number: 0,
          user_id: 0,
          feedback_id: 0,
        },
        {
          id: 3,
          first_name: '',
          last_name: '',
          photo: '',
          city_name: '',
          suburb_name: '',
          street_name: '',
          street_number: '',
          post_code: 0,
          email: '',
          mobile_number: 0,
          user_id: 0,
          feedback_id: 0,
        },
      ]);
    });
};
