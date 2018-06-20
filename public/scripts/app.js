'use strict';

console.log('hi');

var appRoot = document.getElementById('app');

var visibility = false;

var toggleDetails = function toggleDetails() {
    visibility = !visibility;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {

    var toggle = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Here are all your details'
        )
    );
    ReactDOM.render(toggle, appRoot);
};

renderTemplate();

// when i click on button show details, it changes to hide details and the par with "some details" shows up below
// when i click on button hide details, it changes to show details and the paragraph disappears
