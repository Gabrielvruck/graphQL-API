const { GraphQLScalarType } = require('graphql')

const matriculaResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => new Date(value).toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value).toISOString()
      }),

    Mutation:{
        matricularEstudante:(_,ids,{dataSources})=> dataSources.matriculasAPI.matricularEstudante(ids)
    },

    Matricula:{
        estudante:(parent,_,{dataSources})=>{
          console.log(parent)
         //esse parent.estudante_id é a propriedade dentro da tabela matricula no banco
          dataSources.usersAPI.getUserById(parent.estudante_id)
        },
        turma:(parent,_,{dataSources})=>{
            dataSources.turmasAPI.getTurma(parent.turma_id)
        }
      }
}

module.exports = matriculaResolvers