let x = fetch('https://reqres.in/api/user');
let a=x.then(function (response) { 
    return response.json();
 });
//  console.log(a);
 a.then(function(info){
 
    let y =info.data;
    // console.log(info);
    
    for(let i=0; i<y.length; i++)
    {
        let idd=y[i].id;
        let name=y[i].name;
        let year=y[i].year;
        let color=y[i].color;
        let p_value=y[i].pantone_value;
        // console.log(idd);
        // console.log(name);
        // console.log(year);
        // console.log(color);
        // console.log(p_value);
        let tblRef=document.querySelector('table');
        let newRow=document.createElement('tr');
        newRow.innerHTML='<td>'+idd+'</td>'+'<td>'+name+'</td>'+'<td>'+year+'</td>'+'<td>'+color+'</td>'+'<td>'+p_value+'</td>';
        tblRef.appendChild(newRow);
    }

 });