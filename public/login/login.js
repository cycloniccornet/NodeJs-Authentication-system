$(document).on('click', 'button', function () {
    console.log("Function called")

    $('.active').removeClass('active');
    $(this).addClass('active');

    const className = this.innerHTML;
    $('.main-info-' + className).addClass('active');
});

function changeToSignupForm() {
    console.log('swap to signup function called')
    $('.active').removeClass('active');
    $('#signup-form').addClass('active')
}

function changeToLoginForm() {
    console.log('swap to login function called')
}