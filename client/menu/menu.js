Template.MasterLayout.onRendered(function () {
  var template = this;
  slideoutInstance = new Slideout({
    'menu': template.$('.menu').get(0),
    'panel': $('.content').get(0),
    'padding': 256,
    'tolerance': 70
  });
});