( function(){
  try{
    $.pnotify.defaults.delay = 1000;
    update_timer_display();
  }
  catch(e){
    null;
  };
 
  $.msg = {};

  $.msg.error = function( description  ){
    try{
      $.pnotify({
          //title: 'Error message',
          text: description,
          type: 'error',
          opacity: .8,
          closer_hover: true //false
      });
    }
    catch( e ){
      return alert(description );
    };
  };



  $.msg.info = function( description ){
    $.pnotify({
        //title: 'Info message',
        text: description,
        type: 'info',
        opacity: .8
    });
  };

  $.msg.success = function( description ){
    $.pnotify({
        //title: 'Success message',
        text:  description,
        type: 'success',
        opacity: .8
    });
  };
})(jQuery);
