define([
    'backbone',
    'hbs!widgets/dashboard/template',
    'widgets/activity/view'
    //,
    //'/js/lib/jquery.gridster.js'
    //'jqueryGridster'
  ],
  function( Backbone, Template, ActivityView ){
    var DashboardView = Backbone.View.extend({
      el: 'body',//'.context',
      manage: true,

      views: {
        '#activity_section': new ActivityView() 
      },

      initialize: function(){
        this.render();
      },

      render: function(){
        var template = Template( {name: "ZZZ"/*window.session.name*/} );
        this.$el.html( template );

        //this.insertView("#activity_section", this.views["#activity_section"] );
        this.$("#activity_section").replaceWith( this.views["#activity_section"].el.outerHTML );
/*
        this.$(".gridster ul").gridster({
          widget_margins: [10, 10],
          widget_base_dimensions: [140, 140]
        }).data('gridster');
*/
        return this;
      }
    });

    return DashboardView;
  }
);
