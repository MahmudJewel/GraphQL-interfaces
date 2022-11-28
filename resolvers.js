// import * as HarryPotter from './HarryPotter.json';
// const userData = require('./HarryPotter.json');

const HarryPotter = [
    {
        "id":1,
        "name":"Mahmud",
        "gender":"male",
        "DOB":"",
        "wand":{
            "wood":"ash",
            "core":"unicorn hair",
            "length":12.25
        },
        "actor":"Robert Pattinson",
        "image":"demo url"
    },

    {
        "id":2,
        "name":"Senorita",
        "gender":"female",
        "DOB":"",
        "wand":{
            "wood":"ash",
            "core":"unicorn hair",
            "length":10
        },
        "actor":"Kate",
        "image":"demo url for kate"
    },

    {
        "id":3,
        "name":"Elfrick the Eager",
        "species":"goblin",
        "gender":"male"
    },

    {
        "id":4,
        "name":"Norberta",
        "species":"dragon",
        "gender":"female"
    }
]
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers = {
    Query: {
      books: () => books,
      human: () => {
        return HarryPotter.filter((flag)=> !flag.species)
      },
      
      animal: () =>{
        return HarryPotter.filter((flag)=>flag.species)
      }
    },
  };

export default resolvers;
