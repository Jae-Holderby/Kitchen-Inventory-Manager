exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM member; ALTER SEQUENCE member_id_seq RESTART WITH 2;')

  .then(() => {

    let members = [{
      id: 1,
      name: 'Jae Holderby',
      email: "Jae@mail.com",
      password: "stuff"
    }];

    return knex('member').insert(members);
  });
};
