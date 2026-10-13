const Certificates = () => {
    const documents = document.getElementById('documents');
    const overlay = document.querySelector('.overlay');

    if (!documents || !overlay) return;

    const closeCertificate = () => {
        document.querySelector('.images-block')?.remove();
        overlay.style.display = 'none';
    };

    documents.addEventListener('click', (e) => {
        const link = e.target.closest('a.sertificate-document');

        if (!link) return;

        e.preventDefault();

        closeCertificate();

        const imageUrl = link.href;
        const imageBlock = document.createElement('div');
        const image = document.createElement('img');

        imageBlock.classList.add('images-block');
        image.src = imageUrl;
        image.alt = 'Сертификат';
        imageBlock.append(image);
        document.body.append(imageBlock);

        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', closeCertificate);
};

export default Certificates;
