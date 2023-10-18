import quests from "./questions.js"

const questionshow = document.querySelector('.q')

const choicesshow = document.querySelector('.choices .big')

const nextbtn = document.querySelector('.next')

const resualt = document.querySelector(' main h1')

let random = tanum => Math.floor(Math.random() * tanum);

let questionrandomtagets = () => quests[random(quests.length)];

let showques = () => {

        questionshow.innerHTML += targetmainquisten.question;


}
let quiestionchoices = () => {
        for (let i = 0; i < targetmainquisten.choices.length; i++) {
                choicesshow.innerHTML += `<p>${targetmainquisten.choices[i]}</p>`

        }
}

let checkanser = choiced => {
        for (let i = 0; i < targetmainquisten.question.length; i++) {
                if (targetmainquisten.corectanser[i] == choiced.innerHTML) {
                        nextbtn.classList.add('block')
                        choicesshow.classList.add('efect')
                        var questionCounter = 0;
                        questionCounter++;
                        break;
                } else {
                        nextbtn.classList.add('block')
                        choicesshow.classList.add('efect')
                        questionCounter--;
                }
        }

}


let gonext = () => {
        questionshow.innerHTML = ``;
        choicesshow.innerHTML = ``;
        choicesshow.classList.remove('efect')
        let randomquiz = tanumber => Math.floor(Math.random() * tanumber);
        var randomquest = () => quests[randomquiz(quests.length)];
        let showrandomquest = () => {
                questionshow.innerHTML += nextrandomquest.question;
        }
        let questchoices = () => {
                for(let i = 0; i < nextrandomquest.choices.length; i++) {
              choicesshow.innerHTML += `<p>${nextrandomquest.choices[i]}</p>`

                }
        }
        let nextrandomquest = randomquest()
        console.log(nextrandomquest)
        showrandomquest()
        console.log(questchoices())
}


let limit = limiter => {
if(gonext.randomquest == 10 ){
        resualt.innerHTML=`<p> you got ${questionCounter} from 10 quests </p>`
        console.log(limiter())
}else
{

        return ; 
}
}


choicesshow.addEventListener('click', checkanser)

nextbtn.addEventListener('click', gonext)

let targetmainquisten = questionrandomtagets()

console.log(targetmainquisten)

showques()

console.log(quiestionchoices())