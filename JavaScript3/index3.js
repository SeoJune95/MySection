//console.log('10' + '9');
//console.log(10+9);
//var stringNumber = '10'
//console.log(typeof (Number('10') + Number('9')));
//console.log(String(10) + String(9));
//
//
//let y = true;
//console.log(y);
//console.log(String(y));
//console.log(typeof y);
//console.log(typeof String(y));
//

//let x = '문자'
//console.log(x);
//console.log(Number(x));
//console.log(typeof x);
//console.log(typeof Number(x));

//let y = true;
//console.log(y);
//console.log(Number(y));
//console.log(typeof y);
//console.log(typeof Number(y));

//let y = '문자';
//console.log(y);
//console.log(Boolean(y));
//console.log(typeof y);
//console.log(typeof Boolean(y));

//let x = 123;
//console.log(x);
//console.log(Boolean(x));
//console.log(typeof x);
//console.log(typeof Boolean(x));

//console.log(typeof 2);
//console.log(typeof 4-1);
//console.log(typeof 'number');
//console.log(typeof (3*3));

//var test1 = ['he','e','l','l','o'];
//test1[0] = 'b';
//console.log(test1);
//
//var test2 = 'hello';
//test2[0] = 'b';
//console.log(test2);

//var brands = ['애플', '삼성', '샤오미'];
//var products = [['아이폰','맥북','아이맥'],['갤럭시s','갤럭시탭','갤럭시와치']
//,['mi11','Mi밴드','Mi버즈']]
//
//console.log(brands);
//console.log(products);
//console.log(products[0][2]);
//
//var samsungProducts = products[1];
//console.log(samsungProducts[1], samsungProducts[2]);

//var person = {
//    name: '아이유',
//    age: 30,
//    nationality: 'korea'
//}
//console.log(typeof person);
//
//console.log(person["nationality"]);

//console.log('보고서 작성: 완료!');
//console.log('-');
//console.log('부품 불량 체크: 완료!');
//console.log('-');
//console.log('재고 확인: 완료!');
//console.log('-');
//console.log('해외 주문: 완료!');
//console.log('-');
//console.log('담당자 파견: 완료!');
//console.log('-');
//console.log('영수증 발행: 완료!');
//console.log('-');
//
//function logTack(tack) {
//       console.log(tack + ': 완료!')
//}
//
//logTack(tack='보고서 작성');
//logTack(tack='부품 불량 체크');
//logTack(tack='재고 확인');
//logTack(tack='해외 주문');
//logTack(tack='담당자 파견');
//logTack(tack='영수증 발행');
//
//
//console.log('RM(이)가 대화에 참여했습니다.');
//console.log('RM2(이)가 대화에 참여했습니다.');
//console.log('RM3(이)가 대화에 참여했습니다.');
//console.log('RM4(이)가 대화에 참여했습니다.');
//console.log('RM5(이)가 대화에 참여했습니다.');
//console.log('RM6(이)가 대화에 참여했습니다.');
//console.log('RM7(이)가 대화에 참여했습니다.');

//function joinAlarm(userName){
//    console.log(`${userName}(이)가 대화에 참여했습니다.`)
//}
//
//joinAlarm(text='RM');
//joinAlarm(text='RM2');
//joinAlarm(text='RM3');
//joinAlarm(text='RM4');
//joinAlarm(text='RM5');
//joinAlarm(text='RM6');


//function myCalc(first,second){
//    console.log(`${first} * ${second} = ${first*second}`)
//}
//
//myCalc(3,4);
//myCalc(5,4);
//myCalc(6,4);
//myCalc(7,4);
//myCalc(8,4);
//myCalc(9,4);

//함수의 실행 순서

//function sayHello() {
//    console.log('Hello');
//    console.log('Welcom to World');
//}
//
//console.log('함수 호줄 전');
//sayHello();
//console.log('함수 호줄 후');

//function square(x) {
//    return x*x;
//}
//
//console.log('함수 호출 전');
//console.log(square(x=3)+square(x=5));
//console.log('함수 호출 후');


//옵셔널 파라미터
//function sayHello(name){
//    console.log(`안녕하세요 ${name}님!`);
//}
//
//sayHello(name='아무개');
//sayHello(name='뚱이')
//sayHello()
//
//let x;
//console.log(x);
//console.log(sayHello(name='손예진'));

//function introduce(name,age,nationality = '한국') {
//    console.log(`제 이름은 ${name}입니다.`)
//    console.log(`제 나이는 ${age}입니다.`)
//    console.log(`제 국적은 ${nationality}입니다.`)
//}
//introduce(name='서준혁', age=130, nationality='대한민국');
//console.log('')
//introduce(name='서준혁', age=10)

//옵셔널 파라미터가 중간에 있으면 호출을 할 때 생략해버림. 순서가 밀려버리기 때문에.
//function introduce(name,nationality = '한국',age) {
//    console.log(`제 이름은 ${name}입니다.`)
//    console.log(`제 나이는 ${age}입니다.`)
//    console.log(`제 국적은 ${nationality}입니다.`)
//}
//introduce(name='서준혁', age=30, nationality='대한민국');
//console.log('')
//introduce(name='서준혁', age=10)


//function orderSetMenu(sandwichName, drink='스프라이트'){
//    console.log(`주문하신 샌드위치는 ${sandwichName}이고 음료는 ${drink}입니다.`);
//}
//
//orderSetMenu('서브웨이 클럽');
//orderSetMenu('터키베이컨 아보카도', '코카콜라');
//orderSetMenu('서브웨이 멜트');
//orderSetMenu('이탈리안 비엠티','닥터페퍼');
//orderSetMenu('에그마요','환타오렌지');

//변수의 Scope
//let x = 3;
//function myFunction(){
//    let x = 5;
//    console.log(x);
//}
//
//myFunction();
//console.log(x); // x 는 myFunction 안에서 선언했기 때문에 로컬(지역)변수임. 그래서
                // myFunction 밖에서 사용할 수 없음. 사용 하려면 전역변수로 선언 해 줘야함.

//const x = 1500;
//function myFunction() {
//    x = 1500 * 1.5;
//    console.log(x);
//}
//myFunction();
//console.log(x);


//const x = 1500;
//let X = 1000;
//
//
//console.log(x);
//console.log(X);

//return: 반환하다, 돌려주다
//function inchToCentimeter(inch) {
//    var centimeter = inch * 2.54;
//    return centimeter;
//}
//var result1 = inchToCentimeter(inch=2);
//var result2 = inchToCentimeter(inch=3);
//console.log(result1);
//console.log(result2);
//console.log(inchToCentimeter(inch=1) + inchToCentimeter(inch=5));


//function squre(x){
//    console.log('return 전');
//    return x*x;
//    console.log('return 후'); // Dead code 아무 실행이 안된 코드.
//}
//console.log('함수 호출 전');
//console.log(squre(x=3));
//console.log(squre(x));
//console.log(squre(x)*2);
//console.log(squre(x=2));
//console.log(squre(x)*2);
//console.log('함수 호출 후');


//function printSquare(x){
//    console.log(x*x);
//}
//
//function getSquare(x) {
//    return x*x;
//}
//
//printSquare(x=4);
//getSquare(x=3);


//function calculateRectangleArea(width,height){
//
//    return width * height;
//}
//
//var area1 = calculateRectangleArea(3,4);
//var area2 = calculateRectangleArea(5,8);
//var area3 = calculateRectangleArea(7,2);
//
//console.log(`AREA1: ${area1}, AREA2: ${area2}, AREA3: ${area3}`)



//var inputNumber = window.prompt("한 자리 숫자를 입력해 주세요.");
//if(inputNumber === '7') {
//    alert('Lucky!');
//} else if (inputNumber === '0') {
//    alert('Zero');
//} else if (inputNumber === '1') {
//    alert('One');
//}
//else{
//    alert('Unlucky');
//}



//var num = 6;
//if(num % 2 === 0 && num % 3 ===0) {
//    console.log(num + '는 6의 배수입니다.');
//} else {
//    console.log(num + '는 6의 배수가 아닙니다.');
//}



//function checkHeight(height) {
//    const LimitHeight = 160;
//    let passMassage = '탑승이 가능합니다.'
//    let failMassage = '탑승이 불가능 합니다.'
//
//    if(height >= LimitHeight) {
//        console.log(passMassage);
//    }else{
//        console.log(failMassage);
//    }
//}
//
//checkHeight(140);
//checkHeight(135);
//checkHeight(170);



//function printGrade(midtermScore,finalScore){
//    totalScore = (midtermScore + finalScore) / printGrade.length
//    if(totalScore >= 90){
//        console.log("당신의 성적은 " + totalScore + "이며 최종성적은 A 입니다.");
//    }else if (totalScore >= 80) {
//        console.log("당신의 성적은 " + totalScore + "이며 최종성적은 B 입니다.");
//    }else if (totalScore >= 70) {
//        console.log("당신의 성적은 " + totalScore + "이며 최종성적은 C 입니다.");
//    }else if (totalScore >= 60) {
//        console.log("당신의 성적은 " + totalScore + "이며 최종성적은 D 입니다.");
//    }else{
//        console.log("당신의 성적은 " + totalScore + "이며 최종성적은 F 입니다.");
//    }
//}
//printGrade(90,90);
//printGrade(80,85);
//printGrade(29,24);
//printGrade(37,90);


//function whatShouldCallYou(myAge,myGender,yourAge,yourGender) {
//    if(myGender === 'male') {
//        if(myAge === yourAge) {
//            return "친구";
//        } else if (myAge < yourAge && yourGender === 'female') {
//            return "누나";
//        } else if (myAge < yourAge && yourGender === 'male') {
//            return "형";
//        } else if (myAge > yourAge && yourGender === 'female') {
//            return "여동생";
//        } else if (myAge > yourAge && yourGender === 'male') {
//            return "남동생";
//        }
//    } else if (myGender === 'female') {
//        if (myAge === youtAge) {
//            return "친구";
//        } else if (myAge < yourAge && yourGender === 'female') {
//            return "언니";
//        } else if (myAge < yourAge && yourGender === 'male') {
//            return "오빠";
//        } else if (myAge > yourAge && yourGender === 'female') {
//            return "여동생";
//        } else if (myAge < yourAge && yourGender === 'male') {
//            return "남동생";
//        }
//    }
//}
//
//var result1 = whatShouldCallYou(23,'male',25,'female');
//var result2 = whatShouldCallYou(21,'male',21,'male');
//var result3 = whatShouldCallYou(25,'male',22,'female');
//
//console.log(result1);
//console.log(result2);
//console.log(result3);


//스위치문
//var inputNumber = window.prompt("한 자리 숫자를 입력해 주세요.");
//switch(inputNumber) {
//    case '0':
//        alert('Zero');
//        break
//    case '1':
//        alert('One');
//        break
//    case '7':
//        alert('Lucky!');
//        break
//    default:
//        alert('Unlucky');
//        break
//}


// var inputNumber = window.prompt("한 자리 숫자를 입력해 주세요.");
// switch(inputNumber) {
//     case '0':
//         alert('Zero');
//         break
//     case '1':
//         alert('One');
//         break
//     case '7':
//         alert('Lucky!');
//         break
//     default:
//         alert('Unlucky');
//         break
// }



//switch문
//var score = 85;
//
//if (score > 70) {
//    alert('잘 하셨습니다');
//}
//
//switch (score) {
//    case 71:
//        alert('잘 하셨습니다.');
//        break;
//    case 72:
//        alert('잘 하셨습니다.');
//        break;
//}

//var course = 'C';
//
//switch(course) {
//    case 'A':
//    alert('짜장면,짬뽕,탕수육,양장피,팔보채');
//    break;
//
//    case 'B':
//    alert('짜장면,짬뽕,탕수육,양장피,팔보채,메뉴1,메뉴2');
//    break;
//
//    case 'C':
//    alert('짜장면,짬뽕,탕수육,양장피,팔보채,메뉴1,메뉴2,메뉴3');
//    break;
//}


//var course= 'C';
//
//switch(course) {
//    case 'C':
//        console.log("게살스프, 칠리새우");
//    case 'B':
//        console.log("유산슬");
//    case 'A':
//        console.log("자장면, 짬뽕,탕수육,양장피,팔보채");
//    break
//}


//function checkPrice(grades){
//    let VIPPrice = 15;
//    let Rprice = 13;
//    let Sprice = 10;
//    let Aprice = 8;
//    let Bprice = 5;
//
//    switch(grades){
//    case 'VIP':
//        console.log(`VIP석의 가격은 ${VIPPrice}원 입니다.`);
//        break;
//    case 'R':
//        console.log(`R석의 가격은 ${Rprice}원 입니다.`);
//        break;
//    case 'S':
//        console.log(`S석의 가격은 ${Sprice}원 입니다.`);
//        break;
//    case 'A':
//        console.log(`A석의 가격은 ${Aprice}원 입니다.`);
//        break;
//    case 'B':
//        console.log(`B석의 가격은 ${Bprice}원 입니다.`);
//        break;
//
//    }
//}
//
//checkPrice('VIP');
//checkPrice('R');
//checkPrice('S');
//checkPrice('A');
//checkPrice('B');






//for문
//for(초기값; 조건부분; 추가동작부분) {
//    동작부분 수행
//}
// for(let <<< for문의 로컬변수임. for 블록 안에서만 사용가능.
// for () 안에 세미콜론은 반드시 있어야 한다. 초기화, 조건부분 두개는 비어있더라도 반드시 ; 를 써 주어야함.
//let i = 3;
//for (; i <= 10;){
//    console.log(`${i}. 웹개발 수강생 화이팅!`)
//    i++;
//}
//
//console.log(i);




//테스트 해보기
//function trianglePrint(height){
//    star = '';
//    for (var i = 0;i <= height; i = i+1){
//        star = star + '*';
//        console.log('*');
//    }
//
//}
//trianglePrint(5);



//// 변수 2개를 만들어 arr의 첫번재 값을 1등으로
//// 두 번째 값을 2등으로 설정
//function secondBigNumber(arr) {
//    var first = [0];
//    var second = [1];
//    for(var i = i; i < arr.length; i++){
//        if(arr[i] > first) {
//            second = first;
//            first = arr[i];
//        }else if(arr[i] > second) {
//            second = arr[i];
//        }
//    }return second;
//}
//
//console.log(secondBigNumber([1,9,8,6,7,23,5,3]));
//console.log(secondBigNumber([9,6,8]));


//for of 반복문
//var brands = ['HYNDAI','APPLE','SAMSUNG'];
//
//for (let i = 0; i < 3; i++){
//    console.log(brands[i]);
//}
//// 일반적인 for문
//
////for of 문 인덱싱 할 필요도 없음. brandsName 변수로 다 적용
//for (brandsName of brands) {
//    console.log(brandsName);
//}
//
////for in 문 for of 문저처럼 배열의 값에 접근하는게 아니라 배열의 인덱스(주소)에 접근.
//var arr = ['아메리카노','라떼','티'];
//for(var v in arr){
//    console.log(v);
//}
//
//var arr = ['아메리카노','라떼','티'];
//for(var v of arr){
//    console.log(v);
//}


//while문
//while(조건부분) {
//    조건부분이 충족하지 않을때 까지 반복동작부분
//}

//let i = 1;
//while (i <= 10){
//    console.log(`${i}웹개발`)
//    i++
//}
////for 문과 비교
//for (let i = 1; i <= 10; i++){
//    console.log(`${i}웹개발`)
//}



//let i = 30;
//while (i % 7 != 0){
//    i++;
//}
//console.log(i);

//1~100까지 홀수 구하는 방법 세가지
//let i = 1;
//while (i <= 100){
//    if(i % 2 === 1){
//        console.log(i);
//    }
//    i++
////}

//let i = 1;
//while(i <= 50){
//    console.log(i * 2 - 1);
//    i++;
//}

//let i = 1;
//while(i<=100){
//    console.log(i);
//    i += 2;
//}

//break 문 WHILE 문에서 밖으로 나오고 싶을때 break문 사용. loop방지.
//var i = 100;
//while (true) {
//    if (i % 23 == 0){
//        break;
//    }
//    i = i + 1;
//}
//console.log(i);
//
//for(let i =1; i<=10; i++) {
//    console.log(i);
//    if (i===7){
//        break;
//    }
//}
////continue문은 현재 진행되고 있는 수행 부분을 중단을 시키고 조건부분을 다시 확인하고 싶을때 사용.
//var i=0;
//while(i<15) {
//    i=i+1;
//    if(i%2==1){
//        continue;
//    }
//    console.log(i);
//}

//아래 코드 결과값은 4까지만 출력된다. 5번째에서 break되었기 때문에.
//var i = 1;
//while (i<=20){
//    if ( i===5 ) {
//        break;
//    }
//    console.log(i);
//    i++
//}

//짝수만 출력해줌.
//for(let i = 1; i <= 50; i++){
//    if (i%2!=0) {
//
//        continue;
//    }
//    console.log(i);
//    i++;
//}


//HTML ID 받아오기 document.getElementById
//HTML CLASS 받아오기 document.getElementsByClassName
//여러개의 CLASS 받아오면 배열처럼 보이지만 정확히는 배열이 아님. 배열과 형태는 유사하지만 배열의 일부 기능을 사용할수 없는상태.
//이를 '유사배열(Array Like Object)' 이라고 부름.

//const myTags = document.getElementsByClassName('color-btn');
//console.log(myTags[0]);       // 클래스 이름이 하나에 여러개의 값이 있는경우 배열처럼 받을 수 있음.7개의 배열중 [0]번째,[2]번째 이렇게.
//console.log(myTags.length);    // 배열의 개수(length) 까지 받아올 수있음.
//for (let tag of myTags) {     //for of 문으로 하나씩 출력할 수 있음.
//    console.log(tag);
//}
//for of 문으로 하나씩 출력할 수 있음.
//getElemtByClassName 할땐 HTML문서 에서 위에서 아래로 차례대로 순서가 나옴. 자식으로 얼마나 들어가있느냐는 중요하지 않음.

//const myTags = document.getElementsByClassName('red');
//console.log(myTags);
//console.log(myTags[0]);     //0번 인덱스로 접근해야 진짜 값을 받을 수 있음.

const myTags2 = document.getElementsByClassName('hello');
console.log(myTags2);
console.log(myTags2[0]);    //존재하지 않는 클래스 선택 시 HTMLCollection[] 으로 결과값이 나옴.
















