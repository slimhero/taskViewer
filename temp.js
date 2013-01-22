today = moment( new Date( 2013, 0, 21  ) );
previous = moment( new Date( 2012, 0, 21 ) );

matrix = new Array();
table = '<table>';
for (var i = 0; i < 54; i++) {
  table = table + "<tr>";
  for( var x = 0; x < 7; x++ ){
    var day = "";
    if( previous <= today ){
      if( previous.day() == x ){
        //matrix["date"] = previous.format( "YYYY.MM.DD" );
        //matrix["week"] = i;
        var z = 0;
        if( x == 0 ) 
          z = 6;
        else
          z = x-1;
          
        //matrix[i][z] = previous.format( "YYYY.MM.DD" );
        //matrix[i] = i;
        //matrix[i][z] = previous.format( "YYYY.MM.DD" );
        record = new Object();
        record["date"] = previous.format( "YYYY.MM.DD" );
        record["week"] = i;
        record["day"] = z;
        matrix.push( record );
        day = record["date"];
        previous.add( "days", 1 );
        //counter = counter + 1;
      }
      else{ matrix.push[ "" ]; } 
    }
    table = table + "<td id='" + day + "'></td>";
  }
  table = table + "</tr>";
};
table = table + "</table>";
$(".js-calendar-graph" ).html( table );




