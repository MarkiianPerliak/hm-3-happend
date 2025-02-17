document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelector('[data-action="open-modal"]');
    const closeModalButton = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('.js-backdrop');
    const body = document.body;

    openModalButton.addEventListener('click', () => {
        body.classList.add('show-modal');
    });

    closeModalButton.addEventListener('click', () => {
        body.classList.remove('show-modal');
    });

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            body.classList.remove('show-modal');
        }
    });
});
