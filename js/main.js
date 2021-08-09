window.onload = () => {
    if (window.jQuery) {  
        // jQuery is loaded  
       setTimeout(init, 10);
   }
}

const init = () => {
    const today = new Date();
    const dateDOM = $('#date');
    dateDOM.html(today.getFullYear());
};

const openUrl = (url, target) => {
    if(!target) {
        target = '_blank';
    }
    window.open(url, target);
}

const showSection = elementId => {
    const elementDOM = $(elementId);
    const sectionsDOM = $('.section.show');
    sectionsDOM.each(function() {
        const uiDOM = $(this);
        uiDOM.removeClass('show');
        uiDOM.addClass('hide');
    });
    elementDOM.removeClass('hide');
    elementDOM.addClass('show');
}

const hideSection = elementId => {
    const elementDOM = $(elementId);
    elementDOM.removeClass('show');
    elementDOM.addClass('hide');
}

const hideSections = () => {
    const sectionsDOM = $('.section');
    sectionsDOM.each(function() {
        const uiDOM = $(this);
        uiDOM.removeClass('show');
        uiDOM.addClass('hide');
    });
}