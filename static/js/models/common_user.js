define([
    'backbone'
  ],
  function( Backbone ){
    window.CommonUserModel = Backbone.Model.extend({
      // Validation
      validate: function(attrs){
        var errors = [];
        if( attrs.name && attrs.name == "" )
          errors.push( "Field 'Name' must be filled" ); 
        
        if((!attrs.password) || attrs.password == "" )
          errors.push( "Field 'Password' must be filled" );
        if((!attrs.email) || attrs.email == "" )
          errors.push( "Field 'Email' must be filled" );

        if( errors.length > 0 ){
          this.validationError = errors.join( " and " );
          return this.validationError;
        };
      }
    });
    
    return window.CommonUserModel;
  }
);
