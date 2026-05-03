// FeatureGrid.jsx — 3-up "Why Impactrum" cards
window.FeatureGrid = function FeatureGrid({ lang }) {
  const ko = lang === 'KO';
  const accentByIndex = ['#fb923c', '#8b5cf6', '#10b981'];
  const items = [
    {
      tone: 'warm',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>,
      title: ko ? '제조부터 시공까지' : 'Manufactured + installed',
      body: ko
        ? '서울 자체 공장에서 패널을 생산하고, 직영 시공팀이 현장 설치와 정기 점검까지 책임집니다.'
        : 'Panels manufactured in our Seoul facility, installed by in-house crews, serviced on contract.',
    },
    {
      tone: 'warm',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>,
      title: ko ? '공간 맞춤 설계' : 'Designed to the room',
      body: ko
        ? '구조 검토와 사이트 서베이를 거쳐 픽셀 피치, 휘도, 시야각을 공간에 맞춰 정의합니다.'
        : 'Structural review and site survey set the pixel pitch, brightness, and viewing angle to the room.',
    },
    {
      tone: 'warm',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M20 7 9 18l-5-5"/></svg>,
      title: ko ? '검증된 시공 사례' : 'Proven installations',
      body: ko
        ? '기업 쇼룸, 박물관, 관제실, 시빅 미디어 등 240건 이상의 누적 시공 사례.'
        : 'Over 240 installations across showrooms, museums, control rooms, and civic media.',
    },
  ];
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px' }}>
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 48, fontWeight: 700,
          lineHeight: 1.15, letterSpacing: ko ? 0 : '-1px', color: '#111', maxWidth: 720,
        }}>
          {ko ? '쇼룸의 디테일로 만든 LED 디스플레이.' : 'LED, made with showroom-grade discipline.'}
        </h2>
        <div style={{
          marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: it.tone === 'cool' ? '#f6f8fa' : '#fbfaf6',
              borderRadius: 12, padding: 32,
            }}>
              <div style={{ color: accentByIndex[i] }}>{it.icon}</div>
              <h6 style={{ margin: '20px 0 8px', fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 600, color: '#111' }}>{it.title}</h6>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#374151' }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
