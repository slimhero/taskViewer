(function($){
  $.restMethods = { get: "GET", put: "PUT", delete:"DELETE", create:"POST"  };

  // Call one of restfull service methods
  $.Rest = function( options ){
    // Default value of options.method
    this.isDefault = $.restMethods.get;
    this.ErrorMsg  = "";

    // Checking options.method
    if( options.type ){ 
      for(var member in $.restMethods ){
        if( $.restMethods[member] == options.type.toUpperCase() ){
          this.isDefault = $.restMethods[member];
          break;//return;
        };
      };
    }
    else{
      options.type = this.isDefault;
    };

    // Dictionary of all options
    this.restListOptions = [ "type", "url", "data", "success", "error" ];

    // Check options
    for( var member in options ){
      for( var x = 0; x < this.restListOptions.length; x++ ){
        if( member.toLowerCase() == this.restListOptions[x] ){
          this.ErrorMsg = "";
          break;//return;
        }
        else{
          this.ErrorMsg = "No needs to use <" + member + ">";
        };
      };
    };
 
    // This thing was made for usability
    // as a sugar for object
    // If we use 
    var _type = options.type.toUpperCase();
    var _data = String( options.data )
    if( _type == $.restMethods.get ||
      _type == $.restMethods.put ||
      _type == $.restMethods.delete
    ){
      if( typeof options.data != 'undefined'/* && _data.length > 0 */){
        // If we have '/' at the end of url and at the start of data
        // we need to remove one of them 
        if( options.url.substr( -1 ) == '/' && _data.substr( 0, 1 ) == "/" ){
          _data = _data.substr( 1, _data.length );
          options.data = _data;
        }
        // If we doesn't have '/' we need to add it
        else if( options.url.substr( -1 ) != '/' && _data.substr( 0, 1 ) != "/" ){
          options.url = options.url  + "/";
        };
        // clue the data
        options.url = options.url + _data;//options.data;
        options.data = "";
      };
    };

    if( this.ErrorMsg.length == 0 || this.ErrorMsg == ""  ){
      return $.ajax(options);
    };
  };
  
  // Service
  // options needs to be like 
  // {
  //   proto: {
  //     id: {get: "", set:"" }
  //   },
  //   fileds: {},
  //   action: {
  //     template: "",
  //     js: ""
  //   }
  // }

  $.RestTempSetup = function( options ){
    var base = new Object({
        isContext: false,
        context:   "",
        place:     "",
        template:  "",
        js_before: "",
        js_after:  ""
    });


    return jQuery.extend( base, options );
  };

  $.RestDataSetup = function( options ){
    var base = new Object({
      proto: new Object(),
      fields: new Object(),
      action: $.RestTempSetup()    
    });

    return jQuery.extend( base, options );
  };

/*
  $.RestTemplate = function( options ){
    var _self_ = this;
    var _ajax_ = $.ajax;

    this.isContext = false;
    // Set options
    this.data = $.RestTempSetup( options );

    //
    if( typeof options.data.template != 'undefined' ){
      _ajax_({ 
        url: options.data.template, 
        async: false,
        success: function( response ){
          var template = Handlebars.compile( source  );
          var context  = "";
          if( this.data["isContext"] == true ){
            context = eval( "(" + this.data.context + ")" );
          }
          var html = template( context );

          if( typeof options.data.js_before != 'undefined'  ){
            _ajax_.({ 
              url: options.data.template, 
              async: false,
              success: function( js_before ){
                eval( js_before );
              }
          };

          // Set template
          // Result of templating
          if( typeof options.data.place != 'undefined'  ){
            eval( options.data.place );
          };
          // Result of templating
          //$( this.data.place ).append( html )

          if( typeof options.data.js_after != 'undefined'  ){
            _ajax_({
              url: options.data.js_after,
              async: false,
              success: function( js_after ){
                eval( js_after );
              }
            });
          }; 
        }; 
      })
    };


  };
*/
  $.RestTemplate = function( options ){
   var _self_ = this;
   var _ajax_ = $.ajax;

   // Set options
   this.data = $.RestTempSetup( options );
   //
   if( typeof this.data.template != 'undefined' && String( this.data.template ).length > 0  ){
     var template_obj = $.ajax({ 
       url: this.data.template, 
       async: false
     });
     if( template_obj.status == 200 ){
         var template = Handlebars.compile( template_obj.responseText  );
         var context  = "";
         if( this.data["isContext"] ){// == true ){
           alert( '2' );
           context = eval( "(" + this.data.context + ")" );
         };
         var html = template( context );
         if( typeof _self_.data.js_before != 'undefined' && String( _self_.data.js_before ).length > 0  ){
           $.ajax({ 
             url: _self_.data.js_before, 
             async: false
             // There is no needs to this function
             // js code will run automaticaly
             //success: function( js_before ){
             //  eval( js_before );
             //}

           });
         };
         // Set template
         // Result of templating
         if( typeof _self_.data.place != 'undefined' && String( _self_.data.place ).length > 0 ){
           eval( _self_.data.place );
         };
         
         // Result of templating
         //$( this.data.place ).append( html )
         if( typeof _self_.data.js_after != 'undefined' && String( _self_.data.js_after ).length > 0  ){
           $.ajax({
             url: _self_.data.js_after,
             async: false
             // There is no needs to this function
             // js code will run automaticaly
             //success: function( js_after ){
             //  eval( js_after );
             //}
           });
         }; 
       };
   };
 };


  $.RestData = function( options ){
    var _self_ = this;
    this.data = $.RestDataSetup( options );
    
    // Set tamplate path
    this.template = function( url ){
      if( typeof url != "underfined" )
        this.data.action.template = url;
    };

    // Set javascript file which must works before inserting data
    this.js_before = function( url ){
      if( typeof url != "underfined" )
        this.data.action.js_before = url;
    };

    // Set javascript file which works after inserting data
    this.js_after = function( url ){
      if( typeof url != "underfined" )
        this.data.action.js_after = url;
    };

  };

  //$.RestData.prototype.global = this;



  // Model
  $.RestModel = function( options ){
    var _self_ = this;
        
    this.proto = new Object( options );
    //this.fields = new Object({ fields: new Object() });
    this.fields = new Object();

    
    // Get data from page
    this.get_data = function(  ){
      // var json_data = eval("(" +response + ")" ); 
      this.isChange = false;
      // Get data from response
      for( var member in _self_.proto ){
        var value = eval( _self_.proto[member]['get'] );
        if( value != _self_.fields[member] ){
          this.isChange = true;
        
          _self_.fields[member] = value;
        }
      };

      return _self_.fields;
    };


    // Set data to page
    this.set_data = function( response ){
      var json_data = eval( "(" + response + ")" );
      for( var member in _self_.proto ){
        for ( var item in json_data /*response*/ ){
          if( member.toLowerCase() == item.toLowerCase() ){
            _self_.fields[item] = json_data[item];
            // Update data on page
            if( _self_.proto[member]['set'] && String( _self_.proto[member]['set'] ).length > 0 ){
              eval( _self_.proto[ member ]['set'] + "='" + json_data[item] + "'" );
            }
          };
        };
      };
    };

    this.get = function( url, data ){
      //self_obj = this;
      $.Rest({ type: $.restMethods.get, url: url, data: data, success: this.set_data });
    };

    this.create = function( url, data ){
      $.Rest({ type: $.restMethods.create, url: url, data: this.get_data(), success: this.set_data });
    };

    this.put = function( url, data ){
      $.Rest({ type: $.restMethods.put, url: url, data: data, success: this.set_data });
    };

    this.delete = function( url, data ){
      $.Rest({ type: $.restMethods.delete, url: url, data: data, success: this.set_data });
    };
  };
})(jQuery);
