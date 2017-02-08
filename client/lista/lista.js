Template.lista.helpers({

    viagens : function() {
        return Viagens.find({"usuario" : Meteor.userId()});
    },

    formataData: function () {
        return moment(this.data).format('DD/MM/YYYY  HH:mm');
    }
});

Template.lista.events({
    "click button" : function(e, template) {
       Meteor.call("deleta",  this._id);
    }
});