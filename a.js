document.addEventListener("DOMContentLoaded", function() {
    var strings = [
      "안녕하세요, 제 이름은 김인호입니다.",
      "저는 현재 대학교 4학년 정보보호학과에 재학중입니다.",
      "보안 전문가가 되기 위해 열심히 노력하고 있습니다.",
      "컴퓨터 시스템의 취약점을 탐지하고 보호하는 것이 즐거움입니다."
    ];
  
    var container = document.querySelector(".centered");
  
    function displayStrings() { // 함수 선언문
      if (strings.length > 0) { // 배열의 길이가 0보다 크면
        var string = strings.shift(); // 배열의 첫번째 요소를 제거하고 반환
        var paragraph = document.createElement("p"); // p 요소 생성
        container.appendChild(paragraph); // p 요소를 container에 추가
  
        var charIndex = 0; // 문자 인덱스 초기화
        var typingEffect = setInterval(function() { // 2000ms 마다 함수 호출
          if (charIndex < string.length) { // 문자 인덱스가 문자열의 길이보다 작으면
            // paragraph.textContent += string.charAt(charIndex); // p 요소에 문자열의 문자를 추가
            charIndex++;// 문자 인덱스 증가
          } else {// 문자 인덱스가 문자열의 길이보다 크거나 같으면
            clearInterval(typingEffect);// 타이핑 효과 제거
            {// 2초 후에
              paragraph.style.animation = "fade-in-out 10s ease forwards";// p 요소에 fade-out 애니메이션 효과 적용
              setTimeout(function() {// 2초 후에
                container.removeChild(paragraph);// p 요소를 container에서 제거
                displayStrings();// displayStrings 함수 호출 재귀
              }, 10000);
            };
          }
        }, 100);
      } else {
        clearInterval(interval);// interval 제거
      }
    }
  
    var interval = setInterval(displayStrings, 2000); // 2초마다 displayStrings 함수 호출
  });
  