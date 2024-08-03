// 5-main.js
import Building from './5-building.js';

const b = new Building(100); // This should throw an error because Building is abstract
console.log(b);

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate now!';
  }
}

try {
  new TestBuilding(200); // This should work fine
  console.log('TestBuilding instance created successfully');
} catch (err) {
  console.log(err);
}

class IncompleteBuilding extends Building {
  // No evacuationWarningMessage method
}

try {
  new IncompleteBuilding(300); // This should throw an error
} catch (err) {
  console.log(err);
}

