document.getElementById('unitConverterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const value = parseFloat(document.getElementById('valueInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Validate input value
    if (isNaN(value)) {
        alert('Please enter a valid number.');
        return;
    }

    let convertedValue;
    let fromUnitSymbol;
    let toUnitSymbol;

    const unitSymbols = {
        meters: "m",
        kilometers: "km",
        grams: "g",
        kilograms: "kg",
        celsius: "°C",
        fahrenheit: "°F"
    };

    fromUnitSymbol = unitSymbols[fromUnit];
    toUnitSymbol = unitSymbols[toUnit];

    if (fromUnit === 'meters' && toUnit === 'kilometers') {
        convertedValue = value / 1000;
    } else if (fromUnit === 'kilometers' && toUnit === 'meters') {
        convertedValue = value * 1000;
    } else if (fromUnit === 'grams' && toUnit === 'kilograms') {
        convertedValue = value / 1000;
    } else if (fromUnit === 'kilograms' && toUnit === 'grams') {
        convertedValue = value * 1000;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedValue = (value * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedValue = (value - 32) * 5 / 9;
    } else if (fromUnit === toUnit) {
        convertedValue = value; // Same unit conversion
    } else {

        
        alert('Please check your conversion units and try again.');
        return;
    }

    document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);
    document.getElementById('unitSymbols').textContent = `${fromUnitSymbol} → ${toUnitSymbol}`;
});
