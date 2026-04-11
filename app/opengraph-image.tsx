import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
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
            width: '120px',
            height: '120px',
            borderRadius: '60px',
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <span style={{ fontSize: '60px', color: 'white' }}>D</span>
        </div>
        
        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px',
          }}
        >
          DPRS Developers
        </div>
        
        <div
          style={{
            fontSize: '28px',
            color: '#ffffff',
            textAlign: 'center',
            maxWidth: '80%',
            marginBottom: '30px',
          }}
        >
          Web & Flutter Development Experts
        </div>
        
        <div
          style={{
            fontSize: '20px',
            color: '#4ecdc4',
            textAlign: 'center',
          }}
        >
          Custom Websites • Mobile Apps • Cross-Platform Solutions
        </div>
        
        <div
          style={{
            fontSize: '18px',
            color: '#666',
            marginTop: '40px',
          }}
        >
          dprs.in
        </div>
      </div>
    ),
    { ...size }
  )
}