define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/signin/template',
    'models/authuser',
    'message'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template, AuthUser, AuthUserCollect ){
/*    var AuthUserCollection = Backbone.Collection.extend({
      model: AuthUser,
      //url: '/auth/user/'
      url: function() {
        var email = this.models[0].get('email');
        var pass =   this.models[0].get('password');
        return '/auth/user/' + email + '/' + pass;
      }
    });
*/
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
        this.model = new AuthUser();
        /*this.model.bind('error', function( model, error){
          $.msg.error( error );
        });
        */
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
        this.model.set({ "password": $('div#sign_in_form input#auth_pswd').val() }); 
        this.model.set({ "email": $('div#sign_in_form input#auth_email').val() }); 
        if( !this.model.isValid() ){
          $.each( this.model.errors, function(id,value){
              $.msg.error( value );
          });
        }
        else{
          //AuthUserCollection({ url: '/auth/user/'})
          //collect = new AuthUserCollection( [ this.model ] );
/*
          this.model.fetch({
            success: function( model){ 
              alert( model.get('id') ); 
            },
            error: function(){
              alert( 'error' );
            }
          });
*/
/*
          this.model.save({
            success: function(){
              alert( 'cool');
            },
            error: function(){
              alert( 'bad' );
            }
          });
*/
          this.model.get();
          //$.msg.success( "Signed in" );
          $('div#sign_in_form').modal( 'hide' );
        };
      }
    });

    return SignInView;
  }
);
