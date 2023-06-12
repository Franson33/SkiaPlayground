import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GestureDetector,
  Gesture,
  PanGestureHandlerEventPayload,
  GestureUpdateEvent,
} from 'react-native-gesture-handler';
import {
  useSharedValue,
  useDerivedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import {height, px} from './index';

export const One: FC = () => {
  const offsetY = useSharedValue(0);
  const startY = useSharedValue(0);
  const size = useSharedValue(px(256));

  const r = useDerivedValue(() => size.value * 0.33);
  const sizeMinusR = useDerivedValue(() => size.value - r.value);
  const sizeDivideTwo = useDerivedValue(() => size.value / 2);

  const gesture = Gesture.Pan()
    .onUpdate((e: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      offsetY.value = e.translationY + startY.value;

      const newSize = interpolate(
        offsetY.value,
        [0, height],
        [256, 512],
        Extrapolation.CLAMP,
      );

      size.value = newSize;
    })
    .onEnd(() => {
      startY.value = offsetY.value;
    });

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.gestureWrapper}>
        <Canvas style={styles.container}>
          <Group blendMode="multiply">
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={sizeMinusR} cy={r} r={r} color="magenta" />
            <Circle cx={sizeDivideTwo} cy={sizeMinusR} r={r} color={'yellow'} />
          </Group>
        </Canvas>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gestureWrapper: {
    flex: 1,
  },
});
