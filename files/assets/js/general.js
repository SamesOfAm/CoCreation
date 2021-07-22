const allFadingTexts = document.querySelectorAll('.fading');
const headerTop = document.getElementById('header-top');
const allProgressBarArticles = document.querySelectorAll('.progress-bar');
const progressBar = document.querySelector('.header-progress-bar');

const updateProgressBar = () => {
    allProgressBarArticles.forEach(function(article){
        if(article.getBoundingClientRect().top - window.innerHeight <= -450){
            const correspondingNavItem = document.querySelector('.progress-'+article.id);
            progressBar.style.width = Math.round(correspondingNavItem.getBoundingClientRect().left + correspondingNavItem.offsetWidth/2) + 'px';
        }});
}

scrollHandler = (e) => {
    if(window.scrollY > 50) {
        headerTop.classList.add('small');
        progressBar.style.top = "81px";
        progressBar.style.opacity = "1";
    } else if(window.scrollY === 0) {
        headerTop.classList.remove('small');
        progressBar.style.top = "127px";
        progressBar.style.opacity = "0";
        progressBar.style.width = "0px";
    }
    updateProgressBar();
    allFadingTexts.forEach(text => text.getBoundingClientRect().top - window.innerHeight <= -200 && text.classList.add('faded'));
}

if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    allFadingTexts.forEach(text => text.classList.add('activated'));
    document.addEventListener('scroll', scrollHandler);
}


jQuery('.to-top-button').hide();
jQuery(window).scroll(function(){
    const value=400;
    const scrolling = jQuery(window).scrollTop();
    if(scrolling>value){
        jQuery('.to-top-button').fadeIn();
    } else{
        jQuery('.to-top-button').fadeOut();
    }
});
jQuery('.to-top-button').click(function(){
    jQuery('html, body').animate({scrollTop:'0px'},800);
    return !1;
});