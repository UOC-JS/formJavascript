(function () {

console.log("Custom 123FormBuilder script loaded - Message");
  
console.log("Custom 123FormBuilder script loaded - Variable");
  
  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const los = params.get("los");

    if (!los) return;

    const losField = document.querySelector('select[name="Level of Study"]');

    if (losField) {
      losField.value = los;
      losField.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
})();
