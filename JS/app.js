// Show Other Links
const otherLinksBtn = document.querySelector(".other-links-btn");
const otherLinks = document.querySelector(".other-links");
otherLinksBtn.addEventListener("click", () => {
    otherLinks.classList.add("show");
});

//Hide Other Links
const closeBtn = document.querySelector(".other-links .close-btn");
closeBtn.addEventListener("click", () => {
    otherLinks.classList.remove("show");
    otherLinksBtn.classList.remove("active");
});

//Set Active Link
const links = document.querySelectorAll(".navbar__links .link");
links.forEach((li) => {
    li.addEventListener("click", (li) => {
        links.forEach((li) => {
            li.classList.remove("active");
        });
        li.currentTarget.classList.add("active");
        if (!li.currentTarget.classList.contains("other-links-btn")) {
            otherLinks.classList.remove("show");
        }
    });
});

// const progress = document.querySelectorAll(".our-skills .progress > div ");
// progress.forEach((prog) => {
//     prog.style.width = prog.dataset.progress;
// });

// form animations
const emailInput = document.getElementById("em");
const submit = document.getElementById("submit");
const label = document.getElementById("label");
const discountLabel = document.querySelectorAll(
    ".discount .form-box .input-container label"
);
const discountInput = document.querySelectorAll(
    ".discount .form-box .input-container input"
);
const textArea = document.querySelector(
    ".discount .form-box .input-container textarea"
);
const discountSubmit = document.querySelector(
    '.discount .form-box input[type="submit"]'
);

window.addEventListener("resize", () => {
    label.style.cssText = `${window.innerWidth <= 767 ? "top:22%;" : "top:50%;"}`;
});

emailInput.addEventListener("focus", () => {
    label.style.cssText = `
        top:0px;
        color: #fff;
        background: linear-gradient(90deg, #49dcb6 0%, #49bef1);;
    `;
    emailInput.style.cssText = `
    border:1px solid #777;
    `;
});
emailInput.addEventListener("blur", () => {
    if (emailInput.value == "") {
        label.style.cssText = `${
      window.innerWidth <= 767 ? "top:22%;" : "top:50%;"
    }`;

        emailInput.style.cssText = `
            border:none;
    `;
    }
});
submit.addEventListener("click", () => {
    emailInput.value = "";
    if (emailInput.value == "") {
        label.style.cssText = `${
      window.innerWidth <= 767 ? "top:22%;" : "top:50%;"
    }`;

        emailInput.style.cssText = `
            border:none;
    `;
    }
});
discountSubmit.addEventListener("click", () => {
    discountInput.forEach((input) => {
        input.value = "";
        textArea.value = "";
        discountLabel.forEach((label) => {
            label.style.cssText = `
                top:50%;
                background-color:unset;
                `;
        });
    });
});
discountInput.forEach((input) => {
    input.addEventListener("focus", (e) => {
        e.currentTarget.style.cssText = `
        border:1px solid #49bef1`;
        discountLabel.forEach((label) => {
            if (e.currentTarget.id === label.dataset.label) {
                label.style.cssText = `
                top:-5px;
                background-color:#f9f9f9;
                `;
            }
        });
    });
});
discountInput.forEach((input) => {
    input.addEventListener("blur", (e) => {
        if (input.value == "") {
            e.currentTarget.style.cssText = `
        border:none`;
            discountLabel.forEach((label) => {
                label.style.cssText = `
                top:50%;
                background-color:unset;
                `;
            });
        }
    });
});

// Animations;