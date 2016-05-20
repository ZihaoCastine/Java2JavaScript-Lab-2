" use strict ";

class Pet{
  constructor(type, name){
    this.type=type;
    this.name=name;
  }
  speak(){
    display.innerHTML+=this.type + "speaking<br/>";
  }
}

class Dog extends Pet{
  constructor(name){
    super(Dog, name);
  }
  speak(){
    display.innerHTML+="woof<br/>";
  }
}

class Cat extends Pet{
  constructor(name){
    super(Cat, name);
  }
  speak(){
    display.innerHTML+="meow<br/>";
  }
}

class Bird extends Pet{
  constructor(name){
    super(Bird, name);
  }
  speak(){
    display.innerHTML+="tweet<br/>";
  }
}
function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + " ";
      display.innerHTML += textOut;
      switch (type.toLowerCase()) {
        case "dog": new Dog(name).speak();
          break;
        case "cat": new Cat(name).speak();
          break;
        case "bird": new Bird(name).speak();
          break;
        default:
          new Pet(type, name).speak();
      }
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
