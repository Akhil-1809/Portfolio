
            function sendMail(){
                var parms = {
                    name : document.getElementById("name1").value,
                    email : document.getElementById("email1").value,
                    message : document.getElementById("message1").value,
                }
                emailjs.sendForm('service_eoo51go','template_3tvma0g', parms)
                    .then(alert("Email Sent"))
            }
 