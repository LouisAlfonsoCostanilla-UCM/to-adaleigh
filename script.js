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

function submitDate(event) {
  event.preventDefault();

  const location = document.getElementById('location').value;
  const food = document.getElementById('food').value;
  const time = document.getElementById('time').value;

  const valentinesDate = "February 14, 2026";
  const receiptNum = Math.floor(Math.random() * 1000000);

  const receipt = `
    <div class="receipt-box">
      <div class="paid-stamp">PAID ✔</div>

      <h3>Valentine's Date Receipt</h3>
      <p class="receipt-sub">Customer: My Adaleigh</p>
      <p class="receipt-sub">Receipt #: ${receiptNum}</p>
      <p class="receipt-sub">Cashier: Choi</p>

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

  const templateParams = {
    location: location,
    food: food,
    time: time,
    date: valentinesDate,
    receipt_number: receiptNum,
    your_name: "Choi",
    to_email: "costanilla.louis@gmail.com, alairadaleigh@gmail.com",
    receipt_html: receipt
  };

  emailjs.send("your_valentines_receipt", "val_receipt", templateParams)
    .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
    }, function(error) {
      console.error("Failed to send email.", error);
    });
}

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
