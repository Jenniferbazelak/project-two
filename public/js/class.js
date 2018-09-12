

$(document).ready(function () {

    var API = {
        createClass: function (newClass) {
            return $.ajax({
                type: "POST",
                url: "api/class",
                data: newClass
            });
        },
        getClasses: function () {
            return $.ajax({
                url: "api/classes",
                type: "GET"
            });
        },
        getClass: function () {
            var id = $(this).data("id");
            return $.ajax({
                url: "api/class/" + id,
                type: "GET"
            });
        },
        addStudent: function (id) {
            return $.ajax({
                type: "POST",
                url: "api/register/" + id 
            });
        },
    };

    //this handles on click for registration
    var handleRegistration = function (event) {
        event.preventDefault();
        var classID = $("#regbutton").attr("data-id");

        API.addStudent(classID)
    };

//   handleNewClassSubmit is called whenever the create a class is clicked
//   Save the new example to the db and refresh the list

var handleNewClassSubmit = function (event) {
    
    event.preventDefault();

    var newClass = {
        title: $("#title-input").val().trim(),
        instructor: $("#instructor-input").val().trim(),
        description: $("#description-input").val().trim(),
        date: $("#date-input").val().trim(),
        starttime: $("#starttime-input").val().trim(),
        endtime: $("#endtime-input").val().trim(),
        location: $("#location-input").val().trim(),
        maxStudents: $("#spaces-input").val().trim(),
        price: $("#price-input").val().trim(),
        photo: $("#photo-input").val().trim(),
        category: $("#category-input").val()
    };

    if (!(
        newClass.title &&
        newClass.description &&
        newClass.instructor &&
        newClass.category &&
        newClass.date &&
        newClass.starttime &&
        newClass.endtime &&
        newClass.location &&
        newClass.maxStudents &&
        newClass.price &&
        newClass.photo &&
        newClass.category)) {
        alert("You must enter all information!");
        return;
    }

    API.createClass(newClass)

    $("#title-input").val("");
    $("#description-input").val("");
    $("#instructor-input").val("");
    $("#date-input").val("");
    $("#starttime-input").val("");
    $("#endtime-input").val("");
    $("#location-input").val("");
    $("#spaces-input").val("");
    $("#price-input").val("");
    $("#photo-input").val("");
    $("#category-input").val("");
};





// Add event listeners to the submit and more info buttons
$(".createclass-btn").on("click", handleNewClassSubmit);
    //add onclick for registration
    $("#regbutton").on("click",function(){
//go to sign-up page
//have the page populate with the class info
//and have a pay now button
//when click on pay now button follow the handleRegistration

        handleRegistration
    });
});