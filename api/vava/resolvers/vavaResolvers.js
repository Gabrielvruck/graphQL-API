const vavaResolvers = {
    Query:{
        vava: ()=> arrayVava,
        primeiroArma: ()=> arrayVava[0],
    }
}

const arrayVava = [
    {
        nome:"  ak-47"
    },{
        nome:"m4A1"
    }
]
module.exports = vavaResolvers