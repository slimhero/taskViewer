$( "#SignInUser" ).click(function(){
  var pass = $("div#sign_in_form #auth_pswd").val();
  var email = $("div#sign_in_form #auth_email").val();

  if( typeof pass == 'undefined' || pass.length == 0 ){
    $.msg.error( "Field 'Password' doesn't filled" );
  }
  else if( typeof email == 'undefined' || email.length == 0 ){
    $.msg.error( "Field 'Email' doesn't filled" );
  }
  else{
    var auth_val = 
        email + "/" + pass
    $.Rest({ 
      type: $.restMethods.create, 
      url: "/auth/user/" + auth_val,
      success: function( response ){
        jsonAnswer = response;
        if( typeof jsonAnswer == "string" ){
          jsonAnswer = eval( "(" + jsonAnswer + ")" );
        };
       
        if( jsonAnswer.user.id && jsonAnswer.user.id > 0 ){
          $('div#sign_in_form').modal( 'hide');
          $.msg.success( "You've signed in" );
        }
        else{
          $.msg.error( "Uncorrect data" );
        };
      }
    });
  };
});
