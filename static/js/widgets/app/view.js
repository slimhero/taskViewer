define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/app/template',
    'widgets/signin/view',
    'bootstrap'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template, SignInView ){
    var AppView = Backbone.View.extend({
      el: '.context div',
      //manage: true,

      initialize: function(){
        this.render();
      },

      // Render document from script
      render: function(){
        var template = Template({});
        //$(this.el).html( template );
         
        this.$el.html( template ); 
        return this;
      },
      
      views: {
        ".templates": new SignInView()
      },

      // Events for template
      events: {
        "click #sign_in": "signIn" 
      },

      // Events action
      signIn: function(e){
        e.preventDefault();
        $('div#sign_in_form').modal( "show");
      }
    });

    return AppView;
  }
);
