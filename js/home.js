//add money to the account

//step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    //step-2: get money to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //step-3: get the pin number 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

});