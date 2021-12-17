function myFun(){
    let url="https://meme-api.herokuapp.com/gimme";
  let x = fetch(url);

  let b = x.then(function (response){
    return response.json();
  });

  b.then(function (data){
      console.log(data);
     let title = data.title;
     let author = data.author;
      let urlLink = data.url;

      let table=document.querySelector('table');
      let rowData=document.getElementById('trData');

      rowData.innerHTML='<td>'+ title +'</td>'+'<td>'+ author +'</td>'+ '<td>'+ "<img src='" + urlLink + "' class='myimage'>" +'</td>';

      table.appendChild(rowData);
  });
}
  let btnRef=document.getElementById('myBtn');
  btnRef.addEventListener('click',myFun);