let adults = (people) => {
  let result = [];
  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (person.age >= 18) {
      result.push(person.name);
    }
  }

  return result
};

try {
  module.exports = adults;
} catch (error) {
  module.exports = null;
}
