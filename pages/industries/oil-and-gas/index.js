import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import { CtaBanner } from '@/components/banners/ctaBanners';
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';

// Images
import bgBanner from "@/assets/images/bgImages/industryOilAndGas.png";
import industryAbout from '@/assets/images/industry/oilGas/industryAbout.png'
import industrySolution from '@/assets/images/industry/oilGas/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryOilGasChallengeData, industryOilGasSuccessData, industryOilGasFutureData } from '@/configs/config';

function OilGasPage() {
  return (
    <>
      <SetHeaders title='Oil & Gas Industry | Sapocom' />
      <HeaderBanner heading='Oil & Gas Industry' para='Empower your OG&E business to drive the renewable energy future with our cutting-edge digital solutions, unlocking your full potential for sustainable growth.' bgImg={bgBanner} />

      <AboutIndustry
        title='Overview'
        heading='We prepare you for a digital and sustainable oil and gas industry future.'
        description='Our solutions can help you leverage the latest technology to streamline operations, reduce your environmental impact, and drive success in a rapidly changing landscape'
        image={industryAbout}
        keyPoints={[' Real-time trading, scheduling', 'Supply and distribution chain management', 'Access to a common data set for consistency across activities', 'Reliability-centered and prescriptive maintenance']}
      />

      <IndustryFeatures
        title='Challenges'
        heading='Challenges in Oil & Gas Industry'
        description='Like every industry, Oil & Gas industry has its share of issues to tackl'
        featuresData={industryOilGasChallengeData}
      />

      <IndustrySolution
        successPoints={industryOilGasSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryFuture
        title='services'
        heading='SAP Services Tailored to the Oil and Gas Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryOilGasFutureData}
      />

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSapocom />

      <CtaBanner />

      <ClientReviews
        message="SAPOCOM experts played a key role in implementation and launch of functionality of new commodity price engine CPE/ CPF in one of the biggest mining projects starting from configuration and supporting developments, testing and defect resolution.From the outset, the team demonstrated an impressive level of professionalism and expertise. The team's communication was excellent, and we always felt informed and involved throughout the project. We are grateful for contribution of SAPOCOM colleagues and hope for future perspective cooperation."
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />

    </>
  )
}

export default OilGasPage
