export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  customize(theme, music, difficulty) {
    const possibleThemeValues = ['light', 'gray'];
    const possibleMusicValues = ['pop', 'rock', 'chillout', 'off'];
    const possibleDifficultyValues = ['normal', 'hard', 'nightmare'];

    this.userSettings = new Map();

    if (possibleThemeValues.includes(theme)) {
      this.userSettings.set('theme', theme);
    } else {
      const defaultTheme = this.defaultSettings.get('theme');
      this.userSettings.set('theme', defaultTheme);
    }

    if (possibleMusicValues.includes(music)) {
      this.userSettings.set('music', music);
    } else {
      const defaultMusic = this.defaultSettings.get('music');
      this.userSettings.set('music', defaultMusic);
    }

    if (possibleDifficultyValues.includes(difficulty)) {
      this.userSettings.set('difficulty', difficulty);
    } else {
      const defaultDifficulty = this.defaultSettings.get('difficulty');
      this.userSettings.set('difficulty', defaultDifficulty);
    }
  }

  getCustomSettings() {
    return this.userSettings;
  }
}
