$("#hero").fadeIn(3000);

$(document).ready(function () {
    $(window).scroll(function () {
        $('.scroll').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

            if (bottom_of_screen > top_of_element) {
                $(this).css('opacity', '1');
            }
        });
    });
});


// BMI weight
$("#btn1").click(function(){
    let W = $("#kg").val();
    var H = $("#cm").val();

    var bmi= (W/(H *H))*10000
    if (bmi > 25) {
        $("#result").html("Over Weight")
    } else if( bmi < 18.5){
        $("#result").html("law Weight");
    }else{
        $("#result").html("Normal Weight");
    }
})
// 

// Contact form



$("#btn2").click(function(){
    let fname = $("#inputFname").val();
    let lname = $("#inputLname").val();
    let email = $("#inputEmail4").val();
    let pass = $("#inputPassword4").val();
    let passDiv  = " ";
    let repassDiv  = " ";
    let emailDiv = " ";

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

      if(!isEmail(email) ){

        emailDiv="Email must not contain ! - / = ? # $ % & ' * + ^ _ ` { | } ~ ";
    }

      function validatePassword(pass) {
        let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;  
        return regex.test(pass);
    }

        if(!validatePassword(pass)) {

            passDiv= "Password should contain at least one number and one special character";
            
        }

        if(pass != repassDiv){
            repassDiv="Password doesn't match"

        }

        $("#passDiv").html(passDiv);
        $("#emailDiv").html(emailDiv);
        $("#repassDiv").html(repassDiv);
    })


$(document).ready(function() {
    $('#inputPassword4').on('keyup', function() {
        var password = $(this).val();
        var strength = 0;

        // Check for minimum length
        if (password.length >= 8) {
            strength += 1;
        }

        // Check for at least one uppercase letter
        if (/[A-Z]/.test(password)) {
            strength += 1;
        }

        // Check for at least one lowercase letter
        if (/[a-z]/.test(password)) {
            strength += 1;
        }

        // Check for at least one number
        if (/[0-9]/.test(password)) {
            strength += 1;
        }

        // Check for at least one special character
        if (/[@#$%^&+=]/.test(password)) {
            strength += 1;
        }

        // Display password strength
        var strengthText = '';
        if (strength < 3) {
            strengthText = 'Weak'  ;
            $('.password-strength').css({
                "color" : "yellow",
                "font-size" : "15px",
            }) 
        } else if (strength === 3) {
            strengthText = 'Moderate';
            $('.password-strength').css({
                "color" : "blue",
                "font-size" : "15px",
            })
        } else {
            strengthText = 'Strong';
            $('.password-strength').css({
                "color" : "green",
                "font-size" : "15px",
            })
        }

        $('.password-strength').text('Password Strength: ' + strengthText);
    });
});


// list

$("#listInput").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#add").click();
    }
});

$('#add').click(function() {

    let Item = $('#listInput').val();

    if (Item !== '') {
        // Check for duplicates
        if ($(`#itemList li:contains('${Item}')`).length === 0) {
            const newItem = $('<li>').text(Item);
            $('#itemList').append(newItem);
            $('#listInput').val('');
        } else {

           $("#msg").text('Item already exists!');
        }
    }
});
const stars = document.querySelectorAll(".stars");

        stars.forEach(star => {
            star.addEventListener("click", function(){
                let rating = this.getAttribute("data-rating");
                alert("You rated this: " + rating + " stars");
                highlightStars(rating);
            });
});

        function highlightStars(rating) {
            stars.forEach(star => {
                if(star.getAttribute("data-rating") <= rating) {
                    star.style.color = "#FFD700";
                } else {
                    star.style.color = "#d5d5d5";
                }par
            });par
        
}

$(document).ready(function() {
    animateText($('.typing-text'));
});

function animateText(element) {
    var text = element.text();
    var charArray = text.split("");
    element.text("");
    
    var i = 0;
    var interval = setInterval(function() {
        element.append(charArray[i]);
        i++;
        if (i == charArray.length) {
            clearInterval(interval);
        }
    }, 100);  // Change 100 to control the speed
}

        
    

   