
try {
  var ordinal = require('..');
  var assert = require('better-assert');
} catch (e) {
  var ordinal = require('ordinal-number-suffix');
  var assert = require('assert');
}

describe('ordinal-number-suffix', function () {
  it('should handle numbers ending in 0', function () {
    assert(ordinal(0) === '0th');
    assert(ordinal(10) === '10th');
    assert(ordinal(20) === '20th');
    assert(ordinal(110) === '110th');
  });

  it('should handle numbers ending in 1', function () {
    assert(ordinal(1) === '1st');
    assert(ordinal(11) === '11th');
    assert(ordinal(21) === '21st');
    assert(ordinal(111) === '111th');
    assert(ordinal(121) === '121st');
    assert(ordinal(1111) === '1111th');
    assert(ordinal(11111) === '11111th');
    assert(ordinal(111111) === '111111th');
  });

  it('should handle numbers ending in 2', function () {
    assert(ordinal(2) === '2nd');
    assert(ordinal(12) === '12th');
    assert(ordinal(22) === '22nd');
    assert(ordinal(112) === '112th');
  });

  it('should handle numbers ending in 3', function () {
    assert(ordinal(3) === '3rd');
    assert(ordinal(13) === '13th');
    assert(ordinal(113) === '113th');
    assert(ordinal(23) === '23rd');
  });

  it('should handle numbers ending in 4', function () {
    assert(ordinal(4) === '4th');
    assert(ordinal(14) === '14th');
    assert(ordinal(114) === '114th');
    assert(ordinal(24) === '24th');
  });

  it('should handle numbers ending in 5', function () {
    assert(ordinal(5) === '5th');
    assert(ordinal(15) === '15th');
    assert(ordinal(115) === '115th');
    assert(ordinal(25) === '25th');
  });

  it('should handle numbers ending in 6', function () {
    assert(ordinal(6) === '6th');
    assert(ordinal(16) === '16th');
    assert(ordinal(116) === '116th');
    assert(ordinal(26) === '26th');
  });

  it('should handle numbers ending in 7', function () {
    assert(ordinal(7) === '7th');
    assert(ordinal(17) === '17th');
    assert(ordinal(117) === '117th');
    assert(ordinal(27) === '27th');
  });

  it('should handle numbers ending in 8', function () {
    assert(ordinal(8) === '8th');
    assert(ordinal(18) === '18th');
    assert(ordinal(118) === '118th');
    assert(ordinal(28) === '28th');
  });

  it('should handle numbers ending in 9', function () {
    assert(ordinal(9) === '9th');
    assert(ordinal(19) === '19th');
    assert(ordinal(119) === '119th');
    assert(ordinal(29) === '29th');
  });

  it('should handle strings', function () {
    assert(ordinal('1') === '1st');
    assert(ordinal('12') === '12th');
    assert(ordinal('112') === '112th');
    assert(ordinal('33') === '33rd');
    assert(ordinal('64') === '64th');
    assert(ordinal('77') === '77th');
    assert(ordinal('1234567890') === '1234567890th');
  });
});
