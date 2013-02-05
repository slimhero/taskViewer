define([
    'backbone',
    'models/common_user'
  ],
  function( Backbone, CommonUserModel ){
    window.AuthModel = CommonUserModel.extend({
      urlRoot: '/auth/user',

      url: function() {
        var email = this.get('email');
        var pass =   this.get('password');
        return this.urlRoot + '/' + email + '/' + pass;
      }
      
    });
    
    return window.AuthModel;
  }
);
