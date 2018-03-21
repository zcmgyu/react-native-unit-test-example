import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { fetchData, receiveRepos } from '../actions/api';
import { selectRepo } from '../actions/repos';
import RepoList from '../components/RepoList';
import { repositories } from '../utils/endpoints';

// Exporting for testing purposes
export class RepoPage extends Component {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    const { isLoading, repos, selected } = this.props.repos;
    return (
      <View style={styles.container}>
        {!repos || isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <RepoList
            repos={repos}
            selected={selected}
            selectRepo={this.props.selectRepo}
          />
        )}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loading: {
    fontSize: 20,
    alignSelf: 'center'
  }
});

RepoPage.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.object.isRequired,
  selectRepo: PropTypes.func,
  selected: PropTypes.bool
}

const mapStateToProps = state => ({ repos: state.repos });
const mapDispatchToProps = dispatch => ({
  getRepos: () => dispatch(fetchData(repositories, receiveRepos)),
  selectRepo: id => dispatch(selectRepo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);
