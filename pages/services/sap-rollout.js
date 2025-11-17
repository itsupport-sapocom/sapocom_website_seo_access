import greenCheckIcon from '@/assets/images/icons/check-green.svg';
import service from '@/assets/images/service/service2.png';
import { HeaderBanner } from '@/components/banners/banners';
import {
  ServicesCtaCard,
  ServicesOurApproach,
  ServicesWhyChooseUs,
} from '@/components/ServicesPage';
import SetHeaders from '@/layouts/SetHeaders';
import Image from 'next/image';

const ourImplementationApproach = [
  {
    title: 'Stakeholder Engagement',
    description:
      'We involve key stakeholders from each location early in the planning stage. This ensures that local business.',
  },
  {
    title: 'Data Consistency & Integrity',
    description:
      'Clean and standardized data is the foundation of a successful rollout. We define governance rules, validate master data, and align business processes to ensure accuracy and consistency across all locations.',
  },
  {
    title: 'Training & End-User Enablement',
    description:
      'We design tailored training programs, from role-based workshops to digital learning modules to ensure employees are confident in using the new system. Our dedicated support channels help users adapt quickly and maximize productivity.',
  },
  {
    title: 'Continuous Monitoring & Optimization',
    description:
      'After go-live, we closely track system performance and user adoption. By analyzing feedback and KPIs, we quickly address issues and implement improvements to keep the system stable and effective.',
  },
];

const whyChooseUs = [
  'Minimize risks with proactive planning and validation',
  'Faster adoption through effective change management',
  'Reliable reporting and uniform operations across sites',
  'Future-ready systems that scale with business growth',
];

function SapRolloutPage() {
  return (
    <>
      <SetHeaders title={`SAP Rollout | Sapocom`} />
      {/* Header Banner */}
      <HeaderBanner
        heading="SAP Rollout"
        para="At SAPOCOM, we make SAP rollouts seamless across multiple business units and locations. Our methodology ensures alignment with business goals, consistent data across operations, and smooth adoption by end-users, helping your organization unlock the full value of SAP."
        bgImg={service}
        btnText={null}
      />

      {/* Implementation Approach */}
      <ServicesOurApproach
        title="Our Implementation APPROACH"
        approaches={ourImplementationApproach}
      />

      {/* Sap Implementation Journey */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our Roll-Out Journey
          </h2>
          {/* <p
            data-aos="flip-left"
            data-aos-delay="100"
            className="text-black opacity-70"
          ></p> */}
        </div>
        <div
          data-aos="zoom-in"
          className="md:py-8 max-md:px-2 rounded-md border border-black/25"
        >
          <div className="grid md:grid-cols-5 max-md:grid-rows-5">
            {/* first */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold leading-tight">
                  GreenVille
                </p>
                <p className="rounded-md p-2 bg-primary mx-auto text-white w-[100px]">
                  2023
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
            {/* second */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold leading-tight">
                  Philips 66 (P66) USA
                </p>
                <p className="rounded-md p-2 bg-primary mx-auto text-white w-[100px]">
                  2023
                </p>
              </div>
            </div>
            {/* third */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold leading-tight">
                  Thungela (South Africa/Dubai)
                </p>
                <p className="rounded-md p-2 bg-primary mx-auto text-white w-[100px]">
                  2024
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
            {/* forth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold leading-tight">Orpic (Oman)</p>
                <p className="rounded-md p-2 bg-primary mx-auto text-white w-[100px]">
                  2024
                </p>
              </div>
            </div>
            {/* fifth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold leading-tight">Saudi Aramco</p>
                <p className="rounded-md p-2 bg-primary mx-auto text-white w-[100px]">
                  2024
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chose Us  */}
      <ServicesWhyChooseUs options={whyChooseUs} />

      {/* CTA */}
      <ServicesCtaCard
        title="Looking for a smooth SAP rollout with minimal disruption and maximum impact?"
        description="Connect with us today to discuss your requirements."
      />
    </>
  );
}

export default SapRolloutPage;
