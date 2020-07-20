import { runSaga } from 'redux-saga';

export const recordSaga = async (saga, {initialAction, getState} = {}) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState
    },
    saga,
    initialAction
  ).done;

  return dispatched;
};
