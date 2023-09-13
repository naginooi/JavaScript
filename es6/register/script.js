document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

//유효성 검사
function form_check() {
  const name = document.getElementById('name');
  const id = document.getElementById('id');
  const pw = document.getElementById('pw');
  const pwCheck = document.getElementById('pw-check');
  const birth = document.getElementById('birth');
  const phone = document.getElementById('phone');

  function errColor() {
    document.querySelector('.errorText').style.color = 'red';
  }
  //name
  if (name.value == '') {
    errColor();
    document.getElementById('name-des').innerText = '이름을 입력해주세요';
    name.focus();
    return false;
  }
  //id
  if (id.value == '') {
    errColor();
    document.getElementById('id-des').innerText = '아이디를 입력해주세요';
    id.focus();
    return false;
  }

  const idLength = id.value.length;
  if (idLength < 4 || idLength > 12) {
    errColor();
    document.getElementById('id-des').innerText = '글자수를 확인해주세요';
  }

  //pw
  if (pw.value == '') {
    errColor();
    document.getElementById('pw-des').innerText = '비밀번호를 입력해주세요';
    pw.focus();
    return false;
  } else if (pw.value === pwCheck.value) {
    document.getElementById('correct-check').style.color = 'black';
    document.getElementById('correct-check').innerText = '일치합니다';
  } else {
    document.getElementById('correct-check').style.color = 'red';
    document.getElementById('correct-check').innerText = '일치하지 않습니다';
  }
  const pwLength = pw.value.length;
  if (pwLength < 4 || pwLength > 12) {
    errColor();
    document.getElementById('pw-des').innerText = '글자수를 확인해주세요';
    return false;
  }

  //birth
  if (birth.value == '') {
    errColor();
    document.getElementById('birth-des').innerText = '생년월일을 입력해주세요';
    birth.focus();
    return false;
  }
  const birthLength = birth.value.length;
  if (birthLength < 8) {
    errColor();
    document.getElementById('birth-des').innerText = '8자리를 입력해주세요';
    birth.focus();
    return false;
  }

  //email
  const domain = document.querySelector('.back-email');
  const domainOption = document.querySelector('#email-select');
  domainOption.addEventListener('change', (e) => {
    if (e.target.value !== 'self') {
      domain.value = e.target.value;
      domain.disabled = true;
    } else {
      domain.value = '';
      domain.disabled = false;
    }
  });

  //phone
  if (phone.value.includes('-')) {
    errColor();
    document.getElementById('phone-des').innerText = '-없이 입력해주세요';
    phone.focus();
    return false;
  }

  //checkbox
  if (!checkbox.checked) {
    errColor();
    document.getElementById('checkbox-des').innerText = '약관을 동의해주세요';
    checkbox.focus();
    return false;
  }

  // join_form.submit()
}

document.querySelector('#register').addEventListener('click', form_check);

//address api
function searchAddress() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById('extra-add').value = extraAddr;
      } else {
        document.getElementById('extra-add').value = '';
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('zipcode').value = data.zonecode;
      document.getElementById('default-add').value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById('detail-add').focus();
    },
  }).open();
}
