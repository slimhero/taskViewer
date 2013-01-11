$(document).ready(function(){

/*
  $("#SignUpUser").click( function(){ 
//    User = new $.RestModel({
//        id: "",
//        name: "signup_name.value",
//        email: "signup_email.value",
//        password: "signup_pswd.value"
//    });

    User = new $.RestModel({
        id: "",
        name: {set:"signup_name.value", get:"$('#signup_name').val()" },
        email:{set:"signup_email.value",get:"$('#signup_email').val()" },
        password:{set:"signup_pswd.value",get:"$('#signup_pswd').val()" }
    });

    User.create( '/api/user/new' );
  });
*/
  $("#SignUpUser").click( function(){
User = new $.RestModel({
  id: "",
  name: {set:"signup_name.value",   get:"$('#signup_name').val()" },
  email:{set:"signup_email.value",  get:"$('#signup_email').val()" },
  password:{set:"signup_pswd.value",get:"$('#signup_pswd').val()" }
});

User.set_data = function(response){ 
      $.get(
        '/hbt/entry-template.hbt',
         function( tmp ){
           //alert( tmp);
           //User.get( '/api/users');
           
           //alert( response );
           //alert( $( tmp ).html );
           var source   = tmp;//$("#entry-template").html();
           //alert( source );
           var template = Handlebars.compile( source  );
           response = '{users: [{"id":1,"name":"zxc","email":"asd","password":"zxc","sha":null,"isconfirm":0,"state":null},{"id":2,"name":"zxc","email":"asd","password":"zxc","sha":null,"isconfirm":0,"state":null},{"id":3,"name":"Dmitry Krivets","email":"dkrivets@alb.kz","password":"zxc","sha":null,"isconfirm":0,"state":null}] }';
           var context = eval( "(" + response + ")" );//{title: "My New Post", body: "This is my first post!"}
           //var context = response;
           //alert( context );
           var html    = template( context );
           alert( html );
           $(".context").append( html );
         }
      );
};

User.get( '/api/user/3');

});

});
