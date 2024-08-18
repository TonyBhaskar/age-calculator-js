const yearsSpan = document.getElementById('years-span');
const monthsSpan = document.getElementById('months-span');
const daysSpan = document.getElementById('days-span');
let date, month, year;
let timeoutId;

function calculateYear() {
    document.getElementById('day').addEventListener('input', function () {
        date = document.getElementById('day').value;
        triggerCalculation();
    });

    document.getElementById('month').addEventListener('input', function () {
        month = document.getElementById('month').value;
        triggerCalculation();
    });

    document.getElementById('year').addEventListener('input', function () {
        year = document.getElementById('year').value;

        // Assume year >= 0 and < 100 are 1900-1999 or 2000-2099
        if (year.length === 2) {
            year = year > 30 ? `19${year}` : `20${year}`;
        }

        triggerCalculation();
    });
}

function triggerCalculation() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleInput, 1000);
}

function handleInput() {
    if (date && month && year) {
        printDiffs();
    }
}

function printDiffs() {
    const today = new Date();
    const birthDate = new Date(year, month - 1, date);

    let yearsDiff = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();
    let daysDiff = today.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        yearsDiff--;
        monthsDiff += 12;
    }

    if (daysDiff < 0) {
        monthsDiff--;
        daysDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    yearsSpan.textContent = yearsDiff;
    monthsSpan.textContent = monthsDiff;
    daysSpan.textContent = daysDiff;
}

calculateYear();
