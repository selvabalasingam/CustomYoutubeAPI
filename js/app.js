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
    q: searchTerm, // the key "q" would be used for youtube api's
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
      var vidID = value.id.videoId; 
      html += "<li><p>" + title + '</p><iframe width="420" height="315" src="https://www.youtube.com/embed/'+ vidID +'" frameborder="0" allowfullscreen></iframe></li>' ;
      console.log(results);
   });
   $('#search-results ul').html(html);
   }
});
