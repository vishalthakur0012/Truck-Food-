// toggler icon change in close icon js....
function toggleIcon() {
    var icon = document.getElementById('menuIcon');

    // Toggle between 'fas fa-bars' and 'fas fa-times'
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}



