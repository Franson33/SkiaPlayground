import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import {px} from './index';

export const One: FC = () => {
  const size = px(256);
  const r = size * 0.33;

  return (
    <Canvas style={styles.container}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={size - r} cy={r} r={r} color="magenta" />
        <Circle cx={size / 2} cy={size - r} r={r} color={'yellow'} />
      </Group>
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
