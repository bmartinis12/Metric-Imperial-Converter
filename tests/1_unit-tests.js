const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Whole Number Input', (done) => {
    let input = '35mi';
    assert.equal(convertHandler.getNum(input), 35)
    done();
  });

  test('Decimal Number Input', (done) => {
    let input = '3.5mi';
    assert.equal(convertHandler.getNum(input), 3.5)
    done();
  });

  test('Factional Number Input', (done) => {
    let input = '3/5mi';
    assert.equal(convertHandler.getNum(input), 3/5)
    done();
  });

  test('Factional Input to Decimal', (done) => {
    let input = '1.1/2mi';
    assert.equal(convertHandler.getNum(input), 1.1/2)
    done();
  });

  test('Double Fraction Input', (done) => {
    let input = '3/5/3mi';
    assert.equal(convertHandler.getNum(input), undefined)
    done();
  });

  test('No Numeric Input', (done) => {
    let input = 'mi';
    assert.equal(convertHandler.getNum(input), 1)
    done();
  });

  test('Unit Input Get Unit', (done) => {
    let input = ["gal", "L", "mi", "km", "lbs", "kg"];
    let output = ["gal", "L", "mi", "km", "lbs", "kg"];
    input.forEach(function (ele, index){
      assert.equal(convertHandler.getUnit(ele), output[index]);
    })
    done();
  });

  test('Invalid Input', (done) => {
    let input = 'miles';
    assert.equal(convertHandler.getUnit(input), undefined)
    done();
  });

  test('Unit Input Return Unit', (done) => {
    let input = ["gal", "L", "mi", "km", "lbs", "kg"];
    let output = ["L", "gal", "km", "mi", "kg", "lbs"];
    input.forEach(function (ele, index){
      assert.equal(convertHandler.getReturnUnit(ele), output[index]);
    })
    done();
  });

  test('Unit Input Spell Out Unit', (done) => {
    let input = ["gal", "l", "mi", "km", "lbs", "kg"];
    let output = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];
    input.forEach(function (ele, index){
      assert.equal(convertHandler.spellOutUnit(ele), output[index]);
    })
    done();
  });

  test('Gal Input L Output', (done) => {
    let input = 'gal';
    assert.equal(convertHandler.getReturnUnit(input), 'L')
    done();
  });

  test('L Input G Output', (done) => {
    let input = 'l';
    assert.equal(convertHandler.getReturnUnit(input), 'gal')
    done();
  });

  test('Mi Input Km Output', (done) => {
    let input = 'mi';
    assert.equal(convertHandler.getReturnUnit(input), 'km')
    done();
  });

  test('Km Input Mi Output', (done) => {
    let input = 'km';
    assert.equal(convertHandler.getReturnUnit(input), 'mi')
    done();
  });

  test('Lbs Input Kg Output', (done) => {
    let input = 'lbs';
    assert.equal(convertHandler.getReturnUnit(input), 'kg')
    done();
  });

  test('Kg Input Lbs Output', (done) => {
    let input = 'kg';
    assert.equal(convertHandler.getReturnUnit(input), 'lbs')
    done();
  });
});
