//alert( "after" );
$( '#SignUpUser'  ).click( function(){
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
        alert( jsonAnswer.error );
      }
			else{
        //alert( jsonAnswer.user.id );
        if( jsonAnswer.user.id && jsonAnswer.user.id > 0 ){
          $('div#sign_up_form').modal( 'hide' );
        }
        else{
          alert( "Uncorect data" );
        };
      };
    }
  });
});
