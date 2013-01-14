alert( "after" );
$( "#SignInUser" ).click(function(){
  var auth_val = 
      $("div#sign_in_form #auth_email").val() + "/" +
      $("div#sign_in_form #auth_pswd").val();
  $.Rest({ 
    type: $.restMethods.create, 
    url: "/auth/user/" + auth_val,
    //data: auth_val 
  }); 
});
