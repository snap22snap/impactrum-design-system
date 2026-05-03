// Nav.jsx — top navigation
window.Nav = function Nav({ lang, setLang, scrolled }) {
  const items = ['Products', 'Solutions', 'Projects', 'Company', 'Contact'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: '#fff',
      height: 64,
      borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
      transition: 'border-color 150ms ease-out',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: '100%',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', gap: 32,
      }}>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="assets/impactrum-logo-black-2026.svg" alt="Impactrum" style={{ height: 18, display: 'block' }} />
        </a>
        <nav style={{ display: 'flex', gap: 24, marginLeft: 8 }}>
          {items.map(label => (
            <a key={label} href="#" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14, fontWeight: 500, color: '#111',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            display: 'inline-flex', background: '#eef0f3',
            padding: 4, borderRadius: 9999,
          }}>
            {['KO', 'EN'].map(L => (
              <button key={L}
                onClick={() => setLang(L)}
                style={{
                  border: 0, cursor: 'pointer',
                  padding: '6px 12px', borderRadius: 9999,
                  background: lang === L ? '#fff' : 'transparent',
                  boxShadow: lang === L ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13, fontWeight: 500,
                  color: lang === L ? '#111' : '#6b7280',
                }}>
                {L}
              </button>
            ))}
          </div>
          <button style={{
            border: 0, cursor: 'pointer',
            background: '#111', color: '#fff',
            padding: '0 18px', height: 36, borderRadius: 8,
            fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {lang === 'KO' ? '견적 받기' : 'Get a quote'}
          </button>
        </div>
      </div>
    </header>
  );
};
