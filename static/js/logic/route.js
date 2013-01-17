$(document).ready(function(){
  // Load tamplate with actions 
  // Uses as route-like thing
  load_template = function(){
    switch( document.location.pathname ){
      case "/":
        new $.RestTemplate({ 
          template: "/hbt/index/index.js", 
          place: "$('.context').prepend( html )", 
          js_before: "/hbt/index/before.js",
          js_after: "/hbt/index/after.js"
        });
        break;
      case "/dashboard":
        /*new $.RestTemplate({
          template: "/hbt/user/user.js",
          place: "$('body').html( html )", 

          
          //plase: "$('.context').prepend( html )",
          js_before: "",
          js_after: ""
        });
        */
        new $.RestData({
            url: "/api/session",
              action: {
                template: "/hbt/user/user.js", 
                place: "$('body').html( html )", 
                js_before: "",
                js_after: ""
            }
        });
        break;
    };
  };
});
