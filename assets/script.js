var searchBox = document.getElementById('searchBox');
var libURL = 'https://www.loc.gov/collections/?q=' + searchBox.value + '&fo=json';
var searchResults = document.getElementById('searchResults');
var searchSubmit = document.getElementById('searchSubmit');

console.log(libURL);

function getAPI() {

fetch(libURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
      for (var i = 0; i < data.content.results.length; i++) {
        console.log(data['content']['results'][i]['title']);
        var title = document.createElement('h3');
        title.textContent = data['content']['results'][i]['title'];
        searchResults.append(title);
    
        
      }
});
}
searchSubmit.addEventListener('click', getAPI);