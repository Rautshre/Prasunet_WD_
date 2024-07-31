window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'blue';

        document.querySelectorAll('nav ul li a').forEach(item => {
            item.addEventListener('mouseover', function() {
                item.style.backgroundColor = 'green';
                item.style.color = 'white';
                item.style.animation = 'pop 0.3s forwards';
            });
        
            item.addEventListener('mouseout', function() {
                item.style.backgroundColor = '';
                item.style.color = '';
            });
        });
    } else {
        navbar.style.backgroundColor = '#333';

        document.querySelectorAll('nav ul li a').forEach(item => {
            item.addEventListener('mouseover', function() {
                item.style.backgroundColor = 'red';
                item.style.color = 'yellow';
                item.style.animation = 'pop 0.3s forwards';
            });
        
            item.addEventListener('mouseout', function() {
                item.style.backgroundColor = '';
                item.style.color = '';
            });
        });
    }
});

// document.querySelectorAll('nav ul li a').forEach(item => {
//     item.addEventListener('mouseover', function() {
//         item.style.backgroundColor = 'red';
//         item.style.color = 'yellow';
//         item.style.animation = 'pop 0.3s forwards';
//     });

//     item.addEventListener('mouseout', function() {
//         item.style.backgroundColor = '';
//         item.style.color = '';
//     });
// });
