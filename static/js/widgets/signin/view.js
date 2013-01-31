define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/signin/template',
    'message'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template ){
    var SignInView = Backbone.View.extend({
      //el: '.templates div#loginin',
      el: '.templates',
      /*
      tagName: 'div',
      className: 'modal hide fade',
      id: 'sign_in_form',
      */
      initialize: function(){
        this.render();
      },

      // Render document from script
      render: function(){
        var template = Template({});
        this.$el.append( template );  
        $.msg.success( "Sign in template has loaded" );
        return this;
      },

      // Events for template
      events: {
        "click #SignInUser": "signIn" 
      },

      // Events action
      signIn: function(){
        $.msg.success( "Signed in" );
        $('div#sign_in_form').modal( 'hide' );
        //$('div#sign_in_form').remove();
        //window.alert("asd");
      }
    });

    return SignInView;
  }
);