// 1. 50페이지 for구문 이용 쓰레기값 없이 출력하기

for(let i = 0.1; i < 1; i = i + 0.1) console.log(Number(Math.trunc(i * 10) / 10));

for(let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toFixed(1)));


// 2. 51페이지 1~10 사이 정수에 대해 제곱근을 소숫점 3자리 까지 출력하시오

i = 1;
do {
    console.log(i, ' ', Math.sqrt(i).toFixed(3))
} while (i++ < 10);

//3-1. 52페이지 요일 switch 이용하기 

const WEEK_NAMES = new Date();
// console.log("🚀 ~ WEEK_NAMES", WEEK_NAMES, WEEK_NAMES.getDay());
let dt = WEEK_NAMES.getDay()
switch(dt){
case 0:
dt = '일';
break;
case 1:
dt = '월';
break;
case 2:
dt = '화';
break;
case 3:
dt = '수';
break;
case 4:
dt = '목';
break;
case 5:
dt = '금';
break;
case 6:
dt = '토';
break;
}
console.log('오늘은', dt, '요일입니다.');

//3-2. switch 이용 x => arr이용하기

arrWeek=['일','월','화','수','목','금','토'];
console.log('오늘은',arrWeek[WEEK_NAMES.getDay()], '요일입니다.');


//4. addpoint 함수 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.



