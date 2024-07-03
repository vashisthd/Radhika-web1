document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});
document.getElementById('readMoreBtn').addEventListener('click', function() {
    var moreContent = document.querySelector('#more_data');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More';
    }
}
)

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form submission logic here

    // Clear the form
    this.reset();

});