
const {GraphQLScalarType} = require('graphql')
const userResolvers = {
    RolesType:{
        ESTUDANTE:"ESTUDANTE",
        DOCENTE:"DOCENTE",
        COORDENACAO:"COORDENACAO"   
    },
    DateTime: new GraphQLScalarType({
        name:'DateTime',
        description:'string de data e hora no formato ISO-8601',
        serialize:(value)=>value.toISOString(),
        parseValue:(value)=> new Date(value),
        parseLiteral:(ast)=> new Date(ast.value)
    }),
    Query:{
        users: (root,args,{dataSources},info)=>{
            console.log(info)
            return dataSources.usersAPI.getUsers()
        },
        user: (root,{id},{dataSources},info)=>{
            console.log(info)
            return dataSources.usersAPI.getUserById(id)
        }
    },
    Mutation:{
        adicionarUser:async (root,{user},{dataSources})=> {
            // teve que colocar o return pq colocou {}
            console.log(user)
           return dataSources.usersAPI.adicionarUser(user)
        },
        atualizarUser:async (root,novosDados,{dataSources})=> {
            console.log(novosDados)
           return dataSources.usersAPI.atualizarUser(novosDados)
        } ,
      
        deletaUser:async (root,{id},{dataSources}) => dataSources.usersAPI.deletaUser(id)
    }
}


module.exports = userResolvers