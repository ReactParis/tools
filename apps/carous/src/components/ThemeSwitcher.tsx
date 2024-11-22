import { useEffect, useState } from 'react';

const themes = ['react-paris', 'nodejs', 'vuejs', 'paris-typescript', 'dark', 'light'];

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('react-paris');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="fixed top-4 right-4 bg-background-secondary text-primary p-2 rounded-md"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
