
  var fc = document.getElementById('fc'); 
  var sc = document.getElementById('sc'); 

function changeBg(x) {
  if(x.className === 'first child') {
    document.body.style.background = "#d580ff";
    sc.style.opacity = "0.5";
  } else {
    document.body.style.background = "#ff8ae2";
    fc.style.opacity = "0.5";
  }
}

function normalBg(x) {
  document.body.style.background = "white";
    fc.style.opacity = "1";
    sc.style.opacity = "1";
}

document.body.onload = function() {
  
  let num1 = Math.floor(Math.random() * 900+100);
  let num2 = Math.floor(Math.random() * 900+100);
 
  let img = document.createElement('img'); 
  img.src =  
'https://www.thiswaifudoesnotexist.net/example-'+num1+'.jpg';
  document.getElementById('sca').appendChild(img);
  document.getElementById('scp').innerHTML = num2;
  // 
  img.width = "128";
  let img1 = document.createElement('img'); 
  img1.src =  
'https://www.thiswaifudoesnotexist.net/example-'+num2+'.jpg';
  img1.width = "128";
  document.getElementById('fca').appendChild(img1);
  document.getElementById('fcp').innerHTML = num1;
    
};

function refreshPage(){
    window.location.reload();
} 