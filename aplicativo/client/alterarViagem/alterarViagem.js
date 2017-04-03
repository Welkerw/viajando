Template.alterarViagem.events({
    
    "submit form": function(e, template) {
        e.preventDefault();

        var inputPartida = $("#partida");
        var localPartida = inputPartida.val();

        var inputDestino = $("#destino");
        var localDestino = inputDestino.val();

        var inputData = $("#data");
        var dataViagem = inputData.val();

        var alerta;
        if (inputPartida.val() == null || inputPartida.val() == "") {
            alerta = "Partida";
        }
        if (inputDestino.val() == null || inputDestino.val() == "") {
           if (alerta != null && alerta != "") {
                alerta = alerta + ", Destino";
           }
           else {
                alerta = "Destino";
           }
        }
        if (inputData.val() == null || inputData.val() == "") {
           if (alerta != null && alerta != "") {
                alerta = alerta + ", Data";
           }
           else {
               alerta = "Data";
           }
        }
        if (alerta != null && alerta != "") {
               sAlert.info('Necessário preencher os seguintes itens: ' + alerta);
               return;
        } 
        else {
            Meteor.call("adicionar", {partida: localPartida, destino: localDestino, data: dataViagem, usuario: this.UserId});
            sAlert.success('Registro alterado com sucesso!');
            inputPartida.val("");
            inputDestino.val("");
            inputData.val("");
        } 
    }
});