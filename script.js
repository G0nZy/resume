// var image = document.getElementById('haloBoy').getElementsByTagName('img')[0];
// a.appendChild(image);


// var img = new Image();
// img.src = './img/ME.jpeg';
// img.onclick = function() {
//     window.location.href = './emailForm.html';
// };
// document.body.appendChild(img);



document.getElementById("haloBoy").onclick = function(){myFunction()};
function myFunction(){
    window.location.href = "./emailForm.html";
};
// document.body.appendChild(haloBoy);