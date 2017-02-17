Template.pesquisarViagem.onCreated( () => {
  let template = Template.instance();

  template.pesquisado = new ReactiveVar();

  template.autorun( () => {
    template.subscribe( 'viagens', template.pesquisado.get(), () => {
      
    });
  });
});

Template.pesquisarViagem.events({
    
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
        
        inputPartida.val("");
        inputDestino.val("");
        inputData.val("");
    } 
});

Template.pesquisarViagem.helpers({
    pesquisado() {
        return Template.instance().pesquisado.get();
    },
    formataData : function () {
        return moment(this.data).format("DD/MM/YYYY HH:mm");
    }
});

