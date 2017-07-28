function Question(question, answer, correct) {
    
    this.question = question;
    this.answers = answer;
    this.correct = correct;
}

var q1 = new Question('Who is the prime minister of Canada?', ['John Treadu', 'Adam Stone', 'Bill Gate', 'Ronald Trump'], 0);
var q2 = new Question('How many children are approximately being born every secod globally?', ['0.1 million', '1 million', '10 million', 'Less than 10000'], 0);
var q3 = new Question("Grand Central Terminal, Park Avenue, New York is the world's", ['largest railway station', 'highest railway station', 'longest railway station', 'None of the above'], 0);
var q4 = new Question('Entomology is the science that studies', ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks'], 1);
var q5 = new Question('For which of the following disciplines is Nobel Prize awarded?', ['Physics and Chemistry', 'Physiology or Medicine', 'Literature', 'Peace and Economics', 'All of the above'], 3);

var questions = [q1, q2, q3, q4, q5];

var n = Math.floor(Math.random() * questions.length);

                                                      
Question.prototype.displayQuestion = function() {
    
    document.getElementById("question").innerHTML = this.question;
    
    for (var i = 0; i < this.answers.length; i++) {
        
        document.getElementById("answers").innerHTML =i +': '+ this.answers(i);
    }
}


document.querySelector('.btn-start').addEventListener('click', function () {
    questions[n].displayQuestion();
});
                                                      



