var hr = document.getElementById("hr")
var min = document.getElementById("min")

setInterval(() => {
    var today = new Date()
    var hour = today.getHours()
    var minutes = today.getMinutes()

    if (hour < 10) {
        hour = "0" + today.getHours()
    }
    if (minutes < 10) {
        minutes = "0" + today.getMinutes()
    }

    hr.innerHTML = hour
    min.innerHTML = minutes
}, 1000)