function generateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const tableResult = document.getElementById('tableResult');
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number <= 0) {
        tableResult.textContent = 'Please enter a valid positive number.';
        return;
    }

    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }

    tableResult.textContent = result;
}
