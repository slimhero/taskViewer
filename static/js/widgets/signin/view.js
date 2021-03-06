define([
    'backbone',
    'hbs!widgets/signin/template',
    'models/authuser',
    'message'
  ],
  function( Backbone, Template, AuthUser ){
    var SignInView = Backbone.View.extend({
      el: '.templates',
      initialize: function(){
        this.model = new AuthUser();
        // Check a model
        this.listenTo( this.model, 'sync', this.checkResult );
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

        var data = {
          password: $('div#sign_in_form input#auth_pswd').val() ,
          email: $('div#sign_in_form input#auth_email').val()
        };

        this.model.set( data );
        if( !this.model.isValid() ){
          $.msg.error( this.model.validationError );
        }
        else{
          this.model.save();
        };
      },

      // Checking result
      checkResult: function( model ){
        if( !model.get("error") )
          this.onSuccess();
        else
          this.onError( model.get( 'error' ) );
      },

      // If result is well
      // Show tooltip and hide window
      onSuccess: function(){
        $.msg.success( "Signed in" );
        $('div#sign_in_form').modal( 'hide' );
        window.session = new Object({ name: this.model.get("name"), id: this.model.get("id") });
        this.model.clear();
        Backbone.history.navigate('dashboard', true); 
        //controller.navigate("dashboard", true); // переход на страницу success
      },

      // If we have error
      // Show tooltip with error
      // and delete error field from model
      onError: function( errorText ){
        $.msg.error( errorText );
        this.model.unset( 'error' );
      }
    });

    return SignInView;
  }
);
