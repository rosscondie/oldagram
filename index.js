const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4285,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let mainEl = document.getElementById("main-el");
let likeBtn = document.getElementsByClassName("like-btn");

function renderPosts() {
  let mainContent = "";
  for (let i = 0; i < posts.length; i++) {
    mainContent += `

    <section>
        <div class="container">
            <img class="avatar" src="${posts[i].avatar}"/>

            <div class="text-content">
                <h2>${posts[i].name}</h2>
                <p>${posts[i].location}</p>
            </div>
        </div>
    </section>

    <section>
      <div class="container">
        <img class="post-img" src="${posts[i].post}" />
      </div>
    </section>

    <section class="icons">
      <div class="container">
        <div class="icon-container">
          <button class="icon like-btn">
            <img src="images/icon-heart.png" />
          </button>
          <button class="icon">
            <img src="images/icon-comment.png" />
          </button>
          <button class="icon">
            <img src="images/icon-dm.png" />
          </button>
        </div>
      </div>
    </section>

    <section class="posts">
      <div class="container">
        <div class="likes">
          <p><span class="bold-text" id="likes-count${i}">${posts[i].likes} likes</span></p>
          <p>
            <span class="bold-text">${posts[i].username}</span> ${posts[i].comment}
          </p>
        </div>
      </div>
    </section>

    `;
  }

  mainEl.innerHTML = mainContent;
}

function addEventListeners() {
  let likeBtns = document.getElementsByClassName("like-btn");

  for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function () {
      posts[i].likes += 1;

      document.getElementById(
        `likes-count${i}`
      ).textContent = `${posts[i].likes} likes`;
    });
  }
}

function doubleClick() {
  let postImgs = document.getElementsByClassName("post-img");

  for (let i = 0; i < postImgs.length; i++) {
    postImgs[i].addEventListener("dblclick", function () {
      posts[i].likes += 1;

      document.getElementById(
        `likes-count${i}`
      ).textContent = `${posts[i].likes} likes`;
    });
  }
}

renderPosts();

addEventListeners();
doubleClick();
