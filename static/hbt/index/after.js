//Call sign-in-form
$("#sign_in").click( function(e){
  e.preventDefault();
  new $.RestTemplate({ 
    template: "/hbt/sign_in/sign_in.js", 
    place: "$('body').append( html )", 
    js_before: "/hbt/sign_in/before.js",
    js_after: "/hbt/sign_in/after.js"
  });

  $("#sign_in_form").modal( "show" );
});

//Call form for sign up
$("#sign_up").click( function(e){
  e.preventDefault();
  new $.RestTemplate({ 
    template: "/hbt/sign_up/sign_up.js", 
    place: "$('body').append( html )", 
    js_before: "/hbt/sign_up/before.js",
    js_after: "/hbt/sign_up/after.js"
  });

  $("#sign_up_form").modal( "show" );
});
