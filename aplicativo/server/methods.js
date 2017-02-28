Meteor.methods({
    adicionar : function(obj) {
        Viagens.insert({partida: obj.partida, destino: obj.destino, data: obj.data, usuario: this.userId});
    },
    excluir : function(id) {
        Viagens.remove({_id : id, usuario : this.userId});
    },
    alterar : function(id) {
        Viagens.update({_id : id, usuario : this.userId});
    },
    pesquisar : function(obj) {

      var list =  Viagens.aggregate([
            {$match : {
                 partida: obj.partida, destino :obj.destino,  data: obj.data}
            },
            {$group: {
                _id:{partida: "$partida", destino: "$destino", data: "$data"},  
                count: { $sum: 1 } } 
            },
            {$project: {
                _id:0, partida: "$_id.partida", destino: "$_id.destino", data: "$_id.data",  
                count: "$count" } 
            }   
        ])
        return list;
    }
});

