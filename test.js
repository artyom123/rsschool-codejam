const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
  it('1', () => {
    const current = [2, 3, 4, 1];
    const expected = [8, 7, 6, 9];
    assert.deepEqual(sumOfOther(current), expected);
  });

  it('2', () => {
    const current = [3, 2, 1, 0];
    const expected = [3, 4, 5, 6];
    assert.deepEqual(sumOfOther(current), expected);
  });

  it('3', () => {
    const current = [0, 10, 200, -10];
    const expected = [200, 190, 0, 210];
    assert.deepEqual(sumOfOther(current), expected);
  });

  it('4', () => {
    const current = [5, 20, -20, -5];
    const expected = [-5, -20, 20, 5];
    assert.deepEqual(sumOfOther(current), expected);
  });

  it('5', () => {
    const current = [-1, -2, -3, -4];
    const expected = [-9, -8, -7, -6];
    assert.deepEqual(sumOfOther(current), expected);
  });
});

describe('make', () => {
  function sum(a, b) {
    return a + b;
  }

  function div(a, b) {
    return a - b;
  }

  function op(a, b) {
    return a * b;
  }

  it('1', () => {
    const current = make(15)(34, 21, 666)(41)(sum);
    const expected = 777;
    assert.deepEqual(current, expected);
  });

  it('2', () => {
    const current = make(1, 2, 3)(3, 4)(5)(sum);
    const expected = 18;
    assert.deepEqual(current, expected);
  });

  it('3', () => {
    const current = make(0)(33, -41, 6)(-41)(div);
    const expected = 43;
    assert.deepEqual(current, expected);
  });

  it('4', () => {
    const current = make(-4, -3, 7)(-8, -10)(-5, 30)(div);
    const expected = -15;
    assert.deepEqual(current, expected);
  });

  it('5', () => {
    const current = make(1, 2)(3, 2)(1, 1)(op);
    const expected = 12;
    assert.deepEqual(current, expected);
  });

  it('6', () => {
    const current = make(-1)(3, -2, -1)(3)(op);
    const expected = -18;
    assert.deepEqual(current, expected);
  });
});

describe('recursion', () => {
  it('1', () => {
    const current = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const expected = [[100], [90, 120], [70,99,110,130]];
    assert.deepEqual(recursion(current), expected);
  });

  it('2', () => {
    const current = {"value":-100};
    const expected = [[-100]];
    assert.deepEqual(recursion(current), expected);
  });
  
  it('3', () => {
    const current = {};
    const expected = [[]];
    assert.deepEqual(recursion(current), expected);
  });

  it('4', () => {
    const current = {"value":50,"left":{"value":10,"left":{"value":0,"left":{"value":-10}}},"right":{"value":100,"right":{"value":150}}};
    const expected = [[50], [10, 100], [0, 150], [-10]];
    assert.deepEqual(recursion(current), expected);
  });

  it('5', () => {
    const current = {"value":30, "left":{"value":20, "left":{"value":10}, "right":{"value":25, "left":{"value":23}, "right":{"value":27}}}, "right":{"value":40}};
    const expected = [[30], [20, 40], [10, 25], [23, 27]];
    assert.deepEqual(recursion(current), expected);
  });
});
