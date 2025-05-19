import { CircleAlert } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div 
      style={{ 
        width: '100%',
        backgroundColor: '#C2410C', // dark-orange
        color: 'white',
        padding: '0.75rem',
        textAlign: 'center',
        borderBottom: '1px solid rgba(194, 65, 12, 0.2)'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <CircleAlert size={16} style={{ marginRight: '0.5rem', flexShrink: 0 }} />
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          This is a demo website. Not a real law firm. No legal advice provided.
        </span>
      </div>
    </div>
  );
}
