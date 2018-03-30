import React from 'react';
import { Text } from 'react-native';
import { RepoPage } from '../RepoPage';
import repos from '../../../config/jest/dataMock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../../components/RepoList', () => 'RepoList');

it('renders a RepoPage using Snapshots', () => {
  const _getComponent = props => {
    return renderer.create(<RepoPage repos={props} getRepos={jest.fn()} />);
  };

  let component = _getComponent({ isLoading: true, repos: [] });
  expect(component).toMatchSnapshot();

  component = _getComponent({ isLoading: false, repos });
  expect(component).toMatchSnapshot();
});

it('Test func inside RepoPage', () => {
  const props = { isLoading: false, repos: [] };
  const wrapper = renderer.create(
    <RepoPage repos={props} getRepos={jest.fn()} />
  );
  const instance = wrapper.getInstance();
  expect(instance.handleSomething('John Doe')).toMatchSnapshot();
});
