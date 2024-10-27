document.getElementById('calculate-button').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    let price = parseFloat(document.getElementById('starting-bid').value);
    const education = parseFloat(document.getElementById('education').value);
    const netWorth = parseFloat(document.getElementById('net-worth').value);
    const caste = parseFloat(document.getElementById('caste').value);
    const loveLetter = document.getElementById('love-letter').value;

    if (!name || isNaN(price)) {
        document.getElementById('result').textContent = 'Please provide both name and starting bid.';
        return;
    }

    price *= education;
    price *= netWorth;
    price += caste;

    const skills = Array.from(document.getElementsByClassName('skills'));
    price += skills
        .filter(skill => skill.checked)
        .reduce((sum, skill) => sum + parseFloat(skill.value), 0);

    const ageOptions = document.getElementsByName('age');
    ageOptions.forEach(option => {
        if (option.checked) {
            price *= parseFloat(option.value);
        }
    });

    const reputationElements = document.getElementsByClassName('reputation');
    for (let i = 0; i < reputationElements.length; i++) {
        if (reputationElements[i].checked) {
            price *= parseFloat(reputationElements[i].value);
        }
    }

    const person = {
        name: name,
        price: price.toFixed(2),
        loveLetter: loveLetter,
    };

    document.getElementById('result').innerHTML = `
        <p>Your price for <strong>${person.name}</strong> is: ${person.price}$</p>
        <p>Love Letter: ${person.loveLetter}</p>
    `;
});
