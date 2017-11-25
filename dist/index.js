'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var reactMotion = require('react-motion');
var Transition = _interopDefault(require('react-motion-ui-pack'));

var Alert = function Alert(_ref) {
  var background = _ref.background,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      onClick = _ref.onClick,
      onRightClick = _ref.onRightClick,
      rightIcon = _ref.rightIcon,
      visible = _ref.visible;
  return React.createElement(
    Transition,
    {
      component: false,
      enter: {
        opacity: 1,
        translateY: reactMotion.spring(0, { stiffness: 200, damping: 9 })
      },
      leave: {
        opacity: 0,
        translateY: -100
      }
    },
    visible && React.createElement(
      'div',
      {
        key: 'alert-box',
        style: {
          alignItems: 'center',
          background: background ? background : '#333',
          borderRadius: '3px',
          color: '#fff',
          cursor: onClick ? 'pointer' : '',
          display: 'flex',
          minWidth: '400px',
          margin: '10px',
          padding: '10px'
        },
        onClick: onClick
      },
      icon && icon,
      children,
      rightIcon && React.createElement(
        'div',
        {
          onClick: onRightClick,
          style: { cursor: 'pointer', marginLeft: 'auto' }
        },
        rightIcon
      )
    )
  );
};

var Avatar = function Avatar(_ref) {
  var size = _ref.size,
      className = _ref.className,
      src = _ref.src,
      alt = _ref.alt;
  return React.createElement('img', {
    style: {
      borderRadius: '50%',
      height: size + 'px',
      objectFit: 'cover',
      width: size + 'px'
    },
    src: src,
    alt: alt
  });
};

var Button = function Button(_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === undefined ? '#333' : _ref$background,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#fff' : _ref$color,
      disabled = _ref.disabled,
      icon = _ref.icon,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children,
      _ref$m = _ref.m,
      m = _ref$m === undefined ? 0 : _ref$m,
      _ref$w = _ref.w,
      w = _ref$w === undefined ? 78 : _ref$w;
  return React.createElement(
    'div',
    {
      style: {
        alignItems: 'center',
        background: background,
        border: '0',
        borderRadius: '3px',
        color: color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-block',
        justifyContent: 'center',
        margin: m,
        marginRight: '5px',
        opacity: disabled ? '0.5' : '1',
        outline: '0',
        padding: '5px 15px',
        textAlign: 'center',
        minWidth: w
      },
      onClick: onClick,
      onKeyPress: function onKeyPress(e) {
        if (!onClick) {
          return false;
        }

        if (disabled) {
          return false;
        }

        var isTriggered = e.key === ' ' || e.key === 'Enter';

        if (!isTriggered) {
          return false;
        }

        e.preventDefault();
        onClick();
      },
      role: 'button'
    },
    icon && React.createElement(
      'div',
      { style: { marginRight: 2 } },
      icon
    ),
    children
  );
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Flex = function Flex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'flex-start' : _ref$align,
      _ref$justifyContent = _ref.justifyContent,
      justifyContent = _ref$justifyContent === undefined ? 'initial' : _ref$justifyContent,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'row' : _ref$direction,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === undefined ? 'nowrap' : _ref$wrap,
      w = _ref.w,
      _ref$m = _ref.m,
      m = _ref$m === undefined ? 0 : _ref$m,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['align', 'justifyContent', 'direction', 'wrap', 'w', 'm', 'children']);

  return React.createElement(
    'div',
    _extends({
      style: {
        alignItems: align,
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justifyContent,
        margin: m + 'px',
        width: w ? w : 'auto'
      }
    }, props),
    children
  );
};

var gradients = {
  blackRose: "linear-gradient(to right, #f4c4f3, #fc67fa)",
  bloodRed: "linear-gradient(to right, #f85032, #e73827)",
  blueSkies: "linear-gradient(to right, #56ccf2, #2f80ed)",
  celestial: "linear-gradient(to right, #c33764, #1d2671)",
  chittyBang: "linear-gradient(to right, #007991, #78ffd6)",
  deepSpace: "linear-gradient(to right, #000000, #434343)",
  fireWatch: "linear-gradient(to right, #cb2d3e, #ef473a)",
  grapeFruitSunset: "linear-gradient(to right, #e96443, #904e95)",
  greenAndBlue: "linear-gradient(to right, #c2e59c, #64b3f4)",
  greyFolk: "linear-gradient(to right, #bdc3c7, #2c3e50)",
  minnesotaVikings: "linear-gradient(to right, #5614b0, #dbd65c)",
  paleWood: "linear-gradient(to right, #eacda3, #d6ae7b)",
  poncho: "linear-gradient(to right, #403a3e, #be5869)",
  purple80: "linear-gradient(to right, #41295a, #2f0743)",
  purplin: "linear-gradient(to right, #6a3093, #a044ff)",
  sunKist: "linear-gradient(to right, #f2994a, #f2c94c)"
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var _ref$w = _ref.w,
      w = _ref$w === undefined ? 200 : _ref$w,
      props = _objectWithoutProperties$1(_ref, ['w']);

  return React.createElement('input', _extends$1({
    style: {
      border: '1px solid #ced4da',
      borderRadius: '3px',
      marginLeft: '10px',
      marginRight: '10px',
      minWidth: '200px',
      outline: '0',
      padding: '5px 10px',
      width: w
    }
  }, props));
};

var Notification = function Notification(_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === undefined ? '#333' : _ref$background,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#fff' : _ref$color,
      children = _ref.children,
      value = _ref.value;
  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-block',
        marginRight: '10px',
        position: 'relative'
      }
    },
    React.createElement(
      'div',
      {
        style: {
          background: background,
          borderRadius: '50%',
          color: color,
          fontSize: '13px',
          minWidth: '23px',
          padding: '2px 4px',
          position: 'absolute',
          right: '-8px',
          textAlign: 'center',
          top: '-8px'
        }
      },
      value
    ),
    children
  );
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = function Text(_ref) {
  var size = _ref.size,
      color = _ref.color,
      bold = _ref.bold,
      flex = _ref.flex,
      np = _ref.np,
      flexRight = _ref.flexRight,
      semiBold = _ref.semiBold,
      props = _objectWithoutProperties$2(_ref, ['size', 'color', 'bold', 'flex', 'np', 'flexRight', 'semiBold']);

  return React.createElement('p', _extends$2({
    style: {
      color: color ? color : 'inherit',
      fontSize: size ? size + 'px' : 'inherit',
      fontWeight: bold ? '800' : semiBold ? '600' : '400',
      margin: '0px',
      marginLeft: flexRight ? 'auto' : '0',
      padding: flex ? '0px 2px' : np ? '0px' : '10px 0px'
    }
  }, props));
};

var ProgressBar = function ProgressBar(_ref) {
  var background = _ref.background,
      color = _ref.color,
      title = _ref.title,
      value = _ref.value,
      className = _ref.className,
      _ref$w = _ref.w,
      w = _ref$w === undefined ? 100 : _ref$w;
  return React.createElement(
    Flex,
    { m: 10, direction: 'column' },
    title && React.createElement(
      Flex,
      { w: '100%', align: 'center' },
      React.createElement(
        Text,
        { semiBold: true },
        title
      ),
      React.createElement(
        Text,
        { semiBold: true, flexRight: true },
        value,
        '%'
      )
    ),
    React.createElement(
      'div',
      {
        style: {
          background: background ? background : '#ced4da',
          borderRadius: '3px',
          minHeight: '6px',
          width: w,
          minWidth: '100px'
        }
      },
      React.createElement('div', {
        style: {
          background: color ? color : '#228ae6',
          borderRadius: '3px',
          height: '6px',
          maxWidth: '100%',
          transition: 'width .7s ease-in-out',
          width: value + '%'
        }
      })
    )
  );
};

// fleko@0.1.2

exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Button = Button;
exports.Flex = Flex;
exports.Gradients = gradients;
exports.Input = Input;
exports.Notification = Notification;
exports.ProgressBar = ProgressBar;
exports.Text = Text;
