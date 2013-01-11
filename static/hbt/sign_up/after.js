alert( "after" );

$( '#SignUpUser'  ).click( function(){
  $.Rest({ 
    type: $.restMethods.create, 
    url: "/api/user/new",
    data: { 
      name: $("div#sign_up_form #signup_name").val(),
      email: $("div#sign_up_form #signup_email").val(),
      password: $("div#sign_up_form #signup_pasword").val()  
    }, 
    success: function( response ){
      jsonAnswer = eval( "(" + response + ")" );
      console.log( jsonAnswer );
      try{
        if( jsonAnswer.error ){ 
          console.log( "asd" );
          alert( jsonAnswer.error );
        };
      }
      catch(e){
        alert( jsonAnswer.user.id );
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
