//Create the class, Thermostat. You’re going to put your constructor, getter, and setter in here.
class Thermostat {
    //Give the constructor a parameter (which you can name anything you want). 
    //Set the parameter to an attribute of the same name. 
    //Remember, you are initially setting things in Fahrenheit temperature.
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    //Create a get method that converts the Fahrenheit attribute to Celsius.
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    //Create a set method of the same name as the get method. 
    //It should have a parameter that accepts celsius temperature. 
    //Convert it to fahrenheit, and set it to the attribute.
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
