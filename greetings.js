let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage; //reassign global variables from inside a function
}

changeGreetingMessage("Good Evening");
greetPeople(); // => 'Good Evening'