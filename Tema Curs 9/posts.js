
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
    var modalUpdateButton = document.querySelector("#updatePost");
    var modalCancelButton = document.querySelector("#cancel");

    var div = document.createElement("div");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete Post";
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit Post";

    deleteButton.onclick = function () {
      fetch(postsBaseUrl + "/posts/" + post.id, {
        method: "DELETE",
      }).then((response) => {
        if (response) {
          div.remove();
        }
        return response;
      });
    };

    editButton.onclick = function () {
      document
        .getElementById("updatePostModal")
        .classList.add("modalDisplayed");
      document
        .getElementById("updatePostModal")
        .classList.remove("modalHidden");

      var inputTitle = (document.getElementById("title").value = post.title);
      var inputBody = (document.getElementById("body").value = post.body);
     
      modalUpdateButton.onclick = () => {
        const updTitle = document.getElementById("title").value;
        const updBody = document.getElementById("body").value;

        fetch(postsBaseUrl + "/posts/" + post.id, {
          method: "PUT",
          body: JSON.stringify({
            title: updTitle,
            body: updBody,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then(
            (div.innerHTML =
              "<div class='post-title'>" +
              "<h2>" +
              updTitle +
              "</h2>" +
              "</div><p class='post-body'>" +
              updBody +
              "</p>")
          )
          .then((div.appendChild(deleteButton), div.appendChild(editButton)));
      };
    };

    modalCancelButton.onclick = function () {
      document
        .getElementById("updatePostModal")
        .classList.remove("modalDisplayed");
      document.getElementById("updatePostModal").classList.add("modalHidden");
    };
    
    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>";

    div.appendChild(deleteButton);
    div.appendChild(editButton);

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
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});