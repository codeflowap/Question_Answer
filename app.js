var m;

function Question(question, answers, correct) {
    
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

init();

var q1 = new Question('Who is the prime minister of Canada?', ['John Treadu', 'Adam Stone', 'Bill Gate', 'Ronald Trump'], 0);
var q2 = new Question('How many children are approximately being born every secod globally?', ['0.1 million', '1 million', '10 million', 'Less than 10000'], 0);
var q3 = new Question("Grand Central Terminal, Park Avenue, New York is the world's", ['largest railway station', 'highest railway station', 'longest railway station', 'None of the above'], 0);
var q4 = new Question('Entomology is the science that studies', ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks'], 1);
var q5 = new Question('For which of the following disciplines is Nobel Prize awarded?', ['Physics and Chemistry', 'Physiology or Medicine', 'Literature', 'Peace and Economics', 'All of the above'], 3);

var questions = [q1, q2, q3, q4, q5];

var n = Math.floor(Math.random() * questions.length);


document.querySelector('.btn-start').addEventListener('click', function () {
    document.querySelector('.btn-start').style.display = 'none';
    questions[n].displayQuestion();
});


Question.prototype.displayQuestion = function() {
    
    document.getElementById("question").innerHTML = this.question;        
    document.getElementById("ans1").innerHTML = "1" + "- " + this.answers[0];        
    document.getElementById("ans2").innerHTML = "2" + "- " + this.answers[1];        
    document.getElementById("ans3").innerHTML = "3" + "- " + this.answers[2];
    document.getElementById("ans4").innerHTML = "4" + "- " + this.answers[3];
}




function init() {
    
    document.getElementById("question").innerHTML = "";
    document.querySelector('.btn-start').style.display = 'block';
    m = 1;   
}
                                                      



