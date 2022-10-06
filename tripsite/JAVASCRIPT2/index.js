  mouseover : 마우스 포인터가 영역 위로 올라올 경우 발생
  mouseout : 마우스 포인터가 영역에서 벗어날 경우 발생
  mousedown : 마우스 버튼들 누를 경우 발생
  mouseup : 마우스 버튼을 눌렀다가 놓을 경우 발생
  mousemobe : 마우스를 움직일 경우 발생
  dbclick : 더블클릭시 발생
  dragdrop : 마우스를 드래그 할때 발생

  keydown : 키보드의 버튼이 내려가는 순간 발생
  keypress : 키보드의 버튼이 내겨라는 순간 발생 하는 이벤트 인데 'a','5' 등의 출력이 가능한 키에서만 동작. Enter,ESC 에선 반응 안함
  keyup : 눌러진 키보드의 버튼이 다시 올라오면서 발생

  focus : 해당 위치에 포커스가 위치할 경우 발생
  blur : 포커스를 다른곳으로 옮길 경우 발생

  change : 선택 값을 바꿀 경우 발생
  input : 사용자가 입력을 하는 경우 발생
  select : 입력 양식의 하나가 선택될 때 발생
  submit : 폼을 전송하는 경우 발생

  move : 윈도우나 프레임을 움직일 때 발생
  resize : 윈도우나 프레임 사이즈를 움직일 때 발생

  $('#home').on('click',homeClick);
  $('#seoul').on('click',seoulClick);
  $('#tokyo').on('click',tokyoClick);
  $('#paris').on('click',parisClick);

  $('#photo').on('mouseenter',mouseEnterPhoto);
  $('#photo').on('mouseleave',mouseLeavePhoto);
  $(document).on('keydown',processKeyEvent);

    function mouseEnterPhoto() {
    $('#photo').css('box-shadow','5px 10px');
  }

  function mouseLeavePhoto() {
    $('#photo').css('box-shadow','none');
  }



  function homeClick(){
       $('#photo').attr('src','images/home.png');
       $('#home').css('fontWeight','bold');
       $('#seoul').css('fontWeight','normal');
       $('#tokyo').css('fontWeight','normal');
       $('#paris').css('fontWeight','normal');
  }

  function seoulClick(){

      $('#photo').attr('src','images/seoul.png');
      $('#seoul').css('fontWeight','bold');
      $('#home').css('fontWeight','normal');
      $('#tokyo').css('fontWeight','normal');
      $('#paris').css('fontWeight','normal');

  }


  function tokyoClick(){
      $('#photo').attr('src','images/tokyo.png');
      $('#tokyo').css('fontWeight' ,'bold');
      $('#home').css('fontWeight','normal');
      $('#seoul').css('fontWeight','normal');
      $('#paris').css('fontWeight','normal');
  }

  function parisClick(){
      $('#photo').attr('src','images/paris.png');
      $('#paris').css('fontWeight' ,'bold');
      $('#home').css('fontWeight','normal');
      $('#seoul').css('fontWeight','normal');
      $('#tokyo').css('fontWeight','normal');
  }

  function processKeyEvent(event) {
      if(event['key'] === '1') {
        homeClick();
      }
      else if(event['key'] === '2') {
        seoulClick();
      }
      else if(event['key'] === '3') {
        tokyoClick();
      }
      else if(event['key'] === '4') {
        parisClick();
      }
  }