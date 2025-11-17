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
import bgBanner from "@/assets/images/bgImages/industryAgriculture.png";
import industryAbout from '@/assets/images/industry/agriculture/industryAbout.png'
import industrySolution from '@/assets/images/industry/agriculture/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryAgricultureFutureData, industryagricultureSuccessData, industryAgricultureChallengeData } from '@/configs/config';

export default function Agriculture() {
  return (
    <>
      <SetHeaders title='Agriculture Industry | Sapocom' />
      <HeaderBanner heading='SAP Agriculture - Modernize Your Agriculture Business With Us' para='Stay ahead in the agricultural sector with our futuristic solutions to optimize management and gain insights with useful analytics.' bgImg={bgBanner} />

      <AboutIndustry
        title='Overview'
        heading='Transform Your Agricultural Business With Our Cutting-Edge Solutions That Lead The Industry'
        description="Are you in the agriculture industry and struggling to keep track of prices and logistics? Look no further than Sapocom's Agricultural Contract Management (ACM) module!"
        image={industryAbout}
        keyPoints={['Emphasizing point to be added', 'Connected truck, rail, marine, pipeline management', "Process monitoring across supply, production, inventory, and emand", 'Inclusion of crop details in the sales terms in grower contracts']}
      />

      <IndustryFeatures
        title='challenges'
        heading='Challenges The Agri-Industry'
        description='A one liner for this section'
        featuresData={industryAgricultureChallengeData}
      />

      <IndustryFuture
        title='Service'
        heading='Connecting Agriculture to the Future with SAP Technologies'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryAgricultureFutureData}
      />

      <IndustrySolution
        successPoints={industryagricultureSuccessData}
        imageIndustrySuccess={industrySolution}
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
        message='We have been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth xperiences! and these positives lead to our growth  and these positives lead to our growth'
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />
    </>
  )
}


