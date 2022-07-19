const graphql = require("graphql");
const _ = require("lodash");
const Anime = require("../models/anime");
const Author = require("../models/author");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// dummy data
// const animes = [
//   { name: "Inuyasha", genre: "battle", id: "1", authorId: "1" },
//   { name: "Gintama", genre: "commedy", id: "2", authorId: "2" },
//   { name: "H * H", genre: "explore", id: "3", authorId: "3" },
//   { name: "Ranma 1/2", genre: "comedy", id: "4", authorId: "1" },
//   { name: "Level E", genre: "sci fi", id: "3", authorId: "3" },
// ];
// const authors = [
//   { name: "Takahashi Rumiko", age: 60, id: "1" },
//   { name: "Gin san", age: 59, id: "2" },
//   { name: "Togashi san", age: 69, id: "3" },
// ];

const AnimeType = new GraphQLObjectType({
  name: "Anime",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return _.find(authors, { id: parent.authorId });
        return Author.findById(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    animes: {
      type: new GraphQLList(AnimeType),
      resolve(parent, args) {
        // return _.filter(animes, { authorId: parent.id });
        return Anime.find({ authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        // return _.find(animes, { id: args.id });
        return Anime.findById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return Author.findById(args.id);
      },
    },
    animes: {
      type: new GraphQLList(AnimeType),
      resolve(parent, args) {
        // return animes;
        return Anime.find({});
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
        return Author.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });
        return author.save();
      },
    },
    addAnime: {
      type: AnimeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let anime = new Anime({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return anime.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
