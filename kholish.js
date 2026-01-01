function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    const reveals = activePage.querySelectorAll('.reveal');
    reveals.forEach((el, i) => {
        el.classList.remove('show');
        setTimeout(() => {
            el.classList.add('show');
        }, i * 300);
    });
}

// animasi awal
window.onload = () => showPage('home');
