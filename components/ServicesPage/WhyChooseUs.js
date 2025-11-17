import React from 'react';

export function ServicesWhyChooseUs(props) {
  const { options = [], title = 'Why Choose SAPOCOM?' } = props;
  return (
    <section className="w-full p-4 max-md:py-8 py-10 max-w-1200 mx-auto ">
      <div className="flex items-center flex-col mb-5 text-center">
        <h2
          data-aos="flip-right"
          data-aos-delay="100"
          className="md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2"
        >
          {title}
        </h2>
      </div>
      {/* View for Desktop */}
      <div className="grid grid-cols-auto-3-250 justify-items-center gap-6 mx-auto max-w-800 p-2">
        {options.map((why) => (
          <div
            key={why}
            className="h-full w-[250px] flex items-end select-none"
          >
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className={`bg-white rounded-md border-2 h-full w-[250px] p-4 hover:shadow-card relative`}
            >
              <h1 className="font-medium text-secondary text-xl">{why}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
