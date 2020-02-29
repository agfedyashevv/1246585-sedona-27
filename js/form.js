    var buttonFind = document.querySelector(".button-find");
    var popup = document.querySelector(".interest-form-wrap");
    var form = popup.querySelector("form");
    var arrivalDate = popup.querySelector("[name=arrival-date]");
    var dateOfDeparture = popup.querySelector("[name=date-of-departure]");
    var adult = popup.querySelector("[name=adult]");
    var children = popup.querySelector("[name=children]");
    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("arrivalDate");
    } catch (err) {
      isStorageSupport = false;
    }

    buttonFind.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("form-error");
      popup.classList.toggle("interest-hide");

      if (storage) {
        arrivalDate.value = storage;
        dateOfDeparture.focus();
      } else {
        arrivalDate.focus();
      }
    });

    form.addEventListener("submit", function (evt) {
      if (!arrivalDate.value || !dateOfDeparture.value || !adult.value || !children.value) {
        evt.preventDefault();
        console.log("Нужно заполнить поля формы");
        popup.classList.remove("form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("form-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("arrivalDate", arrivalDate.value);
        }
      }
    });