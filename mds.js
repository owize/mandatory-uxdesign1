const mds = {
  textField: function(element) {
    element.addEventListener("change", function() {
      if (this.value.length > 0) {
        this.classList.add("mds-text-field__input--value");
      } else {
        this.classList.remove("mds-text-field__input--value");
      }
    });
  },
  switch: function(element) {},
  checkbox: function(element) {},
  radioButton: function(element) {}
};

mds.textField(document.querySelector(".mds-text-field__input"));
