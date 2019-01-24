$(document).ready(function(){

  let searchbox = $("#search");
  let resultElement = $("#result");


  searchbox.keyup(function(){
    //console.log($(this).val());
    let result = "";
    console.log(result);
    $.ajax({
      url : "https://musicdemons.com/api/v1/artist",
      dataType : "json",
      success : function(data) {
        //console.log(data[0]["name"]);

        for (let i=0; i<data.length; i++){
          //console.log(data[i]["name"]);
          let lowerName = data[i]["name"].toLowerCase();
          //if(data[i]["name"].indexOf(searchbox.val())>=0){
          if(lowerName.indexOf(searchbox.val())>=0){
            //console.log(data[i]["name"]);
            //!!! eerst de data op lowercase zetten
            result += "<li class='searchResultItem' data-id=" + data[i]["id"] + ">" + data[i]["name"] + "</li>";
          }
        }
        console.log(result);
        resultElement.html(result);

        /*
        let onclickItem = $(".searchResultItem");

        onclickItem.on("click",function(){
          searchbox.val($(this).html());
        })
        */

      }
    });
  });


  resultElement.on("click", ".searchResultItem", function(){
    let artistName = $(this).html();
    let artistID = $(this).data("id");
    let video="";

    searchbox.val(artistName);

    $.ajax({
      url : "https://musicdemons.com/api/v1/artist/" + artistID + "/songs",
      dataType : "json",
      success : function(data) {
        console.log(data);
        for (let i=0; i<data.length; i++){
          let youtubeID = data[i]["youtube_id"];
          video += "<iframe min-width='420' min-height='315' src='https://www.youtube.com/embed/" + youtubeID + "'></iframe>";
        }
        resultElement.html(artistName + "<br/>" + video);
      }
    });
  });
});
