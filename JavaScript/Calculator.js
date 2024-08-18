// Importing classes from F1.js and F2.js
import { AddTwoNumbers } from './F1';
import { MultiplyTwoNumbers } from './F2';

// Create a class that uses both AddTwoNumbers and MultiplyTwoNumbers
class Calculator {
    constructor(a, b) {
        this.addTwoNumbers = new AddTwoNumbers(a, b);   // Creating instance of AddTwoNumbers
        this.multiplyTwoNumbers = new MultiplyTwoNumbers(a, b); // Creating instance of MultiplyTwoNumbers
    }

    performCalculations() {
        // Accessing methods from AddTwoNumbers and MultiplyTwoNumbers
        const sum = this.addTwoNumbers.add();  // Using this to access addTwoNumbers instance
        console.log('Sum:', sum);

        const product = this.multiplyTwoNumbers.multiply();  // Using this to access multiplyTwoNumbers instance
        console.log('Product:', product);
    }
}

// Create an instance of Calculator and perform calculations
const calculator = new Calculator(3, 4);
calculator.performCalculations();
