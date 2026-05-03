// Footer.jsx — light surface-soft footer
window.Footer = function Footer({ lang }) {
  const ko = lang === 'KO';
  const cols = ko
    ? [
      { h: '제품', items: ['실내 LED', '실외 LED', '투명 LED', '커스텀 솔루션'] },
      { h: '솔루션', items: ['쇼룸', '리테일', '관제실', '박물관'] },
      { h: '회사', items: ['소개', '시공 사례', '인증', '채용'] },
      { h: '리소스', items: ['카탈로그', '사양서', '시공 가이드', '문의'] },
    ]
    : [
      { h: 'Products', items: ['Indoor LED', 'Outdoor LED', 'Transparent LED', 'Custom solutions'] },
      { h: 'Solutions', items: ['Showrooms', 'Retail', 'Control rooms', 'Museums'] },
      { h: 'Company', items: ['About', 'Projects', 'Certifications', 'Careers'] },
      { h: 'Resources', items: ['Catalog', 'Spec sheets', 'Install guide', 'Contact'] },
    ];
  return (
    <footer style={{ background: '#f7f8fa', borderTop: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: 32, marginBottom: 48 }}>
          <div>
            <img src="assets/impactrum-logo-black-2026.svg" alt="Impactrum" style={{ height: 18, display: 'block', marginBottom: 16 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#6b7280', maxWidth: 280 }}>
              {ko ? '서울 본사 · 실내·실외·투명·커스텀 LED 디스플레이 제조 및 시공.' : 'Seoul HQ · indoor, outdoor, transparent, and custom LED — manufactured and installed.'}
            </p>
          </div>
          {cols.map((c, i) => {
            const accents = ['#fb923c', '#ec4899', '#8b5cf6', '#10b981'];
            return (
            <div key={i}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 12,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 9999, background: accents[i] }}/>
                {c.h}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map((it, j) => (
                  <li key={j}><a href="#" style={{ fontSize: 14, color: '#6b7280', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          );
          })}
        </div>
        <div style={{
          paddingTop: 24, borderTop: '1px solid #e5e7eb',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontSize: 13, color: '#898989',
        }}>
          <span>© 2026 Impactrum Co., Ltd.</span>
          <span>{ko ? '서울특별시 강남구 · sales@impactrum.kr' : 'Gangnam-gu, Seoul · sales@impactrum.kr'}</span>
        </div>
      </div>
    </footer>
  );
};
