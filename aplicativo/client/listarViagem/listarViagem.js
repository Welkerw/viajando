Template.listarViagem.helpers({

    viagens : function() {
        return Viagens.find({"usuario" : Meteor.userId()});
    },

    formataData: function () {
        return moment(this.data).format('DD/MM/YYYY  HH:mm');
    }
});

Template.listarViagem.events({
    "click .excluir" : function(e, template) {
       Meteor.call("excluir",  this._id);
    },
    "click .alterar" : function(e, template) {
       Meteor.call("alterar",  this._id);
    }
});