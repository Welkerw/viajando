Meteor.startup(function() {
    Meteor.publish("viagens", function() {
      return Viagens.find();
    });
});