
// const userResolvers = {
//     Query:{
//         users: ()=> arrayUsers,
//         primeiroUser: ()=> arrayUsers[0],
//     }
// }
const userResolvers = {
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
        adicionarUser:async (root,user,{dataSources})=> 
        dataSources.usersAPI.adicionarUser(user),

        atualizarUser:async (root,novosDados,{dataSources})=>
        dataSources.usersAPI.atualizarUser(novosDados),

        deletaUser:async (root,{id},{dataSources}) =>
        dataSources.usersAPI.deletaUser(id)
    }
}

// const arrayUsers = [
//     {
//         nome:"Ana",
//         ativo:true
//     },{
//         nome:"Marcia",
//         ativo:false
//     }
// ]

module.exports = userResolvers