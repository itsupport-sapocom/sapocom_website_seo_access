import { setContactUsModalState } from '@/store/reducers/valueReducer';
import React from 'react';
import { useDispatch } from 'react-redux';

export const ServicesCtaCard = (props) => {
  const { title = '', description = '', buttonText = 'Contact Us' } = props;
  const dispatch = useDispatch();

  function handleModalOpen() {
    dispatch(setContactUsModalState(true));
  }

  return (
    <section
      data-aos="zoom-in"
      className="w-full py-6 px-4 max-review:py-10 relative"
    >
      {/* Black to transparent gradient */}
      <div className="absolute top-0 left-0 h-full w-full bg-grey z-10"></div>
      {/* Background Image */}
      <div className="max-w-1200 mx-auto grid grid-cols-[2fr_1fr] max-review:grid-cols-1 gap-4 text-white z-50">
        <div>
          <h1 className="text-3xl z-40 font-semibold max-review:text-center text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4">
            {title}
          </h1>
          <p className="text-black">{description}</p>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleModalOpen}
            className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
