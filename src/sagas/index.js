import { all } from 'redux-saga/effects';
import gameSaga from './game';
import playerSaga from './player';
import enemy from './enemy';

export default function* () {
  yield all([gameSaga(), playerSaga(), enemy()]);
}
