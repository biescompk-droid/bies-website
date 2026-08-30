import { getApi } from '../../lib/api';
import DocumentList from '../../components/DocumentList';

export const metadata = { title: 'Fee Structure', description: 'Tuition and fee details by programme at Brilliance International Education System.' };
export const revalidate = 0;

export default async function FeeStructurePage() {
  const data = await getApi('fee-structure');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Fees</span>
          <h1>Fee Structure</h1>
          <p>Tuition and fee details by programme.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <DocumentList
            items={items}
            nameKey="item_name"
            priceKey="amount"
            descKey="description"
            emptyMessage="Fee structure is being updated — check back soon."
          />
        </div>
      </section>
    </>
  );
}
