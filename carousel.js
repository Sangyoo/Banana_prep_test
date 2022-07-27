/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

console.log("hello, vanilla.");
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const images = document.querySelectorAll("img");
const dots = document.querySelectorAll("li");
let shownImage = 0;

// 코드설명: 
// shownImage라는 변수로 지금 보여지는 이미지를 가리키고
// 좌,우 화살표와 하단의 점을 누를때마다 init() 함수로 전체 이미지를 가린 다음
// 보여야 할 이미지만 display: none 속성을 해제한다.
function init() {
  for(let i=0; i<5; i++) {
    images[i].style.display = "none";
  }
}
//1.좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
leftArrow.addEventListener("click", ()=> {
  init();
  if(!shownImage) {
    images[images.length-1].style.display= "";
    shownImage = 4;
  }
  else {
    images[shownImage-1].style.display= ""
    shownImage-=1;
  }
});

//2.우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
rightArrow.addEventListener("click", ()=> {
  init();
  if(shownImage===4) {
    images[0].style.display= "";
    shownImage = 0;
  }
  else {
    images[shownImage+1].style.display= "";
    shownImage+=1;
  }
});

//5.이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.
for(let i = 0; i<dots.length; i++) {
  dots[i].addEventListener("click", function() {
    init();
    images[i].style.display = "";
    shownImage = i; 
  });
}