const Questions = 
[{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "Mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Rajasthan?",
    a: [{ text: "Lucknow", isCorrect: false, isSelected: false },
        { text: "Indore", isCorrect: false },
        { text: "Ranchi", isCorrect: false },
        { text: "Jaipur", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat?",
    a: [{ text: "Surat", isCorrect: false },
        { text: "Vadodara", isCorrect: false },
        { text: "Gandhinagar", isCorrect: true },
        { text: "Rajkot", isCorrect: false }
    ]
}]
var start = true;
function iterate(id)
{
    //Result Display
    var result = document.getElementsByClassName("result");

    //Question Display
    const ques = document.getElementById("question");
    ques.innerText=Questions[id].q;

    const op1 = document.getElementById("o1");
    const op2 = document.getElementById("o2");
    const op3 = document.getElementById("o3");
    const op4 = document.getElementById("o4");
    
    // Providing Text To Option
    op1.innerText=Questions[id].a[0].text;
    op2.innerText=Questions[id].a[1].text;
    op3.innerText=Questions[id].a[2].text;
    op4.innerText=Questions[id].a[3].text;

    //Providing True Or False For Option
    op1.value=Questions[id].a[0].isCorrect;
    op2.value=Questions[id].a[1].isCorrect;
    op3.value=Questions[id].a[2].isCorrect;
    op4.value=Questions[id].a[3].isCorrect;

    var selected="";
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "rgb(233, 192, 11)";
        op2.style.backgroundColor = "white";
        op3.style.backgroundColor = "white";
        op4.style.backgroundColor = "white";
        selected = op1.value;
    })
    
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "white";
        op2.style.backgroundColor = "rgb(233, 192, 11)";
        op3.style.backgroundColor = "white";
        op4.style.backgroundColor = "white";
        selected = op2.value;
    })
    
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "white";
        op2.style.backgroundColor = "white";
        op3.style.backgroundColor = "rgb(233, 192, 11)";
        op4.style.backgroundColor = "white";
        selected = op3.value;
    })
    
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "white";
        op2.style.backgroundColor = "white";
        op3.style.backgroundColor = "white";
        op4.style.backgroundColor = "rgb(233, 192, 11)";
        selected = op4.value;
    })

    const evaluate = document.getElementsByClassName("evaluate");
    
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") 
        {
            result[0].innerHTML = "TRUE";
            result[0].style.color = "green";
        } 
        else 
        {
            result[0].innerHTML = "FALSE";
            result[0].style.color = "red";
        }
    })
}

if (start) 
{
    iterate("0");
}


    // Next button and method
    const next = document.getElementsByClassName('next')[0];
    var id = 0;
    
    next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);

    }
    else{
        alert("End");
    }
    
    })