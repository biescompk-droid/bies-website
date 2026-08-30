import { getApi } from '../../lib/api';
import DocumentList from '../../components/DocumentList';

export const metadata = { title: 'Uniform List', description: 'Official uniform details and guidelines for Brilliance International Education System.' };
export const revalidate = 0;

export default async function UniformPage() {
  const data = await getApi('uniform-items');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Uniform</span>
          <h1>Official Uniform Guidelines</h1>
          <p>Approved uniform items by category.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <DocumentList
            items={items}
            nameKey="item_name"
            priceKey="price"
            descKey="description"
            emptyMessage="Uniform details are being updated — check back soon."
          />
        </div>
      </section>
    </>
  );
}
