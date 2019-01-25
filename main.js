$(document).ready(function(){

  //global variables
  let searchbox = $("#search");
  let resultElement = $("#result");

  //function that get's us de list of artists according to the input
  function coreFunction(){

    let result = "";

    $.ajax({
      url : "https://musicdemons.com/api/v1/artist",
      dataType : "json",
      success : function(data) {

        for (let i=0; i<data.length; i++){
          let lowerName = data[i]["name"].toLowerCase();
          if(lowerName.indexOf(searchbox.val().toLowerCase())>=0){
            console.log(data[i]["name"]);
            result += "<li class='searchResultItem' data-id=" + data[i]["id"] + ">" + data[i]["name"] + "</li>";
          }
        }
        resultElement.html(result);

      }
    });
  }

  //function that pushes the videos of one artist to html
  function videoFunction(element){
    let artistName = element.html();
    let artistID = element.data("id");
    let video="";

    searchbox.val(artistName);

    $.ajax({
      url : "https://musicdemons.com/api/v1/artist/" + artistID + "/songs",
      dataType : "json",
      success : function(data) {
        for (let i=0; i<data.length; i++){
          let youtubeID = data[i]["youtube_id"];
          video += "<iframe min-width='420' min-height='315' src='https://www.youtube.com/embed/" + youtubeID + "'></iframe>";
        }
        resultElement.html(artistName + "<br/>" + video);
      }
    });
  }

  //keyup event to call the core Function
  searchbox.keyup(function(){
    coreFunction();
  });

  //onclick event to call the video function
  resultElement.on("click", ".searchResultItem", function(){
    //Met bovenstaande code geven we het attribuut onclick mee aan alle nieuwe elementen met class .searchResultItem die child zijn van resultElement


    videoFunction($(this));
  });

});
