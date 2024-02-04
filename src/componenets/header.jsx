/** @format */

import "./../styles/nav.css";
import { Link } from "react-scroll";

function header() {
  return (
    <div>
      <nav className='hidden md:flex'>
        <img
          // src='./../img/logo.jpeg'
          src='https://media.licdn.com/dms/image/C4E0BAQHNtxsFSIDI6Q/company-logo_200_200/0/1646712718829/sandtank_logo?e=1714608000&v=beta&t=BmPokoBzOESpoR-EaGEIWj-S1CU3JBO5KPRLfKuT1Ls'
          alt='sand tank logo'
          className='h-16 rounded-full'
        />
        <div id='nav-part2'>
          <h4>
            <Link
              className='cursor-pointer'
              to='/'
              smooth={true}
              duration={500}>
              Work
            </Link>
          </h4>
          <h4>
            <Link
              className='cursor-pointer'
              to='testimonials'
              smooth={true}
              duration={500}>
              Testimonials
            </Link>
          </h4>
          <h4>
            <Link
              className='cursor-pointer'
              to='about'
              smooth={true}
              duration={500}>
              About US
            </Link>
          </h4>
          <h4>
            <Link
              className='cursor-pointer'
              to='contact'
              smooth={true}
              duration={500}>
              Contact US
            </Link>
          </h4>
          <h4>
            <Link
              className='cursor-pointer'
              to='faq'
              smooth={true}
              duration={500}>
              FAQs
            </Link>
          </h4>
        </div>
        <h3>Menu</h3>
      </nav>
    </div>
  );
}

export default header;
