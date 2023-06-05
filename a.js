// 소개글 설정
let introText = "우주 고양이 연합은 고양이들의 우주 정복을 위한 조직입니다. 고양이들이 함께 모여 우주를 탐험하고 새로운 터리토리를 확보합니다. 우주 고양이 연합은 고양이들의 우주 정복 꿈을 지원하고 발전시키기 위해 노력하고 있습니다.";

// 소개글 한 글자씩 표시하는 효과
let introContainer = document.getElementById('intro');

function typeIntroText() {
    let index = 0;
    let timer = setInterval(function() {
        introContainer.textContent += introText[index];
        index++;
        if (index >= introText.length) {
            clearInterval(timer);
        }
    }, 10);
}

// 페이지 로딩 시 소개글 한 글자씩 표시
window.addEventListener('load', typeIntroText);
