$('#startDate').on('input',dateCalc);
let today = new Date();

$(function(){
    $('#showTodayDate').text(`오늘은 ${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 입니다.`);
})

function dateCalc() {

        let inputDate = new Date($('#startDate').val());
        let Calc = today - inputDate;
        $('#calcResultDate').html(`오늘을 기준으로 ${Math.floor(Calc/1000/60/60/24+1)}일째 입니다.`);
        console.log(inputDate);

}