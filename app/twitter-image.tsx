import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abdul Moiz Shahzad';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2C5530',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <defs>
            <pattern id="geometric" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.2">
                <path d="M60 15 L90 45 L90 75 L60 105 L30 75 L30 45 Z"/>
                <path d="M60 30 L75 45 L75 75 L60 90 L45 75 L45 45 Z"/>
                <circle cx="60" cy="60" r="8" fill="#D4AF37" opacity="0.4"/>
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="630" fill="url(#geometric)" />
        </svg>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* Arabic verse */}
          <div
            style={{
              fontSize: 48,
              color: '#D4AF37',
              fontFamily: 'system-ui',
              direction: 'rtl',
              marginBottom: 10,
            }}
          >
            وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Abdul Moiz Shahzad
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: '#FFFFFF',
              opacity: 0.8,
            }}
          >
            Building with Purpose
          </div>

          {/* Reference */}
          <div
            style={{
              fontSize: 18,
              color: '#D4AF37',
              opacity: 0.6,
              marginTop: 20,
            }}
          >
            53:39
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}