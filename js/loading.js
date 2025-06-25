document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.page-transition-loader');
    const transitionLinks = document.querySelectorAll('a.transition-link');
    document.body.classList.add('pt-loading');
    setTimeout(() => {
        loader.classList.add('finished');
    }, 1000);
    setTimeout(() => {
        document.body.classList.remove('pt-loading');
    }, 1800);

    if (transitionLinks.length > 0) {
        transitionLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const destination = link.href;
                loader.classList.remove('finished');
                setTimeout(() => {
                    window.location.href = destination;
                }, 900);
            });
        });
    }
});