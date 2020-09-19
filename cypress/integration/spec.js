describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'When you look at the clouds, what do you see?')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /work', () => {
		cy.get('nav a').contains('work').click();
		cy.url().should('include', '/work');
	});
});