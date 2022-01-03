var refFullImgContainer = document.getElementById("full-img-container");
var refFullImg = document.getElementById("full-img");

function openFullImg(picSrc){
    refFullImgContainer.style.display = "flex";
    refFullImg.src = picSrc;
}
function closeFullImg(){
    refFullImgContainer.style.display = "none";
}

refFullImgContainer.addEventListener("click",closeFullImg);