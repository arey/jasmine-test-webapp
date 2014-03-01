function refreshPasswordStrength(newPassword)
{
    var len = newPassword.length,
        passwordIndicator = $('.password-strength');
    if (len < 6) {
        passwordIndicator.addClass('error')
                         .text('too short');
    } else {
        passwordIndicator.removeClass('error')
                         .text('ok');
    }
}