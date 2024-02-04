/** @format */

function Work() {
  return (
    <div id='work' className='p-4 md:p-8 pb-8 md:pb-20'>
      <h1 className='text-center font-bold text-2xl md:text-5xl mb-6 md:mb-10'>
        See over some of <span className='underline'> our works</span>
      </h1>
      <div className='flex flex-col md:flex-row gap-6 lg:gap-10 mb-10'>
        <article className='w-full md:w-1/3 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
          <img
            alt='Office'
            src='https://sarkariyojanas.com/wp-content/uploads/2019/09/Rural-Development-Fellows-Scheme-768x461.jpg'
            className='h-56 w-full object-cover'
          />

          <div className='bg-white p-4 sm:p-6'>
            <time dateTime='2022-10-10' className='block text-xs text-gray-500'>
              {" "}
              10th Oct 2022{" "}
            </time>

            <h4 className='cursor-pointer'>
              <h3 className='mt-0.5 text-lg text-gray-900'>
                Rural Development Program
              </h3>
            </h4>

            <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
              Initiated a comprehensive program aimed at nurturing
              entrepreneurship in rural areas. Trained individuals in
              leadership, team building, and startup strategies, fostering
              innovation in underprivileged regions.
            </p>
          </div>
        </article>
        <article className='w-full md:w-1/3 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
          <img
            alt='Office'
            src='https://heygom.com/wp-content/uploads/2016/09/Incubator-and-Start-Up-7-good-reasons-to-choose-the-incubation.jpg'
            className='h-56 w-full object-cover'
          />

          <div className='bg-white p-4 sm:p-6'>
            <time dateTime='2022-10-10' className='block text-xs text-gray-500'>
              {" "}
              30th Dec 2022{" "}
            </time>

            <h4 className='cursor-pointer'>
              <h3 className='mt-0.5 text-lg text-gray-900'>
                Startup Incubation Success Story
              </h3>
            </h4>

            <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
              Supported the growth of a promising startup from ideation to
              market entry. Provided mentorship, resources, and networking
              opportunities, resulting in a successful venture that positively
              impacted the local community.
            </p>
          </div>
        </article>
        <article className='w-full md:w-1/3 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
          <img
            alt='Office'
            src='https://www.ccdaily.com/wp-content/uploads/2020/03/ideas-768x432.jpg'
            className='h-56 w-full object-cover'
          />

          <div className='bg-white p-4 sm:p-6'>
            <time dateTime='2022-10-10' className='block text-xs text-gray-500'>
              {" "}
              6th Mar 2023{" "}
            </time>

            <h4 className='cursor-pointer'>
              <h3 className='mt-0.5 text-lg text-gray-900'>
                Entrepreneurial Ecosystem Building
              </h3>
            </h4>

            <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
              Established a thriving entrepreneurial ecosystem in Tier II & III
              cities. Provided a platform for startups to connect, collaborate,
              and access resources, contributing to the overall economic
              development of the region.
            </p>
          </div>
        </article>
      </div>
      <a
        className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-orange-600 transition-colors hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500 max-w-36 mx-auto'
        href='/works'>
        <span className='font-medium transition-colors group-hover:text-white'>
          {" "}
          See All Posts{" "}
        </span>

        <span className='shrink-0 rounded-full border border-orange-600 bg-white p-2 group-active:border-orange-500'>
          <svg
            className='h-5 w-5 rtl:rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              // stroke-linecap='round'
              // stroke-linejoin='round'
              // stroke-width='2'
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default Work;
