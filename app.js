const portfolio = {}

portfolio.observer = () => {
	function navCallback(entries) {
		navBar.classList.toggle("scrolled", !entries[0].isIntersecting)
		if (header.classList.contains("headerDarkMode")) {
			navBar.classList.toggle("scrolledDark")
		}
	}

	const navOptions = {
		threshold: 0.25,
	}

	const navObs = new IntersectionObserver(navCallback, navOptions)

	navObs.observe(header)
}

// mobile hamburger menu controls
portfolio.hamburgerMenu = () => {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link" && ".nav-item").forEach((n) =>
        n.addEventListener("click", () => {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")
        })
    )

    window.addEventListener('click', function () {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })

    hamburger.addEventListener("click", function (e) {
		e.stopPropagation();
	})

	navMenu.addEventListener("click", function (e) {
        e.stopPropagation()
	})
}

// this adds in all functions to be called when portfolio is called
portfolio.init = () => {
    portfolio.observer();
    portfolio.hamburgerMenu();
}

// this initializes all functions within portfolio function
portfolio.init();