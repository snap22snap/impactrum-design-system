// CategoryPills.jsx — pill-group product type switcher
window.CategoryPills = function CategoryPills({ active, setActive, lang }) {
  const cats = lang === 'KO'
    ? [{ id: 'indoor', label: '실내' }, { id: 'outdoor', label: '실외' }, { id: 'transparent', label: '투명' }, { id: 'custom', label: '커스텀' }]
    : [{ id: 'indoor', label: 'Indoor' }, { id: 'outdoor', label: 'Outdoor' }, { id: 'transparent', label: 'Transparent' }, { id: 'custom', label: 'Custom' }];
  return (
    <div style={{
      display: 'inline-flex', background: '#eef0f3', padding: 6, borderRadius: 9999, gap: 4,
    }}>
      {cats.map(c => (
        <button key={c.id} onClick={() => setActive(c.id)}
          style={{
            border: 0, cursor: 'pointer',
            padding: '8px 16px', borderRadius: 9999,
            background: active === c.id ? '#fff' : 'transparent',
            boxShadow: active === c.id ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: 14, fontWeight: 500,
            color: active === c.id ? '#111' : '#6b7280',
          }}>{c.label}</button>
      ))}
    </div>
  );
};
