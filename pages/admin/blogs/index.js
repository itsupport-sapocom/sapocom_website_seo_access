import AdminBlog from "@/components/admin/AdminBlog";
import { setBlogModalState, setModalType } from "@/store/reducers/valueReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const [BlogsData, setBlogsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blogs`);
        setBlogsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const createHandler = () => {
    dispatch(setBlogModalState(true));
    dispatch(setModalType("Create"));
  };
  return (
    <>
      <div className="w-full py-8 md:py-12 px-4">
        <div className="max-w-1200 mx-auto">
          <div className="flex justify-between flex-wrap items-center gap-2  mb-3 x-sm:mb-8">
            <h2 className="text-center text-4xl font-bold text-secondary">
              Listed Blogs
            </h2>
            <button
              onClick={createHandler}
              className="px-2 border-2 text-md border-primary text-primary rounded-md font-semibold hover:bg-primary/10"
            >
              + Add Blog
            </button>
          </div>
          {/* Blogs */}
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {BlogsData && BlogsData.length > 0 ? (
                <div className="mx-auto grid x-sm:grid-cols-2 review:grid-cols-3 gap-2">
                  {BlogsData.map((blog, ind) => {
                    return (
                      <div key={ind}>
                        <AdminBlog blogData={blog} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-xl z-40 font-semibold">
                    Currently, there are no blogs!
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

export default AdminBlogs;
