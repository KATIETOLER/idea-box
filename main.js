//---------------- Query Selectors -------------
var titleInput = document.getElementById('titleInput');
var bodyInput = document.getElementById('bodyInput');
var ideasGrid = document.querySelector('.saved-cards-grid');
var userInputArea = document.querySelector('.user-input-area');
var searchInput = document.getElementById('searchIdeas');

//--------------- Buttons ----------------
var showAllBtn = document.getElementById('showAllBtn');
var starredIdeasBtn = document.getElementById('starredIdeasBtn');
var saveIdeaBtn = document.getElementById('saveIdea');
var inactiveSaveIdeaBtn = document.querySelector('.inactive-button');

//---------------- GLobal Variables ------------
var ideas = [];

//---------------- Event Listeners -------------
saveIdeaBtn.addEventListener('click', saveIdea);
starredIdeasBtn.addEventListener('click', showStarred);
showAllBtn.addEventListener('click', showAll);
userInputArea.addEventListener('input', function(event) {
  if (titleInput.value && bodyInput.value) {
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
  for (var i = 0; i < ideas.length; i++) {
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
  if (titleInput.value && bodyInput.value) {
    event.preventDefault();
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newIdea);
    resetInputs();
    hideSaveIdeaBtn();
    displayIdeas();
  };
};

function search() {
  ideasGrid.innerHTML = '';
  var value = searchInput.value.toLowerCase();
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].title.toLowerCase().includes(`${value}`) || ideas[i].body.toLowerCase().includes(`${value}`)){
      ideasGrid.innerHTML += insertCard(ideas[i]);
    };
  };
};

function displayIdeas() {
  ideasGrid.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
      ideasGrid.innerHTML += insertCard(ideas[i]);
  };
};

function showStarred() {
  ideasGrid.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].starred) {
      ideasGrid.innerHTML += insertCard(ideas[i]);
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

function resetInputs() {
  titleInput.value = '';
  bodyInput.value = '';
  searchInput.value = '';
}

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

function insertCard(idea) {
  var starSrc = !idea.starred ? "./assets/star.svg" : "./assets/star-active.svg"
  var ideaCard =
  `<div class="idea-card" id="${idea.id}" alt="Idea Card">
    <div class="top-section" id="${idea.id}">
      <img src="${starSrc}" class="top-image" id="star${idea.id}" alt="Star"/>
      <img src="./assets/delete.svg" class="top-image delete-x" id="delete${idea.id}" alt="Delete X"/>
    </div>
    <div class="middle-section">
      <h3 class="idea-title">${idea.title}</h3>
      <p class="idea-body">${idea.body}</p>
    </div>
    <div class="bottom-section">
      <img src="./assets/comment.svg" class="top-image" alt="Add"/>
      <p class="comment-title">Comment</p>
    </div>
  </div>`;

  return ideaCard;
};
