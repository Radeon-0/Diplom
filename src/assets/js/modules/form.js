
const actionForm = () => {
    const forms = document.querySelectorAll(
        'form[name="action-form"]'
    );

    forms.forEach(form => {
        form.addEventListener('input', (event) => {
            const input = event.target;

            if (input.name === 'fio') {
                input.value = input.value.replace(
                    /[^А-Яа-яЁёA-Za-z\s-]/g,
                    ''
                );
            }

            if (input.name === 'phone') {
                let value = input.value.replace(/[^\d+()\s-]/g, '');

                const hasPlus = value.startsWith('+');
                value = value.replace(/\+/g, '');

                let count = 0;

                value = value.replace(/\d/g, digit => {
                    if (count >= 16) return '';

                    count++;
                    return digit;
                });

                input.value = (hasPlus ? '+' : '') + value;
            }
        });

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            const fio = (formData.get('fio') || '').trim();
            const phone = (formData.get('phone') || '').trim();
            const page = formData.get('page');

            const namePattern =
                /^[А-Яа-яЁёA-Za-z]+(?:[ -][А-Яа-яЁёA-Za-z]+)*$/;

            const phonePattern = /^\+?[0-9()\s-]+$/;
            const digits = phone.replace(/\D/g, '');

            if (!fio || !phone) {
                alert('Заполните все поля!');
                return;
            }

            if (!namePattern.test(fio)) {
                alert('Проверьте правильность имени!');
                return;
            }

            if (!phonePattern.test(phone) || digits.length === 0 || digits.length > 16) {
                alert('Проверьте правильность номера телефона!');
                return;
            }

            const data = {
                fio,
                phone,
                page
            };

            const calcTotal = document.getElementById('calc-total');

            if (calcTotal && calcTotal.value !== '') {
                data['calc-total'] = Number(calcTotal.value);
            }

            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                );

                if (!response.ok) {
                    throw new Error('Ошибка отправки формы');
                }

                alert('Заявка успешно отправлена!');
                form.reset();

            } catch (error) {
                console.error(error);
                alert('Не удалось отправить заявку. Попробуйте позже.');
            }
        });
    });
};

export default actionForm;
