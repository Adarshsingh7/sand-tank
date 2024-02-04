/** @format */

function Footer() {
  return (
    <div>
      <footer className='bg-black text-white py-6 flex flex-col justify-between md:flex-row md:items-center'>
        <div className='flex flex-col md:flex-row space-x-6 md:space-x-10'>
          <ul className='list-none'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
          </ul>
          <ul className='list-none'>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Sitemap</a>
            </li>
            <li>
              <a href='#'>Accessibility</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-4 mt-6 md:mt-0'>
          <a href='#'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <p className='text-center mt-6 md:mt-0'>
          © 2024 Adizio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
