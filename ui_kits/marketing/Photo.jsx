// Photo.jsx — labeled placeholder for real LED installation photography
window.Photo = function Photo({ aspect = '16/9', label = 'LED installation photo', tone = 'warm', radius = 12, fill = false, style = {} }) {
  const bg = tone === 'cool' ? '#f6f8fa' : tone === 'soft' ? '#f7f8fa' : '#fbfaf6';
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: fill ? undefined : aspect,
        height: fill ? '100%' : undefined,
        background: bg,
        borderRadius: radius,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* faint diagonal hairline pattern so the placeholder reads as a holder, not a fill */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <defs>
          <pattern id="ph" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#e5e7eb" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph)" />
      </svg>
      <div style={{
        position: 'relative',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 500,
        color: '#898989',
        background: bg,
        padding: '4px 10px',
        borderRadius: 9999,
        letterSpacing: 0.02,
      }}>
        {label}
      </div>
    </div>
  );
};
