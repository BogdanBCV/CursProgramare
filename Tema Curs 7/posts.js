function runWeatherApp() {
  var weatherKey = "3e20f53fb2ef40e28bf95905221510";
  var weatherBaseUrl = "https://api.weatherapi.com/v1";

  var temperatureButtonEl = document.querySelector("#temperature-button");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  var temperatureContainerEl = document.querySelector("#temperature-container");

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherKey + "&q=Craiova";
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        var myWeather = weather || {};
        var currentWeather = myWeather.current || {};
        var temperature = currentWeather.temp_c || null;
        if (temperature !== null) {
          temperatureContainerEl.style = null;
          var temperatureEl =
            temperatureContainerEl.querySelector("#temperature");
          temperatureEl.innerHTML = temperature;
        }
      });
  }
}
var postsBaseUrl = "https://jsonplaceholder.typicode.com";
function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");
 

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var div = document.createElement("div");
    var button = document.createElement("button")
    button.innerText = "delete"
    
  var updateButton = document.createElement("button")
  updateButton.innerText ="Update"

  updateButton.onclick = function(){
    var modal = document.createElement("div");
   
  }
    button.onclick = function (){
      fetch(postsBaseUrl + "/posts/" + post.id, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) { div.remove()}
        else { console.log("Could not delete") }
        return res
      })
      .then(res => res.json())
      .then(data => console.log(data))
      

    }
    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>"
      ;
    div.appendChild(button);
    div.appendChild(updateButton);
    
    return div;
  }
 
  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}



var pageInit = function () {
  runWeatherApp();
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});