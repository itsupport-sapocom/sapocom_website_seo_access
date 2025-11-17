import SetHeaders from "@/layouts/SetHeaders";
import Link from "next/link";
import { useRouter } from "next/router";
import JobCard from "@/components/JobCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { setLoadingState } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
import Loader from "@/layouts/Loader";
import ApplicantData from "@/components/admin/Applicant";

function MyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = router.query;
  const [jobData, setJobData] = useState({});
  const [applicantsData, setApplicantsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let jobId;
      dispatch(setLoadingState(true));
      let url = `/api/jobs?slug=${slug}`;
      try {
        const response = await axios.get(url);
        setJobData(response.data[0]);
        jobId = response.data[0]._id;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      url = `/api/jobs/applications?id=${jobId}`;
      try {
        const response = await axios.get(url);
        setApplicantsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoadingState(false));
        setIsLoading(false);
      }
    };
    if (slug) {
      fetchData();
    }
  }, [dispatch, slug]);

  return (
    <>
      <Loader />
      <SetHeaders title={`${jobData?.title} | Sapocom`} />

      {/* Job info */}
      <JobCard jobData={jobData} />

      {/* Job Requirements */}
      {/* {jobData.details && (
        <div className="w-full ">
          <div className="max-w-1200 mx-auto py-8 md:py-10 x-sm:px-4 px-2">
            <h2 className="text-2xl font-bold text-secondary pb-2">
              {"About this position"}
            </h2>
            <div
              className="text-base text-black opacity-70"
              dangerouslySetInnerHTML={{ __html: jobData.details }}
            />
          </div>
        </div>
      )} */}

      {/* Back button */}
      {/* <div className="mx-auto max-w-1200 x-sm:px-4 px-2">
        <Link passHref href={"/admin/jobs"}>
          <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            &larr; View All Openings
          </button>
        </Link>
      </div> */}
      <div className="w-full py-8 md:py-12 x-sm:px-4 px-2">
        <div className="max-w-1200 mx-auto flex-col items-center">
          <h2 className="text-center text-4xl font-bold text-secondary mb-4">
            Job Applicants
          </h2>
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : applicantsData.length > 0 ? (
            <div className="flex flex-col gap-2 review:gap-4 x-sm:flex-row x-sm:flex-wrap justify-center items-center">
              {applicantsData.map((applicant, ind) => {
                return <ApplicantData data={applicant} key={ind} />;
              })}
            </div>
          ) : (
            <div className="max-w-1200 mx-auto">
              <p className="text-md text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-2xl font-semibold">
                Currently, No Applicants are there
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyPage;
