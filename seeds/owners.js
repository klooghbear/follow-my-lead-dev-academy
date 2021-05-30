exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("owner_table")
      .del()
      .then(function() {
      // Inserts seed entries
        return knex("owner_table").insert([
          {
            id: 1,
            first_name: "Sebastian",
            last_name: "Kloogh",
            photo: "https://pbs.twimg.com/profile_images/1086905886369472512/0_wEzxNm_400x400.jpg",
            city_name: "Dunedin",
            suburb_name: "St Clair",
            street_name: "Surrey Street",
            street_number: "138",
            post_code: 9012,
            email: "sebastiankloogh@gmail.com",
            mobile_number: "022 020 1227",
            user_id: 1,
            feedback_id: 1,
          },
        ])
      })
}
