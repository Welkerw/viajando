Template.novaViagem.events({
    
    "submit form": function(e, template) {
        e.preventDefault();

        var inputPartida = $("#partida");
        var localPartida = inputPartida.val();

        var inputDestino = $("#destino");
        var localDestino = inputDestino.val();

        var inputData = $("#data");
        var dataViagem = inputData.val();

        Meteor.call("adiciona", {partida: localPartida, destino: localDestino, data: dataViagem, usuario: this.UserId});

        inputPartida.val("");
        inputDestino.val("");
        inputData.val("");

    }
});