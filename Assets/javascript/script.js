//Global variable
let currentDay;

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

        let textAreaInput = $(this).siblings(".description").val();//Storing the input from textarea to a variable
        // console.log(scheduleInputs)

        let textAreaHour = $(this).siblings(".description").attr("id");
        console.log(inputsLocation)

        localStorage.setItem(textAreaHour, textAreaInput);
    });

    //Calling the textAreaColor function to execute
    textAreaColor();
});