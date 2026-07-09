(function () {

console.log("Custom 123FormBuilder script loaded");
  
  document.addEventListener("DOMContentLoaded", function () {
    const sectorField = document.querySelector('select[name="messageTest"]');

    if (!sectorField) return;

    const message = document.createElement("div");
    message.style.marginTop = "10px";
    message.style.padding = "10px";
    message.style.borderRadius = "6px";
    message.style.backgroundColor = "#f3f6fa";
    message.style.display = "none";

    sectorField.parentNode.appendChild(message);

    sectorField.addEventListener("change", function () {
      const value = sectorField.value;

      if (value === "Alert") {
        message.textContent = "⚠️ This is an Alert!";
        message.style.display = "block";
      } else if (value === "Error") {
        message.textContent = "❌ You cannot select that option.";
        message.style.display = "block";
      } else {
        message.textContent = "🚩 Please be aware of something.";
        message.style.display = "none";
      }
    });
  });
})();
