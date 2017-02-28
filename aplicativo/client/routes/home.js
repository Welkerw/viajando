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

Router.route('/listarViagem', { name: 'listarViagem' });
Router.route('/incluirViagem', { name: 'incluirViagem' });
Router.route('/alterarViagem', { name: 'alterarViagem' });
Router.route('/pesquisarViagem', { name: 'pesquisarViagem' });