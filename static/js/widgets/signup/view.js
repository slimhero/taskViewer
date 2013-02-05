define([
    'backbone',
    'hbs!widgets/signup/template',
    'models/user',
    'message'
  ],
  function( Backbone, Template, UserModel ){
    var SignUpView = Backbone.View.extend({
      el: '.templates',
      
      initialize: function(){
        this.model = new UserModel();
        this.listenTo( this.model, 'sync', this.checkResult );
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
        var data = {
          name:     $('div#sign_up_form #signup_name').val(),
          password: $('div#sign_up_form #signup_pswd').val(),
          email:    $('div#sign_up_form #signup_email').val()
        };

        this.model.set( data );
        if( !this.model.isValid() ){
          $.msg.error( this.model.validationError );

        }
        else{
          this.model.isNew();
          this.model.save();
        };
      },

      checkResult: function( model ){
        if( !model.get( 'error' ) ){
          this.onSuccess();
        }
        else{
          this.onError( model.get( 'error' ) );
        };
      },
      
      onSuccess: function(){
        $.msg.success( "Signed up" );
        $('div#sign_up_form').modal( 'hide' );
      },
      onError: function( errorText ){
        $.msg.error( errorText );
        this.model.unset( 'error' );
      }
    });

    return SignUpView;
  }
);
