/** @format */
import Review from "./review.jsx";
function testimonials() {
  const review = [
    {
      userName: "Rahul Singh",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      ratings: 5,
      photo:
        "https://hairstylecamp.com/wp-content/uploads/indian-boys-hairstyles-1.jpg",
    },
    {
      userName: "Vikas Dubey",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      ratings: 5,
      photo: "https://proships.ru/stat/img/user-512.png",
    },
    {
      userName: "Sikha Sharma",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      ratings: 5,
      photo:
        "https://i1.wp.com/www.curlsandbeautydiary.com/wp-content/uploads/2016/06/rima-kallingal-indian-celebrity-curly-hair.jpg",
    },
  ];
  return (
    <section id='testimonials' className='mb-20'>
      <div className='mx-auto max-w-screen-xlpy-12 sm:px-6 lg:px-8 lg:py-16 '>
        <h2 className='text-2xl md:text-5xl mb-6 md:mb-10 text-center font-bold'>
          Read trusted reviews from our{" "}
          <span className='underline'>young entrepreneur</span>
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 pb-8'>
          {review.map((el, index) => (
            <Review key={index} review={el} />
          ))}
        </div>
        <a
          className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-orange-600 transition-colors hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500 max-w-36  mx-auto'
          href='/testimonials'>
          <span className='font-medium transition-colors group-hover:text-white'>
            {" "}
            See All Reviews{" "}
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
    </section>
  );
}

export default testimonials;
