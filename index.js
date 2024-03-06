
function submitquiz(){
    var score =0;
    var correctanswers ={
        q1: 'parris',
        q2: 'jupiter',
        q3: 'blue whale'
    };
    var userAnswers ={};
    var form =document.getElementById('quiz-form');
    var resultcontainer=document.getElementById("result");
    for(var i=0; i<form.elements.length;i++)
    { var element =form.elements[i]
        if(element.type==='radio'&&element.checked){
            userAnswers[element.name]=element.value;
        }
    }
    for (var question in correctanswers){
        if(userAnswers.hasOwnProperty(question)&& userAnswers[question]=== correctanswers[question]){
            score++;
        }
    }
    var totalquestion = Object.keys(correctanswers).length;
    var feedback = 'you scored'+score+ 'out of'+ totalquestion + 'question.';
    resultcontainer.textContent=feedback;
}

