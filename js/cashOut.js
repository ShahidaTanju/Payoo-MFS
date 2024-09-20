document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut);

    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(pinNumber);

    if (pinNumber === '1234') {
        console.log('money is reducing');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        const balanceNumber = parseFloat(balance);
        const cashoutNumber = parseFloat(cashOut);

        const newBalance = balanceNumber - cashoutNumber;

        document.getElementById('account-balance').innerText = newBalance;


    }
    else {
        alert('Failed to cash out.please try again');
    }
});