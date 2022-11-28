

const typeDefs = `
    type Wand{
        wood: String
        core: String
        length: Float
    }

    enum GENDER{
        male
        female
    }

    interface Character{
        id:ID!
        name: String
        gender: GENDER
    }

    type Human implements Character {
        id:ID!
        name: String
        gender: GENDER
        DOB: String
        actor: String
        image: String
        wand: Wand
    }

    type NonHuman implements Character {
      id:ID!
      name: String
      gender: GENDER
      species: String
  }

  type Query {
    human: [Human!]!
    nonHuman : [NonHuman!]!
    character: [Character!]!
  }
`;

// module.exports = typeDefs;
export default typeDefs;

