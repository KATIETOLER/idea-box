//---------------- Query Selectors -------------

var titleInput = document.getElementById('title-input');
var bodyInput = document.getElementById('body-input');


//--------------- Buttons ----------------

var starredIdeasBtn = document.getElementById('starred-ideas');
var saveIdeaBtn = document.getElementById('save-idea');
var searchBtn = document.querySlelctor('.search-button');



//---------------- GLobal Variables ------------

var ideas = [];




//---------------- Event Listeners -------------

saveIdeaBtn.addEventListener('click', saveIdea);





//---------------- Functions -------------------

function saveIdea() {
var newIdea = new Idea(titleInput.value, bodyInput.value);
titleInput.value = '';
bodyInput.value = '';
ideas.push(newIdea);
}
