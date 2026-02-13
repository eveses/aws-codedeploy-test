// 현재 시간을 표시하는 간단한 코드
const timeElement = document.getElementById('time');
const updateClock = () => {
    const now = new Date();
    timeElement.innerText = `마지막 확인 시간: ${now.toLocaleTimeString()}`;
};
setInterval(updateClock, 1000);
updateClock();
