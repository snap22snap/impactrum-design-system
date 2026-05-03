// CTABand.jsx — pre-footer warm CTA card
window.CTABand = function CTABand({ lang }) {
  const ko = lang === 'KO';
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 120px' }}>
        <div style={{
          background: '#fbfaf6', borderRadius: 12, padding: 64,
          textAlign: 'center',
        }}>
          <h3 style={{
            margin: 0, fontFamily: 'var(--font-sans)',
            fontSize: 28, fontWeight: 600, lineHeight: 1.25, letterSpacing: ko ? 0 : '-0.3px', color: '#111',
          }}>
            {ko ? '프로젝트 이야기를 들려주세요.' : 'Talk to us about your project.'}
          </h3>
          <p style={{ margin: '12px 0 28px', fontSize: 16, color: '#374151' }}>
            {ko ? '서울 본사에서 영업일 기준 1일 내 회신드립니다.' : 'Reply within one business day from our Seoul HQ.'}
          </p>
          <button style={{
            border: 0, cursor: 'pointer',
            background: '#111', color: '#fff',
            padding: '0 24px', height: 44, borderRadius: 8,
            fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>{ko ? '견적 받기' : 'Get a quote'}</button>
        </div>
      </div>
    </section>
  );
};
