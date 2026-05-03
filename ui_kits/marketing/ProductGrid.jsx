// ProductGrid.jsx — product image cards switched by category
window.ProductGrid = function ProductGrid({ lang, active, setActive }) {
  const ko = lang === 'KO';
  const productsByCat = {
    indoor: [
      { name: 'Aurora P1.2', tag: ko ? 'Indoor · 실내' : 'Indoor', spec: 'P1.2 · 1,500 nits · 3,840 Hz' },
      { name: 'Aurora P1.5', tag: ko ? 'Indoor · 실내' : 'Indoor', spec: 'P1.5 · 1,200 nits · 3,840 Hz' },
      { name: 'Aurora P1.8', tag: ko ? 'Indoor · 실내' : 'Indoor', spec: 'P1.8 · 1,200 nits · 1,920 Hz' },
    ],
    outdoor: [
      { name: 'Helios P3', tag: ko ? 'Outdoor · 실외' : 'Outdoor', spec: 'P3 · 6,500 nits · IP65' },
      { name: 'Helios P4', tag: ko ? 'Outdoor · 실외' : 'Outdoor', spec: 'P4 · 7,500 nits · IP65' },
      { name: 'Helios P6', tag: ko ? 'Outdoor · 실외' : 'Outdoor', spec: 'P6 · 8,500 nits · IP66' },
    ],
    transparent: [
      { name: 'Lumen Glass T3.9', tag: ko ? 'Transparent · 투명' : 'Transparent', spec: 'P3.9 · 70% transparency' },
      { name: 'Lumen Glass T7.8', tag: ko ? 'Transparent · 투명' : 'Transparent', spec: 'P7.8 · 80% transparency' },
      { name: 'Lumen Mesh', tag: ko ? 'Transparent · 투명' : 'Transparent', spec: 'P10 · 85% transparency' },
    ],
    custom: [
      { name: 'Studio Curve', tag: ko ? 'Custom · 커스텀' : 'Custom', spec: ko ? '곡면 · ±60°' : 'Curved · ±60°' },
      { name: 'Studio Cube', tag: ko ? 'Custom · 커스텀' : 'Custom', spec: ko ? '6면 큐브' : '6-sided cube' },
      { name: 'Studio Floor', tag: ko ? 'Custom · 커스텀' : 'Custom', spec: ko ? '내하중 1.5 t/㎡' : 'Floor · 1.5 t/㎡' },
    ],
  };
  const tagColors = { indoor: ['#fff3e6', '#b25416'], outdoor: ['#e2f7ee', '#086a48'], transparent: ['#efe7fe', '#5e2db8'], custom: ['#fde7f0', '#a01b59'] };
  const items = productsByCat[active];
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#6b7280', marginBottom: 8 }}>
              {ko ? '제품군' : 'Product family'}
            </div>
            <h3 style={{ margin: 0, fontSize: 36, fontWeight: 700, lineHeight: 1.2, letterSpacing: ko ? 0 : '-0.5px', color: '#111' }}>
              {ko ? '환경에 맞는 LED를 고르세요.' : 'Pick the LED for the environment.'}
            </h3>
          </div>
          <CategoryPills active={active} setActive={setActive} lang={lang} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((p, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden',
            }}>
              <Photo aspect="4/3" label={`${p.name}`} tone="warm" radius={0} />
              <div style={{ padding: 20 }}>
                <span style={{
                  display: 'inline-block', padding: '4px 10px', borderRadius: 9999,
                  background: tagColors[active][0], color: tagColors[active][1],
                  fontSize: 12, fontWeight: 500, marginBottom: 10,
                }}>{p.tag}</span>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>{p.name}</div>
                <div style={{ marginTop: 4, fontSize: 14, color: '#6b7280', fontVariantNumeric: 'tabular-nums' }}>{p.spec}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
