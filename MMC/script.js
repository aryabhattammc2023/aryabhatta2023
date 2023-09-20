

document.addEventListener('DOMContentLoaded', function () {
    const complaintForm = document.getElementById('complaintForm');
    const message = document.getElementById('message');

    complaintForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get user input
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const complaint = document.getElementById('complaint').value;
        const submit = document.getElementById('submitButton');
        
        // Get the current date
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        
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
