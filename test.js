const {
  filterByLength,
  everyNPerson,
  initials,
  peopleWithPosition,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
} = require('./cardio');

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

describe('filterByLength', () => {
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

describe('everyNPerson', () => {
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
  it(`returns everyone's initials`, () => {
    const answer = [
      'FG',
      'GS',
      'CC',
      'JC',
      'TM',
      'RC',
      'HE',
      'TW',
      'BP',
      'ND',
      'BL',
      'AT',
      'BT',
      'DC',
      'RM',
      'TB',
      'LT',
      'WC',
      'TB',
      'BP',
    ];
    expect(initials(people)).toEqual(answer);
  });
});

describe('sortByLastName', () => {
  it('returns a sorted list of names by last name', () => {
    const answer = [
      'Teena Bansal',
      'Tommie Benda',
      'Johnette Chatelot',
      'Darya Chinery',
      'Wayne Claughton',
      'Ruth Connell',
      'Cristina Cuckoo',
      'Nelle Durek',
      'Hamid Elsegood',
      'Faber Guerreau',
      'Bastien Leyrroyd',
      'Rea Matoshin',
      'Trish Mayou',
      'Basile Phonix',
      'Bethena Porte',
      'Gilbertine Stichall',
      'Bryce Temprell',
      'Albie Tranfield',
      'Lowell Trowel',
      'Thorstein Woodward',
    ];
    // console.log(sortByLastName(people));
    expect(sortByLastName(people)).toEqual(answer);
  });
});

describe('countTotalCharacters', () => {
  it('counts the total characters in a name (including spaces)', () => {
    expect(countTotalCharacters(people)).toEqual(279);
  });
});

describe('someoneHasLetter', () => {
  it('returns if one or more people have the letter', () => {
    expect(someoneHasLetter(people, 'e')).toEqual(true);
  });
});

describe('everyoneHasLetter', () => {
  it('returns if all people have the letter', () => {
    expect(everyoneHasLetter(people, 'z')).toEqual(false);
  });
});

describe('peopleWithPosition', () => {
  it(`returns everyone's name with their position`, () => {
    const answer = [
      '0: Faber Guerreau',
      '1: Gilbertine Stichall',
      '2: Cristina Cuckoo',
      '3: Johnette Chatelot',
      '4: Trish Mayou',
      '5: Ruth Connell',
      '6: Hamid Elsegood',
      '7: Thorstein Woodward',
      '8: Bethena Porte',
      '9: Nelle Durek',
      '10: Bastien Leyrroyd',
      '11: Albie Tranfield',
      '12: Bryce Temprell',
      '13: Darya Chinery',
      '14: Rea Matoshin',
      '15: Tommie Benda',
      '16: Lowell Trowel',
      '17: Wayne Claughton',
      '18: Teena Bansal',
      '19: Basile Phonix',
    ];
    expect(peopleWithPosition(people)).toEqual(answer);
  });
});

describe('sortByFirstName', () => {
  it('sorts by first name', () => {
    const answer = [
      'Albie Tranfield',
      'Basile Phonix',
      'Bastien Leyrroyd',
      'Bethena Porte',
      'Bryce Temprell',
      'Cristina Cuckoo',
      'Darya Chinery',
      'Faber Guerreau',
      'Gilbertine Stichall',
      'Hamid Elsegood',
      'Johnette Chatelot',
      'Lowell Trowel',
      'Nelle Durek',
      'Rea Matoshin',
      'Ruth Connell',
      'Teena Bansal',
      'Thorstein Woodward',
      'Tommie Benda',
      'Trish Mayou',
      'Wayne Claughton',
    ];
    expect(sortByFirstName(people)).toEqual(answer);
  });
});
