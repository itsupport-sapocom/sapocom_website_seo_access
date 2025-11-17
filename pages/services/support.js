import greenCheckIcon from '@/assets/images/icons/check-green.svg';
import service from '@/assets/images/service/service6.png';
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
    title: 'Quick Troubleshooting',
    description:
      'Timely resolution of system-related problems to reduce downtime and keep your operations running smoothly.',
  },
  {
    title: 'Continuous Monitoring',
    description:
      'Ongoing system health checks, performance monitoring, and preventative maintenance to avoid disruptions before they happen.',
  },
  {
    title: 'Upgrades & Enhancements',
    description:
      'Regular updates, patches, and enhancements to ensure your SAP system adapts to your evolving business requirements.',
  },
];

const whyChooseUs = [
  'Always Available – 24×7 support to handle critical issues without delay',
  'Trusted Experts – Certified SAP professionals with proven industry experience',
  'Tailored Plans – Support packages designed to fit your budget and needs',
  'Clear & Simple – Transparent process with regular updates and reporting',
];

function SupportPage() {
  return (
    <>
      <SetHeaders title={`Support | Sapocom`} />
      {/* Header Banner */}
      <HeaderBanner
        heading="Support"
        para="Running SAP shouldn’t feel complicated. With our dedicated support services, we ensure your systems are always reliable, secure, and aligned with your business needs. From solving everyday issues to keeping your system future-ready, we’ve got you covered."
        bgImg={service}
        btnText={null}
      />
      {/* Implementation Approach */}
      <ServicesOurApproach
        title="How We Support You"
        approaches={ourImplementationApproach}
      />
      {/* Sap Support Journey */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our Support Journey
          </h2>
        </div>
        {/* Teams Card */}
        <div
          data-aos="zoom-in"
          className="md:py-8 max-md:px-2 rounded-md border border-black/25"
        >
          <div className="grid md:grid-cols-5 max-md:grid-rows-5">
            {/* first */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>National Nigerian Petroleum Company (NNPC)</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2018
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
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Par Pacific (USA)</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2019
                </p>
              </div>
            </div>
            {/* third */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>SIMS Metal (USA)</li>
                  <li>Nor-Nickel (Russia)</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2022
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
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Arcelor Mittal Steel</li>
                  <li>GreenVille (Nigeria)</li>
                  <li>Philips 66 (P66) USA</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2023
                </p>
              </div>
            </div>
            {/* fifth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Thungela (South Africa/Dubai)</li>
                  <li>Orpic (Oman)</li>
                  <li>Saudi Aramco</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
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
      {/* Why Work With Us? */}
      <ServicesWhyChooseUs options={whyChooseUs} title="Why Work With Us?" />
      {/* Our Promise */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our Promise
          </h2>
          <p
            data-aos="flip-left"
            data-aos-delay="100"
            className="text-black font-semibold"
          >
            With us as your SAP support partner, you don’t just get
            problem-solving, you get peace of mind, better system performance,
            and the confidence that your SAP is always ready for what’s next.
          </p>
        </div>
      </section>
      {/* CTA */}
      <ServicesCtaCard
        title="Looking for dependable SAP support that grows with your business?"
        description="👉 Contact Us today and let’s make your SAP systems work smarter for you."
      />
    </>
  );
}

export default SupportPage;
