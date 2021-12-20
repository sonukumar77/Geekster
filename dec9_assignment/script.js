     // function outer(a)
        // {
        //     return function(b){
        //         return function(c)
        //         {
        //             console.log("multiplication is  "+a*b*c);
        //         }
        //     }
        // }

    //     function outer(a)
    //     {
    //         function inner1(b){
    //              function subinner1(c)
    //             {
    //                 console.log("multiplication is  "+a*b*c);
    //             }
    //             return subinner1;
    //         }
    //         return inner1;
    //     }

    //     let x=outer(10);
    //    let y= x(20);
    //    y(30);

        // outer(10)(20)(30);





        // =================================  assignment 9 dec =======================

        let btnRef = document.getElementById('btn');
        
        function fun(){

            let inp1 = document.getElementById('input1').value;
            let inp2 = document.getElementById('input2').value;
             let inp3 = document.getElementById('input3').value;
             let pRef = document.getElementById('para');
        
                            function outer(a)
                        {
                            console.log(inp1);
                            console.log(inp2);
                            console.log(inp3);
                            return function(b){
                                return function(c)
                                {
                                    // console.log("multiplication is  "+a*b*c);
                                    pRef.innerText=a*b*c;
                                }
                            }
                        }

                     outer(inp1)(inp2)(inp3);

                    }         
                            

       btnRef.addEventListener('click', fun);