/*jslint browser: true*/ /*global $*/ /*global Slapform*/
$(function () {
    const $popOverlay = $(".popup-overlay");
    const $popWindow = $(".popWindow");
    const $popupMainWindow = $(".popup-main-window");
    const $popThankYouWindow = $(".thank-you-window");
    const $popClose = $(".close-btn");
    const $popOpen = $("#for-popup-form");

    $popClose.on("click", function () {
        window.history.replaceState(null, null, " ");
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
    });

    $(document).on("click", function (event) {
        if ($(event.target).closest($popWindow).length) {
            return;
        }
        window.history.replaceState(null, null, " ");
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
        event.stopPropagation();
    });

    $(".popup-form").submit(function () {
        const th = $(this);

        const formData = {
            agree: document.getElementById("formCheckbox").checked,
            email: document.getElementById("formEmail").value,
            message: document.getElementById("formMessage").value,
            name: document.getElementById("formFullName").value,
            organization: document.getElementById("formOrganization").value,
            phone: document.getElementById("formPhone").value
        };

        const slapform = new Slapform();
        slapform.submit({
            data: formData,
            form: "f1WLJpeLO"
        }).then(function (response) {
            console.log("Success", response);
        }).catch(function (e) {
            console.error("Fail", e);
        });

        $popupMainWindow.fadeOut();
        $popThankYouWindow.fadeIn();

        setTimeout(function () {
            $(".popup-submit").prop("disabled", false);
            th.trigger("reset");
        }, 1000);

        return false;
    });

    $popOpen.click(function () {
        window.location.hash = "#popup";
        $popOverlay.fadeIn();
        $popupMainWindow.fadeIn();
        return false;
    });

    $(window).on("hashchange", function () {
        if (window.location.hash === "#popup") {
            $popOverlay.fadeIn();
            $popupMainWindow.fadeIn();
        } else {
            if (window.location.hash !== "#popup") {
                $popOverlay.fadeOut();
                $popupMainWindow.fadeOut();
                $popThankYouWindow.fadeOut();
            }
        }
    });
});