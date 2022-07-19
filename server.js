require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// graphQL practice
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const { ApolloServer, gql } = require("apollo-server");

const animes = [
  {
    title: "Inuyasha",
  },
  {
    title: "Gintama",
  },
];
const typeDefs = gql`
  type Anime {
    title: String
  }
  type Query {
    test: [Anime]
  }
`;
const resolvers = {
  Query: {
    test: () => animes,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`server at ${url}`);
});

//

const animeRoute = require("./routes/anime");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

app.use(express.json());

//middleware
// app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());

//routes
app.use("/api/animes", animeRoute);

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(process.env.PORT, () => {
  console.log(`Backend is running on ${process.env.PORT}!`);
});

//
//
//

// require("dotenv").config();
// const express = require("express");
// const app = express();

// const authRoute = require("./routes/auth");

// const mongoose = require("mongoose");
// mongoose
//   .connect(process.env.MONGO)
//   .then(() => console.log("databbase connected!"))
//   .catch((err) => console.log(err));

// app.use(express.json());
// app.use("/auth", authRoute);

// app.listen(process.env.PORT, () => {
//   console.log("Backend is running!");
// });
