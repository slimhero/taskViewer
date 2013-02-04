define([
    'backbone'
  ],
  function( Backbone ){
    window.AuthModel = Backbone.Model.extend({
      urlRoot: '/auth/user',

      url: function() {
        var email = this.get('email');
        var pass =   this.get('password');
        return this.urlRoot + '/' + email + '/' + pass;
      },
      
      // Validation
      validate: function(attrs){
        this.errors = [];
        if((!attrs.password) || attrs.password == "" )
          this.errors.push( "Field 'Password' must be filled" );
        if((!attrs.email) || attrs.email == "" )
          this.errors.push( "Field 'Email' must be filled" );

        if( this.errors.length > 0 )
          return this.errors;
      }
    });
    
    return window.AuthModel;
  }
);
