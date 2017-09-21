const { people } = require('./people');

module.exports = {
  getPeople(req, res, next) {
    const { gender, id } = req.query;
    let filtered;
    if (id) {
      const [filterBy, userId] = id.split(':');
      switch (filterBy) {
        case 'gte':
          filtered = people.filter(c => c.id >= Number(userId));
          return res.json(filtered);
        case 'gt':
          filtered = people.filter(c => c.id > Number(userId));
          return res.json(filtered);
        case 'lt':
          filtered = people.filter(c => c.id < Number(userId));
          return res.json(filtered);
        case 'lte':
          filtered = people.filter(c => c.id <= Number(userId));
          return res.json(filtered);
        default:
          filtered = people.find(c => c.id == filterBy);
          return res.json(filtered);
      }
    }
    return res.status(200).json(people);
  },
  editPerson(req, res, next) {
    const { id } = req.params;
    const { first_name } = req.body; //.first_name
    const person = people.find(cur => cur.id === Number(id));
    person.first_name = first_name;
    return res.status(200).json(people);
  }
};
