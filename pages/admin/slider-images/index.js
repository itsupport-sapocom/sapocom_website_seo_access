import AdminSliderCard from "@/components/admin/AdminSliderCard";
import {  setLoadingState, setSlideModalState } from "@/store/reducers/valueReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdminSlider = () => {
  const dispatch = useDispatch();
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchSlides = async () => {
      dispatch(setLoadingState(true));
      try {        
        const res = await axios.get("/api/pictures");
        setSliderData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        dispatch(setLoadingState(false));
      }
    };
    fetchSlides();
  }, []);

  const createHandler = () => {
    dispatch(setSlideModalState(true));
  };
  
  return (
    <>
      <div className="w-full py-8 md:py-12 px-4">
        <div className="max-w-1200 mx-auto">
          <div className="flex justify-between flex-wrap items-center gap-2  mb-3 x-sm:mb-8">
            <h2 className="text-center text-4xl font-bold text-secondary">
              Slider Images
            </h2>
            <button
              onClick={createHandler}
              className="px-2 border-2 text-md border-primary text-primary rounded-md font-semibold hover:bg-primary/10"
            >
              + Add Image
            </button>
          </div>
          {/* Blogs */}
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {sliderData && sliderData.length > 0 ? (
                <div className="mx-auto grid x-sm:grid-cols-2 review:grid-cols-3 gap-2">
                  {sliderData.map((slide, ind) => {
                    return (
                      <div key={ind}>
                        <AdminSliderCard sliderData={slide} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-xl z-40 font-semibold">
                    Currently, there are no slides!
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

export default AdminSlider;
