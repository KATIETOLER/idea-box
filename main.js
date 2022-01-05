//---------------- Query Selectors -------------
var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');
var ideaTitle = document.querySelector('.idea-title');
var ideaBody = document.querySelector('.idea-body');
var ideasGrid = document.querySelector('.saved-cards-grid');
var topSection = document.querySelector('.top-section');
var star = document.getElementById('top-image');
var activeStar = document.getElementById('red-star');

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
  for (var i = 0; i < ideas.length; i++){
    if (event.target.id === `star${ideas[i].id}`) {
    // console.log('click');
    toggleFavorite(`${ideas[i].id}`,`star${ideas[i].id}`)
    };

    if (event.target.id === `delete${ideas[i].id}`) {
      ideas.splice(i, 1)
      displayIdeas()
    }
  }
})


// console.log(`delete ${ideas[i].id}`);

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
        <img src="./assets/star.svg" class="top-image" id="star${ideas[i].id}" alt="Star"/>
        <img src="./assets/star-active.svg" class="top-image hidden star-active" id="red-star" alt="Star"/>
        <img src="./assets/delete.svg" class="top-image delete-x" id="delete${ideas[i].id}" alt="Delete X"/>
      </div>
      <div class="middle-section">
        <h3 class="idea-title">${ideas[i].title}</h3>
        <p class="idea-body">${ideas[i].body}</p>
      </div>
      <div class="bottom-section"> Comment
        <img src="./assets/comment.svg" class="top-image" alt="Add"/>
        <!-- <p>Comment</p> -->
      </div>`
    // </div>
    };
  };


  function toggleFavorite(id, starId){
    for (var i = 0; i < ideas.length; i++){
      if (id === ideas[i].id){
        ideas[i].starred = !ideas[i].starred
      }
    }

    
    console.log(id, starId);
  }

// function toggleFavorite() {
//   for (var i = 0; i < ideas.length; i++){
//     if (ideas[i].starred === false) {
//       show(activeStar);
//       hide(star);
//       ideas[i].starred = true;
//     };
//     if (ideas[i].starred = false) {
//       show(star);
//       hide(activeStar);
//       ideas[i].starred = true;
//     };
//   };
// }

//
function hide(element){
  element.classList.add("hidden");
}

function show(element){
  element.classList.remove("hidden");
}
