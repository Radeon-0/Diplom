
import {CaruselSlider} from './helpersClass';
const Slider = () => {



    const slider = new CaruselSlider('.benefits-wrap', {

        classItem: '.benefits__item',

        slidesPerView: 3,

        breakpoints: {
            576: {
                slidesPerView: 1
            }
        },

        prevButton: '.benefits__arrow--left',
        nextButton: '.benefits__arrow--right'

    });

    slider.init();



    const sliderUslugi = new CaruselSlider('.slider--services', {

        classItem: '.service-block',

        slidesPerView: 2,

        breakpoints: {
            576: {
                slidesPerView: 1
            }
        },

        prevButton: '.services__arrow--left',
        nextButton: '.services__arrow--right'

    });

    sliderUslugi.init();




}
export default Slider