// CONTROLLER FUNCTION(S)
// Get UI values
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // convert to Numbers
    fizzValue = Number(fizzValue);
    buzzValue = Number(buzzValue);

    // call generateNumbers for items list, 0 to 100;
    let numbers = generateNumbers(0,100);

    if (validateInput(fizzValue, buzzValue)) {
        // call calcFizzBuzz results
        let results = calculateFizzBuzz(fizzValue,buzzValue,numbers);

        // call displayResults
        displayResults(numbers, results);
    }
}


// LOGIC FUNCTION(S)
// Generate number array
function generateNumbers(sValue, eValue) {
    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

// Calc FizzBuzz
function calculateFizzBuzz(fValue, bValue, numbersArray) {
    let results = [];
    let result = "";

    for (let index = 0; index < numbersArray.length; index++) {
        result = "";

        if (numbersArray[index] % fValue == 0) {
            result += "Fizz";
        }

        if (numbersArray[index] % bValue == 0) {
            result += "Buzz";
        }

        results.push(result);
    }

    return results;
}


// Validate input
function validateInput(fValue, bValue) {
    let output = true;

    if (!Number.isInteger(fValue) || !Number.isInteger(bValue)) {
        alert("You must enter integers!")
        output = false;
    }

    if (fValue < 1 || fValue > 100) {
        alert("Enter a Fizz Value from 1 to 100!")
        output = false;
    }

    if (bValue < 1 || bValue > 100) {
        alert("Enter a Buzz Value from 1 to 100!")
        output = false;
    }

    return output
}


// VIEW FUNCTION(S)
// Display results
function displayResults(numbers, results) {
    // get the table body element from the page
    let tableBody = document.getElementById("results");
    // get the template row
    let templateRow = document.getElementById("fbTemplate");
    // clear the table first
    tableBody.innerHTML="";

    for (let index = 1; index < numbers.length; index++) {  
        let num = numbers[index];
        let result = results[index];
        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].textContent = num;
        rowCols[1].textContent = result;
        // can't add an empty string as a class
        if (result != "") {
            rowCols[1].classList.add(result);
        }
        
        tableBody.appendChild(tableRow);
    }
}