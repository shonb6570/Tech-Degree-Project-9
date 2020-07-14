// <--------          Variables           ---------> //

    //alert banner selectors
const alertBanner = document.getElementById('alert');
    //alert scroll function selectors
const sticky = alertBanner.offsetTop;

    //chart/graph selectors
let trafficCanvas = document.getElementById('traffic-chart');
let dailyCanvas = document.getElementById('daily-chart');
let mobileCanvas = document.getElementById('mobile-graph');

    // traffic chart data, label data & selectors
const trafficDataHourly = [8, 7, 5, 8, 10, 14, 18, 24, 34, 36, 28, 22, 18, 9];
const trafficDataDaily = [110, 140, 129, 200, 180, 217, 256, 209, 280, 290, 314, 300, 380, 340];
const trafficDataWeekly = [ 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
const trafficDataMonthly = [5000, 6350, 8100, 8400, 8004, 7100];

const trafficHourlyLabel = ["10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM" ];
const trafficDailyLabel = [ "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7", "3/8", "3/9", "3/10", "3/11", "3/12", "3/13", "3/14"];
const trafficWeeklyLabel = [ "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ];
const trafficMonthlyLabel = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG"];

const hourlyBtn = document.getElementById('hourly');
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

const trafficBtnDiv = document.querySelector(".traffic-header");
const trafficBtns = trafficBtnDiv.getElementsByClassName("btn");

let dataPeriod = trafficDataWeekly;
let dataLabel = trafficWeeklyLabel;

    // drop-down selectors
const dropDown = document.getElementById("myDropdown");
const bellIcon = document.getElementById("bellIcon");
const closeBtn = document.querySelectorAll(".close-content");

    //messaging selectors 
const user = document.getElementById("autoComplete");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

    //local storage selectors
const togBtn1 = document.getElementById("togBtn1");
const togBtn2 = document.getElementById("togBtn2");
const timezone = document.getElementById("timezone");

    //local storage setting array
const storageSettings = [];


// <--------          Drop-down messages               ---------> //

/* toggle content */

bellIcon.addEventListener('click', e => {
    const element = e.target;
        if (dropDown.classList.contains("hidden")){
            dropDown.classList.remove("hidden")
        }
        dropDown.classList.toggle("show");
});

// /* Close the dropdown menu if the user clicks outside of it */

// window.addEventListener('click', e => {
//     const element = e.target;
//     if(element != bellIcon && element != closeBtn && element != dropDown) {
//         dropDown.classList.add("hidden");
//     }
// });
  

// <--------          Alert banner                     ---------> //

/*create html for banner*/
alertBanner.innerHTML =
    `<div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks left to complete</p>
        <p class="alert-banner-close">x</p>
    </div>`;

/*click function to close message*/
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});


// Execute stickyDiv on scroll
window.onscroll = function() {stickyDiv()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyDiv() {
  if (window.pageYOffset > sticky - 113) {
    alertBanner.classList.add("sticky");
  } else {
    alertBanner.classList.remove("sticky");
  }
}


// <--------          Line chart                       ---------> //


const trafficData = {
    labels: dataLabel,
    datasets: [
        {
        data: trafficDataWeekly,
        pointBackgroundColor: 'rgba(255, 255, 255,1)',
        pointBorderColor: 'rgba(116, 119, 191,1)',
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBorderColor: 'rgba(129, 201, 143,1)',
        pointHoverBorderWidth: 2,
        borderWidth: 1,
        backgroundColor: 'rgba(116,119,191,.3)',
        borderWidth: 1,
        },
    ]
};

//options
const trafficOptions = {
    aspectRatio: 2.5,
    elements: {
        line: {
          tension: 0,
        }
      },
    animation: {
        duration: 1000,
        easing: 'easeInOutCubic'
    },
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true,
                beginAtZero: true,
            },
            offset: false,   
            ticks: {
                fontFamily: "'Raleway', sans-serif", 
                fontColor: '#3a3a3a', 
                fontStyle: '500'
            },                
        }],
        yAxes: [{
            gridLines: {
                offsetGridLines: true,
                beginAtZero: false
            },
            offset: false,
            ticks: {
                stepSize: 500,
                fontFamily: "'Raleway', sans-serif", 
                fontColor: '#3a3a3a', 
                fontStyle: '300'
            }
        }]
    },
    legend: {
        display: false,
    }
};

//create line chart function
const trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


// update line chart function

    //hourly button
    hourlyBtn.addEventListener('click', e => {
        dataPeriod = trafficDataHourly;
        dataLabel = trafficHourlyLabel;
        updateChart();
    });

    //daily button
    dailyBtn.addEventListener('click', e => {
        dataPeriod = trafficDataDaily;
        dataLabel = trafficDailyLabel;
        updateChart();
    });

    //weekly button
    weeklyBtn.addEventListener('click', e => {
        dataPeriod = trafficDataWeekly;
        dataLabel = trafficWeeklyLabel;
        updateChart();
    });

    //monthly button
    monthlyBtn.addEventListener('click', e => {
        dataPeriod = trafficDataMonthly;
        dataLabel = trafficMonthlyLabel;
        updateChart();
    });


    //highlight button function for traffic chart 

    // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < trafficBtns.length; i++) {
            trafficBtns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }



function updateChart() {
    chart = trafficChart;
    chart.data.datasets[0].data = dataPeriod;
    chart.data.labels = dataLabel;
    chart.update();
};

// <--------          Bar graph                        ---------> //


const dailyData = {
    labels:  ["SU", "M", "T", "W", "TH", "F", "S"],
    datasets: [
        {
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        barThickness: 14,
        backgroundColor: '#7477BF',
        borderWidth: 1,
        }
    ]
};

//options


const dailyOptions = {
    scales: {
        yAxes: [{
            gridLines: {
                offsetGridLines: true
            },
            ticks: {    
                stepSize : 50,
                fontFamily: "'Raleway', sans-serif", 
                fontColor: '#3a3a3a', 
                fontStyle: '500'
            }
        }],
        xAxes: [{
            ticks: {    
                stepSize : 50,
                fontFamily: "'Raleway', sans-serif", 
                fontColor: '#3a3a3a', 
                fontStyle: '500'
            }
        }]
    },
    legend: {
        display: false,
    }
};

//create bar graph function
const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// <--------          Donut chart                      ---------> //

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [
        {
        label: '# of users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor:  [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
        }
    ]
};

//options

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth:  20,
            fontFamily: "'Raleway', sans-serif", 
            fontColor: '#3a3a3a', 
            fontStyle: '500'
        }
    }
};

//create donut chart function
const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// <--------          messaging function                ---------> //

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});


// <--------          local storage function                ---------> //

function save(){
    storageSettings.push(togBtn1.checked);
    storageSettings.push(togBtn2.checked);
    storageSettings.push(timezone.value);
    localStorage.setItem('settings', JSON.stringify(storageSettings));
}

function load(){    
    let checked = JSON.parse(localStorage.getItem('settings'));
    togBtn1.checked = checked[0];
    togBtn2.checked = checked[1];
    timezone.value = checked[2];
}

function clearSettings(){
    location.reload();
    localStorage.clear()
}