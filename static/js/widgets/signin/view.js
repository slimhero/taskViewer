define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/signin/template'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template ){
    var SignInView = Backbone.View.extend({
      el: '.templates',
      
      initialize: function(){
        this.render();
      },

      // Render document from script
      render: function(){
        var template = Template({});
        this.$el.html( template );  
        return this;
      },

      // Events for template
      events: {
        "click #sign_in": "signIn" 
      },

      // Events action
      signIn: function(){
        $('div#sign_in_form').remove();
        window.alert("asd");
      }
    });

    return SignInView;
  }
);
