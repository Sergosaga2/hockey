$(document).ready(function() {
    $('.canada').on('click', () => {
        $('.canada').toggleClass('active');
        $('.flag-canada').toggleClass('visible');
    });
    $('.czech-republic').on('click', () => {
        $('.czech-republic').toggleClass('active');
        $('.flag-czech-republic').toggleClass('visible');
    });
    $('.finland').on('click', () => {
        $('.finland').toggleClass('active');
        $('.flag-finland').toggleClass('visible');
    });
    $('.russia').on('click', () => {
        $('.russia').toggleClass('active');
        $('.flag-russia').toggleClass('visible');
    });
    $('.slovakia').on('click', () => {
        $('.slovakia').toggleClass('active');
        $('.flag-slovakia').toggleClass('visible');
    });
    $('.sweden').on('click', () => {
        $('.sweden').toggleClass('active');
        $('.flag-sweden').toggleClass('visible');
    });
    $('.switzerland').on('click', () => {
        $('.switzerland').toggleClass('active');
        $('.flag-switzerland').toggleClass('visible');
    });
    $('.united-states').on('click', () => {
        $('.united-states').toggleClass('active');
        $('.flag-united-states').toggleClass('visible');
    });

    $('.btn').on('click', () => {
        $('.flag').toggleClass('hiden');
        if ($('.btn').text() === 'Скрыть') {
            $('.btn').text('Показать');
        } else {
            $('.btn').text('Скрыть');
        };
    });
});