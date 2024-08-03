document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const carName = this.getAttribute('data-car');
        const formPageUrl = 'booking.html?car=' + encodeURIComponent(carName);
        window.location.href = formPageUrl;
    });
});



