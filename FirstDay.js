/*

  다음과 같은 조건을 만족하는 주간 달력을 만들어 주세요!
  
  📌 현재 날짜를 기준으로, 이번 달의 1일이 보여져야 합니다.
  📌 1일을 기준으로 하는 요일의, 이후 날짜가 보여져야 합니다.
  📌 아래 예시를 참고해 주세요.

  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.
  
 
                예시1) -  2022년 1월 
  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |     |     |      |      |  1  |
  +---------------------------------------------+

                예시2) -  2022년 2월 
  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+

*/

const date = new Date();
date.setDate(1);
const dday = date.getDay();

const abcs = document.querySelectorAll("tbody>tr>th");
for(let i = 0; i < (7-dday); i++) {
  abcs[dday+i].textContent = i+1;
}