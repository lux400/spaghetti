const colors = {
  blue: '#2179ee',
  green: '#00cc9a',
  coral: '#ff6759',
  gold: '#f0b95b',
  purple: '#7537ef',
  white: '#ffffff',
  black: '#000000',

  grey10: '#f3f4f8',
  grey20: '#e1e5eb',
  grey30: '#c2c6cc',
  grey40: '#9ea2a8',
  grey50: '#686c73',
  grey60: '#30363d',
};

const space = 5;

interface StyleClosetTheme {
  space: number;
  colors: { [key in keyof typeof colors]: string };
}

const theme: StyleClosetTheme = {
  space,
  colors,
};

export { theme, StyleClosetTheme };
