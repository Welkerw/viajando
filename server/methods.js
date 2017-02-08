Meteor.methods({
    adiciona : function(obj) {
        Viagens.insert({partida: obj.partida, destino: obj.destino, data: obj.data, usuario: this.userId});
    },
    deleta : function(id) {
        Viagens.remove({_id : id, usuario : this.userId});
    },
    pesquisar : function(obj) {

      var list =  Viagens.aggregate([
            {$group: {
                _id:{partida: "$partida", destino: "$destino", data: "$data"},  
                count: { $sum: 1 } } }
                ])
        return list;
    }
});

