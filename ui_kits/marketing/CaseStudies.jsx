// CaseStudies.jsx — 3-up case study cards
window.CaseStudies = function CaseStudies({ lang }) {
  const ko = lang === 'KO';
  const items = [
    { client: ko ? '서울 디자인 박물관' : 'Seoul Design Museum', scope: ko ? '실내 · P1.5 · 32㎡' : 'Indoor · P1.5 · 32㎡', type: ko ? '박물관' : 'Museum', tag: ['#efe7fe', '#5e2db8'] },
    { client: ko ? 'GS 강남 쇼룸' : 'GS Gangnam Showroom', scope: ko ? '실내 · P1.2 · 18㎡' : 'Indoor · P1.2 · 18㎡', type: ko ? '리테일' : 'Retail', tag: ['#fde7f0', '#a01b59'] },
    { client: ko ? '인천공항 T2 관제실' : 'ICN T2 Control Room', scope: ko ? '실내 · P0.9 · 26㎡' : 'Indoor · P0.9 · 26㎡', type: ko ? '관제실' : 'Control room', tag: ['#e2f7ee', '#086a48'] },
  ];
  return (
    <section style={{ background: '#f6f8fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: 48, fontWeight: 700, lineHeight: 1.15, letterSpacing: ko ? 0 : '-1px', color: '#111', maxWidth: 600 }}>
            {ko ? '최근 시공 사례.' : 'Recent installations.'}
          </h2>
          <a href="#" style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>
            {ko ? '전체 보기 →' : 'See all projects →'}
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((p, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
              <Photo aspect="4/3" label={p.client} tone="warm" radius={0} />
              <div style={{ padding: 20 }}>
                <span style={{
                  display: 'inline-block', padding: '4px 10px', borderRadius: 9999,
                  background: p.tag[0], color: p.tag[1],
                  fontSize: 12, fontWeight: 500, marginBottom: 10,
                }}>{p.type}</span>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>{p.client}</div>
                <div style={{ marginTop: 4, fontSize: 14, color: '#374151', fontVariantNumeric: 'tabular-nums' }}>{p.scope}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
