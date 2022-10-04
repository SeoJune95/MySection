$('#idSection').on('input',checkVal);
$('#pwSection').on('input',checkVal);

function checkVal() {
    var textId = $('#idSection').val();
    var textPw = $('#pwSection').val();

    if(textId != "" && textPw != "") {
        $('#button').css('backgroundColor','#1bbc9b');
<!--        $('#button').removeAttr('disabled');-->
    }else{
        $('#button').css('backgroundColor','#9b9b9b');
<!--        $('#button').attr('disabled','disabled');-->
    }
}


