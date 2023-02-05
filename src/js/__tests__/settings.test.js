import Settings from '../settings';

const settings = new Settings();
const themeSettings = [
  ['theme', 'gray', 'gray'],
  ['theme', 'blasdfsdfck', 'dark'],

];
const musicSettings = [
  ['music', 'grsdfay', 'trance'],
  ['music', 'rock', 'rock'],
];
const difficultySettings = [
  ['difficulty', 'rocsdfk', 'easy'],
  ['difficulty', 'hard', 'hard'],
];

test.each(themeSettings)('testing user setting of %s: %s', (setting, value, expected) => {
  settings.customize(value, 'music', 'difficulty');

  expect(settings.userSettings.get(setting)).toBe(expected);
});

test.each(musicSettings)('testing user setting of %s: %s', (setting, value, expected) => {
  settings.customize('theme', value, 'difficulty');

  expect(settings.userSettings.get(setting)).toBe(expected);
});

test.each(difficultySettings)('testing user setting of %s: %s', (setting, value, expected) => {
  settings.customize('theme', 'music', value);

  expect(settings.userSettings.get(setting)).toBe(expected);
});

test('test getter', () => {
  const cusomSettings = new Settings();
  const map = new Map([
    ['theme', 'gray'],
    ['music', 'off'],
    ['difficulty', 'nightmare'],
  ]);

  cusomSettings.customize('gray', 'off', 'nightmare');

  expect(cusomSettings.getCustomSettings()).toEqual(map);
});
