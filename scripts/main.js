let tile = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/you.jpg') {
      myImage.setAttribute('src', 'images/zuozhu.jpg');
      tile.textContent = "宇智波 佐助";
    } else {
      myImage.setAttribute('src', 'images/you.jpg');
      tile.textContent = "宇智波 鼬";
    }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  tile .textContent = '宇智波 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    tile .textContent = '宇智波 酷毙了，' + myName;
  }
}
