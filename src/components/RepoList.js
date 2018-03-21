import React from 'react';
import PropTypes from 'prop-types';
import { ListView, StyleSheet, Text } from 'react-native';

import RepoItem from './RepoItem';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
});

const RepoList = props => {
  const { repos, selected, selectRepo } = props;
  const dataSource = ds.cloneWithRows(repos);
  return (
    <ListView
      dataSource={dataSource}
      renderRow={repo => (
        <RepoItem
          isSelected={repo.id === selected}
          repo={repo}
          selectRepo={selectRepo}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  selected: PropTypes.number,
  selectRepo: PropTypes.func
};

export const styles = StyleSheet.create({
  list: {
    paddingVertical: 40 // (48 - 8 of item padding)
  }
});

export default RepoList;
