( function($){
  $.activityCalendarSetup = {
    forexp: [ 
      { value: 0, cond: "==", color: "#eee" },
      { value: 1, cond: "==", color: "#d6e685" },
      { value: 2, cond: "==", color: "#8cc665" },
      { value: 3, cond: "==", color: "#44a340" },
      { value: 4, cond: ">=", color: "#1e6823" } ],
    none: "#eee",
    format: "YYYYMMDD",
    toDate: (moment()),
    fromDate: (moment()).add( "years", -1),
    place: "body",
    aobj_name: "activity",
    aobj_date: "data",
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
  
  AC.table = function(){
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
      for( var i =0; i<= this.matrix.length; i++ ){
        if( i == 0 ){
          var day = "";
          switch(x){
            case 1:
              day = "M";
              break;
            case 3:
              day = "W";
              break;
            case 5:
              day = "F";
              break;
            default:
              day = " ";
          };
          if( day.length > 0 ){
            day = "<small>" + day + "</small>";
            tbl = tbl + "<td class='cell_h' style='background-color: white'>" + day + "</td>";
          }
          else{
            tbl = tbl + "<td class='cell_wo' style='background-color: white; padding: 5px;'>" + day + "</td>";
          }
        }
        else{
          if( typeof this.matrix[i-1][x] != "string" ){
            tbl = tbl + "<td class='cell_h' style='background-color: white'></td>";
          }
          else{
            if( x==3 || x==5 || x==1 )
              tbl = tbl + "<td class='cell cell_h' id='" + this.matrix[i-1][x] + "'></td>";
            else
              tbl = tbl + "<td class='cell cell_wo' id='" + this.matrix[i-1][x] + "'></td>";
          }
        }
      };
      tbl = tbl + "</tr>";
    };
    
    $( this.place ).html( tbl );
  };
  
  AC.getColor = function( val ){
    for( var i = 0; i < this.forexp.length; i++ ){
      var str = "( " + val.toString() + " " + this.forexp[i].cond + " " + this.forexp[i].value + ")" ;
      var result = eval( str );
      if( result == true )
        return this.forexp[i].color;
    };
    
    return this.none;
  };
  
  AC.setData = function( array_data ){
    var response = array_data;
    var datas;
    if( typeof response == "string" )
      response = eval( "(" + response + ")" );
      
    var arrayName = this.aobj_name;

    if( !$.isArray( response )){
      if( typeof response == "object" ){
        //datas = response[ arrayName ];
        if( $.isArray(  response[ arrayName ] )){
          //alert( 'Inside' );
          datas = response[ arrayName ];
        }
        else
          datas = [];
      };
    };
    //alert( "rjytw" );
    //alert( datas  );
    for( var i = 0; i < datas.length; i++ ){
      var obj = datas[i];
      var d = obj[ this.aobj_date];
      var val = obj[ this.aobj_count ];
      
      $(("#"+d)).attr( "style", "background-color:" + this.getColor( val ) );
      //$(("#"+d)).html( "<a href='#' title='Contributin count: " + val + "' rel='tooltip'></a>" )
      $(("#"+d)).attr( "title", "Activity count: " + val );
      $(("#"+d)).attr( "rel", "tooltip" );
      //$(('#'+d)).val = "z"; 
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
