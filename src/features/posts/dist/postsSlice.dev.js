"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.postAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = [{
  id: '1',
  title: 'First Post!',
  content: 'Hello!'
}, {
  id: '2',
  title: 'Second Post',
  content: 'More text'
}];
var postsSlice = (0, _toolkit.createSlice)({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded: function postAdded(state, action) {
      state.push(action.payload);
    }
  }
});
var postAdded = postsSlice.actions.postAdded;
exports.postAdded = postAdded;
var _default = postsSlice.reducer;
exports["default"] = _default;