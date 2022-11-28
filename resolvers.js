// import * as HarryPotter from './HarryPotter.json';
// const userData = require('./HarryPotter.json');

const HarryPotter = [
  {
    "id": 1,
    "name": "Mahmud",
    "gender": "male",
    "DOB": "",
    "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 12.25
    },
    "actor": "Robert Pattinson",
    "image": "demo url"
  },

  {
    "id": 2,
    "name": "Senorita",
    "gender": "female",
    "DOB": "",
    "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 10
    },
    "actor": "Kate",
    "image": "demo url for kate"
  },

  {
    "id": 3,
    "name": "Elfrick the Eager",
    "species": "goblin",
    "gender": "male"
  },

  {
    "id": 4,
    "name": "Norberta",
    "species": "dragon",
    "gender": "female"
  }
]


const resolvers = {
  Character: {
    __resolveType (demo, context, info) {
      if (demo.species) {
        return 'NonHuman';
      }

      if (!demo.species) {
        return 'Human';
      }

      // return null;
    },
  },

  Query: {
    human: () => {
      return HarryPotter.filter((flag) => !flag.species)
      // return HarryPotter
    },

    nonHuman: () => {
      return HarryPotter.filter((flag) => flag.species)
      // return HarryPotter
    }
  },
};

export default resolvers;
