//alert( "after" );
$( '#SignUpUser'  ).click( function(){
  var name = $("div#sign_up_form #signup_name").val();
  var email = $("div#sign_up_form #signup_email").val();
  var pswd = $("div#sign_up_form #signup_pswd").val();

  if( name.length == 0  ){
    $.msg.error( "Field 'Name' doesn't filled"  );
  }
  else if( email.length == 0 ){
    $.msg.error( "Field 'Email' does't filled" );
  }
  else if( pswd.length == 0  ){
    $.msg.error( "Fiels 'Password' doesn't filled" );
  }
  else{

    $.Rest({ 
      type: $.restMethods.create, 
      url: "/api/user/new",
      data: { 
        name: $("div#sign_up_form #signup_name").val(),
        email: $("div#sign_up_form #signup_email").val(),
        password: $("div#sign_up_form #signup_pswd").val()  
      }, 
      success: function( response ){
			  jsonAnswer = response;
        //alert( jsinAnswer );
        if( typeof jsonAnswer == "string" ){
			    jsonAnswer = eval( "(" + jsonAnswer + ")" );
			  };
        //console.log( jsonAnswer );
			  //console.log( jsonAnswer.user.id );
        //alert( jsonAnswer.user.id );
     
		    //alert( jsonAnswer.error );	
        if( typeof jsonAnswer.error != 'undefined' ){ 
          //console.log( "asd" );
          $.msg.error( jsonAnswer.error.toString() );
        }
			  else{
          //alert( jsonAnswer.user.id );
          if( jsonAnswer.user.id && jsonAnswer.user.id > 0 ){
            $('div#sign_up_form').modal( 'hide' );
          }
          else{
            $.msg.error( "Uncorrect data" );
            //alert( "Uncorect data" );
          };
        };
      }
    });
  };
});
