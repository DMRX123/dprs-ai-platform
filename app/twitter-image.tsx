import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 600 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '25px',
          }}
        >
          <span style={{ fontSize: '50px', color: 'white' }}>D</span>
        </div>
        
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '15px',
          }}
        >
          DPRS Developers
        </div>
        
        <div
          style={{
            fontSize: '24px',
            color: '#ffffff',
            textAlign: 'center',
            maxWidth: '80%',
            marginBottom: '25px',
          }}
        >
          Professional Web & Flutter Development
        </div>
        
        <div
          style={{
            fontSize: '20px',
            color: '#4ecdc4',
            marginBottom: '20px',
          }}
        >
          Get Your Free Quote Today
        </div>
        
        <div
          style={{
            fontSize: '16px',
            color: '#666',
          }}
        >
          dprs.in
        </div>
      </div>
    ),
    { ...size }
  )
}