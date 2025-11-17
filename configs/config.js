// SVGs
import techSvg from "../assets/images/icons/tech.svg";
import handshakeSvg from "../assets/images/icons/handshake.svg";
import alertSvg from "../assets/images/icons/alert.svg";
import moneySvg from "../assets/images/icons/money.svg";
import socialPeopleSvg from "../assets/images/icons/social-people.svg";
import cloudNetworkingSvg from "../assets/images/icons/cloud-networking.svg";
import heartInHandSvg from "../assets/images/icons/heart-in-hand.svg";
import shieldSvg from "../assets/images/icons/shield.svg";
import sapImplementationSvg from "../assets/images/icons/sap-implementation.svg";
import sapAdvisorySvg from "../assets/images/icons/sap-advisory.svg";
import sapDataMigrationSvg from "../assets/images/icons/sap-data-migration.svg";
import sapDataUpgradeSvg from "../assets/images/icons/sap-data-upgrade.svg";
import sapRolloutSvg from "../assets/images/icons/sap-rollout.svg";
// import sapCoreModulesSvg from '../assets/images/icons/sap-rollout.svg'
import sapCoreModulesSvg from "../assets/images/icons/sap-core-modules.svg";

// PNGs
import homeBanner1 from "@/assets/images/bgImages/homeBanner1.png";
import homeBanner2 from "@/assets/images/bgImages/homeBanner2.png";
import homeBanner3 from "@/assets/images/bgImages/homeBanner3.png";
import industryOil from "@/assets/images/home/industry-oil.png";
import industryMining from "@/assets/images/home/industry-mining.png";
import industryChemical from "@/assets/images/home/industry-chemical.png";
import industryAgriculture from "@/assets/images/home/industry-agriculture.png";
import sapSupport from "@/assets/images/home/sap-support.png";
import sapRollout from "@/assets/images/home/sap-rollout.png";
import sapImplementation from "@/assets/images/home/sap-implementation.png";
import sapDataMigration from "@/assets/images/home/sap-data-migration.png";
import sapDataUpgrade from "@/assets/images/home/sap-data-upgrade.png";
import sapAdvisory from "@/assets/images/home/sap-advisory.png";
import reviewPerson1 from "@/assets/images/home/review-person1.png";
import reviewPerson2 from "@/assets/images/home/review-person2.png";
import partner1 from "@/assets/images/partners/1.png";
import partner2 from "@/assets/images/partners/2.png";
import partner3 from "@/assets/images/partners/3.png";
import partner4 from "@/assets/images/partners/4.png";
import partner5 from "@/assets/images/partners/5.png";
import partner6 from "@/assets/images/partners/6.png";
import partner7 from "@/assets/images/partners/7.png";
import partner8 from "@/assets/images/partners/8.png";
import partner9 from "@/assets/images/partners/9.png";
import partner10 from "@/assets/images/partners/10.png";
import partner11 from "@/assets/images/partners/11.png";
import partner12 from "@/assets/images/partners/12.png";
import partner13 from "@/assets/images/partners/13.png";
import partner14 from "@/assets/images/partners/14.png";
import partner15 from "@/assets/images/partners/15.png";
import partner16 from "@/assets/images/partners/16.png";
import partner17 from "@/assets/images/partners/17.png";
import partner18 from "@/assets/images/partners/18.png";
import partner19 from "@/assets/images/partners/19.png";
import industryFutureAgriculture1 from "@/assets/images/industry/agriculture/industryFuture1.png";
import industryFutureChemical1 from "@/assets/images/industry/chemical/industryFuture1.png";
import industryFutureChemical2 from "@/assets/images/industry/chemical/industryFuture2.png";
import industryFutureMetal1 from "@/assets/images/industry/metalMining/industryFuture1.png";
import industryFutureMetal2 from "@/assets/images/industry/metalMining/industryFuture2.png";
import industryFutureMetal3 from "@/assets/images/industry/metalMining/industryFuture3.png";
import industryFutureOilGas1 from "@/assets/images/industry/oilGas/industryFuture1.png";
import industryFutureOilGas2 from "@/assets/images/industry/oilGas/industryFuture2.png";
import industryFutureOilGas3 from "@/assets/images/industry/oilGas/industryFuture3.png";
import industryFutureOilGas4 from "@/assets/images/industry/oilGas/industryFuture4.png";
import industryFutureOilGas5 from "@/assets/images/industry/oilGas/industryFuture5.png";
import industryFutureOilGas6 from "@/assets/images/industry/oilGas/industryFuture6.png";
import industrySolutionProviding1 from "@/assets/images/industry/metalMining/industrySolutionProviding1.png";
import service1 from "@/assets/images/service/service1.png";
import service2 from "@/assets/images/service/service2.png";
import service3 from "@/assets/images/service/service3.png";
import service4 from "@/assets/images/service/service4.png";
import service5 from "@/assets/images/service/service5.png";
import service6 from "@/assets/images/service/service6.png";
import serviceBenefit1 from "@/assets/images/service/serviceBenefit1.png";
import serviceBenefit2 from "@/assets/images/service/serviceBenefit2.png";
import serviceBenefit3 from "@/assets/images/service/serviceBenefit3.png";

import team1 from "@/assets/images/about/team1.png";
import team2 from "@/assets/images/about/team2.png";
import team3 from "@/assets/images/about/team3.png";
import team4 from "@/assets/images/about/team4.png";
import team5 from "@/assets/images/about/team5.png";
import team6 from "@/assets/images/about/team6.png";
import team7 from "@/assets/images/about/team7.png";
import team8 from "@/assets/images/about/team8.png";
import team9 from "@/assets/images/about/team9.png";
import team10 from "@/assets/images/about/founder.png";

export const MONGODB_URL = "mongodb+srv://sapocomwebsiteadm:sapocom123@sapocomwebsite.saidz2h.mongodb.net/?retryWrites=true&w=majority";

export const CLOUDINARY_CLOUD_NAME = "dgzpjzo93";
export const CLOUDINARY_API_KEY = "629126249768428";
export const CLOUDINARY_API_SECRET = "bfgFNjpIQl-MfHaFfpOw9xL_aGE";


// Home page
export const navTabs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about-us",
    subTabs: [
      {
        name: "About Us",
        link: "",
      },
      {
        name: "Annual Returns",
        link: "/annual-returns",
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Industries",
    link: "/industries",
    subTabs: [
      {
        name: "Oil and Gas",
        link: "/oil-and-gas",
      },
      {
        name: "Metal and Mining",
        link: "/metal-and-mining",
      },
      {
        name: "Agriculture",
        link: "/agriculture",
      },
      {
        name: "Chemical",
        link: "/chemical",
      },
    ],
  },
  {
    name: "Our Culture",
    link: "/our-culture",
  },
  {
    name: "Careers",
    link: "/careers",
  },
];
export const slidesData = [
  {
    heading: "Optimize Your Supply Chain with SAP Solutions",
    para: "Our supply chain solutions provide the necessary control and agility to optimize all production explorations and operations.",
    image: homeBanner3,
    link: "/about-us",
    cta: "/contact-us",
    id: "3",
  },
  {
    heading: "Enhance Your Supply Chain Visibility with SAP",
    para: "Make data-driven decisions, improve collaboration, and achieve supply chain excellence. Discover the power of SAP now!",
    image: homeBanner1,
    link: "/about-us",
    cta: "/contact-us",
    id: "1",
  },
  {
    heading: "Streamline Your Operations with SAP",
    para: "Unlock the full potential of your supply chain by leveraging SAP solutions. Transform your processes, increase efficiency, and drive business growth. Explore SAP today!",
    image: homeBanner2,
    link: "/about-us",
    cta: "/contact-us",
    id: "2",
  },
];
export const industryDetails = [
  {
    name: "Oil and Gas",
    description:
      "Our specialized SAP services for the oil and gas industry optimize operational processes",
    link: "/industries/oil-and-gas",
    image: industryOil,
  },
  {
    name: "Metal & Mining",
    description:
      "We help mining companies improve resource planning, optimize production, and enhance safety measures.",
    link: "/industries/metal-and-mining",
    image: industryMining,
  },
  {
    name: "Agriculture",
    description:
      "Our tailored SAP services for the agriculture sector enable effective farm management and streamlined procurement.",
    link: "/industries/agriculture",
    image: industryAgriculture,
  },
  {
    name: "Chemicals",
    description:
      "Our SAP solutions for the chemicals industry, enabling better demand forecasting and enhanced regulatory compliance",
    link: "/industries/chemical",
    image: industryChemical,
  },
];
export const sapServicesDetails = [
  {
    name: "SAP Support",
    description:
      "We offer comprehensive SAP support services and system maintenance to ensure the smooth operation of your SAP environment.",
    image: sapSupport,
  },
  {
    name: "SAP Rollout",
    description:
      "Our experienced consultants facilitate SAP rollout projects and ensure consistent processes to enable efficient collaboration across your organization.",
    image: sapRollout,
  },
  {
    name: "SAP Implementation",
    description:
      "Our expert team ensures a seamless SAP implementation process and enable you to unlock the full potential of SAP's capabilities.",
    image: sapImplementation,
  },
  {
    name: "Data Migration",
    description:
      "We specialize in secure and efficient data migration services to minimize downtime and ensure data integrity throughout the process.",
    image: sapDataMigration,
  },
  {
    name: "Data Upgrade",
    description:
      "Our experts assist with SAP data upgrades, optimizing system performance, and leveraging the latest features and enhancements.",
    image: sapDataUpgrade,
  },
  {
    name: "Advisory",
    description:
      "Our advisory services provide strategic guidance and help you align your SAP strategy with your business goals for long-term success.",
    image: sapAdvisory,
  },
];
export const whyChooseUsData = [
  {
    name: "Commitment to SAP",
    description:
      "With over 6 years of experience, we are a dedicated pure-play SAP firm providing exceptional services to our clients. Our commitment and consistency have earned us the reputation as the premier Consulting Partner for leading big four consulting firms.",
    image: handshakeSvg,
  },
  {
    name: "Industry Solutions",
    description:
      "We understand the importance of delivering tailored solutions to our clients. That's why we have dedicated industry teams for both pre-sales and value engineering. Our pre-sales team possesses in-depth knowledge of various industries and works closely with clients.",
    image: techSvg,
  },
  {
    name: "Risk Mitigation",
    description:
      "Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.",
    image: alertSvg,
  },
  {
    name: "Flexibility",
    description:
      "Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.",
    image: cloudNetworkingSvg,
  },
  {
    name: "Competetive Cost",
    description:
      "We are committed to providing our clients with an aggressive implementation pricing model that effectively reduces the cost of ownership. As a dedicated offshore SAP Solutions Center, we have optimized our operations",
    image: moneySvg,
  },
  {
    name: "Breadth & Depth",
    description:
      "Our team at Sapocom possesses extensive industry experience in the Metal & Mining and Oil & Gas sectors. We have deep knowledge and understanding of the specific challenges, requirements, and best practices within these industries.",
    image: socialPeopleSvg,
  },
];
export const partnersDetails = [
  {
    name: "partner1",
    image: partner1,
  },
  {
    name: "partner2",
    image: partner2,
  },
  {
    name: "partner3",
    image: partner3,
  },
  {
    name: "partner4",
    image: partner4,
  },
  {
    name: "partner5",
    image: partner5,
  },
  {
    name: "partner6",
    image: partner6,
  },
  {
    name: "partner7",
    image: partner7,
  },
  {
    name: "partner8",
    image: partner8,
  },
  {
    name: "partner9",
    image: partner9,
  },
  {
    name: "partner10",
    image: partner10,
  },
  {
    name: "partner11",
    image: partner11,
  },
  {
    name: "partner12",
    image: partner12,
  },
  {
    name: "partner13",
    image: partner13,
  },
  {
    name: "partner14",
    image: partner14,
  },
  {
    name: "partner15",
    image: partner15,
  },
  {
    name: "partner16",
    image: partner16,
  },
  {
    name: "partner17",
    image: partner17,
  },
  {
    name: "partner18",
    image: partner18,
  },
];
export const reviewData = [
  {
    name: "Vladimir Soloview",
    position: "Executive Director at PWC",
    review:
      "SAPOCOM experts played a key role in implementation and launch of functionality of new commodity price engine CPE/ CPF in one of the biggest mining projects starting from configuration and supporting developments, testing and defect resolution. From the outset, the team demonstrated an impressive level of professionalism and expertise. Their attention to detail and willingness to work closely with us to ensure that our needs were met were truly appreciated. The team's communication was excellent, and we always felt informed and involved throughout the project. We are grateful for contribution of SAPOCOM colleagues and hope for future perspective cooperation.",
    image: reviewPerson1,
  },
  {
    name: "Dominic M Pinili",
    position: "Head of Solutions Delivery",
    review:
      "I want to extend my gratitude to each member of the Sapocom team for their hard work, professionalism, and dedication. It is because of your collective efforts that we now have a top-notch solution that meets our requirements and exceeds our expectations. We look forward to continuing our partnership with Sapocom and working together on future projects. Without a doubt, we highly recommend the Sapocom team to any organization seeking excellence in project delivery.Thank you once again for your outstanding work.",
    image: reviewPerson2,
  },
];

// About Us
export const teamsList = [
  // {
  //     name: 'Anurag Goel',
  //     designation: 'Founder & CEO',
  //     image: team10
  // },
  // {
  //     name: 'Dr. Tribhuvan Raj',
  //     designation: 'Director',
  //     image: team1
  // },
  {
    name: "Kritika Mohan",
    designation: "Administration & Finance Head",
    image: team7,
  },
  {
    name: "Ramesh Marriappa",
    designation: "Senior Manager",
    image: team3,
  },
  {
    name: "Prashant Purushottam",
    designation: "SAP Senior Consultant",
    image: team9,
  },
  {
    name: "Anurag Singh",
    designation: "SAP Senior Consultant",
    image: team5,
  },
  {
    name: "Anchit Aggarwal",
    designation: "SAP Senior Consultant",
    image: team2,
  },
  {
    name: "Raghavendra Reddy",
    designation: "SAP Senior Consultant",
    image: team4,
  },
  {
    name: "Shiba Pattnaik",
    designation: "SAP Senior Consultant",
    image: team6,
  },
  {
    name: "Shrey Kanherkar",
    designation: "SAP Senior Consultant",
    image: team8,
  },
];

// Services
export const serviceSolution = [
  "SAP consulting, training, and talent recruitment, providing valuable expertise for businesses worldwide.",
  "Extensive experience in diverse SAP modules, we collaborate globally to optimize project outcomes",
  "Our commitment is to deliver world-class SAP services, ensuring client satisfaction and success.",
  "SAPOCOM strives to establish a strong organization and contribute to global SAP projects.",
];
export const servicesData = [
  {
    title: "SAP Implementation",
    description:
      "Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.",
    points: [
      "Proper planning with clearly defined goals and objectives for project success.",
      "Software configuration to meet organizational requirements.",
      "Testing to ensure system functionalities.",
      "Training and support for the effective use of the SAP system",
    ],
    image: service1,
    slug: 'sap-implementation'
  },
  {
    title: 'Support',
    description:
      'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
    points: [
      'Establishment of a dedicated support system to address user queries and technical issues.',
      'Timely resolution of system - related problems and troubleshooting.',
      'Continuous monitoring and maintenance of the SAP system to ensure optimal performance.',
      'Regular system updates and enhancements to meet evolving business needs.',
    ],
    image: service6,
    slug: 'support',
  },
  {
    title: 'SAP Rollout',
    description:
      'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
    points: [
      'Key stakeholders from each location or business unit in the planning process to ensure fulfillment of needs.',
      'Prioritized data consistency across all locations for a successful rollout.',
      'Comprehensive training and support to end- users to ensure they are comfortable with the new system and can maximize its benefits.',
      'Regularly monitor and evaluate the rollout to identify and address any issues or areas for improvement.',
    ],
    image: service2,
    slug: 'sap-rollout',
  },
  {
    title: 'Data Migration',
    description:
      'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
    points: [
      'Thorough assessment and mapping of existing data to ensure accurate and smooth transfer to the new system.',
      'Data cleansing and validation processes to eliminate errors and inconsistencies.',
      'Data verification and reconciliation to ensure data integrity post - migration.',
      'Testing and validation of migrated data to ensure it aligns with business requirements.',
    ],
    image: service3,
    slug: 'data-migration',
  },
  {
    title: 'Data Upgrade',
    description:
      'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
    points: [
      'Evaluation of existing data structures and formats for compatibility with the upgraded system.',
      'Data transformation and conversion to the new systems format and structure.',
      'Verification and validation of upgraded data to ensure accuracy and completeness.',
      'Testing of upgraded data to ensure seamless integration with the upgraded system.',
    ],
    image: service4,
    slug: 'data-upgrade',
  },
  {
    title: 'Advisory',
    description:
      'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
    points: [
      'Evaluation of existing data structures and formats for compatibility with the upgraded system.',
      'Data transformation and conversion to the new systems format and structure.',
      'Verification and validation of upgraded data to ensure accuracy and completeness.',
      'Testing of upgraded data to ensure seamless integration with the upgraded system.',
    ],
    image: service5,
    slug: 'advisory',
  },
];
export const serviceBenefits = [
  {
    title: "Trusted Partner for SAP Solutions",
    description:
      "We offer comprehensive solutions focusing on innovation and quality.",
    image: serviceBenefit1,
  },
  {
    title: "Experienced Team of Professionals",
    description:
      "Our certified and experienced SAP professionals provide expert guidance throughout the project lifecycle.",
    image: serviceBenefit2,
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We provide cost-effective solutions without compromising on quality and innovation.",
    image: serviceBenefit3,
  },
];
export const serviceProvidedData = [
  {
    title: "SAP Implementation",
    icon: sapImplementationSvg,
    points: [
      "Implementation & Tech Support",
      "SAP Readiness Analysis & IT Strategy",
      "Point 1 you provide under",
      "Support and Sustenance",
    ],
  },
  {
    title: "SAP Rollout",
    icon: sapRolloutSvg,
    points: ["SAP Governance", "SAP IS-OIL"],
  },
  {
    title: "Data Migration",
    icon: sapDataMigrationSvg,
    points: ["Easy transferability of services"],
  },
  {
    title: "Advisory",
    icon: sapAdvisorySvg,
    points: ["SAP Training", "Talent Resourcing"],
  },
  {
    title: "Data Upgrade",
    icon: sapDataUpgradeSvg,
    points: ["Technical Upgrade and Support"],
  },
  {
    title: "SAP Core Modules ",
    icon: sapCoreModulesSvg,
    points: [
      "S/4 HANA Oil & Gas & Energy, S4SCSD SDM IDM RFNO",
      "Material Management",
      "Sales & Distribution",
      "Commodity Trading & Risk Management",
      "ABAP FIORI",
      "Global Trade Management",
    ],
  },
];

// Industry Data
export const industryClients = [
  {
    name: "reliance",
    image: partner10,
  },
  {
    name: "accenture",
    image: partner15,
  },
  {
    name: "al-qaryan",
    image: partner19,
  },
  {
    name: "nornickel",
    image: partner3,
  },
  {
    name: "kaisa",
    image: partner11,
  },
  {
    name: "pwc",
    image: partner13,
  },
];

// Oil and Gas
export const industryOilGasChallengeData = [
  {
    title: "Pricing Products",
    description:
      "Quick and accurate pricing of products is a common issue faced by oil companies due to numerous variables that affect the pricing.",
  },
  {
    title: "Truck Scheduling",
    description:
      "Timely scheduling of trucks to be dispatched. Planning efficient routes for product delivery trucks can be a challenge.",
  },
  {
    title: "Retail Station Inventory Reconciliation",
    description:
      "Ensuring accurate tracking of inventory levels and minimizing the risk of financial losses due to errors, theft, or spoilage.",
  },
];
export const industryOilGasSuccessData = [
  "Tailored oil and gas solutions for unique industry needs.",
  "Optimization and improved profitability through Sapocom modules.",
  "Real-time data analysis for swift decision-making.",
  "Long-term success achieved with real-time insights.",
  "Industry-specific modules for profitable operations.",
];
export const industryOilGasFutureData = [
  {
    title: "Commodity Pricing Engine (CPE)",
    description:
      "Sapocom’s solution helps oil and gas companies manage complex pricing models by considering various parameters.",
    image: industryFutureOilGas1,
  },
  {
    title: "Scheduling Planning & Forecasting",
    description:
      "Our scheduling, planning, and forecasting modules provide oil and gas companies with tools to optimize their production and distribution processes.",
    image: industryFutureOilGas2,
  },
  {
    title: "Inventory Management",
    description:
      "Manage your stock levels efficiently by utilizing our Inventory management system reducing the risk of stockout.",
    image: industryFutureOilGas3,
  },
  {
    title: "Truck Planning, Scheduling, and Dispatching",
    description:
      "Reduce transport costs with our tools and digital solutions that simplify the planning, scheduling, and dispatch of trucks for oil and gas organizations.",
    image: industryFutureOilGas4,
  },
  {
    title: "Retail Station Reconciliations",
    description:
      "Observe a visible increase in profits with Sapocom’s solution for retail station reconciliations that helps oil and gas companies optimize their retail operations",
    image: industryFutureOilGas5,
  },
  {
    title: "SAP Upstream Downstream",
    description:
      "Remote Logistic Management,Product Revenue Accounting,Joint Venture Accounting Hydrocarbon Product Management Transportation and Distribution, Trader’s and Scheduler’s Workbench , S4SCSD, SDM, IDM,RFNO",
    image: industryFutureOilGas6,
  },
];
export const industryDetailsData = [
  {
    image: heartInHandSvg,
    title: "24x7 Assist",
    description: "24x7 Expert assistance",
  },
  {
    image: shieldSvg,
    title: "World Class Tech",
    description: "World-class technology tailored for every business",
  },
  {
    image: heartInHandSvg,
    title: "Custom Assistance",
    description: "Custom applications and solutions for client needs",
  },
  {
    image: shieldSvg,
    title: "Affordable",
    description: "Affordable SAP-based services for all",
  },
];

// 1. Chemical
export const industryChemicalFutureData = [
  {
    title: "Fiori App Feature",
    description:
      "SAP's Fiori app feature enables chemical companies to access critical information and insights from their mobile devices.",
    image: industryFutureChemical1,
  },
  {
    title: "Implementing Analytical Query",
    description:
      "Analyze their data and gain insights into their operation and leverage machine learning algorithms to identify patterns trends in the data",
    image: industryFutureChemical2,
  },
];
export const industryChemicalFeaturesData = [
  {
    title: "Cloud Solutions",
    description:
      "They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for",
  },
  {
    title: "Digital transformation",
    description:
      "They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for",
  },
  {
    title: "Optimization",
    description:
      "They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for",
  },
];
export const industryChemicalChallengeData = [
  {
    title: "Process Optimization",
    description:
      "Process optimization is a challenge in improving efficiency and product quality.",
  },
  {
    title: "Risk Management",
    description:
      "Safety and risk management are vital due to the hazardous nature of chemical processes.",
  },
  {
    title: "Quality Check",
    description:
      "Scaling up production while maintaining quality is a complex task.",
  },
  {
    title: "Availability",
    description:
      "Fluctuations in raw material availability and pricing impact profitability.",
  },
  {
    title: "Innovations",
    description:
      "Developing new products with unique properties requires significant research.",
  },
  {
    title: "Cybersecurity",
    description:
      "Integrating digital systems and ensuring cybersecurity are challenges.",
  },
];

export const industryChemicalDetailsData = [
  {
    image: heartInHandSvg,
    title: "Cloud Solutions:",
    description:
      "Cutting-edge cloud solutions empower businesses to leverage the full potential and improved collaboration across teams.",
  },
  {
    image: shieldSvg,
    title: "Digital Services:",
    description:
      "Comprehensive range of digital services encompasses  development, digital marketing, and more, driving businesses towards digital transformation",
  },
  {
    image: heartInHandSvg,
    title: "Custom Assistance",
    description:
      "Our team of experts provides tailored assistance and solutions, ensuring that our clients receive personalized support that aligns perfectly with their specific requirements.",
  },
  {
    image: shieldSvg,
    title: "Innovative Techniques",
    description:
      "We strive to stay at the forefront of innovation by adopting the latest technologies and techniques.",
  },
];

export const industryChemicalSuccessData = [
  "SAP's cloud solutions offer flexibility for managing a sustainable energy mix in the chemical industry.",
  "Improved collaboration and optimized production processes through SAP's integrated platform",
  "Leverage real-time data analytics for effective energy management in the chemical industry.",
  "SAP facilitates digital transformation initiatives to modernize energy operations in the chemical sector.",
];

export const industryChemicalClients = [
  {
    name: "reliance",
    image: partner10,
  },
  {
    name: "accenture",
    image: partner15,
  },
  {
    name: "al-qaryan",
    image: partner19,
  },
  {
    name: "nornickel",
    image: partner3,
  },
  {
    name: "kaisa",
    image: partner11,
  },
  {
    name: "pwc",
    image: partner13,
  },
];

// 1. Metal and Mining
export const industryMetalSolutionProviding = [
  {
    title: "Commodity Pricing Engine (CPE)",
    heading: "Commodity Pricing Engine (CPE)",
    description:
      "Commodity Pricing Engine (CPE) provides a robust pricing framework that takes into account various quality parameters, assay percentages, and other relevant factors. This helps metal and mining companies to accurately price their products and minimize the impact of pricing fluctuations on their business.",
    image: industrySolutionProviding1,
  },
  {
    title: "Production Solutions",
    heading: "Integrated Mine Operations and Production solutions (IS Mine)",
    description:
      "(IS Mine) helps mining companies plan, schedule, and optimize their operations more effectively. This solution integrates all mining processes into a single system, enabling real-time data analysis and decision-making. By providing comprehensive planning and scheduling capabilities, IS Mine can help mining companies to improve productivity, reduce costs, and increase profitability.",
    image: industrySolutionProviding1,
  },
  {
    title: "SAP Solutions",
    heading:
      "SAP solutions such as SAP Environment, Health, and Safety Management",
    description:
      "It can help mining companies to ensure compliance with regulatory requirements. This solution provides a comprehensive set of tools for managing environmental, health, and safety risks, ensuring compliance with regulations, and reducing operational risks.",
    image: industrySolutionProviding1,
  },
];
export const industryMetalChallengeData = [
  {
    title: "Pricing Complexity",
    description:
      "Metal and mineral prices are determined by various parameters, such as purity, grade, and other quality characteristics, and often fluctuate based on global market conditions. This complexity makes it difficult for industry players to accurately determine pricing, discounts, and penalties, which can affect the final product price and overall profitability.",
  },
  {
    title: "Scheduling and Planning",
    description:
      "Mining operations require detailed planning to optimize production, minimize downtime, and reduce costs. However, planning for complex mining operations can be challenging due to the dynamic nature of the industry and the unpredictability of market conditions.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Mining operations are subject to various environmental, safety, labor and tax regulations, which can be complex and costly to comply with. Non-compliance can result in significant fines, legal liabilities, and reputational damage, which can have severe implications for the industry.",
  },
];
export const industryMetalFutureData = [
  {
    title: "SAP Industry Specific Mining Solution",
    description:
      "We are experts that provide industry specific  integrated solutions for the metal and mining industry to streamline all the business processes providing a single SAP platform for all the operations.",
    image: industryFutureMetal1,
  },
  {
    title: "Commodity Pricing Engine",
    description:
      "Our CPE is a unique platform from SAP to optimize complex pricing which follows business rule framework that uses all the required variables to accurately and efficiently calculate prices for various commodities.",
    image: industryFutureMetal2,
  },
  {
    title: "Global Trade Management",
    description:
      "SAP GTM streamlines the commodity business processes with its unique functionalities like logistic execution, contract management, expense management & position Management",
    image: industryFutureMetal3,
  },
];

// Agriculture
export const industryAgricultureFutureData = [
  {
    title: "ACM Module",
    description:
      "SAP Agricultural Contract administration combines contract administration with data and procedures for inventory, risk, and finance management. Learn how to handle and administer all contracts with thousands of business partners for a wide range of commodities for your agricultural firm.",
    image: industryFutureAgriculture1,
  },
];
export const industryAgricultureChallengeData = [
  {
    title: "Price Management",
    description:
      "With prices of different agriculture commodities scattered across various interfaces, it's difficult to keep track of all prices in one place.",
  },
  {
    title: "Commodity Fluctuations",
    description:
      "Fluctuations in commodity prices can lead to uncertainty in planning and budgeting.",
  },
  {
    title: "Transportation",
    description:
      "Transportation changes can disrupt the supply chain, leading to delays and losses.",
  },
];
export const industryagricultureSuccessData = [
  "The Agricultural Contract Management (ACM) module provides an integrated solution to manage contracts and agreements between agricultural producers and other stakeholders in the agricultural supply chain.",
  "Agricultural contracts enable risk management through clear terms on pricing, quantity, quality, delivery, and payment, empowering producers and buyers to reduce uncertainty and enhance operational planning",
];
export const degreesOptionList = [
  "Associate of Applied Science (AAS)",
  "Associate of Arts (AA)",
  "Associate of Science (AS)",
  "Bachelor of Architecture (BArch)",
  "Bachelor of Arts (BA)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Commerce (BCom)",
  "Bachelor of Computer Applications (BCA)",
  "Bachelor of Computer Science (BCS)",
  "Bachelor of Education (BEd)",
  "Bachelor of Engineering (BE)",
  "Bachelor of Fine Arts (BFA)",
  "Bachelor of Music (BMus)",
  "Bachelor of Nursing (BN)",
  "Bachelor of Science (BSc)",
  "Bachelor of Science in Engineering (BScEng)",
  "Bachelor of Social Work (BSW)",
  "Bachelor of Technology (B Tech)",
  "Bachelor's Degree",
  "Doctor of Dental Medicine (DMD)",
  "Doctor of Medicine (MD)",
  "Doctor of Pharmacy (PharmD)",
  "Doctor of Philosophy (PhD)",
  "Doctor of Veterinary Medicine (DVM)",
  "High School",
  "Master of Arts (MA)",
  "Master of Business Administration (MBA)",
  "Master of Computer Applications (MCA)",
  "Master of Engineering (MEng)",
  "Master of Fine Arts (MFA)",
  "Master of Public Health (MPH)",
  "Master of Science (MSc)",
  "Master of Technology (M Tech)",
  "Master's Degree",
  "Other",
];
export const sidebarList = {
  Dashboard: "/admin/dashboard",
  Jobs: "/admin/jobs",
  Blogs: "/admin/blogs",
  Slides: "/admin/slider-images",
};

export const ANNUAL_REPORT_LISTS = [
  {
    name: 'SAPOCOM Annual Return FY 2019-20',
    path: '/assets/annual-returns/sapocom-annual-report-fy-2019-20.pdf',
    year: '2019 - 2020'
  },
  {
    name: 'SAPOCOM Annual Return FY 2020-21',
    path: '/assets/annual-returns/sapocom-annual-report-fy-2020-21.pdf',
    year: '2020 - 2021'
  },
  {
    name: 'SAPOCOM Annual Return FY 2021-22',
    path: '/assets/annual-returns/sapocom-annual-report-fy-2021-22.pdf',
    year: '2021 - 2022'
  },
  {
    name: 'SAPOCOM Annual Return FY 2022-23',
    path: '/assets/annual-returns/sapocom-annual-report-fy-2022-23.pdf',
    year: '2022 - 2023'
  },
  {
    name: 'SAPOCOM Annual Return FY 2023-24',
    path: '/assets/annual-returns/sapocom-annual-report-fy-2023-24.pdf',
    year: '2023 - 2024'
  },
]