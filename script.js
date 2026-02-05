// -------------------- EMAILJS --------------------
emailjs.init("ciuL43bvJ92A4pnW_"); // initialize once at page load

// -------------------- PAGE NAVIGATION --------------------
function nextPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

let noCount = 0;

function chooseYes() {
  document.getElementById('message').textContent = "Yay! 💖 Can't wait!";
  nextPage('page3');
}

function chooseNo() {
  const msgDiv = document.getElementById('message');
  const yesBtn = document.querySelector("#page2 button:first-child");
  const noBtn = document.querySelector("#page2 button:last-child");

  noCount++;

  if (noCount === 1) {
    msgDiv.textContent = "sure dira oie";
  } else if (noCount === 2) {
    msgDiv.textContent = "tarong taronga ko ha!!";
  } else if (noCount === 3) {
    msgDiv.textContent = "mura jug c kinsa bah,,";
    noBtn.style.display = "none"; 
    yesBtn.style.display = "inline-block";
  }
}

// -------------------- DATE FORM & RECEIPT --------------------
function submitDate(event) {
  event.preventDefault();

  const location = document.getElementById('location').value;
  const food = document.getElementById('food').value;
  const time = document.getElementById('time').value;

  const valentinesDate = "February 14, 2026";
  const receiptNum = Math.floor(Math.random() * 1000000);

  // Generate the receipt in the page
  const receipt = `
    <div class="receipt-box">
      <div class="paid-stamp" style="float: right; animation: popIn 1s ease;">PAID ✔</div>

      <h3>Valentine's Date Receipt </h3>
      <p class="receipt-sub">Customer: My Adaleigh </p>
      <p class="receipt-sub">Receipt #: ${receiptNum}</p>
      <p class="receipt-sub">Cashier: Choi </p>

      <div class="receipt-line">
        <span>Date</span>
        <span>${valentinesDate}</span>
      </div>

      <div class="receipt-line">
        <span>Location</span>
        <span>${location}</span>
      </div>

      <div class="receipt-line">
        <span>Food</span>
        <span>${food}</span>
      </div>

      <div class="receipt-line">
        <span>Time</span>
        <span>${time}</span>
      </div>

      <div class="receipt-line">
        <span>💌 Valentine’s Special</span>
        <span>♥♥♥</span>
      </div>

      <hr>

      <div class="receipt-line total">
        <span>Total Cost</span>
        <span>∞ Love</span>
      </div>

      <p class="receipt-footer">
        Valid on Valentine’s Day only 💘<br>
        No refunds. No regrets.
      </p>
    </div>
  `;

  document.getElementById('receipt').innerHTML = receipt;
  nextPage('page4');

  // -------------------- SEND EMAIL --------------------
  emailjs.send("your_valentines_receipt", "val_receipt", {
    to_name: "Adaleigh & Louis",
    from_name: "Choi",
    location: location,
    food: food,
    time: time,
    date: valentinesDate,
    receipt_number: receiptNum,
    to_email: "costanilla.louis@gmail.com, alairadaleigh@gmail.com"
  })
  .then(() => {
    alert("Receipt successfully sent to emails! 💌");
    console.log("Email successfully sent!");
  })
  .catch((err) => {
    alert("Failed to send email. 😢 Check console.");
    console.error("Failed to send email:", err);
  });
}

// -------------------- FLOATING HEARTS --------------------
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';

  const emojis = ['❤️', '💖', '💘', '💝'];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
