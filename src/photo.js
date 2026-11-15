import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

const MAX_EDGE = 1600;

export async function shrinkPhoto(asset) {
  const width = asset.width || 0;
  const height = asset.height || 0;
  const actions = [];

  if (width >= height && width > MAX_EDGE) {
    actions.push({ resize: { width: MAX_EDGE } });
  } else if (height > width && height > MAX_EDGE) {
    actions.push({ resize: { height: MAX_EDGE } });
  } else if (width === 0 && height === 0) {
    actions.push({ resize: { width: MAX_EDGE } });
  }

  const result = await manipulateAsync(asset.uri, actions, {
    compress: 0.6,
    format: SaveFormat.JPEG,
  });

  return result.uri;
}
