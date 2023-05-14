'use client';

import React from 'react';
import Link from 'next/link';

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
          <Link href="/terms-of-use">
            Terms of Use
          </Link>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/help-and-support">
            Help &amp; Support
          </Link>
          <Link href="/about-us">
            About Us
          </Link>
        </div>
      </div>
      <div className="w-full px-2 py-6 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Foodify - All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
