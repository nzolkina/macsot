$(document).ready(function() {
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Показать PopUp
function PopUpShow() {
    $("#popup-form").show("slow");
    $("#overlay").show();
}
//Скрыть PopUp
function PopUpHide() {
    $("#popup-form, #overlay").hide();
}

//Скрыть PopUp при клике на фон
$(function() {
    $("#overlay").click(function () {$("#popup-form, #overlay").hide();});
});