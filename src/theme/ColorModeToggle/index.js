import React, {useState} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

function getNextColorMode(colorMode, respectPrefersColorScheme) {
  if (!respectPrefersColorScheme) {
    return colorMode === 'dark' ? 'light' : 'dark';
  }
  switch (colorMode) {
    case null:
      return 'light';
    case 'light':
      return 'dark';
    case 'dark':
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeLabel(colorMode) {
  switch (colorMode) {
    case null:
      return translate({message: 'system mode'});
    case 'light':
      return translate({message: 'light mode'});
    case 'dark':
      return translate({message: 'dark mode'});
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeAriaLabel(colorMode) {
  return translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
    },
    {
      mode: getColorModeLabel(colorMode),
    }
  );
}

function ColorModeToggle({
  className,
  buttonClassName,
  respectPrefersColorScheme,
  value,
  onChange,
}) {
  const isBrowser = useIsBrowser();
  const isDark = value === 'dark';

  const [flipping, setFlipping] = useState(false);

  const handleToggle = () => {
    setFlipping(true);
    setTimeout(() => {
      onChange(getNextColorMode(value, respectPrefersColorScheme));
    }, 150);
    setTimeout(() => setFlipping(false), 400);
  };

  return (
    <div className={clsx(styles.toggleWrapper, className)}>
      <button
        className={clsx(
          styles.toggleButton,
          isDark ? styles.dark : styles.light,
          buttonClassName
        )}
        onClick={handleToggle}
        disabled={!isBrowser}
        aria-label={getColorModeAriaLabel(value)}
        title={getColorModeLabel(value)}
        type="button"
      >
        <div className={clsx(styles.slider, flipping && styles.flipping)}>
          {isDark ? (
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              stroke="orange"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);
