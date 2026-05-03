// Hero.jsx — 7/5 split hero band
window.Hero = function Hero({ lang }) {
  const ko = lang === 'KO';
  return (
    <section style={{ background: '#fff' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '120px 32px',
        display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#e2f7ee', padding: '6px 14px', borderRadius: 9999,
            fontSize: 13, fontWeight: 500, color: '#086a48', marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: '#10b981' }}/>
            {ko ? '서울 본사 · 시공 사례 240+' : 'Seoul HQ · 240+ installations'}
          </div>
          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontSize: 64, fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: ko ? 0 : '-1.5px',
            color: '#111',
          }}>
            {ko ? <>공간을 정의하는<br/>프리미엄 LED.</> : <>Premium LED,<br/>engineered for<br/>the spaces that demand it.</>}
          </h1>
          <p style={{
            marginTop: 20, marginBottom: 32, maxWidth: 480,
            fontSize: 18, lineHeight: 1.6, color: '#374151',
          }}>
            {ko
              ? '실내·실외·투명·커스텀 LED 디스플레이를 제조부터 시공, 유지보수까지 일괄 공급합니다.'
              : 'Indoor, outdoor, transparent, and custom LED — manufactured, installed, and serviced end-to-end from Seoul.'}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{
              border: 0, cursor: 'pointer',
              background: '#111', color: '#fff',
              padding: '0 20px', height: 44, borderRadius: 8,
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>{ko ? '견적 받기' : 'Get a quote'}</button>
            <button style={{
              cursor: 'pointer',
              background: '#fff', color: '#111',
              padding: '0 20px', height: 44, borderRadius: 8,
              border: '1px solid #d4d4d4',
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>{ko ? '시공 사례 보기' : 'See projects'}</button>
          </div>
        </div>
        <div style={{
          background: '#fbfaf6', border: '1px solid #e5e7eb',
          borderRadius: 16, padding: 0, overflow: 'hidden', aspectRatio: '4/5',
        }}>
          <Photo aspect="4/5" label={ko ? '시공 사진 · 4:5' : 'Hero installation · 4:5'} fill />
        </div>
      </div>
    </section>
  );
};
