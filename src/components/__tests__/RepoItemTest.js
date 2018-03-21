import React from 'react';
import RepoItem from '../RepoItem';
import mockedRepos from '../../../config/jest/dataMock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders a RepoItem using Snapshots', () => {
  const wrapper = renderer.create(
    <RepoItem repo={mockedRepos[0]} selectRepo={jest.fn()} />
  );
  expect(wrapper).toMatchSnapshot();
});
