import { put } from "redux-saga/effects";
import actions from "./constants";

const { FETCH_POSTS } = actions;

export function* fetchPosts(action) {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/posts");
    put({
      type: FETCH_POSTS,
      payload: res.data,
    });
  } catch (err) {}
}
