document.addEventListener("DOMContentLoaded", function () {
    // Progress barlar uchun animatsiya qo'shish
    const skills = [
        { id: "3dsmax", percentage: 90 },
        { id: "autocad", percentage: 90 },
        { id: "blender", percentage: 90 },
        { id: "photoshop", percentage: 90 }
    ];

    skills.forEach(skill => {
        const progressBar = document.querySelector(`#${skill.id} .progress`);
        const percentageText = document.querySelector(`#${skill.id} .percentage`);

        let width = 0;
        const targetWidth = skill.percentage;

        // Animatsiya qo'shish
        const interval = setInterval(() => {
            if (width < targetWidth) {
                width++;
                progressBar.style.width = width + "%";
                percentageText.textContent = width + "%";
            } else {
                clearInterval(interval);
            }
        }, 10); // har 10msda progressni yangilash
    });

    // Kontakt shaklini yuborish
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // forma yuborilishini to'xtatadi

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (name && email && message) {
            alert("Xabar muvaffaqiyatli yuborildi!");
            form.reset(); // formani tozalash
        } else {
            alert("Iltimos, barcha maydonlarni to'ldiring.");
        }
    });

    // SMS yuborish uchun telefon havolasini boshqarish
    const smsLink = document.querySelector("a[href^='sms:']");
    if (smsLink) {
        smsLink.addEventListener("click", function () {
            alert("SMS yuborish uchun telefoningizda xabar dasturi ochiladi.");
        });
    }

    // Instagram havolasini boshqarish
    const instagramLink = document.querySelector("a.instagram-link");
    if (instagramLink) {
        instagramLink.addEventListener("click", function () {
            alert("Instagram orqali bog'laning!");
        });
    }

    // Telegram havolasini boshqarish
    const telegramLink = document.querySelector("a.telegram-link");
    if (telegramLink) {
        telegramLink.addEventListener("click", function () {
            alert("Telegram orqali bog'laning!");
        });
    }
});
// Rasmni kattalashtirish uchun modalni ko'rsatish
const interiorImages = document.querySelectorAll('.interior-image');
const exteriorImages = document.querySelectorAll('.exterior-image');
const modal = document.createElement('div');
modal.classList.add('modal');

// Modalni yopish tugmasi
const closeBtn = document.createElement('button');
closeBtn.classList.add('modal-close');
closeBtn.textContent = '×';
modal.appendChild(closeBtn);
document.body.appendChild(modal);

// Modalni rasmni kattalashtirib ko'rsatish
const modalImg = document.createElement('img');
modal.appendChild(modalImg);

function showImage(event) {
    modal.style.display = 'flex';
    modalImg.src = event.target.src;
}

// Rasmni bosganda kattalashtirish
interiorImages.forEach(img => img.addEventListener('click', showImage));
exteriorImages.forEach(img => img.addEventListener('click', showImage));

// Modalni yopish
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
