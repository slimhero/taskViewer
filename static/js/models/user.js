define([
    'backbone',
    'models/common_user'
  ],
  function( Backbone, CommonUser ){
    var UserModel = CommonUser.extend({
      urlRoot: '/api/user'
    });
    
    return UserModel;
  }
);
