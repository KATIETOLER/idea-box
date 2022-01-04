//---------------- Query Selectors -------------

var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');


//--------------- Buttons ----------------

var starredIdeasBtn = document.getElementById('starred-ideas');
var saveIdeaBtn = document.getElementById('save-idea');
var searchBtn = document.querySelector('.search-button');

var ideaTitle = document.querySelector('.idea-title')
var ideaBody = document.querySelector('.idea-body')
//---------------- GLobal Variables ------------

var ideas = [];




//---------------- Event Listeners -------------

saveIdeaBtn.addEventListener('click', saveIdea);





//---------------- Functions -------------------

function saveIdea(event) {
  event.preventDefault()
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea);
  console.log(ideas)
}

function showIdeaCard() {

}
