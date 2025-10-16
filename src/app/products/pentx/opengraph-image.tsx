import { ImageResponse } from 'next/og';

export const runtime = 'edge';

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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: '#0B0B0F',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Gradient backgrounds */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10 }}>
          {/* Product badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '9999px',
              marginBottom: '32px',
            }}
          >
            <span style={{ color: '#3B82F6', fontSize: '24px', fontWeight: 700 }}>
              PentX
            </span>
            <div style={{ width: '2px', height: '24px', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ color: '#A855F7', fontSize: '20px', fontWeight: 600 }}>
              Security Product
            </span>
          </div>

          {/* Main heading */}
          <div
            style={{
              fontSize: '68px',
              fontWeight: 'bold',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '28px',
              maxWidth: '900px',
            }}
          >
            Autonomous AI{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Penetration Testing
            </span>
            {' '}in Minutes
          </div>

          {/* Trust indicators */}
          <div style={{ display: 'flex', gap: '48px', fontSize: '22px', color: '#a3a3a3' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
              <span>60+ Certified Experts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3B82F6' }} />
              <span>53,481 Reports</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            CyberGlobal AI
          </div>
          <div style={{ fontSize: '24px', color: '#737373' }}>cybergl.ai/products/pentx</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

