define([
    'jquery',
    'backbone'
  ], 
  function( $, Backbone ) {
    var Workspace = Backbone.Router.extend({
      routes:{
        '*filter': 'setFilter'
      },
      setFilter: function( param ) {
        // Set the current filter to be used
        Common.TodoFilter = param.trim() || '';
        // Trigger a collection filter event, causing hiding/unhiding
        // of the Todo view items
        Todos.trigger('filter');
      }
    });
    return Workspace;
});




