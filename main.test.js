const assert = require('assert');
const {
  gradeMessage,
  evenIndices,
  sumEvenValues,
  totalCharacters,
  containsPunctuation,
  updateProfile,
} = require('./studyGuideAnswers.js');

describe('gradeMessage', () => {
  it('returns correct message based on score', () => {
    assert.strictEqual(gradeMessage(55), 'You are failing.');
    assert.strictEqual(gradeMessage(60), 'You passed, but barely.');
    assert.strictEqual(gradeMessage(75), 'You did a solid job.');
    assert.strictEqual(gradeMessage(90), 'Excellent work!');
  });
});

describe('evenIndices', () => {
  it('returns values at even indices', () => {
    assert.deepStrictEqual(evenIndices(['a', 'b', 'c', 'd']), ['a', 'c']);
    assert.deepStrictEqual(evenIndices([1]), [1]);
    assert.deepStrictEqual(evenIndices([]), []);
  });
});

describe('sumEvenValues', () => {
  it('returns the sum of even numbers in an array', () => {
    assert.strictEqual(sumEvenValues([1, 2, 3, 4]), 6);
    assert.strictEqual(sumEvenValues([2, 2, 2, 2]), 8);
    assert.strictEqual(sumEvenValues([1, 3, 5]), 0);
  });
});

describe('totalCharacters', () => {
  it('returns the total number of characters in all strings', () => {
    assert.strictEqual(totalCharacters(['hi', 'there']), 7);
    assert.strictEqual(totalCharacters(['a', 'bc', 'def']), 6);
    assert.strictEqual(totalCharacters([]), 0);
  });
});

describe('containsPunctuation', () => {
  it('returns true if string contains ., !, or ?', () => {
    assert.strictEqual(containsPunctuation('hello there!'), true);
    assert.strictEqual(containsPunctuation('no punctuation here'), false);
    assert.strictEqual(containsPunctuation('wait... what?'), true);
  });
});

describe('updateProfile', () => {
  it('adds or updates a key in the object', () => {
    const profile = { name: 'Alex', age: 25 };
    updateProfile(profile, 'hobby', 'biking');
    assert.strictEqual(profile.hobby, 'biking');

    updateProfile(profile, 'name', 'Jordan');
    assert.strictEqual(profile.name, 'Jordan');
  });

  it('returns error if key is not a string', () => {
    const profile = {};
    const result = updateProfile(profile, 123, 'value');
    assert.strictEqual(result, 'Invalid key type.');
  });
});
