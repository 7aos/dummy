const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

const getOrders = async () => {
  try {
    const orders = [{
      id: '1',
      value: '100'
    }, {
      id: '2',
      value: '200'
    }];
    return orders.map(order => {
      return {
        id: order
      }
    });
  } catch (err) {
    console.error(err);
    return [];
  }
}

const typeDefs = gql`
  type Order {
    id: String
  }

  type Query {
    orders: [Order]
  }
`;

const resolvers = {
  Query: {
    orders: async () => await getOrders()
  }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`apollo server started at ${url}`);
});
