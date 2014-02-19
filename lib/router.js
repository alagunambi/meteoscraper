Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'not_found_template'
});

Router.map(function() {
  this.route("home", {
    path: '/',
    template: 'price_list'
  });
});
