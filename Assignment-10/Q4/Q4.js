document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiplicationForm');
    const tableOutput = document.getElementById('tableOutput');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const number = document.getElementById('numberInput').value;
        let tableHTML = '<table>';
        tableHTML += '<tr><th>Number</th><th>Multiplication</th><th>Result</th></tr>';

        for (let i = 1; i <= 10; i++) {
            tableHTML += `<tr>
                            <td>${number}</td>
                            <td>${i}</td>
                            <td>${number * i}</td>
                          </tr>`;
        }

        tableHTML += '</table>';
        tableOutput.innerHTML = tableHTML;
    });
});