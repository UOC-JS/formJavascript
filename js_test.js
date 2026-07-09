(function () {
  function normaliseText(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function findSelectByLabel(labelText) {
    const targetLabel = normaliseText(labelText);

    const controls = document.querySelectorAll('[data-role="control"]');

    for (const control of controls) {
      const label = control.querySelector('[data-role="label"]');
      const select = control.querySelector("select");

      if (!label || !select) continue;

      const currentLabel = normaliseText(label.innerText || label.textContent || "");

      if (currentLabel === targetLabel) {
        return select;
      }
    }

    return null;
  }

  function setSelectValue(select, value) {
    if (!select || !value) return;

    const normalisedValue = normaliseText(value);

    const matchingOption = Array.from(select.options).find(function (option) {
      return (
        normaliseText(option.value) === normalisedValue ||
        normaliseText(option.textContent) === normalisedValue
      );
    });

    if (!matchingOption) {
      console.warn("No matching option found for:", value);
      return;
    }

    select.value = matchingOption.value;

    select.dispatchEvent(new Event("input", { bubbles: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));

    console.log("Dropdown set to:", matchingOption.value);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const losValue = getUrlParam("los");
    const losField = findSelectByLabel("Level of Study");

    if (!losField) {
      console.warn("Level of Study dropdown not found");
      return;
    }

    setSelectValue(losField, losValue);
  });
})();
