const smoothScroll = () => {
    const button = document.querySelector('.smooth-scroll');
    const firstSection = document.getElementById('offer');

    if (!button || !firstSection) return;

    const toggleButton = () => {
        button.style.display =
            firstSection.getBoundingClientRect().bottom < 0 ? 'block' : 'none';
    };

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', toggleButton);
    toggleButton();
};

export default smoothScroll;
