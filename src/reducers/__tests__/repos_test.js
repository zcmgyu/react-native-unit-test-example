import repos from '../repos';
import { initialState } from '../repos';
import { receiveRepos } from '../../actions/api';
import { selectRepo } from '../../actions/repos';
import data from '../../../config/jest/dataMock';


it('returns the same state on an unhandled action', () => {
  expect(repos(initialState, { type: 'HELLO_WORLD' })).toMatchSnapshot();
});

it('handles LOAD_REPOS_REQUEST action', () => {
  expect(repos(initialState, receiveRepos.request())).toMatchSnapshot();
});

it('handles LOAD_REPOS_FAILURE action', () => {
  const error = new Error('Look ma! I am an error');
  expect(repos(initialState, receiveRepos.failure(error))).toMatchSnapshot();
});

it('handles LOAD_REPOS_SUCCESS action', () => {
  // BOOM. If we change that specific reducer case, we'll compare the Snapshot results
  // and update them if the change is expected.
  expect(repos(initialState, receiveRepos.success(data))).toMatchSnapshot();
});

it('handles SELECT_REPO action', () => {
  const newState = repos(initialState, selectRepo(1));
  expect(newState).toMatchSnapshot();
  // Sending the same id should clean it
  expect(repos(newState, selectRepo(1))).toMatchSnapshot();
});