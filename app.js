document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".number");
    const speed = 100; // Adjust speed as needed

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target; // Ensure it ends exactly at the target number
            }
        };

        updateCount();
    });
});
