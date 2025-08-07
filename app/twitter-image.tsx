import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'that man will only have what he has worked towards';
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
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: '#0A0A0A',
            textAlign: 'center',
            padding: '0 60px',
            lineHeight: 1.4,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          that man will only have what he has worked towards
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}