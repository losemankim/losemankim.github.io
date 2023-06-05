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

    var index = 0;

    function displayNextString() {
        if (index < strings.length) {
            var string = strings[index];
            var paragraph = document.createElement("p");
            paragraph.textContent = string;
            container.appendChild(paragraph);
            index++;

            setTimeout(function() {
                paragraph.style.opacity = "0";
                setTimeout(function() {
                    container.removeChild(paragraph);
                    displayNextString();
                }, 2000);
            }, 2000);
        }
    }

    displayNextString();
});
