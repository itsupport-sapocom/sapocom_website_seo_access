import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import { CtaBanner } from '@/components/banners/ctaBanners';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';

// images
import bgBanner from "@/assets/images/bgImages/industryMining.png";
import industryAbout from '@/assets/images/industry/metalMining/industryAbout.png'
import industrySolution from '@/assets/images/industry/metalMining/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryMetalFutureData, industryMetalChallengeData, industryMetalSolutionProviding } from '@/configs/config';
import IndustryPartsDetail from '@/components/IndustryPartsDetail';

export default function MetalMining() {
  return (
    <>
      <SetHeaders title='Metal & Mining Industry | Sapocom' />
      <HeaderBanner heading='Metal & Mining Industry' para='Ignite the Future of Metal and Mining with SAP CTRM: Unleash Enhanced Business Processes and Propel Productivity towards Sustainable Growth! ' bgImg={bgBanner} />

      <AboutIndustry
        title='OVERVIEW'
        heading='Grow exponentially in the Metal and Mining industry with our SAP solutions'
        description="Our SAP technical expertise empowers your metal and mining operations with cutting-edge solutions for enhanced efficiency and profitability."
        image={industryAbout}
        keyPoints={['Nonbulk transportation management', 'Portfolio and project management', ' Asset management', 'Warehouse management']}
      />

      <IndustryFeatures
        heading='Challenges Observed in the Metal and Mining Industry'
        description="The metal and mining industry faces a multitude of challenges that affect 
        its operations, profitability, and sustainability. These challenges can significantly
        impact the industry's success."
        featuresData={industryMetalChallengeData}
      />

      <IndustryPartsDetail details={industryMetalSolutionProviding} />

      <IndustryFuture
        title='service'
        heading='SAP Services Tailored to the Mining Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryMetalFutureData}
      />

      {/* <IndustrySolution
        successPoints={industryChemicalSuccessData}
        imageIndustrySuccess={industrySolution}
      /> */}

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSapocom />

      <CtaBanner />

      <ClientReviews
        message='We have been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth xperiences! and these positives lead to our growth  and these positives lead to our growth'
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />
    </>
  )
}


