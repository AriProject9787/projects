// List of birthdays with names and dates
const birthdays = [
    { name: 'MUTHUKUMAR V', date: new Date('Mar 26, 2025 00:00:00') },
    { name: 'AKASH M', date: new Date('Apr 12, 2025 00:00:00') },
    { name: 'MARISELVAM P', date: new Date('May 02, 2025 00:00:00') },
    { name: 'SIVABALAN S', date: new Date('Jun 14, 2025 00:00:00') },
    { name: 'DAVID JONES N', date: new Date('Jun 20, 2025 00:00:00') },
    { name: 'SHEIKANWAR K', date: new Date('Jul 05, 2025 00:00:00') },
    { name: 'Arirama Selvam M', date: new Date('Jul 08, 2025 00:00:00') },
    { name: 'VILVADURAI L', date: new Date('Aug 17, 2025 00:00:00') },
    { name: 'MATHESWARAN S', date: new Date('Aug 27, 2025 00:00:00') },
    { name: 'SRIKARAN K', date: new Date('Sep 09, 2025 00:00:00') },
    { name: 'MICHAEL SELVIN C', date: new Date('Sep 13, 2025 00:00:00') },
    { name: 'CHRISTOPHER E', date: new Date('Sep 17, 2025 00:00:00') },
    { name: 'VIGNESH B', date: new Date('Oct 30, 2025 00:00:00') },
    //{ name: 'Kalai vani A', date: new Date('Sep 12, 2025 00:00:00') },
    //{ name: 'Jesikka M', date: new Date('Jan 18, 2025 00:00:00') },
    
    
    { name: 'LINGA BHARATH M', date: new Date('Nov 01, 2025 00:00:00') },
    
    
    { name: 'SELTON C', date: new Date('Nov 16, 2025 00:00:00') },
    
    
    
    
    
   
   
    
    //{ name: 'Jesikka M', date: new Date('Jan 18, 2025 00:00:00') },
    //{ name: 'Jesikka M', date: new Date('Jan 18, 2025 00:00:00') },
    //{ name: 'Jesikka M', date: new Date('Jan 18, 2025 00:00:00') },
];



// Function to create a countdown item
function createCountdownItem(name, id) {
    const countdownItem = document.createElement('div');
    countdownItem.className = 'countdown-item';
    countdownItem.innerHTML = `
        <span>${name}'s Birthday:</span>
        <span id="countdown-${id}">
            <span id="days-${id}"></span> Days
            <span id="hours-${id}"></span> Hours
            <span id="minutes-${id}"></span> Minutes
            <span id="seconds-${id}"></span> Seconds
        </span>
    `;
    return countdownItem;
}

// Function to update the countdown for a specific birthday
function updateCountdown(birthday, id) {
    const now = new Date();
    const distance = birthday.date - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
        document.getElementById(`days-${id}`).innerHTML = days;
        document.getElementById(`hours-${id}`).innerHTML = hours;
        document.getElementById(`minutes-${id}`).innerHTML = minutes;
        document.getElementById(`seconds-${id}`).innerHTML = seconds;
    } else if (now.getDate() === birthday.date.getDate() &&
               now.getMonth() === birthday.date.getMonth() &&
               now.getFullYear() === birthday.date.getFullYear()) {
        clearInterval(countdownIntervals[id]);
        document.getElementById(`countdown-${id}`).innerHTML = `HAPPY BIRTHDAY, ${birthday.name}!`;

        const countdownsCont = document.getElementById('countdown');
        const birthdayMessage = document.createElement('div');
        birthdayMessage.className = 'birthday-message';
        birthdayMessage.innerHTML = `HAPPY BIRTHDAY, ${birthday.name}!
        <marquee behavior="scroll" direction="left" style="color: #ff5722;">
        🎉 Happy Birthday  ${birthday.name} by Arirama Selvam  🎉
    </marquee>`;
        countdownsCont.appendChild(birthdayMessage);
        setTimeout(() => {
            alert(`HAPPY BIRTHDAY, ${birthday.name}! by Arirama Selvam`);
            
        }, 5000); 

        

       



    } else {
        clearInterval(countdownIntervals[id]);
        document.getElementById(`countdown-${id}`).innerHTML = `${birthday.name}'s Birthday has passed.`;
    }
}

// Add countdown items to the DOM
const countdownsContainer = document.getElementById('countdowns');
birthdays.forEach((birthday, index) => {
    const countdownItem = createCountdownItem(birthday.name, index);
    countdownsContainer.appendChild(countdownItem);
});

// Start updating countdowns
const countdownIntervals = birthdays.map((birthday, index) => {
    return setInterval(() => {
        updateCountdown(birthday, index);
    }, 1000);
});
