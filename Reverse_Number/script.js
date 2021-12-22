   //Write a script to reverse a number. (WITHOUT using .reverse!)
   let btn = document.getElementById('calculate');
   btn.addEventListener('click', function() {
       let inp = document.getElementById('input');
       let num = parseInt(inp.value);
       
       let op = reverseNum(num);
       let p = document.getElementById('output');
       p.innerText = op;
   });

   function reverseNum(num) {
       //Logic
       let op = 0;

       while(num > 0) {
           let single_digit = num % 10;
           num = Math.floor(num / 10);
           op = op * 10 + single_digit;
       }

       console.log(op);
       


       return op;
   }