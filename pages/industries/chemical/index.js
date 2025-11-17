import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import { CtaBanner } from '@/components/banners/ctaBanners';
import IndustryCtaWithDetails from '@/components/IndustryCtaWithDetails';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';

// Images
import bgBanner from "@/assets/images/bgImages/industryChemical.png";
import industryAbout from '@/assets/images/industry/chemical/industryAbout.png'
import industrySolution from '@/assets/images/industry/chemical/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryChemicalFutureData, industryChemicalSuccessData, industryDetailsData, industryChemicalDetailsData, industryChemicalChallengeData } from '@/configs/config';

export default function Chemical() {
  return (
    <>
      <SetHeaders title='Chemical Industry | Sapocom' />
      <HeaderBanner heading='Chemical Industry' para='Unique integrated software for the chemical industry to accelerate the adoption of a sustainable energy mix' bgImg={bgBanner} />

      <AboutIndustry
        title='Overview'
        heading='Cutting-Edge SAP Technology to Revolutionize the Chemical Industry'
        description='We study, test, and analyze the impact of artificial intelligence, augmented/virtual reality, machine learning, and NLP and measure their'
        image={industryAbout}
        keyPoints={['Circular value chain management', 'Synchronised processes to optimise asset performance', 'Product compliance management', 'Connected truck, rail, marine, pipeline, and yard management']}
      />

      <IndustryFeatures
        title='CHALLENGES'
        heading='Challenges in the Chemical Industry'
        description='The chemical industry is facing several challenges that affect its growth and profitability as mentioned below.'
        featuresData={industryChemicalChallengeData}
      />

      <IndustrySolution
        successPoints={industryChemicalSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryFuture
        title='services'
        heading='SAP Services Tailored to the Chemical Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryChemicalFutureData}
      />


      <IndustryCtaWithDetails
        title='benefits'
        heading='We give the best solutions to help business revenues skyrocket further!'
        description='Our commitment to quality and client satisfaction is what makes us stand out among the crow'
        cta='/contact-us'
        industryData={industryChemicalDetailsData}
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


