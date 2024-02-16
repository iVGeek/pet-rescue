document.addEventListener("DOMContentLoaded", function () {
  const statusButton = document.querySelector("button");
  const petsContainer = document.querySelector(".all-pets");

  const createPet = function (name, species) {
    const pet = {
      name: name,
      species: species,
      isTired: 5,
      sleep: function () {
        console.log(`${this.name} needs a nap. Zzz...`);
        this.isTired = 1;
      },
      play: function () {
        if (this.isTired === 10) {
          console.log(`Too tired to play.`);
          this.sleep();
        } else {
          console.log(`Yay! ${this.name} loves to play!`);
          this.isTired += 1;
        }
      }
    };
    return pet;
  };

  const showPets = function (petArray) {
    petsContainer.innerHTML = "";

    petArray.forEach(function (pet) {
      let status = "ready to play!";
      if (pet.isTired >= 7) {
        status = "sleeping.";
      }
      const li = document.createElement("li");
      li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
      petsContainer.appendChild(li);
    });
  };

  statusButton.addEventListener("click", function () {
    const milo = createPet("Milo", "ferret");
    const coco = createPet("Coco", "rabbit");
    const ruby = createPet("Ruby", "hamster");
    const bailey = createPet("Bailey", "rat");
    const willow = createPet("Willow", "turtle");

    coco.isTired = 8;
    willow.isTired = 9;

    const allPets = [milo, coco, ruby, bailey, willow];
    showPets(allPets);
  });
});
