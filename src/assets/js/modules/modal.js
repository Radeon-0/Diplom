
import {CreateModal} from './helpersClass'
const modal = () => {
   

    const headerModal = new CreateModal({
        modalSelector: '.header-modal',
        closeButtonSelector: '.header-modal__close',
        overlaySelector: '.overlay',
        openButtonSelector: "a[href='#callback'].btn"
    });

    headerModal.init();

    const servicesModal = new CreateModal({
        modalSelector: '.services-modal',
        closeButtonSelector: '.services-modal__close',
        overlaySelector: '.overlay',
        openButtonSelector: "a[href='#application'].btn"
    });

    servicesModal.init();
};

export default modal;
