document.addEventListener("DOMContentLoaded", function () {
  const statusButton = document.getElementById("statusButton");
  const petsContainer = document.querySelector(".all-pets");

  class Pet {
    constructor(name, species) {
      this.name = name;
      this.species = species;
      this.isTired = 5;
    }

    sleep() {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    }

    play() {
      if (this.isTired === 10) {
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  }

  const coco = new Pet("Coco", "ferret");
  const milo = new Pet("Milo", "rabbit");
  const ruby = new Pet("Ruby", "hamster");
  const whoosh = new Pet("Whoosh", "rat");
  const bailey = new Pet("Bailey", "turtle");

  const allPets = [coco, milo, ruby, whoosh, bailey];

  const showPets = function (petArray) {
    petsContainer.innerHTML = "";

    for (let pet of petArray) {
      let status = "ready to play!";
      if (pet.isTired >= 7) {
        status = "sleeping.";
      }
      const li = document.createElement("li");
      li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
      petsContainer.append(li);
    }
  };

  statusButton.addEventListener("click", function () {
    showPets(allPets);
  });
});
