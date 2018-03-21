class Quiz {
    constructor(questions){
        this.questions = questions;
        this.answers = [];
        this.korrect = [];
        this.score = 0;

        for (let i = 0; i < this.questions.length; i++){
            this.answers.push(prompt(this.questions[i].question + "? Enter one of the following " + 
        this.questions[i].choices + " ."));
        }

        for (let i = 0; i < this.questions.length; i++){

        this.korrect.push(this.questions[i].correct);

            if (parseInt(this.answers[i]) === this.korrect[i]){
                this.score ++;
            }
        
        }
        console.log(this.answers)
        console.log(this.korrect)
        
        alert("You scored " + this.score + " out of 5");
    }

        

display (){

        for (let i = 0; i < this.questions.length; i++){
            console.log(this.questions[i].question);
        }
    }

}

let quizQuestions = [
    
    {
        question: "What is the square root of 144",
        choices: [12,13,14],
        correct: 12
    },
    
    {
        question: "What is 10 + 56",
        choices: [24, 15, 66],
        correct: 66
    },

    {
        question: "What is 3 multiplied by 6",
        choices: [14, 18, 46],
        correct: 18
    },

    {
        question: "What is 8 divided by 2",
        choices: [2, 4, 5],
        correct: 4
    },

    {
        question: "What is the smallest prime number",
        choices: [3, 2, 19],
        correct: 2
    }
]

let mathQuestions = new Quiz(quizQuestions);
