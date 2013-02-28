( function($){
  $.activityCalendarSetup = {
    forexp: [ 
      { value: 0, cond: "==", color: "#eee" },
      { value: 1, cond: "==", color: "#d6e685" },
      { value: 2, cond: "==", color: "#8cc665" },
      { value: 3, cond: "==", color: "#44a340" },
      { value: 4, cond: ">=", color: "#1e6823" } ],
    none: "#eee",
    notInRange: "white",
    format: "YYYYMMDD",
    toDate: new Date(),//moment(),
    fromDate: moment().add( "years", -1),
    place: "body",
    aobj_name: "activity",
    aobj_data: "data",
    aobj_count: "count",
    data: [],
    matrix: [],
    create: function(){},
    getColor: function( val ){},
    setData: function( val ){},
    run: function(){}
    
};

$.activityCalendar = function ( options ){ 
  var AC = new Object( $.extend( $.activityCalendarSetup, options ) );
  
  if( AC.fromDate >= AC.toDate ){
    try{
      AC.fromDate = AC.toDate.add( "years", -1);
    }
    catch(e){
      AC.fromDate = moment( AC.toDate ).add( "years", -1);
    };
  };

  AC.table = function(){
    // Remove table if it exists
    // before create new
    $( AC.place + " table" ).remove();
    this.matrix = [];
    var start = Number( AC.fromDate.format( "YYYYMMDD" ) );
    var finish = 0;
    try{
      finish = Number( AC.toDate.format( "YYYYMMDD" ) );
    }
    catch( e ){
      finish = moment( AC.toDate ).format( "YYYYMMDD" );
    };

    for (var i = 0; i < 54; i++) {
      var week = new Array();
      for( var x = 0; x < 7; x++ ){
        var day = "";
        if( this.fromDate <= this.toDate ){
          var index = x;
          if( this.fromDate.day() == x ){

            week[ index ] = this.fromDate.format( this.format );
            this.fromDate.add( "days", 1 );
          }
          else{  week[ index ] = ""; } 
        }
      }
      this.matrix[i] = week;
    };
    
    var tbl = "<table>";
    for ( var x = 0; x<7; x++ ){
      tbl = tbl + "<tr>";
      for( var i =0; i< this.matrix.length; i++ ){
        if( typeof this.matrix[i][x] != "string" ){
          //tbl = tbl + "<td style='background-color:white'></td>";
          tbl = tbl + "<td style='background-color:" + this.notInRange + "'></td>";
        }
        else{
          var strDate = this.matrix[i][x];
          if( strDate != '' ){
            var intDate = Number( moment( strDate, this.format ).format( "YYYYMMDD") ); 
            if( intDate  >= start && intDate <= finish ){
              tbl = tbl + "<td id='" + this.matrix[i][x] + "'></td>";
            }
            else{
              tbl = tbl + "<td style='background-color:" + this.notInRange + "'></td>";
            };
          }
          else{
            //tbl = tbl + "<td style='background-color:white'></td>";
            tbl = tbl + "<td style='background-color:" + this.notInRange + "'></td>";
          };
        };
      };
      tbl = tbl + "</tr>";
    };
    
    $( this.place ).html( tbl );
  };
  
  AC.getColor = function( val ){
    for( var i = 0; i < this.forexp.length; i++ ){
      var str = "( " + val.toString() + " " +  this.forexp[i].cond + " " + this.forexp[i].value + ")" ;
      var result = eval( str );
      if( result == true )
        return this.forexp[i].color;
    };
    
    return this.none;
  };
  
  AC.setData = function( array_data ){
    //alert( array_data );
    var response = array_data;
    var datas;
    if( typeof response == "string" ){
      //response = new Object( response );
      response = eval( "(" + response + ")" );
    }
      
   // alert( response.activity );
      
    var arrayName = this.aobj_name;
   // alert( "z=" + arrayName );
   // alert( response[arrayName] );

    if( !$.isArray( response )){
      if( typeof response == "object" ){
        //var arrayName = _self_.aobj_name;
        //alert( arrayName );
       // alert( 'обьект' );
       // alert( this.aobj_name );
       // alert( 'дата' );
       // alert( response[ arrayName ]);
        
        datas = response[ arrayName ];
        if( $.isArray(  response[ this.aobj_name ] )){
        //  alert( 'Inside' );
        //  alert( response[ arrayName ] );
          response = response[ arrayName ];
        }
        else
          response = [];
      };
    };
    //alert( "rjytw" );
    //array_data = response.activity;
    //alert( response/*array_data*/[ this.aobj_name ]  );
    for( var i = 0; i < response/*array_data*/.length; i++ ){
      var obj = response/*array_data*/[i];
      //var d = obj[ this.aobj_date];
      var d = obj.date;
      //var val = obj[ this.aobj_count ];
      var val = obj.count;
      
      $(("#"+d)).attr( "style", "background-color:" + this.getColor( val ) ); 
      if( val > 0 ){
        $(("#"+d)).addClass( "cell_content" ); 
      };
    }
  };
  
  AC.run = function(){
    //_self_ = this;
    //alert( '1' );
    
    if( $( this.place ).attr( "data-url" ) ){
      var response = $.ajax({ 
        url: $( this.place ).attr( "data-url" ),
        async: false
      });
      
      this.data = response.responseText;
      this.setData( this.data );
    }
    else if( this.data.length > 0 ){
      this.setData( this.data );
    };
  };

  
  return AC;
};

})(jQuery);
