import service from '@/assets/images/service/service3.png';
import { HeaderBanner } from '@/components/banners/banners';
import {
  ServicesCtaCard,
  ServicesOurApproach,
  ServicesWhyChooseUs,
} from '@/components/ServicesPage';
import SetHeaders from '@/layouts/SetHeaders';

const ourImplementationApproach = [
  {
    title: 'Assessment & Mapping',
    description:
      'We begin by assessing your existing data sources, formats, and business rules. Detailed field-mapping is performed to align data from legacy systems with your target SAP environment. This ensures everything from master data (e.g., suppliers, inventory, customers) to transactional data is accounted for.',
  },
  {
    title: 'Cleansing & Validation',
    description:
      'To prevent carrying over bad data, we apply cleansing routines removing duplicates, resolving inconsistent formats, correcting errors, standardizing values. Validation rules are defined in advance to catch anomalies early.',
  },
  {
    title: 'Verification & Reconciliation',
    description:
      'After migration, we verify counts, cross-check summaries, and reconcile old vs new datasets to ensure no data is lost or corrupted. We check the integrity of critical relationships (e.g. master-data linkages, transaction histories) so everything works as expected.',
  },
  {
    title: 'Testing & Alignment with Business Requirements',
    description:
      'Multiple test cycles are run including mock migrations, user acceptance testing (UAT), integration testing to ensure the migrated data supports your real business operations. We ensure the migrated data aligns with regulatory, reporting, and operational requirements specific to the Oil & Gas sector (for example, for inventory reconciliation, pricing, joint venture accounting etc.).',
  },
];

const whyChooseUs = [
  'Reliability & Trust in your data – you can make confident decisions based on accurate information.',
  'Reduced Risk of Disruption – thorough testing and validation mean fewer surprises at go-live.',
  'Faster Realization of SAP Value – with clean and accurate data, you get smoother user adoption, fewer correction cycles, and better process efficiency.',
  'Compliance & Reporting Readiness – particularly crucial in capital-intensive, regulated sectors like Oil & Gas, where accurate reporting, inventory tracking, and historical data integrity matter.',
];

function DataMigrationPage() {
  return (
    <>
      <SetHeaders title={`Data Migration | Sapocom`} />
      {/* Header Banner */}
      <HeaderBanner
        heading="Data Migration"
        para="We understand that data is the backbone of your SAP deployment. At SAPOCOM, our Data Migration services are designed to move your critical business data securely, accurately, and in a controlled way so your transition to a new system is smooth, reliable, and meets industry-specific needs."
        bgImg={service}
        btnText={null}
      />
      {/* Implementation Approach */}
      <ServicesOurApproach
        title="Our APPROACH"
        approaches={ourImplementationApproach}
      />

      {/* Benefits to Your Organization  */}
      <ServicesWhyChooseUs
        options={whyChooseUs}
        title="Benefits to Your Organization"
      />

      {/* CTA */}
      <ServicesCtaCard
        title="Partner with Us"
        description="SAPOCOM continues to shape digital transformation journeys through successful SAP implementations. Connect with us to explore how we can empower your organization with the right SAP solutions."
      />
    </>
  );
}

export default DataMigrationPage;
