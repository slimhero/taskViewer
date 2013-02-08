define([
    'backbone',
    'hbs!widgets/dashboard/template',
    'kendo'
    //'jquery',
    //'lib/kendoui/kendo.autocomplete'
  ],
  function( Backbone, Template, kendo ){
    var DashboardView = Backbone.View.extend({
      el: '.context',
      manage: true,

      initialize: function(){
        this.render();
      },

      render: function(){
        var template = Template( {name: window.session.name} );
        this.$el.html( template );
/*
        this.$("#search").kendoAutoComplete({
                 //       dataSource: ["z","x","c"],
                        filter: "startswith",
                        placeholder: "Select country...",
                        separator: ", "
                    });
*/
        return this;
      }
    });

    return DashboardView;
  }
);
