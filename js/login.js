//document.getElementById('Id').addEventListener('click', fun)


//step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    //step-2 prevent default behavior(prevent reloading browser)
    event.preventDefault();
    // console.log('login button clicked');

    //step-3 get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber);

    //step-4 validate phone and pin 
    //this is temporary should not do like this way 

    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = "./home.html";
    }
    else {
        alert('Wrong phone number or pin')
    }
})

