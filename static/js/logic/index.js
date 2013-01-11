$(document).ready(function(){

  new $.RestTemplate({ 
    template: "/hbt/index/index.js", 
    place: "$('.context').prepend( html )", 
    js_before: "/hbt/index/before.js",
    js_after: "/hbt/index/after.js"
  });
 
});
