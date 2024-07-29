
(function(){
    emailjs.init("pD6dSi-rtlPjTWEfA"); // Replace with your EmailJS user ID
})();

// Function to send email
function sendMail() {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validate if all fields are filled
    if (name && email && phone && message) {
        let params = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_wqtxr4t", "template_nsp9bmh", params)
            .then(function(response) {
                console.log("Email sent successfully!", response);
                alert("Email sent successfully!");
            })
            .catch(function(error) {
                console.error("Failed to send email. Error:", error);
                alert("Failed to send email. Error: " + JSON.stringify(error));
            });
    } else {
        alert("Please fill out all fields.");
    }

    return false; // Prevent page from refreshing
}

const navbar = document.getElementById("navbar");
function changebg(){
    if(window.scrollY >= 50 ){
        navbar.classList.add("scrolled") ;
    }else{
        navbar.classList.remove("scrolled") ;   
    }
    
}

window.addEventListener('scroll', changebg);

(function(){
    emailjs.init("pD6dSi-rtlPjTWEfA"); // Replace with your EmailJS user ID
})();


function sendSubscribeMail() {
    event.preventDefault();

    // Get form values
    let sname = document.getElementById("sname").value;
    let semail = document.getElementById("semail").value;

   

    // Validate if all fields are filled
    if (semail && sname) {
        let params = {
            sname : sname,
            semail: semail
        };

        // Send email using EmailJS
        emailjs.send("service_wqtxr4t","template_u8dy43a", params)
            .then(function(response) {
                console.log("Email sent successfully!", response);
                alert("Email sent successfully!");
            })
            .catch(function(error) {
                console.error("Failed to send email. Error:", error);
                alert("Failed to send email. Error: " + JSON.stringify(error));
            });
    } else {
        alert("Please fill out all fields.");
    }

    return false; // Prevent page from refreshing
}