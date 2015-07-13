// On submit (to get request 'Pixiwoo')
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

// To get request
function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json',
    part:'snippet',
    key: 'AIzaSyBLO_74kbdhUfBOFDlKDEdCGKOlfd71dww'
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

// To show results
function showResults(results){
    var html = "";
    $.each(results, function(index,value){
      console.log(value);
      var title = value.snippet.title
      var thumbnail = value.snippet.thumbnails.high.url; // high stands for "A high resolution version of the thumbnail image. "
      var vidID = value.id.videoID;
      html += "<li><p>" + title + "</p><a href='https://www.youtube.com/watch?v=" + vidID + "'><img src='" +  thumbnail + "'/></a></li>" ;
      console.log(results);
   });
   $('#search-results ul').html(html);
   }
});
