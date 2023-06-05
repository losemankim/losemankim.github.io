document.addEventListener("DOMContentLoaded", function() {
    var strings = [
        "안녕하세요, 제 이름은 김인호입니다.",
        "저는 현재 대학교 4학년 정보보호학과에 재학중입니다.",
        "보안 전문가가 되기 위해 열심히 노력하고 있습니다.",
        "컴퓨터 시스템의 취약점을 탐지하고 보호하는 것이 즐거움입니다."
    ];

    var container = document.createElement("div");
    container.className = "centered";
    document.body.appendChild(container);

    function displayStrings() {
        if (strings.length > 0) {
            var string = strings.shift();
            var paragraph = document.createElement("p");
            paragraph.textContent = string;
            container.appendChild(paragraph);
            setTimeout(function() {
                paragraph.style.animation = "fade-out 2s ease forwards";
            }, 1000);
        } else {
            clearInterval(interval);
        }
    }

    var interval = setInterval(displayStrings, 4000);
});
