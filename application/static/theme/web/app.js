function windowScroll() {
    var e = document.getElementById("navbar");
    50 <= document.body.scrollTop || 50 <= document.documentElement.scrollTop ? e.classList.add("nav-sticky") : e.classList.remove("nav-sticky");
}
window.addEventListener("scroll", function (e) {
    e.preventDefault(), windowScroll();
});
var singleLocation = document.getElementById("choices-single-location");
singleLocation = singleLocation && new Choices("#choices-single-location");
var singleCategories,
    singleCategorie = document.getElementById("choices-single-categories");
singleCategorie && (singleCategories = new Choices("#choices-single-categories"));
var choicesCryptoLists,
    choicesCryptoList = document.getElementById("choices-crypto-list");
choicesCryptoList && (choicesCryptoLists = new Choices("#choices-crypto-list")),
    (choicesCryptoList = document.getElementById("choices-crypto-list2")) && (choicesCryptoLists = new Choices("#choices-crypto-list2")),
    (choicesCryptoList = document.getElementById("choices-crypto-list3")) && (choicesCryptoLists = new Choices("#choices-crypto-list3")),
    (choicesCryptoList = document.getElementById("choices-crypto-list4")) && (choicesCryptoLists = new Choices("#choices-crypto-list4"));


    