import React from 'react';
import RepoList from '../RepoList';
import mockedRepos from '../../../config/jest/dataMock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders a RepoList using Snapshots', () => {
  const wrapper = renderer.create(
    <RepoList repos={mockedRepos} selectRepo={jest.fn()} />
  );
  expect(wrapper).toMatchSnapshot();
});
