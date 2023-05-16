'use client';

function Footer() {
  return (
    <>
      <div className="w-full h-auto border-t-[1px] flex flex-col items-start justify-center sm:grid sm:grid-cols-2 md:flex md:items-center">
        <div className="flex flex-col text-lg font-semibold px-4 py-4 md:text-center">
          Foodify
          <span className="text-sm text-neutral-500 mt-2 mb-1 font-medium">Multiple Uses. One App.</span>
          <span className="text-sm text-neutral-500 font-medium">Look | Save | Cook</span>
        </div>
        <div className="w-auto px-4 py-6 flex flex-col gap-4 items-start justify-evenly text-sm font-normal text-neutral-500 md:flex-row">
          <a href="/images/terms-of-use.pdf" className="hover:text-green transition cursor-pointer" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>
          <a href="/images/privacy-policy.pdf" className="hover:text-green transition cursor-pointer" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/images/help-and-support.pdf" className="hover:text-green transition cursor-pointer" target="_blank" rel="noopener noreferrer">
            Help &amp; Support
          </a>
          <a href="/images/about-us.pdf" className="hover:text-green transition cursor-pointer" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
        </div>
      </div>
      <div className="w-full px-2 py-6 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Foodify - All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
