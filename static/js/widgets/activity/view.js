define([
    'backbone',
    'widgets/protoPane/view',
    //'hbs!widgets/dataTemplate/template',
    'hbs!widgets/activity/template',
    'moment',
    'assets/calendar-graph',
    'message'
  ],
  function( Backbone, protoPaneView, Template ){
    var activityView = protoPaneView.extend({
      //el: "#activity_section",
      tagName: "section",
      id: "activity",
      name: "Activity",
      //manage: true,
      template: Template,
      initialize: function(){
      //  protoPaneView.__super__.initialize()//.call(this);
        //this.add( this.wrapContext );
        this.render();
      },
      render: function(){
        //this.$el.find("button[data-toggle='refresh']").click( function(){alert("asd");  } );
        this.add();
        this.$el.find("button[data-toggle='refresh']").click( function(){alert("asd");  } );
        return this;
      }
      /*,
    
      events:{
        "click button[data-toggle='refresh']" : "refresh"
      }
      */
    });
    return activityView;
  }
);
