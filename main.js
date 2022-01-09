/// Hello is this working? Github is fail!
/// test again!
//---------------- Query Selectors -------------
var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');
var ideaTitle = document.querySelector('.idea-title');
var ideaBody = document.querySelector('.idea-body');
var ideasGrid = document.querySelector('.saved-cards-grid');
var topSection = document.querySelector('.top-section');
var star = document.getElementById('top-image');
var activeStar = document.getElementById('red-star');
var userInputArea = document.querySelector('.user-input-area');
var searchInput = document.getElementById('search-ideas');
var ideaCard = document.querySelector('.idea-card');
var searchBar = document.querySelector('.search-bar')

//--------------- Buttons ----------------
var showAllBtn = document.getElementById('show-all-btn')
var starredIdeasBtn = document.getElementById('starred-ideas');
var saveIdeaBtn = document.getElementById('save-idea');
var inactiveSaveIdeaBtn = document.querySelector('.inactive-button')
var searchBtn = document.querySelector('.search-button');

//---------------- GLobal Variables ------------
var ideas = [];


//-----------------------------Work Station ---------------------------

//---------------- Event Listeners -------------
saveIdeaBtn.addEventListener('click', saveIdea);
starredIdeasBtn.addEventListener('click', showStarred);
showAllBtn.addEventListener('click', showAll);
userInputArea.addEventListener('input', function(event) {
  if(titleInput.value && bodyInput.value) {
    showSaveIdeaBtn();
  } else {
    hideSaveIdeaBtn();
  };
  if (searchInput.value) {
    search();
  } else if (!searchInput.value) {
    displayIdeas();
  };
});
ideasGrid.addEventListener('click', function(event) {
  for (var i = 0; i < ideas.length; i++){
    if (event.target.id == `star${ideas[i].id}`) {
      ideas[i].updateIdea();
      displayIdeas();
    };
    if (event.target.id === `delete${ideas[i].id}`) {
      ideas.splice(i, 1);
      displayIdeas();
    };
  };
});

//---------------- Functions -------------------
function saveIdea(event) {
  if(titleInput.value && bodyInput.value) {
    event.preventDefault();
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newIdea);
    titleInput.value = '';
    bodyInput.value = '';
    hideSaveIdeaBtn();
    displayIdeas();
  };
};

function search() {
  ideasGrid.innerHTML = '';
  var value = searchInput.value.toLowerCase();
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].title.includes(`${value}`) || ideas[i].body.includes(`${value}`)){
      if (ideas[i].starred === false) {
        ideasGrid.innerHTML += insertWhiteStarCard(ideas[i].id, ideas[i].title, ideas[i].body);
      };
      if (ideas[i].starred === true) {
        ideasGrid.innerHTML += insertRedStarCard(ideas[i].id, ideas[i].title, ideas[i].body);
      };
    };
  };
};

function displayIdeas() {
  ideasGrid.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].starred === false) {
      ideasGrid.innerHTML += insertWhiteStarCard(ideas[i].id, ideas[i].title, ideas[i].body);
      };
      if (ideas[i].starred === true){
        ideasGrid.innerHTML += insertRedStarCard(ideas[i].id, ideas[i].title, ideas[i].body);
      };
    };
  };

function showStarred() {
  ideasGrid.innerHTML = '';
  for(var i = 0; i < ideas.length; i++) {
    if (ideas[i].starred === true) {
      ideasGrid.innerHTML += insertRedStarCard(ideas[i].id, ideas[i].title, ideas[i].body);
    };
  };
  hide(starredIdeasBtn);
  show(showAllBtn);
};

function showAll() {
  hide(showAllBtn);
  show(starredIdeasBtn);
  displayIdeas();
};

function showSaveIdeaBtn() {
  hide(inactiveSaveIdeaBtn);
  show(saveIdeaBtn);
};

function hideSaveIdeaBtn() {
  hide(saveIdeaBtn);
  show(inactiveSaveIdeaBtn);
};

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};

function insertWhiteStarCard(id, title, body) {
  var whiteStarCard =`<div class="idea-card" id="${id}" alt="Idea Card">
  <div class="top-section" id="${id}">
  <img src="./assets/star.svg" class="top-image" id="star${id}" alt="Star"/>
  <img src="./assets/delete.svg" class="top-image delete-x" id="delete${id}" alt="Delete X"/>
  </div>
  <div class="middle-section">
  <h3 class="idea-title">${title}</h3>
  <p class="idea-body">${body}</p>
  </div>
  <div class="bottom-section"> Comment
  <img src="./assets/comment.svg" class="top-image" alt="Add"/>
  </div>
  </div>`;
  return whiteStarCard;
};

function insertRedStarCard(id, title, body){
  var redStarCard = `<div class="idea-card" id="${id}" alt="Idea Card">
  <div class="top-section" id="${id}">
  <img src="./assets/star-active.svg" class="top-image star-active" id="star${id}" alt="Star"/>
  <img src="./assets/delete.svg" class="top-image delete-x" id="delete${id}" alt="Delete X"/>
  </div>
  <div class="middle-section">
  <h3 class="idea-title">${title}</h3>
  <p class="idea-body">${body}</p>
  </div>
  <div class="bottom-section"> Comment
  <img src="./assets/comment.svg" class="top-image" alt="Add"/>
  </div>`;
  return redStarCard;
};
