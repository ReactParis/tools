import { createThemes } from 'tw-colors';

export const themes = createThemes({
  'paris-typescript': {
    background: {
      DEFAULT: '#1a3b64',
      secondary: '#132845'
    },
    text: {
      DEFAULT: '#61a8ff',
      secondary: '#89beff',
      tertiary: '#ffffff'
    },
    primary: '#61a8ff',
    secondary: '#89beff',
    accent: '#ffffff'
  },
  'vuejs': {
    background: {
      DEFAULT: '#35495e',
      secondary: '#2c3e50'
    },
    text: {
      DEFAULT: '#42b883',
      secondary: '#64d4a7',
      tertiary: '#ffffff'
    },
    primary: '#42b883',
    secondary: '#64d4a7',
    accent: '#ffffff'
  },
  'nodejs': {
    background: {
      DEFAULT: '#1a3b24',
      secondary: '#132b1b'
    },
    text: {
      DEFAULT: '#4acc4a',
      secondary: '#7fff7f',
      tertiary: '#ffffff'
    },
    primary: '#4acc4a',
    secondary: '#7fff7f',
    accent: '#ffffff'
  },
  'react-paris': {
    background: {
      DEFAULT: 'rgb(43,19,90)',
      secondary: 'rgb(19,14,50)'
    },
    text: {
      DEFAULT: 'rgb(245,48,236)',
      secondary: 'rgb(86,212,248)',
      tertiary: '#ffffff'
    },
    primary: 'rgb(245,48,236)',
    secondary: 'rgb(86,212,248)',
    accent: '#ffffff'
  },
  'dark': {
    background: {
      DEFAULT: '#1a1a1a',
      secondary: '#2a2a2a'
    },
    text: {
      DEFAULT: '#ffffff',
      secondary: '#e5e7eb',
      tertiary: '#9ca3af'
    },
    primary: '#3b82f6',
    secondary: '#60a5fa',
    accent: '#f472b6'
  },
  'light': {
    background: {
      DEFAULT: '#ffffff',
      secondary: '#f3f4f6'
    },
    text: {
      DEFAULT: '#1a1a1a',
      secondary: '#4b5563',
      tertiary: '#6b7280'
    },
    primary: '#3b82f6',
    secondary: '#60a5fa',
    accent: '#f472b6'
  }
});
