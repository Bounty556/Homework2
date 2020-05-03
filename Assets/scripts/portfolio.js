$(document).ready( function() {
    $('.portfolio-item').on('mouseenter', portfolioHover);
    $('.portfolio-item').on('mouseleave', portfolioLeave);
    $('.portfolio-overlay-button').on('click', buttonClicked);
});

function portfolioHover() {
    // Show button overlay
    $(this).find('.portfolio-overlay').attr('style', 'visibility: visible');
}

function portfolioLeave() {
    // Hide button overlay
    $(this).find('.portfolio-overlay').attr('style', 'visibility: hidden');
}

function buttonClicked() {
    window.open($(this).attr('data-link'), '_blank');
}