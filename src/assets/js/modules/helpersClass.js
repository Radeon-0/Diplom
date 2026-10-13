export class CaruselSlider {

    constructor(container, options = {}) {
        this.container = document.querySelector(container);
        this.options = options;

        this.slides = this.container.querySelectorAll(this.options.classItem);

        this.prevButton = document.querySelector(this.options.prevButton);

        this.nextButton = document.querySelector(this.options.nextButton);

        this.currentSlide = 0;
        this.slidesPerView = this.getSlidesPerView();
    }

    init() {
        this.setEvents();
        this.update();
    }

    getSlidesPerView() {

        let slidesPerView = this.options.slidesPerView || 1;

        const breakpoints = this.options.breakpoints || {};

        for (const breakpoint in breakpoints) {


            if (window.innerWidth <= breakpoint) {
                slidesPerView = breakpoints[breakpoint].slidesPerView;

            }

        }

        return slidesPerView;
    }
    getMaxSlide() {
        return Math.max(0, this.slides.length - this.slidesPerView);
    }
    next() {
        const maxSlide = this.getMaxSlide();

        this.currentSlide = Math.min(this.currentSlide + this.slidesPerView, maxSlide);

        this.update();
    }

    prev() {
        this.currentSlide = Math.max(0, this.currentSlide - this.slidesPerView);

        this.update();
    }

    update() {
        const slideWidth = this.slides[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(this.container).columnGap) || 0;

        this.container.style.transform = `translateX(-${this.currentSlide * (slideWidth + gap)}px)`;
    }

    setEvents() {

        this.nextButton.addEventListener('click', () => {
            this.next();
        });

        this.prevButton.addEventListener('click', () => {
            this.prev();
        });

        window.addEventListener('resize', () => {

            this.slidesPerView = this.getSlidesPerView();

            const maxSlide = this.slides.length - this.slidesPerView;

            if (this.currentSlide > maxSlide) {
                this.currentSlide = maxSlide;
            }

            this.update();
        });
    }
}

export class CreateModal {
    constructor(config = {}) {
        this.modal = document.querySelector(config.modalSelector);
        this.closeButton = this.modal?.querySelector(config.closeButtonSelector);
        this.overlay = document.querySelector(config.overlaySelector);
        this.openButtons = document.querySelectorAll(config.openButtonSelector);
    }

    openModal = () => {
        this.modal.style.display = 'block';
        this.overlay.style.display = 'block';
    };

    closeModal = () => {
        this.modal.style.display = 'none';
        this.overlay.style.display = 'none';
    };

    init() {
        this.openButtons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                this.openModal();
            });
        });

        this.closeButton?.addEventListener('click', this.closeModal);
        this.overlay?.addEventListener('click', this.closeModal);
    }
}