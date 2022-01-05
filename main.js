//---------------- Query Selectors -------------
var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');
var ideaTitle = document.querySelector('.idea-title');
var ideaBody = document.querySelector('.idea-body');
var ideasGrid = document.querySelector('.saved-cards-grid');
var topSection = document.querySelector('.top-section')
var star = document.querySelector('.top-image')
var activeStar = document.querySelector('.star-active')


//--------------- Buttons ----------------
var starredIdeasBtn = document.getElementById('starred-ideas');
var saveIdeaBtn = document.getElementById('save-idea');
var searchBtn = document.querySelector('.search-button');
//---------------- GLobal Variables ------------
var ideas = [];
//---------------- Event Listeners -------------
saveIdeaBtn.addEventListener('click', saveIdea);
star.addEventListener('click', toggleFavorite)
// topSection.addEventListener('click', function(event) {
//   for(var i = 0; i < idea.length; i++){
//     if(event.target.id === ideas[i].id){
//       toggleFavorite()
//     }
//   }
// })

//---------------- Functions -------------------
function saveIdea(event) {
  event.preventDefault()
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea);
  titleInput.value = '';
  bodyInput.value = '';
  displayIdeas();
}

function showIdeaCard() {

}


function displayIdeas() {
    ideasGrid.innerHTML = '';
    for (var i = 0; i < ideas.length; i++) {
      ideasGrid.innerHTML +=
      `<div class="idea-card" id="${ideas[i].id}" alt="Idea Card">
        <div class="top-section" id="${ideas[i].id}">
          <img src="./assets/star.svg" class="top-image" alt="Star"/>
          <img src="./assets/delete.svg" class="top-image" alt="Delete X"/>
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
  }


  function toggleFavorite(event) {
    show(activeStar)
    hide(star)
    // ideas[i].starred = true;
    //
    // for(var i = 0; i < ideas.length; i++){
    //   if(ideas[i].starred === false) {
    //     show(activeStar)
    //     hide(star)
    //     ideas[i].starred = true;
    //   }
    //   ideas[i].starred = false;
    //   show(star)
    //   hide(activeStar)
    // }
  }

function show(element){
  element.classList.add("hidden");
}

function hide(element){
  element.classList.remove("hidden");
}

// ideasGrid.innerHTML += `<section class="idea-card" id=${ideas[i].id}>
// <h1>${savedPosters[i].title}</h1>
// <h3>${savedPosters[i].quote}</h3></section>`;
// };
