document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const stateSelect = document.getElementById('stateSelect');

    const states = {
        USA: ['California', 'Texas', 'New York'],
        India: ['Maharashtra', 'Karnataka', 'Tamil Nadu'],
        UK: ['England', 'Scotland', 'Wales']
    };

    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        stateSelect.innerHTML = '<option value="">--Select State--</option>';

        if (states[selectedCountry]) {
            states[selectedCountry].forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    });
});