document.addEventListener('DOMContentLoaded', function () {
    const complaintForm = document.getElementById('complaintForm');
    const message = document.getElementById('message');

    complaintForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submit = document.getElementById('submitButton');
        
        setTimeout(()=>{
            alert("Uploading wait untill success");
            console.log("Uploading...");
        },2000);

        // Display a success message
        message.textContent = 'Complaint submitted successfully. Thank you!';
        var defmargin = submit.style.marginBottom;
        submit.style.marginBottom = "10%";
        message.classList.remove('hidden');
        
        setTimeout(() => {
            message.classList.add('hidden');
            submit.style.marginBottom = defmargin;
        }, 3000); // Hide the message after 3 seconds
        
        // Clear the form
        complaintForm.reset();
    });
});
