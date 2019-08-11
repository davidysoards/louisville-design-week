import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { ModeContext } from './layout';

function addIntensity(num) {
  const arr = [];
  while (num) {
    arr.push(<feMergeNode in="blurred" key={num} />);
    num--;
  }
  return arr;
}

const SvgAlwaysOpen = ({ width, intensity, blur }) => {
  const mode = useContext(ModeContext);
  return (
    <svg viewBox="0 0 1280 1080" width={width}>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            result="blurred"
            in="SourceGraphic"
            stdDeviation={blur}
          />
          <feMerge>{addIntensity(intensity)}</feMerge>
        </filter>

        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0.05 0
                    0 0 0 0.2 0"
          />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
        </filter>

        <AlwaysOpen id="always-open">
          <g id="open">
            <path d="M504.24 699.36l3.4 1.39a2.87 2.87 0 0 0 3.64-1.43l3.25-6.87a2.53 2.53 0 0 0-1.32-3.47l-4.12-1.68c23-60.48 19.09-104.15 9.78-132.33a128.69 128.69 0 0 0-72-78.47c-33.25-14-70.57-4.41-104.67 15.34l-2.59-4.25a2.87 2.87 0 0 0-3.78-1l-6.69 3.6a2.53 2.53 0 0 0-1 3.58l3 4.91c-38.25 25-71.22 61.54-87.87 89.19a12.5 12.5 0 0 0-19.66-9.09C135 641.52 70.8 775.37 104.11 861.56L100 863.5a2.87 2.87 0 0 0-1.39 3.66l2.89 7a2.53 2.53 0 0 0 3.45 1.36l4.5-2.14c10 19.17 25.67 35.39 47.85 47.11 23.47 12.4 49.6 16.58 76.7 14.43 100.5-8 192.21-96.83 244.72-185.62a424.94 424.94 0 0 0 25.52-49.94zM307.75 886.78c-51.57 26.76-102.15 31-138.77 11.66-16.8-8.88-28.83-21.18-36.76-35.82l3.55-1.69a2.87 2.87 0 0 0 1.39-3.66l-2.89-7a2.53 2.53 0 0 0-3.45-1.36l-4 1.88c-27.45-74.29 31.93-194.51 109.71-250.6-28.29 58.3-15.49 122.49-14.85 125.55a12.48 12.48 0 0 0 24.45-5.06c-.16-.75-14.88-75.56 24.87-129.52 17.44-23.67 44-51.43 73.13-71.08l1.7 2.8a2.89 2.89 0 0 0 3.78 1l6.69-3.61a2.53 2.53 0 0 0 1-3.57l-2.18-3.58c27.72-16.32 56.88-24.2 82-13.61a102.45 102.45 0 0 1 58 63.29c10.64 32.2 7.41 71.29-9.17 115l-4.33-1.77a2.87 2.87 0 0 0-3.62 1.47l-3.25 6.87a2.52 2.52 0 0 0 1.32 3.46l5 2.06a401.84 401.84 0 0 1-23.87 46.73c-39.9 67.54-92.99 120.87-149.45 150.16z" />
            <path
              className={mode === 'dark' ? 'flicker1' : ''}
              d="M646 692.3c-35.42-25.85-80.24 7.15-101.39 26.31 13.38-23.11 22.95-36.94 23.12-37.19a12.48 12.48 0 0 0-20.49-14.27C512 717.74 472.05 798.43 451 871.92l-5.28-.73a2.88 2.88 0 0 0-3.17 2.3l-1.46 7.51a2.52 2.52 0 0 0 2.14 3l4.29.59c-.15.59-.31 1.17-.46 1.75-11.33 44.33-15.83 86-13.37 123.87a12.49 12.49 0 1 0 24.92-1.61c-2.63-40.46 3.68-82 13.9-120.57l4.5.61a2.87 2.87 0 0 0 3.16-2.29l1.44-7.47a2.53 2.53 0 0 0-2.15-3l-3.44-.47a657 657 0 0 1 33.05-88c7.21-15.81 14.53-30.4 21.44-43.38a12.29 12.29 0 0 0 3 4.09 12.48 12.48 0 0 0 17.63-.9c17.35-19.11 57.57-51.17 80.14-34.7 28.86 21.06 16.24 65.57-3.13 95.52-16.81 26-40.63 36.45-55.91 37.5-16.81 1.17-32.6-6.67-46.92-23.27a12.49 12.49 0 1 0-18.91 16.32c17.63 20.44 66 32 67.55 31.87C651.1 865.11 709.79 738.87 646 692.3z"
            />
            <path d="M1158.26 675.65a12.48 12.48 0 0 0-16.79 5.47c-40 78.79-112.85 131.88-113.46 89.7-.13-9.25 2.37-20.91 4.78-33.25l4.56.4a2.88 2.88 0 0 0 3.05-2.45l1.06-7.53a2.52 2.52 0 0 0-2.29-2.91l-4-.36c3.91-24.26 4-48.84-19.11-61.4-21.43-11.64-54.92 7.28-108.59 61.36-3.67 3.7-7.29 7.42-10.83 11.12 13.91-26 30.39-55.26 46.2-82.25a12.48 12.48 0 1 0-21.54-12.63c-11.7 20-64.85 111.51-80 151.78a12.46 12.46 0 0 0-20.8-2.59c-15.59 18.59-49.31 45.89-79 45.89-14.75 0-25.8-6.77-34.62-18.37-17.41-22.92 6.57-77.92 37.23-111.34l2.66 2.56a2.87 2.87 0 0 0 3.91 0l5.57-5.18a2.53 2.53 0 0 0 0-3.71l-3-2.88c20.57-18.62 42.52-25.9 56.33-7.09 4.61 6.27 10.27 16 6.23 27.54-9.76 28-67.62 51.32-96.2 59.16a12.49 12.49 0 0 0 6.54 24.11A331.94 331.94 0 0 0 775 782.54c35.42-16.65 57.09-35.75 64.43-56.74 4-11.56 5.64-29.72-9.67-50.58-25.1-34.18-62.52-23.7-94.13 4.8l-3.85-3.73a2.88 2.88 0 0 0-3.92 0l-5.56 5.18a2.52 2.52 0 0 0-.06 3.71l4.08 4C686.94 730.54 660.52 798 687 832.74c41 53.94 110.69 21.58 150.44-24 .93 10.5 14.86 15.59 22.15 6.58.31-.37 31-38.15 65.61-73.07 62.67-63.14 78.81-57.09 79-57 10.18 5.53 9.16 20 6 37.27l-4.93-.44a2.89 2.89 0 0 0-3.05 2.45l-1.06 7.53a2.52 2.52 0 0 0 2.29 2.92l4.26.37c-5.15 26-10.16 54.82 11.09 69 43.86 29.24 114.23-51.38 145-111.92a12.49 12.49 0 0 0-5.54-16.78z" />
          </g>
          <g id="always">
            <path
              className={mode === 'dark' ? 'flicker2' : ''}
              d="M498.92 73.26C445.14 44.05 397.08 195 393.13 242.42c-2.74 32.9-2.23 76.09 3.88 109.35-38.34 65.94-60.3 82.3-70.31 86.06-4.55 1.71-6.6.74-7.37.38-7.43-3.5-14.92-22.42-13.64-65 .18-6 .61-13.11 1.25-20.7h4.59a2.87 2.87 0 0 0 2.82-2.71l.4-7.6a2.53 2.53 0 0 0-2.54-2.7h-4c2.12-19.7 5.38-40.43 9.18-53.32 30.24-4 53.46-6.28 54-6.34A12.49 12.49 0 0 0 369 255c-1.94.19-18.77 1.82-42.05 4.75 16-39.17 36.38-78.66 50.7-112.3l3.17 1.57a2.88 2.88 0 0 0 3.73-1.18l3.72-6.63a2.52 2.52 0 0 0-1.08-3.55l-4.57-2.26c13.38-33.95 18.69-60.5 3.65-72.4C358 40.57 306.86 101.26 284 129.85c-30 37.5-59.16 82.57-77.92 120.56-2.21 4.47-7.53 17.12-15.73 35.81-83.7 29.38-182.93 147.85-140 202.25 6.92 8.76 16.6 13.64 27.73 12.2 12.75-1.66 33.26-11.28 68.69-70.62l2.54 1.88a2.88 2.88 0 0 0 3.88-.5l4.84-5.86a2.54 2.54 0 0 0-.43-3.69l-4.24-3.13q3.79-6.69 7.82-14.1c18.22-33.68 35-70 47.49-98.14 22.36-6.58 53.17-12.2 82-16.55a486.85 486.85 0 0 0-7.67 49.55h-4.9a2.86 2.86 0 0 0-2.82 2.71l-.4 7.59a2.53 2.53 0 0 0 2.54 2.7h4.39c-.51 6.6-.9 13.29-1.1 19.91-1.5 49.91 7.65 78.81 28 88.38 36 16.95 76.12-41.79 97.43-75.79 8.81 22.4 21.56 36.46 38.15 42 27 9 52.42-5.09 69.78-38.64l.33-.63a12.49 12.49 0 0 0-22-11.75c-8.92 16.77-21.81 33.45-40.17 27.33C438 398.6 428.88 380.1 423.4 356c32.11-56.71 132.75-251.67 75.52-282.74zm-359.7 319.5c-2.09 3.86-4.11 7.52-6.09 11l-2.94-2.18a2.87 2.87 0 0 0-3.88.5l-4.84 5.92a2.54 2.54 0 0 0 .43 3.69l4.7 3.47C94.8 469 79.2 475.33 74.85 475.9c-.94.12-2.36.31-4.9-2.91-21.24-26.91 29.42-110.36 104.85-152.16-10.44 22.71-22.66 48.05-35.58 71.93zm82.16-115.3C257.59 194 342.53 88.7 370.48 83.16c1.23 7.89-3.14 22.73-10.38 41.11l-3.48-1.72a2.86 2.86 0 0 0-3.73 1.18l-3.72 6.63a2.53 2.53 0 0 0 1.07 3.55l4.92 2.42c-17.05 40.37-43.71 92.54-56.52 127.18-25.17 3.62-53.24 8.31-77.26 13.95zm196.21 37a466 466 0 0 1 .42-69.93c3.49-41.87 37.48-134.58 63.49-148.63 20.25-10.98 16 66.1-63.91 218.52z"
            />
            <path d="M857.67 353c14.93-3.36 28.85-15.65 41.37-36.52a12.49 12.49 0 0 0-21.41-12.85c-8.63 14.37-17.63 23.25-25.44 25-2.46.55-6.38.85-12.08-2.95-7.73-5.16-6-28.47-2.17-46.87a315.2 315.2 0 0 1 13.11-44.32 12.48 12.48 0 1 0-23.24-9.13 335.84 335.84 0 0 0-14.25 48.05c-3.06 14.58-4.33 27.07-3.82 37.57-24.08 10.73-36.41 30.3-61.87 30.3-3.14 0-5.57-.86-8-5.14-2.21-3.88-5-11.82-5.53-27.57-.78-21.79 30.12-69.47 66-92 15.63-9.82 59-21.73 74.35-25.49a12.49 12.49 0 0 0-5.93-24.27c-6.06 1.48-59.84 14.87-81.71 28.62-22.83 14.35-50.54 43.38-65.92 72.56a217.24 217.24 0 0 0-5.78-51.24A12.49 12.49 0 0 0 691 222.3c13.6 59.61-1.74 98-20.85 118.76l-4.15-3.42a2.88 2.88 0 0 0-3.9.29l-5.14 5.6a2.52 2.52 0 0 0 .23 3.7l3.29 2.71c-12.68 9.7-25.2 12.33-30.83 8.83-27.39-17 3.95-74.23 4.27-74.81a12.49 12.49 0 0 0-21.71-12.34 172.31 172.31 0 0 0-15.72 40.06c-4.66 19.29-3.57 33.72.43 44.52-24.28 17.37-39.14 19.6-45 15.88-4.82-3.08-7-12.42-5.08-22.21 6.52-34 55.62-106.33 60.27-114.69 7.77-14-10-26.47-20.49-14.58a12.51 12.51 0 0 0-2.54 4.43C567.2 252.1 529 310.24 522.32 345.17c-3.89 20.36 2.44 39.18 16.15 47.95 22.1 14.14 51.55-1.29 73-16.65a51.28 51.28 0 0 0 5 3.51c16.87 10.49 40.49 3.16 57.07-8.66 2.25-1.61 4.44-3.35 6.57-5.18l3.38 2.78a2.86 2.86 0 0 0 3.9-.29l5.14-5.6a2.53 2.53 0 0 0-.23-3.7l-2.89-2.33a118.05 118.05 0 0 0 21.06-34c1.37 10.45 3.91 18.88 7.69 25.53 6.52 11.46 17.07 17.76 29.71 17.76 32.81 0 48.73-20.15 68.26-30.57a32.73 32.73 0 0 0 10.13 10.79c9.55 6.32 20.39 8.96 31.41 6.49z" />
            <path d="M1232.51 155a12.49 12.49 0 0 0-16.44 6.45c-16 36.75-34.77 66.74-55.44 89.08.81-3.23 1.53-6.56 2.17-10 3.8-20.66-6-42.19-28.24-62.27a178.37 178.37 0 0 0-31.31-22.26c3.39-15.7 5.24-26.57 5.48-28a12.49 12.49 0 0 0-24.63-4.12c-2.67 15.83-7.68 40.22-14.61 65.35l-4.69-1.1a2.88 2.88 0 0 0-3.37 2l-2.14 7.3a2.53 2.53 0 0 0 1.85 3.22l4.76 1.12c-9.37 31.17-21.58 61.47-35.87 76 9.21-39.18 12-73.23 8.14-101.69-4.44-33.24-16.65-46.88-18-48.33-6.75-7.8-24.6-.18-18.67 15.78 1.19 3.2 9.36 11.66 12.38 39.35 2.79 25.63-.65 54.62-6.66 82.28a12.46 12.46 0 0 0-21.49.3C981.52 272.66 957 303 941 304.48c-2.29.21-4.83-.07-7.84-3.59-5.18-6-5.3-26.32 9.86-65.15a491.39 491.39 0 0 1 25.87-54.83 12.49 12.49 0 0 0-21.75-12.28 508.09 508.09 0 0 0-27.29 57.79c-17.59 45-19.44 74.64-5.65 90.72 5.73 6.7 12.74 10.74 20.57 12-18.06 8.89-36.94 21.84-57.06 45.77-40.91 48.64-43.82 79.6-39 97 5.94 21.7 27 35.48 54.89 28.46 29.51-7.44 54.44-34 74.63-66.6l2.89 1.95A2.87 2.87 0 0 0 975 435l4.59-6.06a2.52 2.52 0 0 0-.58-3.66l-4.11-2.79c19.5-34.49 34.1-73.6 43.58-103.36a165 165 0 0 0 30.75-25.39c17.35-18 31.08-53.08 41-86.34l4.13 1a2.87 2.87 0 0 0 3.37-2l2.14-7.29a2.53 2.53 0 0 0-1.85-3.22l-4.22-1c1.26-4.59 2.44-9.11 3.54-13.48 16.62 10.38 44.91 33 40.94 54.6-8.09 43.95-30.81 63.43-78.26 59.54a12.49 12.49 0 0 0-3.89 24.6 80.28 80.28 0 0 0 19.63 1.33 126.38 126.38 0 0 0 45.69-11.19c55.59-24.86 93.25-83.2 117.54-138.83a12.48 12.48 0 0 0-6.48-16.46zm-278.4 253.47l-3.38-2.28a2.88 2.88 0 0 0-3.86.65l-4.59 6.07a2.53 2.53 0 0 0 .59 3.66l4.64 3.14c-12.56 20.34-24 33.09-33.16 41.05-44 38.25-83.09 8.16-17.5-69.82 31.75-37.75 59-43.6 89.89-56-11.08 30.85-22.16 54.84-32.63 73.53zm43.35-106a183.15 183.15 0 0 1-19.2 8.94 167.89 167.89 0 0 0 24.07-26.2c-1.56 5.93-3.19 11.7-4.87 17.3z" />
          </g>
        </AlwaysOpen>
      </defs>

      <use xlinkHref="#always-open" filter="url(#shadow)" />
      <use
        xlinkHref="#always-open"
        fill="var(--color-neon-glow)"
        filter="url(#glow)"
        style={{
          transition: 'fill 0.5s ease-in',
        }}
      />
      <use
        xlinkHref="#always-open"
        fill="var(--color-neon-fill)"
        style={{
          transition: 'fill 0.3s ease-in',
        }}
      />
    </svg>
  );
};

export default SvgAlwaysOpen;

const flicker = keyframes`
  from  { opacity: 0; }
  0%    { opacity: 1; }
  3%    { opacity: 0.4; }
  6%    { opacity: 1; }
  7%    { opacity: 0.4; }
  8%    { opacity: 1; }
  9%    { opacity: 0.4; }
  10%   { opacity: 1; }
  89%   { opacity: 1; }
  90%   { opacity: 0.4; }
  100%  { opacity: 0.4; }
  to    { opacity: 1; }
`;
const AlwaysOpen = styled.g`
  .flicker1 {
    animation: ${flicker} 5s linear infinite;
  }
  .flicker2 {
    animation: ${flicker} 6s linear 3s infinite;
  }
`;
