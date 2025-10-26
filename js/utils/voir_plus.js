function ToggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Voir moins";
        dots.style.display = "none";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Voir plus";
        dots.style.display = "inline";
    }
}