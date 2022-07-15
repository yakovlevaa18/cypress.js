
describe('Тестирование staya', function () {
    
    it('Проверка успешной авторизации на сайте', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.contains('Вход');
        cy.get('.auth-form > form > [type="email"]').type('yna18101999@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('qwertyy54321');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')
         })
})

describe('Тестирование staya', function () {
    it('Проверка авторизации при вводе неправильного пароля', function () {
	    cy.visit('https://staya.dog/');
	    cy.get('.header-bottom__right--link').click();
        cy.contains('Вход');
        cy.get('.auth-form > form > [type="email"]').type('yna18101999@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('qwertyy54333');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.')
         })
})

