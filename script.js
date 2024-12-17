const unitRadios = document.querySelectorAll('input[name="unit"]');
const unitDisplay = document.createElement('p');
const topSection = document.querySelector('.units');
const valueInput = document.getElementById('value');
const convertedValue = document.getElementById('converted-value');
const clearBtn = document.getElementById('clear-btn');
const convertBtn = document.getElementById('convert-btn');

topSection.insertAdjacentElement('afterend', unitDisplay);

let selectedUnits = [];

function updateUnitDisplay() {
    if (selectedUnits.length === 2) {
        const unitNames = {
            M: "Meter",
            KM: "Kilometer",
            G: "Gram",
            KG: "Kilogram",
            C: "Celsius",
            F: "Fahrenheit"
        };
        unitDisplay.textContent = `${unitNames[selectedUnits[0]]} = ${unitNames[selectedUnits[1]]}`;
    } else {
        unitDisplay.textContent = "Select two units";
    }
}

function handleUnitSelection(event) {
    const selectedValue = event.target.value;

    if (!selectedUnits.includes(selectedValue)) {
        selectedUnits.push(selectedValue);
    }

    if (selectedUnits.length > 2) {
        const removedUnit = selectedUnits.shift();
        document.querySelector(`input[value="${removedUnit}"]`).checked = false;
    }

    updateUnitDisplay();
}

unitRadios.forEach((radio) => {
    radio.addEventListener('change', handleUnitSelection);
});

clearBtn.addEventListener('click', () => {
    valueInput.value = "";
    convertedValue.textContent = "0";
    unitDisplay.textContent = "Select two units";
    selectedUnits = [];
    unitRadios.forEach(unit => (unit.checked = false));
});

convertBtn.addEventListener('click', () => {
    if (selectedUnits.length !== 2) {
        alert("Please select exactly two units.");
        return;
    }

    const value = parseFloat(valueInput.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }

    let result;
    const conversionPair = `${selectedUnits[0]}-${selectedUnits[1]}`;

    switch (conversionPair) {
        case "M-KM":
            result = value / 1000;
            break;
        case "KM-M":
            result = value * 1000;
            break;
        case "G-KG":
            result = value / 1000;
            break;
        case "KG-G":
            result = value * 1000;
            break;
        case "C-F":
            result = (value * 9) / 5 + 32;
            break;
        case "F-C":
            result = (value - 32) * 5 / 9;
            break;
        default:
            alert("Please check your conversion units and try again.");
            return;
    }

    convertedValue.textContent = result.toFixed(2);
});
