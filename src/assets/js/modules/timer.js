
const countdownTimer = (dataEnd) => {
    const timers = document.querySelectorAll('.countdown');

    timers.forEach(timer => {
        const daysElement = timer.querySelector('.count_1 span');
        const hoursElement = timer.querySelector('.count_2 span');
        const minutesElement = timer.querySelector('.count_3 span');
        const secondsElement = timer.querySelector('.count_4 span');

        let ElemetTimer = [];
        ElemetTimer.push(daysElement,hoursElement,minutesElement,secondsElement);

        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            return;
        }

        //const endTime = new Date(timer.dataset.end).getTime();

        const endTime = new Date(dataEnd).getTime();

        if (Number.isNaN(endTime)) return;

        const updateTimer = () => {
            const time = Math.max(0,Math.floor((endTime - Date.now()) / 1000));

            const values = [Math.floor(time / 86400),Math.floor((time % 86400) / 3600),Math.floor((time % 3600) / 60),time % 60];

            ElemetTimer.forEach((element, index) => {
                element.textContent = String(values[index]).padStart(2, '0');
            });

            if (time <= 0) {
                clearInterval(interval);
            }
        };

        updateTimer();

        const interval = setInterval(updateTimer, 1000);
    });
};

export default countdownTimer;
