var d1 = document.getElementById('date').value;
var m1 = document.getElementById("month").value;
var y1 = document.getElementById("year").value;

function age() {
    // Clear the result from the previous calculation
    document.getElementById('age').innerHTML = '';

    // Get values from inputs
    var d1 = parseInt(document.getElementById("date").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);

    // Validate inputs
    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        document.getElementById('age').innerHTML = 'Please enter a valid date.';
        return;
    }

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || (y2 % 400 === 0)) {
        month[1] = 29; // February has 29 days in a leap year
    }

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}

function clearFields() {
    // Clear input fields
    document.getElementById("date").value = '';
    document.getElementById("month").value = '';
    document.getElementById("year").value = '';

    // Clear the result display
    document.getElementById("age").innerHTML = '';
}
