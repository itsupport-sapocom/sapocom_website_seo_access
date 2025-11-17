import aboutSapocomSection from '@/assets/images/home/about-sapocom-section.png';
import checkIcon from '@/assets/images/icons/check-with-circle.svg';
import Image from 'next/image';

export function ServicesOurApproach(props) {
  const {
    approaches = [],
    title = 'Our APPROACH',
    description = '',
    sideImage = aboutSapocomSection,
  } = props;
  return (
    <section className="w-full p-4 md:py-8 bg-grey">
      <div className="max-w-1200 mx-auto flex gap-10 flex-wrap ">
        <div className="flex-1">
          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4"
          >
            {title}
          </h2>

          {description ? (
            <p data-aos="fade-up" className="text-black mb-6">
              {description}
            </p>
          ) : null}
          <div className="grid grid-cols-1 w-full gap-4">
            {approaches.map((approach) => {
              const { title, description } = approach || {};
              return (
                <div
                  key={approach}
                  data-aos="flip-left"
                  className="flex items-center p-2 px-5 rounded-full text-secondary"
                >
                  <Image
                    alt="check_with_circle_svg"
                    src={checkIcon}
                    className="w-5 h-5 mr-3"
                  />
                  <p>
                    <span className="font-semibold">{title} -</span>{' '}
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center"
        >
          <Image
            src={sideImage}
            width={300}
            className="h-full object-cover rounded-md rounded-tr-3xl"
            alt="about_sacopom_image"
          />
        </div>
      </div>
    </section>
  );
}
