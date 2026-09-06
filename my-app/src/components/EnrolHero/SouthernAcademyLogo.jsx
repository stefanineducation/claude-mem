const SouthernAcademyLogo = ({ className = '' }) => (
  <svg viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Southern Academy of Higher Education">
    <g fill="currentColor">
      {/* Laurel, left */}
      <path d="M150 60c-14 8-24 22-28 38-3 12-2 25 3 36l8-4c-4-9-5-19-3-29 3-14 11-26 23-33l-3-8z" opacity="0.9" />
      <path d="M138 72c-10 10-15 23-15 36l7 1c0-11 4-22 12-31l-4-6z" opacity="0.7" />
      <path d="M129 92c-6 10-8 21-6 32l6-1c-2-9 0-19 5-27l-5-4z" opacity="0.6" />

      {/* Laurel, right (mirrored) */}
      <path d="M370 60c14 8 24 22 28 38 3 12 2 25-3 36l-8-4c4-9 5-19 3-29-3-14-11-26-23-33l3-8z" opacity="0.9" />
      <path d="M382 72c10 10 15 23 15 36l-7 1c0-11-4-22-12-31l4-6z" opacity="0.7" />
      <path d="M391 92c6 10 8 21 6 32l-6-1c2-9 0-19-5-27l5-4z" opacity="0.6" />

      {/* Small crown */}
      <path d="M247 18l6 10 7-12 6 12 7-10 2 16h-30l2-16z" />

      {/* Shield */}
      <path d="M260 34c14 8 28 12 42 12-1 30-6 55-42 78-36-23-41-48-42-78 14 0 28-4 42-12z" opacity="0.14" />
      <path
        d="M260 34c14 8 28 12 42 12-1 30-6 55-42 78-36-23-41-48-42-78 14 0 28-4 42-12z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Mortarboard */}
      <path d="M260 68l-28 11 28 11 28-11-28-11z" />
      <path d="M241 82v14c0 6 8 11 19 11s19-5 19-11V82l-19 8-19-8z" opacity="0.85" />
      <rect x="285" y="79" width="2.5" height="18" />
      <circle cx="286.2" cy="99" r="3" />

      {/* Open book */}
      <path d="M234 108h52v20c-8-3-18-3-26 0-8-3-18-3-26 0v-20z" opacity="0.9" />
      <path d="M260 108v20" stroke="currentColor" strokeWidth="1.5" />
    </g>

    <text
      x="260"
      y="168"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="30"
      fontWeight="700"
      letterSpacing="4"
    >
      SOUTHERN ACADEMY
    </text>
    <text x="176" y="196" fill="currentColor" fontFamily="Georgia, serif" fontStyle="italic" fontSize="18">
      of
    </text>
    <text
      x="196"
      y="196"
      fill="currentColor"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="18"
      letterSpacing="3"
    >
      HIGHER EDUCATION
    </text>
  </svg>
);

export default SouthernAcademyLogo;
