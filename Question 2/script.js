var message;

if(confirm("Do you want to confirm our terms and condition?") == true) {
    message = "Welcome to our site!Hope you have great time here";
}else {
    message = "Thanks for visiting our site!";
}
alert(message);