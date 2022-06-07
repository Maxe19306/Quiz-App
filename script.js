let questions = [{
        "question": "Wie viele Weihnachtsbäume werden in Deutschland pro Jahr verkauft?",
        "answer_1": "circa 13 Millionen",
        "answer_2": "circa 30 Millionen",
        "answer_3": "circa 174 Millionen",
        "answer_4": "circa 1 Millionen",
        "right_answer": 2
    }, {
        "question": "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?",
        "answer_1": "100 Liter",
        "answer_2": "10 Liter",
        "answer_3": "45 Liter",
        "answer_4": "148 Liter",
        "right_answer": 1
    },
    {
        "question": "Wie viele Buchstaben hat das hawaiianische Alphabet?",
        "answer_1": "58",
        "answer_2": "107",
        "answer_3": "34",
        "answer_4": "12",
        "right_answer": 4
    },
    {
        "question": "Wie viele Einkerbungen hat ein Golfball?",
        "answer_1": "336",
        "answer_2": "403",
        "answer_3": "100",
        "answer_4": "214",
        "right_answer": 1
    },
    {
        "question": "Mit wie vielen Figuren beginnt ein Schachspiel?",
        "answer_1": "20",
        "answer_2": "41",
        "answer_3": "32",
        "answer_4": "65",
        "right_answer": 3
    }
]

let currentQuestion = 0;

function init() {
    let anzahl = 1;
    document.getElementById('Numberquestion').innerHTML += /*html*/ `<p> <b> ${anzahl} </b> von <b> ${questions.length}  </p>
         <button type="button" class="btn btn-primary">nächste Frage</button> `;
    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {


}