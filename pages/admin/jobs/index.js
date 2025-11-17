import AdminJobOpening from "@/components/admin/AdminJob";
import {
  setJobModalState,
  setModalType,
} from "@/store/reducers/valueReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdminJobs = () => {
  const [OpeningsData, setOpeningsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/jobs`);
        setOpeningsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const createHandler = () => {
    dispatch(setJobModalState(true));
    dispatch(setModalType("Create"));
  };
  return (
    <>
      <div className="w-full py-8 md:py-12 px-2 md:px-4">
        <div className="max-w-1200 mx-auto">
          <div className="flex justify-between flex-wrap items-center gap-2 px-2 mb-3 x-sm:mb-8">
            <h2 className="text-center text-4xl font-bold text-secondary">
              Listed Jobs
            </h2>
            <button
              onClick={createHandler}
              className="px-2 border-2 text-md border-primary text-primary rounded-md font-semibold hover:bg-primary/10"
            >
              + Add Job
            </button>
          </div>
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {OpeningsData && OpeningsData.length > 0 ? (
                <div className="mx-auto p-2">
                  <div className="flex-col space-y-4">
                    {OpeningsData.map((opening, ind) => {
                      return <AdminJobOpening jobData={opening} key={ind} />;
                    })}
                  </div>
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent md:text-xl font-semibold">
                    Currently, No Open Positions - Stay Tuned for Exciting
                    Career Opportunities Ahead!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
