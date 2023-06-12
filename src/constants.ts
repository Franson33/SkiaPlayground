import {PixelRatio, Dimensions} from 'react-native';

// Screen size
const height = Dimensions.get('window').height * PixelRatio.get();
const width = Dimensions.get('window').width * PixelRatio.get();

// Adjusts size to fit current resolution, assuming 1080p target resolution
const pixel = (size: number) => (size * (height / width)) / PixelRatio.get();
const px = (size: number) => PixelRatio.getPixelSizeForLayoutSize(size);

export {pixel, px, width, height};
