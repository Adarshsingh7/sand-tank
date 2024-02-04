/** @format */
function About() {
  return (
    <div id='about' className='md:p-6'>
      <h1 className='text-2xl md:text-5xl mb-6 md:mb-10 text-center font-bold'>
        About <span className='underline'>sand-tank</span>
      </h1>
      <div className='flex flex-col md:flex-row mb-8 md:mb-20 bg-white'>
        <div className='bg-[#CBA775] text-white px-2 rounded md:px-20 py-12 md:py-32 md:w-1/2'>
          <div className='mb-10'>
            <h1 className='text-2xl md:text-4xl'>Build Your Unique Presence</h1>
            <p className='text-xl'>
              Elevating your financial journey with streamlined solutions for a
              more straightforward and enriching experience.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-6 mb-6'>
            <div className='border-t md:border-none'>
              <h1 className='font-bold mb-2 md:mb-3'>Igniting Innovation</h1>
              <p className='text-sm md:text-base'>
                Fostering an environment where dreams flourish, we ignite
                innovation to empower individuals in building impactful
                startups.
              </p>
            </div>
            <div className='border-t md:border-none'>
              <h1 className='font-bold mb-2 md:mb-3 '>
                Catalyzing Rural Entrepreneurship
              </h1>
              <p className='text-sm md:text-base'>
                Dedicated to catalyzing rural entrepreneurship, we bridge gaps,
                provide resources, and cultivate a thriving ecosystem for
                growth.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='border-t md:border-none'>
              <h1 className='font-bold mb-2 md:mb-3'>
                Global Impact, Local Roots
              </h1>
              <p className='text-sm md:text-base'>
                Making a global impact with a focus on local communities, we
                nurture talents and ideas to create sustainable, mission-driven
                startups.
              </p>
            </div>
            <div className='border-t md:border-none'>
              <h1 className='font-bold mb-2 md:mb-3'>Transforming Visions</h1>
              <p className='text-sm md:text-base'>
                From visionaries to ventures, we guide and support individuals
                in transforming their innovative ideas into successful,
                purposeful startups.
              </p>
            </div>
          </div>
        </div>
        <div className='hidden md:block w-1/2'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgruenderatelier.de%2Fwp-content%2Fuploads%2F2020%2F03%2FStartup.png&f=1&nofb=1&ipt=702d9b6c2cc87a3f56165c792e38c415c5fef332234d10866338ada2c3859c06&ipo=images'
            alt=''
            className='mx-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
