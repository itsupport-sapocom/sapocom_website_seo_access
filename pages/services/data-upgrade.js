import service from '@/assets/images/service/service4.png';
import { HeaderBanner } from '@/components/banners/banners';
import {
  ServicesCtaCard,
  ServicesOurApproach,
  ServicesWhyChooseUs,
} from '@/components/ServicesPage';
import SetHeaders from '@/layouts/SetHeaders';

const ourImplementationApproach = [
  {
    title: 'Structure & Compatibility Assessment',
    description:
      'We analyze your current data structures, formats, and schema to determine compatibility with the target upgraded system. This includes identifying deprecated formats or fields, structural mismatches, and customizations that may require adaptation.',
  },
  {
    title: 'Transformation & Conversion',
    description:
      'Once the compatibility profile is clear, we transform and convert the data into the new system’s format and structure. This may involve re-mapping fields, converting data types, restructuring tables, handling legacy data, and ensuring consistency with upgraded business logic.',
  },
  {
    title: 'Verification & Validation of Upgraded Data',
    description:
      'After conversion, we perform thorough checks to verify that data has not been lost, corrupted, or misaligned. Validation rules ensure data completeness and accuracy, confirming that critical relationships and dependencies (e.g., master-transaction linking, inter-table associations) are intact.',
  },
  {
    title: 'Testing & System Integration',
    description:
      'We run the upgraded data through a full suite of tests, integration tests, user acceptance testing, performance checks to ensure it works correctly in the upgraded system, aligns with business workflows, and that no unexpected issues arise through data dependency or system interface gaps.',
  },
];

const whyChooseUs = [
  'Maintain data integrity and continuity through the upgrade process',
  'Avoid downtime and disruptions thanks to thorough testing',
  'Ensure compliance with internal policies or regulatory standards',
  'Maximize return on upgraded system investments from day one',
];

function DataUpgradePage() {
  return (
    <>
      <SetHeaders title={`Data Upgrade | Sapocom`} />
      {/* Header Banner */}
      <HeaderBanner
        heading="Data Upgrade"
        para="Upgrading data is more than just moving it, it's about transforming it so your systems stay coherent, compliant, and ready for future demands. At SAPOCOM, our Data Upgrade service ensures your existing data is evaluated, converted, and validated to work seamlessly in your upgraded environment."
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
        title="Benefits to Your Business"
      />

      {/* CTA */}
      <ServicesCtaCard
        title="Partner with Us"
        description="SAPOCOM continues to shape digital transformation journeys through successful SAP implementations. Connect with us to explore how we can empower your organization with the right SAP solutions."
      />
    </>
  );
}

export default DataUpgradePage;
