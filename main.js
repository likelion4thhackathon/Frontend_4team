function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

// 버튼 클릭 시 팝업창 열기
document.getElementById("button1").addEventListener("click", function() {
    openPopup("popupTutorial");
});

document.getElementById("button2").addEventListener("click", function() {
    openPopup("popupBasic");
});

function navigateToSelectPage(mode) {
    window.location.href = "select(" + mode + ").html"; // 세부 서비스 선택 페이지로 이동
}
