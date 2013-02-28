define([
    'backbone',
    'widgets/app/view',
    'widgets/dashboard/view'
  ],
  function( Backbone, AppView, DashboardView ){
    var FlowRouter = Backbone.Router.extend({

      routes: {
        "dashboard": "dashboard",    // #help
        "":          "dashboard",//"app",  // #search/kiwis
        "search/:query/p:page": "search"   // #search/kiwis/p7
      },

      dashboard: function() {
        var view = new DashboardView();
        view.render();
      },

      app: function(){
        var view = new AppView();
        view.render();
      }
    });

    return FlowRouter;
  }
);
