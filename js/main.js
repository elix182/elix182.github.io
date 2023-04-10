const openUrl = (url, target) => {
    if(!target) {
        target = '_blank';
    }
    window.open(url, target);
}

const toggleSection = elementId => {
    const elementDOM = $(elementId);
    if(elementDOM.hasClass("hide")){
        showSection(elementId);
    } else {
        hideSection(elementId);
    }
}

const showSection = elementId => {
    const elementDOM = $(elementId);
    hideSections();
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