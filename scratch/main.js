
$(document).ready(function() {
  $('#site-search').keyup(function(){
    console.log($(this).val());

    let val = $(this).val();

    $.ajax({
      url: "https://musicdemons.com/api/v1/artist" ,
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        console.log(data)
      }
    });
  });



  /*
     var artist = 'Beatle';
     $.get( "https://musicdemons.com/api/v1/artist".$artist, function( data ) {
         console.log(data);
      });
  */

});

/*
$(document).ready(function(){

      country = parsed_json.location.country_name;
      temprature = parsed_json.current_observation.temp_c;
      wind = parsed_json.current_observation.wind_string;
      speed = parsed_json.current_observation.wind_kph;
      $("#Country").html(country);
      $("#Temp").html(temprature);
      $("#Wind").html(wind);
      $("#Speed").html(speed);
    },
    statusCode:{
      404: function(){
        alert('Page not found')
      },
      200: function(){
        alert('All went well')
      }
    }
  });
});
*/
