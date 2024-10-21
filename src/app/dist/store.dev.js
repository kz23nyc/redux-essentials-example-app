"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _postsSlice = _interopRequireDefault(require("../features/posts/postsSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _toolkit.configureStore)({
  reducer: {
    posts: _postsSlice["default"]
  }
});

exports["default"] = _default;