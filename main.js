function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

//팝업창
document.getElementById("button1").addEventListener("click", function() {
    openPopup("popupTutorial");
});

document.getElementById("button2").addEventListener("click", function() {
    openPopup("popupBasic");
});

function navigateToSelectPage(mode) {
    if (mode === "basic") {
        window.location.href = "select(basic).html";
    } else if (mode === "tutorial") {
        window.location.href = "select(tutorial).html";
    }
}