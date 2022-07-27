/*

  다음과 같은 조건을 만족하는 화면을 만들어 주세요!
  
  📌 버튼 클릭시 랜덤한 HEX CODE가 배경 색으로 변경되어야 합니다.
  📌 현재 HEX CODE가 <p> 태그의 텍스트로 표시되어야 합니다.

*/
//Hex code 생성함수

const wrElement = document.querySelector(".wrapper");
const hcElement = document.querySelector("button");
const pElement = document.querySelector("p");

function createHexcode() {
  let hexCode = "#";
  const rad = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  for(let i = 0; i<6; i++) {
    hexCode+=rad[Math.floor(Math.random()*15)];
  }
  return hexCode ;
};

hcElement.addEventListener("click", () => {
  let Hcode = createHexcode();
  wrElement.style.backgroundColor = Hcode;
  pElement.textContent = Hcode;
});