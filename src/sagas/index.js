import { all } from 'redux-saga/effects';


function* helloSaga() {
  console.log('hello sagas');
}

export default function* root() {
  yield all([
    helloSaga(),
  ]);
}


