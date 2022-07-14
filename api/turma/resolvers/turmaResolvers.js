const {GraphQLScalarType} = require('graphql')

const turmaResolvers = {
    Query:{
        turmas: (_,__,{dataSources},info)=>{
            console.log(info)
            return dataSources.turmasAPI.getTurmas()
        }
        // turma: (root,{id},{dataSources},info)=>{
        //     console.log(info)
        //     return dataSources.usersAPI.getUserById(id)
        // }
    }
}
module.exports = turmaResolvers