
const questions = [
    {
        'que':'Which of the following is a mark-up language ?',
        'a':'HTML',
        'b':'CSS',
        'c':'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'Which year was javascript published ?',
        'a':'1999',
        'b':'1990',
        'c':'1995',
        'd':'none of the above',
        'correct':'c'
    },
    {
        'que':'What does css stands for ?',
        'a':'cascading style sheet',
        'b':'cool style sheet',
        'c':'css style sheet',
        'd':'none of the above',
        'correct':'a'
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const queBox=document.getElementById("quebox");
const optionsInput=document.querySelectorAll('.options');
const loadQuestion=()=>{
    if(index == total)
    {
        return endQuiz();
    }
    reset();
    const data=questions[index];
    queBox.innerText=`${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText=data.a;
    optionsInput[1].nextElementSibling.innerText=data.b;
    optionsInput[2].nextElementSibling.innerText=data.c;
    optionsInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAns();
    if(ans == data.correct)
    {
        right++;
    }
    else
    {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAns=()=>{
    let answer;
    optionsInput.forEach(
        (inputs)=>{
            if(inputs.checked)
            {
                answer=inputs.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionsInput.forEach(
        (inputs)=>{
            inputs.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById('box').innerHTML=`
    <h3>Thank you for playing the Quiz<h3>
    <h2>${right} / ${total} are corrected`
}

//initial call:--
loadQuestion();