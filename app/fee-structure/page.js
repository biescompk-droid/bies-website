import { getApi } from '../../lib/api';
import DocumentList from '../../components/DocumentList';

export const metadata = {
  title: 'BIES Fee Structure | Brilliance International Education System',
  description:
    'View the fee structure and tuition details for Brilliance International Education System (BIES) in Islamabad, including fees by programme.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.bies.com.pk/fee-structure',
  },
  openGraph: {
    title: 'BIES Fee Structure | Brilliance International Education System',
    description:
      'View the fee structure and tuition details for Brilliance International Education System (BIES) in Islamabad, including fees by programme.',
    url: 'https://www.bies.com.pk/fee-structure',
  },
};

export const revalidate = 0;

export default async function FeeStructurePage() {
  const data = await getApi('fee-structure');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            BIES Fees
          </span>

          <h1>
            Brilliance International Education System Fee Structure
          </h1>

          <p>
            Tuition and fee details by programme at Brilliance International
            Education System in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Fee Information</span>

            <h2>
              BIES School Fees by Programme
            </h2>

            <p>
              Find the current tuition and fee information for programmes
              offered at Brilliance International Education System (BIES).
              The fee structure below provides details according to the
              available programmes.
            </p>
          </div>

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