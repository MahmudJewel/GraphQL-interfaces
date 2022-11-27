

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

    type Character{
        id:ID!
        name: String
        gender: GENDER
        DOB: String
        actor: String
        image: String
        wand: Wand
    }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    all_data: [Character]
  }
`;

// module.exports = typeDefs;
export default typeDefs;