'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('hi');

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleVisibiliy = _this.handleToggleVisibiliy.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibiliy',
        value: function handleToggleVisibiliy() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibiliy },
                    ' ',
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'p',
                    null,
                    'Here are all your details'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleDetails = () => {
//     visibility = !visibility;
//     renderTemplate();
// }

// const renderTemplate = () => {

//     const toggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{ visibility ? 'Hide details' : 'Show details' }</button>
//             {
//                 visibility && (
//                 <p>Here are all your details</p> )
//             }
//         </div>
//     );
//     ReactDOM.render(toggle, appRoot);
// }

// renderTemplate();


// when i click on button show details, it changes to hide details and the par with "some details" shows up below
// when i click on button hide details, it changes to show details and the paragraph disappears
