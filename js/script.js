const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

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

const coco = createPet("Coco", "ferret");
const milo = createPet("Milo", "rabbit");
const ruby = createPet("Ruby", "Hamster");
const whoosh = createPet("Whoosh", "rat");
const bailey = createPet("Bailey", "turtle");

// console.log(coco, milo, ruby, whoosh, bailey);

// milo.sleep();
// whoosh.play();

// console.log(milo, whoosh);

coco.isTired = 8;
ruby.isTired = 9;

const allPets = [coco, milo, ruby, whoosh, bailey];
// console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
