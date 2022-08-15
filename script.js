const quizData =[
  {
    question: 'How old is ayaan?',
    a: '18',
    b: '20',
    c: '2',
    d: '30',
    correct: 'c'
  }, 
  {
    question: 'at what year did nigeria gets her independence?',
    a: '1960',
    b: '1990',
    c: '2020',
    d: '1965',
    correct: 'a'
  }, 
  {
    question: 'what does HTML stands for',
    a: 'HyperText Makeup Language',
    b: 'HypoTranslated markup Language',
    c: 'Hiddentemple markup Language',
    d: 'HyperText Markup Language',
    correct: 'd'
  },
  {
    question: 'what is the most used programming Language in 2019',
    a: 'java',
    b: 'c++',
    c: 'javaScript',
    d: 'php',
    correct: 'c'
  },
  {
    question: 'who is the president of Nigeria',
    a: 'ayaan',
    b: 'aji',
    c: 'Muhammadu Buhari',
    d: 'usman',
    correct: 'c'
  },
  
];
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('quiz-title');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer')
const submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected(){
  let answer = undefined;

  answerEls.forEach((answerEl) =>{
    if( answerEl.checked){
       answer = answerEl.id;
      }
  });
    return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false; 
  });
}

submitBtn.addEventListener('click',() =>{
  const answer=  getSelected();

  if(answer === quizData[currentQuiz].correct){
      score++;
  }

    if( answer){
         currentQuiz++;
    if(currentQuiz < quizData.length){
      
          loadQuiz();
    } else{
      quizEl.innerHTML = `<h2> you answered correctly at ${score}/${quizData.length} questions<h2/> 
      <button onclick="location.reload()"> Reload</button>`
     }
   }
});