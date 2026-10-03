import { getApi } from '../../lib/api';
import DocumentList from '../../components/DocumentList';

export const metadata = {
  title: 'BIES School Uniform | Uniform Guidelines & Items',
  description:
    'View the official school uniform guidelines and approved uniform items for students at Brilliance International Education System (BIES) in Islamabad.',
};

export const revalidate = 0;

export default async function UniformPage() {
  const data = await getApi('uniform-items');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Uniform
          </span>

          <h1>BIES School Uniform Guidelines</h1>

          <p>
            View approved school uniform items and guidelines for students at
            BIES Islamabad.
          </p>
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

          <p style={{ marginTop: '24px' }}>
            Learn more about our{' '}
            <a
              href="/programs"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Academic Programs
            </a>
            , review the{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Process
            </a>
            , or view our{' '}
            <a
              href="/book-list"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Book List
            </a>
            . For questions about uniform items or requirements, visit our{' '}
            <a
              href="/contact"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Contact BIES
            </a>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  );
}