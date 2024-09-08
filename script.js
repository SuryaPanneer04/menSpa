new Swiper('.card-wrapper', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Corrected breakpoints for responsiveness
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }
  }
});



// Function to open the dialog
function openDialog() {
    document.getElementById('form-dialog').style.display = 'flex';
  }
  
  // Function to close the dialog
  function closeDialog() {
    document.getElementById('form-dialog').style.display = 'None';
  }

  

  //styles time
const form = document.querySelector('.dialog-overlay');
function sendmsg(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value,
   styles = document.querySelector('#styles').value,
   date = document.querySelector('#date').value,
  time = document.querySelector('#time').value;
  Email.send({
  SecureToken : "3d2f07c4-d530-4cdb-83c7-696bb91b770d",
  To : 'smartsuryacr7@gmail.com',
  From :  'smartsuryacr7@gmail.com',
  Subject : "person send the mail",
  Body : `Name: ${name} <br> styles: ${styles} <br> date: ${date} <br> time: ${time}`
         
}).then(
          time => {
        // Set the time in the popup
        document.getElementById('popuptime').innerText = 'Mail send successfully';
        
        // Show the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
);


// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
var modal = document.getElementById("myModal");
if (event.target == modal) {
closeModal();
}
}

// Close the modal and clear the data when the OK button is clicked
document.getElementById('okButton').onclick = function() {
closeModal();
}

// Function to close the modal and clear data
function closeModal() {
var modal = document.getElementById("myModal");
modal.style.display = "none";

// Clear the popup time
document.getElementById('popuptime').innerText = "";

// Clear all input fields
var inputs = document.querySelectorAll('input[type="text"], styles, input[type="time"], input[type="date"]');
inputs.forEach(input => input.value = "");

// Clear any select elements
var selects = document.querySelectorAll('select');
selects.forEach(select => select.selectedIndex = 0);

// Clear any other relevant data or reset elements
// Example: Reset checkboxes and radio buttons
var checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
checkboxes.forEach(checkbox => checkbox.checked = false);
}

}
form.addEventListener('submit',sendmsg);     

//end