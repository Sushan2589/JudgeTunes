"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-10 text-sm rounded-2xl gap-4 sm:gap-0 text-center sm:text-left">
      <div>JudgeTunes</div>
      <div>All rights reserved &copy; 2026</div>
      <div>
        <ul className="flex justify-center sm:justify-start gap-4 sm:gap-10">
          <li><Link href="/">Home</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
