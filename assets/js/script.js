/**Questions */

const questions = [{
    question: "Which of these movies was directed by Quentin Tarantino?",
    answers: [
        {text: "The Green Mile", correct:false},
        {text: "Unbreakable", correct:false},
        {text: "The Shawshank Redemption", correct:false},
        {text: "Pulp Fiction", correct:true}
    ]
},

    {
        question: "What are the names of the main characters in the show 'Rick and Morty'?",
    answers: [
        {text: "Rick and Morty", correct:true},
        {text: "Jules and Vince", correct:false},
        {text: "Brad and Leo", correct:false},
        {text: "Toby and James", correct:false}
    ]
},

{
    question: "What song plays over the opening credits of Guardians of the Galaxy?",
    answers: [
    {text: "Enter Sandman", correct:false},
    {text: "In The Air Tonight", correct:false},
    {text: "Footloose", correct:false},
    {text: "Come and Get Your Love", correct:true}
]
},

{
    question: "What is the highest-grossing R-rated movie of all time?",
    answers: [
    {text: "Garfield", correct:false},
    {text: "Django Unchained", correct:false},
    {text: "Joker", correct:true},
    {text: "Split", correct:false}
]
},

{
    question: "Who wrote the famous, scary theme music from Halloween?",
    answers: [
    {text: "John Carpenter", correct:true},
    {text: "Ed Sheeran", correct:false},
    {text: "Ennio Morricone", correct:false},
    {text: "John Williams", correct:false}
]
},

{
    question: "What animated classic was the first film of the late 20th century 'Disney Renaissance'?",
    answers: [
    {text: "IT", correct:false},
    {text: "The Little Mermaid", correct:true},
    {text: "Frozen", correct:false},
    {text: "Bambi", correct:false}
]
}

];

/** Variables for the questions, answer buttons and the next button */

const questionEl = document.getElementById("question");
const buttonsBtn = document.getElementById("buttons");
const nextBtn = document.getElementById("next");

/** Variables to store the question number and score */

let questionNumber = 0;
let score = 0;


/** Function to set the score and question number to 0 at the start of the game */

function start() {
    questionNumber = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

/** Display questions function */

function displayQuestion(){
    
}