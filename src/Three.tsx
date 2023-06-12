import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

export const Three: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0f0',
  },
});
