// ==========================================
// SIDEBAR
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// OPEN SIDEBAR

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("active");

        sidebarOverlay.classList.add("active");

    });

}


// CLOSE SIDEBAR

if (sidebarClose) {

    sidebarClose.addEventListener("click", () => {

        sidebar.classList.remove("active");

        sidebarOverlay.classList.remove("active");

    });

}


// CLOSE USING OVERLAY

if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", () => {

        sidebar.classList.remove("active");

        sidebarOverlay.classList.remove("active");

    });

}


// ==========================================
// CLOSE SIDEBAR WHEN NAVIGATION IS CLICKED
// ==========================================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        sidebar.classList.remove("active");

        sidebarOverlay.classList.remove("active");

    });

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (
            document.body.classList.contains("light-mode")
        ) {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

}


// ==========================================
// LOAD SAVED THEME
// ==========================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

    if (themeBtn) {

        themeBtn.textContent = "🌙";

    }

} else {

    if (themeBtn) {

        themeBtn.textContent = "☀️";

    }

}


// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement =
    document.getElementById("currentYear");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}