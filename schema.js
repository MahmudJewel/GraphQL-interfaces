

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

    type non_human implements Character {
      id:ID!
      name: String
      gender: GENDER
      species: String
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    human: [Human!]!
    animal : [non_human!]!
  }
`;

// module.exports = typeDefs;
export default typeDefs;