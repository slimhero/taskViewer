function RouteCtrl( $route ){
  var self = this;

  this.addUser = function(){
    window.location = "#/user/new";
  }
}

function UserListCtrl( User ){
  this.users = User.query();
}

function UserDetail( User ){
  this.user = User.get({ id:this.params.id });

  this.saveUser = function(){
    if( this.user.id > 0 )
      this.user.$update({ id:this.user.id });
    else
      this.user.$save();
  };
}
