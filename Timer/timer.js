let counter = 0;
let set_interval_id = null;
let counter_timer_callback = function () {
    // counter=counter + 1;
    // counter += 1 ;
    counter++;
    console.log("i am calling");
    let output_ref = document.getElementById('output');
    output_ref.innerText = counter;
}
//   set_interval_id =setInterval(counter_timer_callback,1000);


let pause_btn_ref = document.getElementById('pause_btn');
 pause_btn_ref.addEventListener('click',function(){
     clearInterval(set_interval_id);
 });

let resume_btn_ref = document.getElementById('resume_btn');
resume_btn_ref.addEventListener('click',function(){
    set_interval_id  = setInterval(counter_timer_callback,1000);
 });
 
let reset_btn_ref = document.getElementById('reset_btn');
reset_btn_ref.addEventListener('click',function(){

    counter = 0;
    document.getElementById('output').innerText = counter;
    
 });

let restart_btn_ref = document.getElementById('restart_btn');
restart_btn_ref.addEventListener('click',function(){

    counter = 0;
    document.getElementById('output').innerText = counter;
    
 });