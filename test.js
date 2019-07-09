const { filterByLength, everyNPerson, initials } = require('./cardio');

const people = [
  'Faber Guerreau',
  'Gilbertine Stichall',
  'Cristina Cuckoo',
  'Johnette Chatelot',
  'Trish Mayou',
  'Ruth Connell',
  'Hamid Elsegood',
  'Thorstein Woodward',
  'Bethena Porte',
  'Nelle Durek',
  'Bastien Leyrroyd',
  'Albie Tranfield',
  'Bryce Temprell',
  'Darya Chinery',
  'Rea Matoshin',
  'Tommie Benda',
  'Lowell Trowel',
  'Wayne Claughton',
  'Teena Bansal',
  'Basile Phonix',
];

xdescribe('filterByLength', () => {
  it('filters by length of 15', () => {
    const answer = [
      'Gilbertine Stichall',
      'Johnette Chatelot',
      'Thorstein Woodward',
      'Bastien Leyrroyd',
    ];
    expect(filterByLength(people, 15)).toEqual(answer);
  });

  it('filters by length of 0', () => {
    expect(filterByLength(people, 0)).toEqual(people);
  });

  it('filters by a massive length', () => {
    expect(filterByLength(people, 100000000)).toEqual([]);
  });
});

xdescribe('everyNPerson', () => {
  it('returns every third person', () => {
    const answer = [
      'Faber Guerreau',
      'Johnette Chatelot',
      'Hamid Elsegood',
      'Nelle Durek',
      'Bryce Temprell',
      'Tommie Benda',
      'Teena Bansal',
    ];
    expect(everyNPerson(people, 3)).toEqual(answer);
  });

  it('returns every person', () => {
    expect(everyNPerson(people, 0)).toEqual(people);
  });

  it('returns every massive number of people', () => {
    expect(everyNPerson(people, 1000000)).toEqual(['Faber Guerreau']);
  });
});

describe('initials', () => {
  it(`returns everyone's initials`, () => {});
});
