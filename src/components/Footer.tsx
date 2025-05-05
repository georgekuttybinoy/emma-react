'use client';
import React from 'react';



export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-[#0F0F0F] py-6 px-4 w-full m-0 mt-5 h-auto">
        <p className="font-sml text-center">
          © {year} Developed and managed by Parent company Deepnetsoft Solutions Pvt Ltd. All rights reserved.
        </p>
      </footer>
    );
  }