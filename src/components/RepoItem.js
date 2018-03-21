import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const RepoItem = props => {
  const { description, id, name, stargazers_count } = props.repo;
  const itemStyle =
    (props.isSelected && [styles.item, styles.selected]) || styles.item;
  return (
    <TouchableHighlight
      onPress={() => {
        props.selectRepo ? props.selectRepo(id) : {};
      }}
      underlayColor="#E0F2F1"
    >
      <View style={itemStyle}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
        {props.isSelected ? <Text>{description}</Text> : null}
      </View>
    </TouchableHighlight>
  );
};

RepoItem.propTypes = {
  isSelected: PropTypes.bool,
  repo: PropTypes.object.isRequired,
  selectRepo: PropTypes.func
};

RepoItem.defaultProps = {
  isSelected: false
};

export const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 24
  },
  selected: {
    backgroundColor: '#B2DFDB'
  },
  stars: {
    paddingBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4
  }
});

export default RepoItem;
