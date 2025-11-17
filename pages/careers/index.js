import { BannerWithClickHandler } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/careersBanner.jpg";
import JobOpening from "@/components/JobOpening";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/layouts/Loader";
import Image from "next/image";
import img1 from "@/assets/images/careers/career-info-img1.webp";
import img2 from "@/assets/images/careers/career-info-img2.webp";

export default function Careers() {
  const [OpeningsData, setOpeningsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const scrollLogic = () => {
    // Smooth scroll to the element with id "openings"
    const targetElement = document.getElementById("openings");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SetHeaders title="Careers | Sapocom" />
      {/* Banner */}
      <BannerWithClickHandler
        heading="Join Our Talented Team"
        para="Explore exciting career opportunities and be a part of something amazing!"
        bgImg={bgBanner}
        clickHandler={scrollLogic}
      />

      {/* Job Openings */}
      <div className="w-full py-20 p-4" id="openings">
        <div className="max-w-1200 mx-auto">
          <h1 className="mb-2 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Join Our Team
          </h1>
          <p className="mb-8 text-center text-base text-black">
            Explore exciting opportunities to work with us.
          </p>
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {OpeningsData && OpeningsData.length > 0 ? (
                <div className="mx-auto">
                  <div className="flex-col space-y-4">
                    {OpeningsData.map((opening, ind) => {
                      return <JobOpening jobData={opening} key={ind} />;
                    })}
                  </div>
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-xl z-40 font-semibold">
                    Currently, No Open Positions - Stay Tuned for Exciting
                    Career Opportunities Ahead!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Pathway for interns */}
      <div className="w-full py-8 px-4">
        <div className="max-w-1200 mx-auto flex flex-wrap-reverse items-center justify-center">
          <Image src={img1} alt={"careers-img-2"} className="w-[350px]" />
          <div className="max-w-[600px] mx-auto p-2">
            <h1 className="pb-4 text-left text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Paving global pathway for Interns
            </h1>
            <p className="text-left text-base mb-2 text-black ">
              Embark on a transformative journey with our internship program as
              we invite aspiring talents to join our dynamic team. This
              isn&apos;t just an internship; it&apos;s an opportunity to unlock
              your potential and shape your career trajectory on a global scale.
            </p>
            <p className="text-left text-base mb-2 text-black ">
              Our internship program is designed to be a launchpad for your
              professional aspirations. From hands-on projects to mentorship
              opportunities, we offer an environment that fosters learning and
              growth.
            </p>
            <p className="text-left text-base text-black ">
              Your journey starts here, and the future is yours to shape! Apply
              now and be a part of something extraordinary.
            </p>
          </div>
        </div>
        <div className="max-w-1200 mx-auto flex flex-wrap justify-center items-center">
          <div className="max-w-[600px] mx-auto p-2 ">
            <h1 className="pb-4 text-left text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              For Experienced Professionals
            </h1>
            <p className="text-left text-base mb-2 text-black ">
              Welcome to our global career hub, where diverse talents converge
              to shape the future. At SAPOCOM, we celebrate the richness of
              cultures and perspectives that make up our worldwide team. As you
              navigate through our career opportunities, envision joining a
              dynamic environment that spans continents, embraces diversity, and
              thrives on collaboration.
            </p>
            <p className="text-left text-base mb-2 text-black ">
              Our commitment to innovation knows no borders, and we invite
              professionals from every corner of the globe to contribute their
              unique skills. Whether you&apos;re an experienced global executive
              or a recent graduate with a universal mindset, we provide a
              platform for you to bring your talents to a truly international
              stage.
            </p>
            <p className="text-left text-base text-black ">
              Explore the opportunities, discover your potential, and become
              part of a cosmopolitan community that&apos;s shaping the future at
              SAPOCOM
            </p>
          </div>
          <Image src={img2} alt={"careers-img-2"} className="w-[350px]" />
        </div>
      </div>
    </>
  );
}
