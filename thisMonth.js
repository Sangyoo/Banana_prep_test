
/*

  다음과 같은 조건을 만족하는 월간 달력을 만들어 주세요!
  
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 현재 날짜를 기준으로, 이번 달의 일수가 1일부터 표시되어야 합니다.
  📌 이번 달의 1일 부터 마지막 일수 까지 표시되어야 합니다.
  
  🚨 HTML, CSS와 JS 모두 스스로 작성해주세요.
  

  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+
  |   6  |  7   |  8  |   9  |  10  |  11 |  12 |
  +---------------------------------------------+
  |  13  |  14  |  15 |  16  |  17  |  18 |  19 |
  +---------------------------------------------+
  |  20  |  21  |  22 |  23  |  24  |  25 |  26 |
  +---------------------------------------------+
  |  27  |  28  |  29 |  30  |      |     |     |
  +---------------------------------------------+

*/

/* html, css 처리
<template>
<table>
  <thead>
    <th>일</th>
    <th>월</th>
    <th>화</th>
    <th>수</th>
    <th>목</th>
    <th>금</th>
    <th>토</th>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</template>

<style>
body {
  display: flex;
  justify-content : center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  width: 100px;
  height: 40px;
}
</style>
*/


const date = new Date();
date.setDate(1);
const firstDay = date.getDay();
//마지막날짜 구하기 다음달 0일로 세팅하면 이번 달의 마지막날을 구해줌(js가)
date.setMonth(date.getMonth()+1)
date.setDate(0);
console.log(date);
const lastDay = date.getDate();
console.log(lastDay);

const abcs = document.querySelectorAll("tr>td");

for(let i = 0; i < lastDay; i++) {
  abcs[firstDay+i].textContent = i+1;
}