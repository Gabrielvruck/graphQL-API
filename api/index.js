const{ ApolloServer} = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const path = require('path')

const userSchema = require('./user/schema/user.graphql')
// const vavaSchema = require('./vava/schema/vava.graphql')
const turmaSchema = require('./turma/schema/turma.graphql')

const userResolvers = require('./user/resolvers/userResolvers')
// const vavaResolvers = require('./vava/resolvers/vavaResolvers')
const turmaResolvers =require('./turma/resolvers/turmaResolvers')

const UsersAPI = require('./user/datasource/user')
const TurmasAPI= require('./turma/datasource/turma')

const resolvers = [userResolvers,turmaResolvers]
const typeDefs = mergeTypeDefs([userSchema,turmaSchema]);

const dbConfig ={
    client: "sqlite3",
    useNullAsDefault:true,
    connection:{
        filename:path.resolve(__dirname,'./data/database.db')
    }
};
// const typeDefs = [userSchema]

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:()=>{
        return{
            usersAPI: new UsersAPI(),
            turmasAPI: new TurmasAPI(dbConfig)
        }
    }
})

server.listen().then(({url})=>{
    console.log(`Servidor rodando na porta ${url}`)
})