const{ ApolloServer} = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const userSchema = require('./user/schema/user.graphql')
const vavaSchema = require('./vava/schema/vava.graphql')


const userResolvers = require('./user/resolvers/userResolvers')
const vavaResolvers = require('./vava/resolvers/vavaResolvers')
const UsersAPI = require('./user/datasource/user')


const resolvers = [userResolvers,vavaResolvers]
const typeDefs = mergeTypeDefs([userSchema, vavaSchema]);

// const typeDefs = [userSchema]

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:()=>{
        return{
            usersAPI: new UsersAPI()
        }
    }
})

server.listen().then(({url})=>{
    console.log(`Servidor rodando na porta ${url}`)
})