//배열
//let dateType = ['number','boolean','string','null','undefined','object'];

//for (let i = 0 ;i < 6;i++){
//console.log(dateType[i]);
//}

//let i = 0;
//while(i<6);{
//    console.log(dateType[i]);
//      i++
//}

//let artist=['정국','진','RM','제이홉','지민','뷔'];
//console.log(typeof artist); //object
//console.log(artist.length); // 배열의 길이
//console.log(artist['length']); // 대괄호 표기법으로 배열의 길이 확인
//console.log(artist[artist.length - 1]); //length 가 6이고 -1 하면 5 라서 배열의 6번째 뷔 가 나옴.
//
////배열에 추가
//console.log(artist[6]); // 배열 안에 7번째 요소는 현재 없음. 따라서 undefined가 출력
//artist[6] = '아이유'; // artist 에 7번째 배열에 아이유를 추가
//console.log(artist); // (7) ['정국', '진', 'RM', '제이홉', '지민', '뷔', '아이유'] 로 출력나옴.
//artist[8] = '서준혁'; // artist 배열에 8번째 추가 안하고 9번째에 추가
//console.log(artist); //(9) ['정국', '진', 'RM', '제이홉', '지민', '뷔', '아이유', 비어 있음, '서준혁'] 로 8번째는 empty 값이 들어감. 원래는 배열의 빈곳은 undefined 인데 empty가 생성.
//
////배열에 값 수정
//artist[1] = '김현식'; // 배열의 2번째에 값을 김현식으로 바꿈
//console.log(artist); // (9) ['정국', '김현식', 'RM', '제이홉', '지민', '뷔', '아이유', 비어 있음, '서준혁'] 출력
//
////배열에 값 삭제
//console.log(artist); //(9) ['정국', '김현식', 'RM', '제이홉', '지민', '뷔', '아이유', 비어 있음, '서준혁']
//delete artist[5];    //artist 배열의 6번째 값 삭제
//console.log(artist); //(9) ['정국', '김현식', 'RM', '제이홉', '지민', 비어 있음, '아이유', 비어 있음, '서준혁']
//                     // 6번째 값이 empty로 바뀜. 완벽하게 삭제됐다고 하기엔 힘듬.


////섭씨 화씨 변환
//let temperature = [27,30,22,28,21,26];
//let fahrenheitTemps = [];
////for문
//function fahrenheit() {
//    for(let i=0; i<temperature.length; i++){
//        fahrenheitTemps[i] = ((temperature[i]*9/5)+32);
//    }
//}
////while문
//function fahrenheitTemp() {
//    let i =0;
//    while(i < temperature.length){
//        fahrenheitTemps[i] = ((temperature[i]*9/5)+32);
//        i++
//    }
//}
//fahrenheitTemp();
//console.log(fahrenheitTemps);



////배열값 완전 삭제 splice 사용
//let members = ['1','2','3','4','5','6'];
//members.splice(1);  // 1번 인덱스 이후에 모든 요소를 삭제해버림. delete와 다르게 완전 삭제.
//members.splice(1,0); // 2번째 파라미터로 영역 지정. 0 1 2 3 4 5 중에서 1번째 부터 1개 삭제
//console.log(members);

//splice로 배열 추가
//console.log(members);
//members.splice(0,0,'이유','아이'); // 2번째 배열에 지워질 값이 0 이므로 그자리에 '이유','아이' 가 들어감.
//console.log(members);
//splice로 여러 배열값 수정
//console.log(members);
//members.splice(2,3,'아이유','나나나','뽀뽀뽀'); // 3번째 값부터 3개를 지우고 지워진 배열 즉 3번재 부터 아이유 나나나 뽀뽀뽀 가 들어감.
//console.log(members);

//let fruits = ['사과','토마토','딸기','바나나'];
//let age = [20,24,42,32,54,24];
//let number=[];
////1.토마토를 삭제 사과,청포도 추가;
////2.fruit 배열의 첫 요소를 삭제
////3. age 마지막 요소 삭제
////4. age 2,3 인덱스를 26,28로 변경
////5. number 1,2,3,4,5,6,7,8,9 순서대로 추가
////6. 반복문을 사용 number 배열의 요소들 중 홀수를 모두 삭제
//
//fruits.splice(1,1,'사과','청포도');
//fruits.splice(1,1);
//
//age.splice(5,1); // age.splice(age.length-1,1); 와 같음.
//age.splice(2,2,26,28);
//
//number.splice(0,0,1,2,3,4,5,6,7,8,9);
//
//function numberDel() {
//    for(let i=0;i<number.length;i++){
//        if(number[i]%2!==0) {
//            number.splice(i,1);
//            i-- // 배열이 삭제되면서 index값이 하나씩 줄어듬.
//        }else{}
//    }
//    console.log(fruits);
//    console.log(age);
//    console.log(number);
//}
//numberDel();
//
////function numberDel() {
////    let i = 0
////    while(i<number.length){
////        if(number[i]%2!==0) {
////                     number.splice(i,1);
////                     i-- // 배열이 삭제되면서 index값이 하나씩 줄어듬.
////                 }else{
////                    i--}
////        console.log(fruits);
////        console.log(age);
////        console.log(number);
////     }
////}
////numberDel();

//let members = ['1','2','3','4','5','6'];
////배열의 첫 요소 삭제
//members.shift();
//console.log(members);
////members.splice(0,1);
//
//////배열의 마지막 삭제
//members.pop();
//console.log(members);
////members.splice(members.length-1,1);
//
//////배열의 첫 요소 값 추가
//members.unshift('아이유');
//console.log(members);
////members.splice(0,0,'아이유');
//
//////배열의 마지막 요소 값 추가
//members.push('아이유');
//console.log(members);
////members.splice(members.length.0,'아이유');

//배열 특정값 찾아주기
//indexof / lastindexof
//array.indexof(item);
//포함이 되어 있다면 item이 있는 인덱스(주소)를 리턴.
//포함되어 있지 않다면 -1이 리턴.
//여러번 포함이 되어 있다면 처음 발견된 인덱스가 리턴.

//array.lastIndexOf(item);
//indexOf와 다르게 뒤에서 부터 찾아줌.

//let number = [1,1,2,2,3,4,5,6];
//console.log(number.indexOf(7));      // -1
//console.log(number.indexOf(2));      // 2
//console.log(number.lastIndexOf(2));  // 3
//console.log(number.lastIndexOf(6));  // 7

//includes
//array.includes(item)
//불린 값으로 반환. 있을 경우 true, 없을 경우 false
//let number = [1,2,3,4,5];
//console.log(number.includes(2));   // true
//console.log(number.includes(0));   // false

//revers 배열의 인덱스값을 역으로
//console.log(number);  //(5) [1, 2, 3, 4, 5]
//number.reverse();
//console.log(number);  //(5) [5, 4, 3, 2, 1]


//배열의 다루는 반복문! (for of)
//for(변수 of 배열){
//    동작;
//}
//let members = ['RM','진','제이홉','지민','뷔','슈가'];
//console.log(members);
//
//for(key of members){
//    if(key=='진'){
//    console.log('RM있네~')
//    }else{console.log('RM없네~')}
//}

//다차원 배열
let twoDiens=[[1,2],[3,4]];
//다차원 배열 접근방법
console.log(twoDiens[0][1]); // 1 2  중에서 0,1 이니까 2가 출력.
                             // 3 4
//let myRefrigerator = [
//    ['참외','토마토','오이','양파'],
//    ['김치','가지볶음','멸치','갈비'],
//    ['음료','물','우유','주스'],
//    ['상추','깻잎','콩나물','숙주'],
//    ['얼음'],
//    ['아이스크림','아이스크림2','아이스크림3'],
//    ['냉찜팩','얼음찜팩','커피가루','명태']
//]
//
//let mailBox = [
//    [101,201,301,401,501,601],
//    [102,202,302,402,502,602],
//    [103,203,303,403,503,603],
//    [104,204,304,404,504,604],
//    [105,205,305,405,505,605]
//]
//
//let chessBoard = [
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P'],
//    ['','','','','','','',''],
//    ['','','','','','','',''],
//    ['','','','','','','',''],
//    ['','','','','','','',''],
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P']
//]
//객체로 선언(문법 찾아보기)
//let myRefrigerator = {
//fridge :{['참외','토마토','오이','양파'],
//    ['김치','가지볶음','멸치','갈비'],
//    ['음료','물','우유','주스'],
//    ['상추','깻잎','콩나물','숙주'],
//    },
//freezer:{['얼음']
//    ['아이스크림','아이스크림2','아이스크림3']
//    ['냉찜팩','얼음찜팩','커피가루','명태']}
//}
////어떤 시점에 배열과 객체를 사용해야 하는지 잘 알아야함.
//console.log(myRefrigerator);


//let groups = [
//    ['지수','제니'],
//    ['로제','리사'],
//    ['RM','진'],
//    ['슈가','제이홉'],
//    ['지민','뷔'],
//];
//
//let teams = [
//    [],
//    [],
//];
//
//for(let i=0;i<groups.length;i++) {
//    for(let j=0;groups[i].length;j++){
//        teams[j][i] = groups[i][j];
//    }
//}
//
//console.log(teams[0]);
//console.log(teams[1]);

