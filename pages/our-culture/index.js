import { BannerWithClickHandler } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/eventsBanner.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/images/culture/team-image.jpeg";
import BlogCard from "@/components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Events() {
  const [BlogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cultureData, setCultureData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blogs`);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchSlides = async () => {
      try {
        const res = await axios.get("/api/pictures");
        setCultureData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    fetchSlides();
  }, []);
  const scrollLogic = () => {
    // Smooth scroll to the element with id "events"
    const targetElement = document.getElementById("blogs");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SetHeaders title="Our Culture | Sapocom" />
      <BannerWithClickHandler
        heading="Discover What's Happening"
        para="Stay updated and be part of the excitement ahead!"
        bgImg={bgBanner}
        btnText="View Blogs"
        clickHandler={scrollLogic}
      />
      {/* Pathway for interns */}
      <div className="w-full py-8 px-4">
        <div className="max-w-1200 mx-auto flex flex-wrap-reverse items-center justify-center">
          <Image src={img1} alt={"careers-img-2"} className="w-[350px] rounded-lg" />
          <div className="max-w-[600px] mx-auto p-2">
            <h1 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Our Culture
            </h1>
            <p className="text-left text-base mb-8 text-black ">
              SAPOCOM is committed to cultivating a professional yet supportive
              work environment, emphasizing mutual respect and employee
              well-being. By fostering strong relationships beyond typical
              office interactions, the company aims to enhance morale,
              productivity, and long-term success for both its team members and
              the organization as a whole.
            </p>
            <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Fun @ Work
            </h2>
            <p className="text-left text-base mb-2 text-black ">
              Achieve, Have Fun, and Celebrate is a core principle at SAPOCOM, guiding our approach to fostering a vibrant workplace culture. To uphold this commitment, we:
            </p>

            <ul className="my-2 pl-4">
              <li className='list-disc'>
                We prioritize building strong relationships among team members, creating a supportive and collaborative work environment.
              </li>
              <li className='list-disc'>
                SAPOCOM encourages its employees to maintain a healthy balance between work and personal life, revitalizing them to perform at their best.
              </li>
              <li className='list-disc'>
                As an organization, we embrace creativity as a cornerstone of innovation, empowering employees to think outside the box and find resourceful solutions.
              </li>
              <li className='list-disc'>
                We recognize and celebrate both professional milestones and personal accomplishments, fostering a culture of appreciation and acknowledgment.
              </li>           
              <li className='list-disc'>
                We incentivize positive behaviour and successes, reinforcing our values and promoting a culture of continuous improvement and excellence.
              </li>           
              
            </ul>

            <p className="text-left text-base mb-8 text-black ">
              We strive to cultivate a workplace where achievement, enjoyment,
              and celebration are integral parts of our everyday experience.
            </p>

            <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Environment
            </h2>
            <p className="text-left text-base mb-2 text-black ">
              Since 2017, SAPOCOM has thrived on the dedication of individuals
              who dared to dream the impossible. With unwavering support, our
              employees have propelled us to new heights, pushing boundaries and
              achieving remarkable success. Together, we continue to innovate
              and redefine what&apos;s possible in our industry.
            </p>
          </div>
        </div>
      </div>

      <section
        id="Header_Banner"
        className="max-w-1200 mx-auto rounded-lg overflow-hidden py-8 px-4"
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="cultureSwiper"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {cultureData.map((value, ind) => {
            return (
              <SwiperSlide key={ind}>
                <div className="flex justify-center items-center flex-col w-full h-full p-4  relative bg-black">
                  <Image
                    src={value.link}
                    alt="bg_image"
                    priority={true}
                    className="absolute w-full h-full object-contain bg-white"
                    fill
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <div className="w-full p-4 pt-16 py-8" id="blogs">
        <div className="max-w-900  mx-auto">
          <h1 className="mb-8 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Blogs
          </h1>
          {/* <p className="mb-8 text-center text-base text-black">
            Stay ahead of the curve with our upcoming events - mark your
            calendar for unforgettable experiences!
          </p> */}
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {BlogData && BlogData.length > 0 ? (
                <div className="mx-auto grid grid-cols-1 x-sm:grid-cols-2 review:grid-cols-3 gap-5">
                  {BlogData.map((blog, ind) => {
                    return (
                      <div key={ind}>
                        <BlogCard blogData={blog} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-xl z-40 font-semibold">
                    Currently, there are no blogs.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
