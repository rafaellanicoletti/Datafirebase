// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFUM969amA_yoxOy4wzBuoHJF3Kw4GDNs",
    authDomain: "loginform2-6b2bb.firebaseapp.com",
    databaseURL: "https://loginform2-6b2bb.firebaseio.com",
    projectId: "loginform2-6b2bb",
    storageBucket: "loginform2-6b2bb.appspot.com",
    messagingSenderId: "351574340721",
    appId: "1:351574340721:web:0842a607cd1fd5f3"
};

firebase.initializeApp(firebaseConfig);

var employer= "";
var role= "";
var date= 0; 
var monthlyRate= 0;

$("#addUser").on("click",function(){
    event.preventDefault();
    employer = $("#employerNameInput").val().trim();
    role = $("#roleInput").val().trim();
    date = $("#startDateInput").val().trim();
    monthlyRate = $("#monthlyRateInput").val().trim();

    firebase.database().ref().set({
        employer:employer,
        role:role,
        date:date,
        monthlyRate:monthlyRate,
    })

})

firebase.database().ref().on("value", function (snapshot) {
    $("#employerDisplay").html(snapshot.val().employer);
    $("#roleDisplay").html(snapshot.val().role);
    $("#startDisplay").html(snapshot.val().date);
    // $("#monthsDisplay").html(snapshot.val().comment);
    $("#monthlyDisplay").html(snapshot.val().monthlyrate);
    // $("#totalDisplay").html(snapshot.val().comment);
})





