const {GraphQLScalarType} = require('graphql')

const turmaResolvers = {
    Query:{
        turmas: (root,args,{dataSources},info)=>{
            console.log(info)
            return dataSources.usersAPI.getUsers()
        },
        turma: (root,{id},{dataSources},info)=>{
            console.log(info)
            return dataSources.usersAPI.getUserById(id)
        }
    }
}
module.exports = turmaResolvers