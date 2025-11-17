import SetHeaders from "@/layouts/SetHeaders";
import { useRouter } from "next/router";
import JobCard from "@/components/JobCard";
import JobForm from "@/components/JobForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { setLoadingState } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
import Loader from "@/layouts/Loader";

function MyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingState(true));
        const response = await axios.get(`/api/jobs?slug=${slug}`);
        setJobData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoadingState(false));
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
      {jobData.details && (
        <div className="w-full ">
          <div className="max-w-1200 mx-auto py-8 md:py-10 px-4">
            <h2 className="text-2xl font-bold text-secondary pb-2">
              {"About this position"}
            </h2>
            <div
              className="text-base text-black opacity-70"
              id="jobData"
              dangerouslySetInnerHTML={{ __html: jobData.details }}
            />
          </div>
        </div>
      )}

      {/* form to apply for job */}
      <JobForm jobData={jobData} />
    </>
  );
}

export default MyPage;
