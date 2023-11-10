/*jslint browser: true*/ /*global $*/
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
        const allFieldsFilled = true;

        th.find("input, textarea").each(function () {
            if ($(this).prop("required") && $(this).val() === "") {
                allFieldsFilled = false;
                return false;
            }
        });

        if (!allFieldsFilled) {
            alert("Заполните все обязательные поля!");
            return false;
        }

        console.log("Form Full Name:", document.getElementById("formFullName"));
        console.log("Form Email:", document.getElementById("formEmail"));
        console.log("Form Phone:", document.getElementById("formPhone"));
        console.log("Form Organization:", document.getElementById("formOrganization"));
        console.log("Form Message:", document.getElementById("formMessage"));
        console.log("Form Checkbox:", document.getElementById("formCheckbox"));
        
        const formData = {
            name: document.getElementById("formFullName").value,
            email: document.getElementById("formEmail").value,
            phone: document.getElementById("formPhone").value,
            organization: document.getElementById("formOrganization").value,
            message: document.getElementById("formMessage").value,
            agree: document.getElementById("formCheckbox").checked,
        };

        console.log(formData);
        const slapform = new Slapform();
        slapform
        .submit({
            form: "f1WLJpeLO",
            data: formData,
        })
        .then(function (response) {
            console.log("Success", response);
        })
        .catch(function (e) {
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