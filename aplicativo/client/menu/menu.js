if (Meteor.isClient) {
  // To store the slideout instance.
  var slideout;

  // Auto-close the menu on route stop (when navigating to a new route)
  Router.onStop(function () {
    if (slideout) {
      slideout.close();
    }
  });

 if(Meteor.isServer){
     Meteor.startup(function(){
         Meteor.subscribe("viagens");
     })
 }
  Template.main.onRendered(function () {
    var template = this;
    console.log(template.$('#masterLayout').get(0));
    slideout = new Slideout({
      'panel': template.$('#masterLayout').get(0),
      'menu': template.$('#slideout-menu').get(0),
      'padding': 150,
      'tolerance': 70,
      'margin': 1
    });
    document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });
  });
  
}