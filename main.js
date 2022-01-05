//---------------- Query Selectors -------------
var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');
var ideaTitle = document.querySelector('.idea-title');
var ideaBody = document.querySelector('.idea-body');
var ideasGrid = document.querySelector('.saved-cards-grid');
var topSection = document.querySelector('.top-section');
var star = document.querySelector('.top-image');
var activeStar = document.querySelector('.star-active');

//--------------- Buttons ----------------
var starredIdeasBtn = document.getElementById('starred-ideas');
var saveIdeaBtn = document.getElementById('save-idea');
var searchBtn = document.querySelector('.search-button');

//---------------- GLobal Variables ------------
var ideas = [];

//---------------- Event Listeners -------------
saveIdeaBtn.addEventListener('click', saveIdea);
// star.addEventListener('click', toggleFavorite);
// activeStar.addEventListener('click', toggleFavorite);
ideasGrid.addEventListener('click', function(event) {
  if (event.target.id === 'star') {
    console.log('click');
  };
  if (event.target.id === 'delete-x') {
    console.log(`delete ${ideas.id}`);
  }
});


//---------------- Functions -------------------
function saveIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea);
  titleInput.value = '';
  bodyInput.value = '';
  displayIdeas();
};

function displayIdeas() {
  ideasGrid.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    ideasGrid.innerHTML +=
    `<div class="idea-card" id="${ideas[i].id}" alt="Idea Card">
      <div class="top-section" id="${ideas[i].id}">
        <img src="./assets/star.svg" class="top-image" id="star" alt="Star"/>
        <img src="./assets/delete.svg" class="top-image" id="delete-x" alt="Delete X"/>
      </div>
      <div class="middle-section">
        <h3 class="idea-title">${ideas[i].title}</h3>
        <p class="idea-body">${ideas[i].body}</p>
      </div>
      <div class="bottom-section"> Comment
        <img src="./assets/comment.svg" class="top-image" alt="Add"/>
        <!-- <p>Comment</p> -->
      </div>
    </div>`
    };
  };

function toggleFavorite(event) {
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].starred === false) {
      show(activeStar);
      hide(star);
      ideas[i].starred = true;
    };
    if (ideas[i].starred = false) {
      show(star);
      hide(activeStar);
      ideas[i].starred = true;
    };
  };
};

function hide(element){
  element.classList.add("hidden");
}

function show(element){
  element.classList.remove("hidden");
}
