/** @format */
import Question from "./question";

function Faq() {
  const ques = [
    {
      question: "What is the mission of Sand Tank Startup Foundation?",
      answer:
        "Sand Tank Startup Foundation is committed to fostering entrepreneurship in underprivileged areas, particularly rural regions and Tier II & III cities in India. Our mission is to empower individuals with the skills and resources needed to build successful startups, contributing to local and global economic growth.",
    },
    {
      question: "How can I benefit from Sand Tank's programs?",
      answer:
        "Whether you're a budding entrepreneur or an established business owner, Sand Tank offers a range of programs. From leadership and team-building courses to startup incubation and global entrepreneurial development missions, we provide tailored support to help you succeed.",
    },
    {
      question:
        "Is Sand Tank only focused on India, or does it have a global reach?",
      answer:
        "While our roots are in India, Sand Tank Startup Foundation has a global perspective. We run programs and initiatives that not only benefit local communities but also contribute to global initiatives for a more self-reliant world.",
    },
    {
      question: "How can I get involved with Sand Tank Startup Foundation?",
      answer:
        "There are various ways to get involved with us! You can apply for our programs, participate in events, or even collaborate on initiatives. Keep an eye on our website and social media for updates on opportunities and ways to contribute to our mission.",
    },
    {
      question: "Does Sand Tank only support tech-related startups?",
      answer:
        "No, Sand Tank supports startups across various sectors. While we embrace technology and innovation, our programs are designed to cater to a diverse range of industries. Whether you're in healthcare, agriculture, or any other field, we're here to help you thrive.",
    },
    {
      question: "Can I apply for multiple programs simultaneously?",
      answer:
        "Yes, you can apply for multiple programs based on your needs and aspirations. We encourage individuals to explore various opportunities and find the program that aligns best with their goals.",
    },
    {
      question: " How does Sand Tank contribute to a self-reliant India?",
      answer:
        "Sand Tank contributes to a self-reliant India by empowering individuals to create sustainable businesses. Through skill development, support for local startups, and global initiatives, we aim to play a pivotal role in building a more self-sufficient and economically empowered nation.",
    },
  ];
  return (
    <div id='faq'>
      <h1 className='text-2xl text-center md:text-5xl font-bold mb-6 md:mb-10'>
        <span className='underline'>FAQ</span>
      </h1>
      <div className='flex flex-col md:flex-row '>
        <div className='text-center md:text-left md:w-1/2 mb-6 md:mb-10'>
          <div className='space-y-4 py-6'>
            {ques.map((q, index) => (
              <Question key={index} ques={q} />
            ))}
          </div>
        </div>
        <div className='md:w-1/2 md:pl-8 hidden md:block mt-[10%]'>
          {/* <h1 className='text-2xl md:text-4xl font-bold underline hidden md:block'>
          Get your quick doubt resolved Here!
        </h1> */}
          <img
            className='max-w-full mx-auto'
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F9%2FEntrepreneur-PNG-Pic.png&f=1&nofb=1&ipt=504ee7541febe4a04b7e79d6b8f9859fd73468dfdbf2eae6806a3a18c2ccb5c5&ipo=images'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
