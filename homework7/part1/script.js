const animal = {
  name: "",
  kind: "",
  speak: function (message) {
    console.log(`${this.name} says: '${message}'`);
  },
};

animal.name = prompt("What is the animal's name? (e.g., Dog)").trim();
animal.kind = prompt("What kind of animal is it? (e.g., Mammal)").trim();

const userMessage = prompt("What do you want the animal to say?");
animal.speak(userMessage);
