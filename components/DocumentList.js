// Shared list renderer for uniform items, fee structure, and documents —
// each grouped by category, with an optional price and/or link.
export default function DocumentList({ items, nameKey, priceKey, linkKey, descKey, categoryKey = 'category', emptyMessage }) {
  if (!items || items.length === 0) {
    return <div className="empty-state"><p>{emptyMessage || 'This section is being updated — check back soon.'}</p></div>;
  }

  const groups = {};
  items.forEach((item) => {
    const cat = item[categoryKey] || 'General';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  return (
    <>
      {Object.keys(groups).map((cat) => (
        <div className="doc-group" key={cat}>
          <h3>{cat}</h3>
          <div className="doc-items">
            {groups[cat].map((item) => (
              <div className="doc-item" key={item.id}>
                <div>
                  <div className="doc-item-name">{item[nameKey]}</div>
                  {descKey && item[descKey] && <div className="doc-item-desc">{item[descKey]}</div>}
                </div>
                {priceKey && item[priceKey] ? <span className="doc-item-price">PKR {item[priceKey]}</span> : null}
                {linkKey && item[linkKey] ? (
                  <a className="doc-link" href={item[linkKey]} target="_blank" rel="noreferrer">Open →</a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
