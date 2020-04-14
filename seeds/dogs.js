exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dog_table')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('dog_table').insert([
        {
          id: 1,
          owner_id: 1,
          name: 'Pepper',
          breed: 'Yorkipoo',
          sex: 'Male',
          age: '9',
          size: 'Small',
          special_requirements: 'Must be kept on the lead.',
          activity_requirements: '25 minute walk',
          photo: '',
          vet_name: 'vetsatstclair',
          vet_contact: '03 455 1010',
        },
        {
          id: 2,
          name: 'Fluffy',
          breed: 'German Shepherd',
          sex: 'Female',
          age: '3',
          size: 'Large',
          special_requirements: 'Long walks are a must',
          activity_requirements: '60 minute walk',
          photo: '',
          vet_name: 'vetsatstclair',
          vet_contact: '03 455 1010',
        },
        {
          id: 3,
          name: 'Bof',
          breed: 'Beagle',
          sex: 'Male',
          age: '6',
          size: 'Medium',
          special_requirements: 'Loves to run.',
          activity_requirements: '45 minute walk',
          photo: '',
          vet_name: 'vetsatstclair',
          vet_contact: '03 455 1010',
        },
      ]);
    });
};
