function ConvertHandler() {
  
  this.getNum = function(input) {
    let numMatch = input.match(/([0-9/.]+)/g);
    
    if(numMatch == null){
      console.log("No number was provided so 1");
      return 1;
    } 

    let num = numMatch[0];
    
    if(num.search(/\//) != -1){
      let newNum = num.split('/');

      if(newNum.length > 2){
        console.log("Not a number");
        return undefined;
      }
      
      console.log("Divided number to create decimal");
      return newNum[0] / newNum[1];
    } else if(isNaN(num)){
      console.log("Not a number");
      return undefined;
    } else {
      console.log("No change to number");
      return num;
    }
  };
  
  this.getUnit = function(input) {
    let letterMatch = input.match(/([a-z]+)/ig);
    
    if(letterMatch == null){
      console.log("No unit was provided");
      return undefined;
    }

    let unit = letterMatch[0].toLowerCase();

    switch (unit) {
      case 'gal':
        console.log('gal entered');
        return 'gal';
        break;
      case 'l':
        console.log('L entered');
        return 'L';
        break;
      case 'mi':
        console.log('mi entered');
        return 'mi';
        break;
      case 'km':
        console.log('km entered');
        return 'km';
        break;
      case 'lbs':
        console.log('lbs entered');
        return 'lbs';
        break;
      case 'kg':
        console.log('kg entered');
        return 'kg'
        break; 
      default: 
        return undefined;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let lowerCaseUnit = initUnit.toLowerCase();
    switch (lowerCaseUnit) {
      case 'gal':
        console.log('L returned');
        return 'L';
        break;
      case 'l':
        console.log('gal returned');
        return 'gal';
        break;
      case 'mi':
        console.log('km returned');
        return 'km';
        break;
      case 'km':
        console.log('mi returned');
        return 'mi';
        break;
      case 'lbs':
        console.log('kg returned');
        return 'kg';
        break;
      case 'kg':
        console.log('lbs returned');
        return 'lbs'
        break; 
      default: 
        return undefined;
    }
  };

  this.spellOutUnit = function(unit) {
    let lowerCaseUnit = unit.toLowerCase();
    switch (lowerCaseUnit) {
      case 'gal':
        console.log('spelled out gallon');
        return 'gallons';
        break;
      case 'l':
        console.log('spelled out liters');
        return 'liters';
        break;
      case 'mi':
        console.log('spelled out miles');
        return 'miles';
        break;
      case 'km':
        console.log('spelled out kilometers');
        return 'kilometers';
        break;
      case 'lbs':
        console.log('spelled out pounds');
        return 'pounds';
        break;
      case 'kg':
        console.log('spelled out kilograms');
        return 'kilograms'
        break; 
      default: 
        return undefined;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let lowerCaseUnit = initUnit.toLowerCase();
    let result;
    
    switch (lowerCaseUnit) {
      case 'gal':
        console.log('gal coverted to L');
        result = initNum * galToL;
        break;
      case 'l':
        console.log('L converted to gal');
        result = initNum / galToL;
        break;
      case 'mi':
        console.log('mi coverted to km');
        result = initNum * miToKm;
        break;
      case 'km':
        console.log('km converted to mi');
        result = initNum / miToKm
        break;
      case 'lbs':
        console.log('lbs converted to kg');
        result = initNum * lbsToKg;
        break;
      case 'kg':
        console.log('kg converted to lbs');
        result = initNum / lbsToKg;
        break; 
      default: 
        result = undefined;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
