define([
    //'jquery',
    'underscore',
    'backbone',
    //'message'
  ],
  function( /*$,*/ _, Backbone ){
    var AuthModel = Backbone.Model.extend({
      errors: [],
      idAttribute: 'id',
      // Defaults properties
      defaults: {
         name: "",
         password: "",
         email: "" 
      },

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

    var AuthUserCollection = Backbone.Collection.extend({
      model: AuthModel//,
      //url: "/auth/user/" + AuthModel.password + "/" + AuthModel.email
    });

    return AuthModel;
  }
);
