let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let inp = document.getElementById('input');
    let num = parseInt(inp.value);
    makePattern(num);
});

function makePattern(num){
    let n=num;

    if(num % 2 == 0) {
        alert('Please Enter Odd Number');
        return;
    }


    let string = "";
    // Reversed pyramid pattern
    for (let i = 0; i < n; i++) {
     // printing spaces
     for (let j = 0; j < i; j++) {
      string += " ";
        }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
    string += "*";
     }
    string += "\n";
     }
    // pyramid pattern
    for (let i = 2; i <= n; i++) {
    // printing spaces
     for (let j = n; j > i; j--) {
     string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
     string += "*";
     }
     string += "\n";
    }

document.getElementById("output").innerText = string;

 
}