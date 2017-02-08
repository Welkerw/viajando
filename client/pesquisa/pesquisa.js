Template.pesquisa.onCreated( () => {
  let template = Template.instance();

  template.pesquisado = new ReactiveVar();

  template.autorun( () => {
    template.subscribe( 'viagens', template.pesquisado.get(), () => {
      
    });
  });
});

Template.pesquisa.events({
    
    "click button": function(e, template) {
        e.preventDefault();

        var inputPartida = $("#partidaPesquisa");
        var localPartida = inputPartida.val();

        var inputDestino = $("#destinoPesquisa");
        var localDestino = inputDestino.val();

        var inputData = $("#dataPesquisa");
        var dataViagem = inputData.val();

        Meteor.call("pesquisar", {partida: localPartida, destino: localDestino, data: dataViagem}, function(error, result) {
            template.pesquisado.set(result);
        });

        Viagens.find({_id: { $type: 3 } });
        Viagens.remove({_id: { $type: 3 } });

        inputPartida.val("");
        inputDestino.val("");
        inputData.val("");
    } 
});

Template.pesquisa.helpers({
    pesquisado() {
        return Template.instance().pesquisado.get();
    },
    formataData : function () {
        return moment(this.data).format("DD/MM/YYYY HH:mm");
    }
});

