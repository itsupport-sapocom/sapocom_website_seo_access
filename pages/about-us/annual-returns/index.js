import { HeaderBanner } from '@/components/banners/banners';
import SetHeaders from '@/layouts/SetHeaders';

import bgBanner from "@/assets/images/bgImages/annualReportBanner.jpg";
import { ANNUAL_REPORT_LISTS } from '@/configs/config';
import AnnualReportCard from '@/components/AnnualReportCard';

function AnnualReport() {
  return (
    <>
      <SetHeaders title="Annual Returns | Sapocom" /> 
      <HeaderBanner heading='Annual Returns' para='' bgImg={bgBanner} btnText='' />

            <div className="w-full py-20 p-4" id="openings">
        <div className="max-w-1200 mx-auto">
          <h1 className="mb-8 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Annual Returns
          </h1>

          <div className="mx-auto">
            <div className="flex-col space-y-4">
              {ANNUAL_REPORT_LISTS.map((annualReport) => {
                return <AnnualReportCard {...annualReport} key={annualReport.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnnualReport;