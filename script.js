const factorInput = document.querySelector("#factor");
const resultItems = document.querySelectorAll("[data-multiple]");
const calculationStatus = document.querySelector("#calculation-status");

if (factorInput && calculationStatus) {
  factorInput.addEventListener("input", () => {
    const factor = Number(factorInput.value);

    if (!Number.isInteger(factor) || factor < 1 || factor > 1000) {
      resultItems.forEach((item) => {
        item.textContent = "—";
      });
      calculationStatus.textContent = "Zadej celé číslo od 1 do 1000.";
      return;
    }

    resultItems.forEach((item, index) => {
      const multiplier = index + 1;
      item.textContent = `${factor} × ${multiplier} = ${factor * multiplier}`;
    });
    calculationStatus.textContent = `Výsledky pro číslo ${factor}:`;
  });
}

const switchButton = document.querySelector("#transistor-switch");
const switchStatus = document.querySelector("#switch-status");
const switchLoad = document.querySelector("#switch-load");

if (switchButton && switchStatus && switchLoad) {
  switchButton.addEventListener("click", () => {
    const isOn = switchButton.getAttribute("aria-pressed") !== "true";
    switchButton.setAttribute("aria-pressed", String(isOn));
    switchButton.textContent = `Vstupní signál: ${isOn ? "1 (zapnout)" : "0 (vypnout)"}`;
    switchStatus.textContent = `Vstup ${isOn ? "1" : "0"} → tranzistor ${isOn ? "vede proud" : "nevede proud"} → zátěž ${isOn ? "zapnutá" : "vypnutá"}.`;
    switchLoad.setAttribute("fill", isOn ? "#f2c94c" : "#ffffff");
  });
}
