// "use strict"
// const $popOverlay = $(".popup-overlay");
// const $popWindow = $(".popWindow");
// const $popupMainWindow = $(".popup-main-window");
// const $popThankYouWindow = $(".thank-you-window");
// const $popClose = $(".close-btn");
// const $popOpen = $("#for-popup-form");

// $(function() {
// $popClose.on("click", function() {
// history.replaceState(null, null, ' ');
// $popOverlay.fadeOut();
// $popWindow.fadeOut();
// $popThankYouWindow.fadeOut();
// });

// $(document).on("click", function(event) {
// if ($(event.target).closest($popWindow).length) return;
// history.replaceState(null, null, ' ');
// $popOverlay.fadeOut();
// $popWindow.fadeOut();
// $popThankYouWindow.fadeOut();
// event.stopPropagation();
// });

// $(".popup-form").submit(function() {
//     var th = $(this);
//     $(".popup-submit").prop('disabled', true);
//     $.ajax({
//     type: "POST",
//     url: "https://formcarry.com/s/",
//     data: th.serialize(),
//     })
//     $popupMainWindow.fadeOut();
//     $popThankYouWindow.fadeIn();
//     setTimeout(function() {
//     $(".popup-submit").prop('disabled', false);
//     th.trigger("reset");
//     }, 1000);
//     return false;
//     });
// });

// $(document).ready(function() {
// $popOpen.click(function(){
// window.location.hash = "#popup";
// $popOverlay.fadeIn();
// $popupMainWindow.fadeIn();
// return false;
// });
// });

// $(window).on('hashchange', function (event) { 
// if(window.location.hash == "#popup"){
// $popOverlay.fadeIn();
// $popupMainWindow.fadeIn();
// }
// else{
// if(window.location.hash != "#popup") {
// $popOverlay.fadeOut();
// $popupMainWindow.fadeOut();
// $popThankYouWindow.fadeOut();
// }
// }
// });

"use strict";

$(function() {
    const $popOverlay = $(".popup-overlay");
    const $popWindow = $(".popWindow");
    const $popupMainWindow = $(".popup-main-window");
    const $popThankYouWindow = $(".thank-you-window");
    const $popClose = $(".close-btn");
    const $popOpen = $("#for-popup-form");

    $popClose.on("click", function() {
        history.replaceState(null, null, ' ');
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
    });

    $(document).on("click", function(event) {
        if ($(event.target).closest($popWindow).length) return;
        history.replaceState(null, null, ' ');
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
        event.stopPropagation();
    });

    $(".popup-form").submit(function() {
        var th = $(this);
        var allFieldsFilled = true;

        // Проверяем каждое обязательное поле
        th.find("input, textarea").each(function() {
            if ($(this).prop('required') && $(this).val() === "") {
                allFieldsFilled = false;
                return false; // Прерываем цикл, если хотя бы одно поле не заполнено
            }
        });

        if (!allFieldsFilled) {
            alert("Заполните все обязательные поля!");
            return false;
        }

        $(".popup-submit").prop('disabled', true);
        $.ajax({
            type: "POST",
            url: "https://formcarry.com/s/",
            data: th.serialize(),
        });

        $popupMainWindow.fadeOut();
        $popThankYouWindow.fadeIn();

        setTimeout(function() {
            $(".popup-submit").prop('disabled', false);
            th.trigger("reset");
        }, 1000);

        return false;
    });

    $popOpen.click(function(){
        window.location.hash = "#popup";
        $popOverlay.fadeIn();
        $popupMainWindow.fadeIn();
        return false;
    });

    $(window).on('hashchange', function (event) {
        if(window.location.hash == "#popup"){
            $popOverlay.fadeIn();
            $popupMainWindow.fadeIn();
        } else {
            if(window.location.hash != "#popup") {
                $popOverlay.fadeOut();
                $popupMainWindow.fadeOut();
                $popThankYouWindow.fadeOut();
            }
        }
    });
});