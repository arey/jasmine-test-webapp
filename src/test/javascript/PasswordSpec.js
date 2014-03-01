// Thanks to http://denrox.com/blog/javascript/testing-jquery-ajax-with-jasmine
describe('password validation label', function () {
    var passwordLabel;
    beforeEach(function () {
        setFixtures('<div class="password-strength"></div>');
        passwordLabel = $('.password-strength');
    });
    it('should become red when password is too short', function () {
        refreshPasswordStrength('5char');
        expect(passwordLabel).toHaveClass('error');
        expect(passwordLabel).toHaveText('too short');
    });
    it('should be green when password length is more then 6 symbols', function () {
        refreshPasswordStrength('5chars');
        expect(passwordLabel).not.toHaveClass('error');
        expect(passwordLabel).toHaveText('ok');
    })
})