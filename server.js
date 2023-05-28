const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Person {
		firstname: String
		lastname: String
	}
	input PersonInput {
		firstname: String!
		lastname: String
	}
	type Query{
		hello: String
		nextNumber(nb: Int!): Int
		getFakePerson: Person
	}
	type Mutation{
		createPerson(input: PersonInput): Boolean
	}
`);

const root = {
	hello: () => {
		return "Hello world!";
	},
	nextNumber: (arg) => arg.nb + 1,
	getFakePerson: () => {
		return {
			firstname: "hello",
			lastname: "world"
		}
	},
	createPerson: (args) => {
		console.log(args);
		return (true);
	}
};

const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
