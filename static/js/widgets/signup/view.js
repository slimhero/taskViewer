define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/signup/template',
    'message'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template ){
    var SignUpView = Backbone.View.extend({
      el: '.templates',
      /*
      tagName: 'div',
      className: 'modal hide fade',
      id: 'sign_up_form',
      */
      
      initialize: function(){
        this.render();
      },

      // Render document from script
      render: function(){
        var template = Template({});
        this.$el.append( template );  
        
        $.msg.success( "Sign up template has loaded" );
        
        return this;
      },

      // Events for template
      events: {
        "click #SignUpUser": "signUp" 
      },

      // Events action
      signUp: function(){
        $.msg.success( "Signed up" );
        $('div#sign_up_form').modal( 'hide' );
      }
    });

    return SignUpView;
  }
);
