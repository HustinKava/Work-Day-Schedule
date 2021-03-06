//JQuery will detect the readiness of the page and will only manipulate the page when it is ready
$(document).ready(function () {

    //Storing the current time hour in a variable called hour so we can reference it in the if else statements
    const hour = moment().hours();

    //Setting the html element with the id of currentDay to display todays date
    currentDay = $('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do'));


    //Function to apply background color depending on the hour
    const textAreaColor = () => {

        //This function will target the html element textarea
        $("textarea").each(function () {

            let rowHour = $(this).attr("id");//Stores the id of each teaxtarea element into a variable
            // console.log(rowHour)
            let rowNumber = parseInt(rowHour);//Converts rowHour to a number and stores it in a variable
            // console.log(rowNumber)

            //If else statement to check if the current time is equal to past, present or future
            if (rowNumber < hour) {
                $(this).addClass("past");//This will add the appropriate styling from css

            } else if (rowNumber > hour) {
                $(this).addClass("future");

            } else {
                $(this).addClass("present");
            }
        });
    };

    //Created a click function for the save button
    $(".saveBtn").click(function () {

        //When the save button is pressed it will refer to the values in the textarea by targeting the css class description
        textAreaInput = $(this).siblings(".description").val();//Storing the input from textarea to a variable
        // console.log(textAreaInput)

        //When the save button is pressed it will refer to the text values which are associated with the hour class
        textAreaHour = $(this).siblings(".hour").text();//Storing the hour text to a variable
        // console.log(textAreaHour)

        //Once we have stored the values we need in variables we will store a key and value to local storage
        localStorage.setItem(textAreaHour, textAreaInput);
    });

    //Making the input text persist after the page has been reloaded
    function renderStoredInputs() {

        //Here we are targeting each element with the CSS class description
        $(".description").each(function () {

            //Storing the text values from the index.html file that have the CSS class of hour into a variable
            //We can then use hourToCheck as our key when retrieving from local storage
            let hourToCheck = $(this).siblings(".hour").text();
            // console.log(hourToCheck)

            //Getting the values from local storage by passing the key
            let inputId = $(this).val(localStorage.getItem(hourToCheck));
            // console.log(inputId)
        });
    };

    //Calling the textAreaColor function to execute
    textAreaColor();
    //Calling the renderStoredInputs function so that the text will remain after the page is refreshed
    renderStoredInputs();
});