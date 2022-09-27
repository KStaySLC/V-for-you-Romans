const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const container = $("#container")



function displayHours() {
    for (let i = 0; i < hours.length; i++) {
        let hour = hours[i]
        
        let row = $("<div class='row'>")

        let hrsColumn = $("<div class='col-sm-2'>")
        
        hrsColumn.append(hour)
        row.append(hrsColumn)
        container.append(row)

    }
}
displayHours(); console.log('rows')




const saveBtn = $(".saveBtn");

$(document).ready(function() {
    let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(date);

function currentTime () {
    const current = moment().hours()
    const time = $(".time-block");
    time.each(function() {
        let hourId = parseInt($(this).attr("id"))
        if (hourId === current) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (current > hourId) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }      
    })
};
currentTime();

saveBtn.on("click", function(event) {
    event.preventDefault();
    let parentElement = $(this).parent().attr("id");
    let description = $(this).siblings(".col-sm-10").val().replace(parentElement);
    
    localStorage.setItem(parentElement, JSON.stringify(description));
});

$("#9 textarea").val(JSON.parse(localStorage.getItem("9")));
$("#10 textarea").val(JSON.parse(localStorage.getItem("10")));
$("#11 textarea").val(JSON.parse(localStorage.getItem("11")));
$("#12 textarea").val(JSON.parse(localStorage.getItem("12")));
$("#13 textarea").val(JSON.parse(localStorage.getItem("13")));
$("#14 textarea").val(JSON.parse(localStorage.getItem("14")));
$("#15 textarea").val(JSON.parse(localStorage.getItem("15")));
$("#16 textarea").val(JSON.parse(localStorage.getItem("16")));
$("#17 textarea").val(JSON.parse(localStorage.getItem("17")));

});