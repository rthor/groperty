var it = require('tape');
var groperty = require('../index');

var person = {
  name: 'John Smith',
  age: 53,
  child: {
    name: 'Little John',
    age: 6,
    toys: {
      playmo: true,
      barbie: false
    }
  },
  cars: [{
    name: 'Ford'
  }, {
    name: 'Subaru'
  }]
};

it('Should work on direct children', function (test) {
  test.plan(2);

  test.equals(person.name, groperty(person, 'name'));
  test.equals(person.age, groperty(person, 'age'));
});

it('Should work on deeper structures', function (test) {
  test.plan(2);
  test.equals(person.child.age, groperty(person, 'child.age'));
  test.equals(person.child.toys.playmo, groperty(person, 'child.toys.playmo'));
});

it('Should work with array as a propList', function (test) {
  test.plan(2);
  test.equals(person.child.age, groperty(person, ['child', 'age']));
  test.equals(person.child.toys.playmo, groperty(person, ['child', 'toys', 'playmo']));
});

it('Should work on arrays', function (test) {
  test.plan(2);
  test.equals(person.cars[0].name, groperty(person, ['cars', 0, 'name']));
  test.equals(person.cars[1].name, groperty(person, ['cars', 1, 'name']));
});