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


var inputNumber = window.prompt("한 자리 숫자를 입력해 주세요.");
switch(inputNumber) {
    case '0':
        alert('Zero');
        break
    case '1':
        alert('One');
        break
    case '7':
        alert('Lucky!');
        break
    default:
        alert('Unlucky');
        break
}

