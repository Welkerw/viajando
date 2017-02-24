Router.route("/", function() {
    this.render("home", {
        data: function() {
            return {
               viagens : function() {
                  return Viagens.find({"usuario" : Meteor.userId()});
               } 
            }
        }
    });
}, { name: "home" });