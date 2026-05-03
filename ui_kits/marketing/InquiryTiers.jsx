// InquiryTiers.jsx — three inquiry tiers, middle one featured
window.InquiryTiers = function InquiryTiers({ lang, sent, onSend }) {
  const ko = lang === 'KO';
  const tiers = [
    {
      name: ko ? '카탈로그 견적' : 'Standard inquiry',
      desc: ko ? '카탈로그 제품에 대한 사양 기반 견적. 약 2주 내 회신.' : 'Spec-based quote for catalog products. Typical 2-week turnaround.',
      cta: ko ? '견적 받기' : 'Get a quote',
      list: ko
        ? ['카탈로그 제품 단가표', '표준 시공 일정', '국내 배송']
        : ['Catalog price sheet', 'Standard install timeline', 'Domestic delivery'],
    },
    {
      name: ko ? '커스텀 프로젝트' : 'Custom project',
      desc: ko ? '사이트 서베이와 구조 검토를 거친 맞춤 픽셀 피치 설계.' : 'Site survey, structural review, and bespoke pixel pitch.',
      cta: ko ? '서베이 신청' : 'Request a survey',
      list: ko
        ? ['현장 사이트 서베이', '구조·하중 검토', '맞춤 픽셀 피치 설계', '준공 후 1년 점검 포함']
        : ['On-site survey', 'Structural review', 'Bespoke pixel pitch', '12-mo service included'],
      featured: true,
    },
    {
      name: ko ? '유지보수 계약' : 'Service contract',
      desc: ko ? '기존 설치물에 대한 정기 점검과 모듈 교체 계약.' : 'Recurring inspection and module-swap contracts for existing installs.',
      cta: ko ? '문의하기' : 'Contact us',
      list: ko
        ? ['분기별 점검', '핫스왑 모듈 보유', '4시간 응대 SLA']
        : ['Quarterly inspection', 'Hot-swap module stock', '4-hour response SLA'],
    },
  ];
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px' }}>
        <h2 style={{ margin: 0, fontSize: 48, fontWeight: 700, lineHeight: 1.15, letterSpacing: ko ? 0 : '-1px', color: '#111', maxWidth: 600, marginBottom: 12 }}>
          {ko ? '문의 방식.' : 'How to inquire.'}
        </h2>
        <p style={{ margin: 0, marginBottom: 48, fontSize: 18, color: '#374151', maxWidth: 560 }}>
          {ko ? '프로젝트 규모에 맞는 절차를 선택하세요.' : 'Pick the path that matches your project scope.'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {tiers.map((t, i) => (
            <div key={i} style={{
              position: 'relative',
              background: t.featured ? '#f6f8fa' : '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12, padding: 32,
              boxShadow: t.featured ? 'none' : '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
            }}>
              {t.featured && (
                <span style={{
                  position: 'absolute', top: -13, left: 32,
                  background: '#111', color: '#fff', fontSize: 13, fontWeight: 500,
                  padding: '4px 12px', borderRadius: 9999,
                }}>{ko ? '가장 많이 문의해요' : 'Most requested'}</span>
              )}
              <div style={{ fontSize: 22, fontWeight: 600, color: '#111', marginBottom: 8 }}>{t.name}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#374151', minHeight: 72 }}>{t.desc}</p>
              <ul style={{ margin: '20px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.list.map((li, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#374151' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 7 9 18l-5-5"/></svg>
                    {li}
                  </li>
                ))}
              </ul>
              <button onClick={() => t.featured && onSend()} style={{
                width: '100%', border: 0, cursor: 'pointer',
                background: t.featured && sent ? '#10b981' : '#111', color: '#fff',
                padding: '0 20px', height: 44, borderRadius: 8,
                fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'background 150ms ease-out',
              }}>{t.featured && sent ? (ko ? '문의 완료 ✓' : 'Inquiry sent ✓') : t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
