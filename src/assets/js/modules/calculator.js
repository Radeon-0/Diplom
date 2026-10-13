const balconyCalculator = () => {
    const type = document.getElementById('calc-type');
    const material = document.getElementById('calc-type-material');
    const area = document.getElementById('calc-input');
    const total = document.getElementById('calc-total');

    if (!type || !material || !area || !total) return;

    const calculate = () => {
        const areaValue = Number(area.value);
        const typeValue = Number(type.value);
        const materialValue = Number(material.value);

        if (!area.value || areaValue <= 0 || !type.value || !material.value) {
            total.value = '';
            return;
        }

        total.value = (areaValue * typeValue * materialValue).toFixed(2);
    };

    area.addEventListener('input', () => {
        area.value = area.value.replace(/\D/g, '');
        calculate();
    });

    type.addEventListener('change', calculate);
    material.addEventListener('change', calculate);
};

export default balconyCalculator;
