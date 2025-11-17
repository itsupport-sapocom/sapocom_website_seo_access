import service from '@/assets/images/service/service5.png';
import { HeaderBanner } from '@/components/banners/banners';
import {
  ServicesCtaCard,
  ServicesOurApproach,
  ServicesWhyChooseUs,
} from '@/components/ServicesPage';
import SetHeaders from '@/layouts/SetHeaders';

const ourImplementationApproach = [
  {
    title: 'Current State Assessment & Compatibility Review',
    description:
      'We begin by evaluating your existing data structures, systems, processes, and formats to understand what’s working, what isn’t, and what needs changing for compatibility with future upgrades or transformations.',
  },
  {
    title: 'Business & Technology Road-Mapping',
    description:
      'Based on the assessment, we work with your leadership and technical teams to define a clear roadmap. This includes identifying transformation opportunities, aligning SAP capabilities with business objectives, and planning for technology, data, and process changes.',
  },
  {
    title: 'Transformation Design & Conversion Planning',
    description:
      'When upgrades or migrations are part of the strategy, we design data transformation and conversion plans: mapping new formats, defining data flows, ensuring that the target state can accommodate your business requirements and regulatory constraints.',
  },
  {
    title: 'Verification, Validation & Testing Strategy',
    description:
      'We help define how you will verify upgraded or transformed data, validate completeness and accuracy, and test integrations thoroughly ensuring everything works seamlessly before going live.',
  },
  {
    title: 'Change Management & Governance',
    description:
      'Advisory isn’t just about tech. We also help put in place governance frameworks, decision structures, and change-management practices so that your SAP strategy gets ownership, stays aligned, and delivers continuous value.',
  },
];

const whyChooseUs = [
  'Make strategic decisions with confidence, backed by thorough assessments and roadmaps',
  'Reduce risk: avoid compatibility issues, costly rework, or missed compliance',
  'Align IT investments with business outcomes: technology supports your growth, not hinders it',
  'Ensure smoother transitions: whether upgrading, migrating, or enhancing SAP, you get fewer surprises',
];

function AdvisoryPage() {
  return (
    <>
      <SetHeaders title={`Advisory | Sapocom`} />
      {/* Header Banner */}
      <HeaderBanner
        heading="Advisory"
        para="Strategic guidance is what separates good SAP deployments from great ones. At SAPOCOM, our Advisory Services help you align your SAP strategy with your long-term business goals, reduce risks, and make the most of your investment in SAP."
        bgImg={service}
        btnText={null}
      />
      {/* Implementation Approach */}
      <ServicesOurApproach
        title="Our APPROACH"
        approaches={ourImplementationApproach}
      />

      {/* Why choose */}
      <ServicesWhyChooseUs
        options={whyChooseUs}
        title="Why Choose Our Advisory Services"
      />

      {/* CTA */}
      <ServicesCtaCard
        title="Partner with Us"
        description="SAPOCOM continues to shape digital transformation journeys through successful SAP implementations. Connect with us to explore how we can empower your organization with the right SAP solutions."
      />
    </>
  );
}

export default AdvisoryPage;
