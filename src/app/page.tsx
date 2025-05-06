'use client';
import Image from "next/image";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";

export default function Home() {
  return (
    <>

<div className="container min-h-screen h-full m-auto max-w-full bg-hero bg-center bg-cover relative z-30">

    <Header />

    <div className="flex flex-col items-center justify-center h-auto text-center sm:max-w-sm md:max-w-md lg:max-w-3xl m-auto relative z-30"> 

        <h1 className="font-lrg p-4 mb-6 sm:mb-2 animated-text-gradient">
          Accelerate your growth through 
          hyper-qualified leads
        </h1>

        <div className="w-full h-auto max-w-34 sm:max-w-44">
        <GradientButton onClick={() => alert("button clicked!")}>
        Request a Demo
      </GradientButton>
      </div>
      
      </div>

      <div className="w-full flex items-center justify-center justify-items-center max-w-sm m-0 overflow-hidden h-full sm:max-w-3xl absolute z-10 top-0 sm:top-0 sm:right-70">
        <div className="w-54 h-84 sm:w-2xl sm:h-[32rem] -translate-y-60 rounded-full bg-[radial-gradient(circle,_#0E7BF8_0%,_#0E7BF8cc_30%,_transparent_90%)] blur-3xl opacity-40"></div>
      </div>

   </div>










   <div className="container w-full h-auto max-w-5xl  m-auto items-center justify-center mt-20 p-4">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start sm:m-10 md:m-10 lg:m-2 justify-center m-auto">

    <div className="grid grid-rows-4 gap-6">
      <div className="space-y-2">
        <h1 className="font-lrg sm:text-center md:text-left text-center">Why Choose emma?</h1>
      </div>

      <div className="space-y-2 -mt-10 sm:mt-0">
        <h2 className="font-mdm text-center sm:text-center md:text-left">Custom CRM</h2>
        <p className="text-center sm:text-center md:text-left font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-mdm text-center sm:text-center md:text-left ">Best for small scale business</h2>
        <p className="text-center sm:text-center md:text-left font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-center sm:text-center md:text-left font-mdm">Life time free</h2>
        <p className="text-center sm:text-center md:text-left font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
      </div>
    </div>

  
    <div className="grid gap-6">
      <div className="space-y-2">
        <p className="text-center sm:text-center md:text-left font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
      </div>
    
      <div className="space-y-2 mt-16">
        <img src="/images/img-comp.png" alt="Image B" className="rounded-3xl shadow-md"/>
      </div>
    </div>

  </div>

</div>












<div className="flex flex-col container items-center justify-items-center m-0 w-full max-w-full h-auto relative">

<div className="container w-full h-auto m-auto items-center justify-items-center p-4 sm:p-0 mt-20 ">

  <div className="flex flex-col items-center justify-center h-auto text-center w-full  sm:max-w-2xl md:max-w-3xl m-auto"> 
    <h1 className="font-lrg p-2 mb-5">
    What Makes emma Different?
    </h1>
    <p className="text-center font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. Efficient lead management and insightful analytics can boost your business growth by up to 50%. </p>
  </div>



  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-auto w-full h-auto max-w-5xl mt-20 text-center justify-items-center">

    <div className="p-4 max-w-56  h-auto border border-[#232323] rounded-md hover:scale-110 hover:bg-black hover:border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg">
<h1 className="mt-2 mb-4 font-mdm">Lead Automation</h1>
<p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
    </div>

  <div className="p-4 max-w-56  h-auto border border-[#232323] rounded-md hover:scale-110 hover:bg-black hover:border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg">
    <h1 className="mt-2 mb-4 font-mdm">Lead Management</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
  </div>

   <div className="p-4 max-w-56  h-auto border border-[#232323] rounded-md hover:scale-110 hover:bg-black hover:border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg">
    <h1 className="font-mdm mt-2 mb-4">Lead Analytics</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
    </div>

  <div className="p-4 max-w-56  h-auto border border-[#232323] rounded-md hover:scale-110 hover:bg-black hover:border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg">
    <h1 className="font-mdm mt-2 mb-4">Franchise Management</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
  </div>
    
  <div className="lg:col-start-2 p-4 max-w-56  h-auto border border-[#232323] rounded-md hover:scale-110 hover:bg-black hover:border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg">          
   <h1 className="font-mdm mt-2 mb-4">Lead History</h1>
<p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
</div>
     
<div className="lg:col-start-3 p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black  hover:shadow-lg hover-gradient-border transition">
<h1 className="font-mdm mt-2 mb-4">Franchise Management</h1>
<p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
</div>

  </div>


  </div>

  <div className="w-full max-w-sm m-0 overflow-hidden h-auto sm:max-w-3xl absolute -z-50 top-96 sm:top-32 right-0">
    <img className="h-auto w-full top-0 translate-x-12 sm:translate-x-20 md:translate-x-68 opacity-20" src="/images/globe.png" alt="globe"/>
  </div>

  <div className="w-full flex items-center justify-center max-w-sm m-0 overflow-hidden h-full sm:max-w-3xl absolute -z-50 top-96 sm:top-32 left-0">
    <div className="w-84 h-84 sm:w-2xl sm:h-[36rem]  rounded-full bg-[radial-gradient(circle,_#0E7BF8_0%,_#0E7BF8cc_30%,_transparent_90%)] blur-3xl opacity-20"></div>
  </div>

</div>













<div className="container w-full h-auto m-auto items-center justify-items-center p-4 sm:p-0 mt-40 relative">

<div className="w-full max-w-5xl items-center justify-items-center h-auto border rounded-2xl border-[#232323] py-10 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D]">

    <div className="flex flex-col items-center justify-center h-auto text-center w-full max-w-sm sm:max-w-lg md:max-w-lg m-auto"> 
      <h1 className="p-2 mb-2 font-lrg">
        Get Started Now!
      </h1>
      <p className="font-sml text-center">It only takes a moment of your time! Our dedicated team will respond to you promptly.</p>
    </div>

    <div className="flex flex-col h-auto sm:flex-row gap-4 w-full max-w-sm px-3 items-center justify-items-center mt-8 mx-auto">
      <div className="w-full">
      <GradientButton onClick={() => alert("button clicked!")}>
      Call us
      </GradientButton>
      </div>
      <div className="w-full">
      <GradientButton onClick={() => alert("button clicked!")}>
      Whats app now
      </GradientButton>
      </div>

      {/* <div className="w-full max-w-66 m-auto h-auto sm:max-w-sm lg:translate-y-16">
        <img className="h-auto w-full" src="/images/phone.png" alt="phone"/>
      </div> */}

    </div>


  </div>

  </div>













  <div className="flex flex-col container items-center justify-items-center m-0 w-full max-w-full h-auto relative">

  <div className="container w-full h-auto m-auto items-center justify-items-center p-4 sm:p-0 mt-20">
    <div className="w-full max-w-5xl items-center justify-items-center h-auto">

    <div className="flex flex-col items-center justify-center h-auto text-center w-full max-w-sm sm:max-w-lg md:max-w-lg m-auto"> 
      <h1 className="p-2 mb-2 font-lrg">
        Our Pricing
      </h1>
    </div>

<div className="container flex flex-col sm:flex-row w-full gap-16 mt-16">

<div className="flex flex-col w-full max-w-lg">
<p className="text-center sm:text-left mb-6 font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
<ul className="list-['-'] list-inside space-y-0 text-center sm:text-left font-sml">
  <li>Streamline your lead capture </li>
  <li>Streamline your lead capture </li>
  <li>Streamline your lead capture </li>
  <li>Streamline your lead capture </li>
</ul>

<div className="flex flex-row w-full max-w-lg mt-6 sm:gap-2 m-auto">

<div className="flex flex-col m-auto">
  <h1 className="font-lrg mb-4">10+</h1>
  <h1 className="text-center font-mdm">Agency Partners</h1>
</div>
<div className="w-0.5 h-16 sm:h-28  mx-auto my-4 bg-gradient-to-b from-[#D4FFEC] via-[#57F2CC] to-[#4596FB] rounded-md"></div>
<div className="flex flex-col m-auto">
  <h1 className="font-lrg mb-4">50+</h1>
  <h1 className="text-center font-mdm">Active Customers</h1>
</div>

</div>

</div>


<div className="flex flex-col sm:flex-row gap-6">

  <div className="w-full max-w-md items-center justify-items-center h-auto border rounded-2xl border-[#232323] p-8 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D]">
    <h1 className="text-center font-mdm">Trial </h1>
    <hr className="h-0.5 max-w-32 mx-auto my-2 mb-4 border-0 bg-gradient-to-l from-[#D4FFEC] via-[#57F2CC] to-[#4596FB]" />  
    <ul className="list-none text-center font-sml space-y-2">
      <li>Free usage </li>
      <li>All Permissions</li>
      <li>3 Users</li>
      <li>Lorem Ipsum </li>
      <li>Lorem Ipsum </li>
      <li>Lorem Ipsum </li>
    </ul>
    <div className="w-full flex justify-center h-auto max-w-sm sm:max-w-md  md:max-w-md lg:max-w-lg mt-4">
    <GradientButton onClick={() => alert("button clicked!")}>
    Start Now
      </GradientButton>
    </div>
  </div>

  <div className="w-full max-w-md items-center justify-items-center h-auto border rounded-2xl border-[#232323] p-8 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D]">
    <h1 className="text-center font-mdm">Custom  Plan</h1>
    <hr className="h-0.5 max-w-32 mx-auto my-2 mb-4 border-0 bg-gradient-to-l from-[#D4FFEC] via-[#57F2CC] to-[#4596FB]" />  
      <ul className="list-none text-center  font-sml space-y-2">
      <li>Free usage </li>
      <li>All Permissions</li>
      <li>Unlimited Users </li>
      <li>Unlimited Storage </li>
      <li>Third Party Integrations </li>
      <li>Lorem Ipsum </li>
    </ul>
    <div className="w-full flex justify-center h-auto max-w-sm sm:max-w-md  md:max-w-md lg:max-w-lg mt-4">
    <GradientButton onClick={() => alert("button clicked!")}>
    Contact for Price
      </GradientButton>
    </div>
  </div>
  
</div>

</div>

</div>

  </div>
  
  <div className="w-full flex items-center justify-center max-w-sm m-0 overflow-hidden h-full sm:max-w-3xl absolute -z-50 top-96 sm:top-32 left-0">
    <div className="w-84 h-84 sm:w-2xl sm:h-[32rem]  rounded-full bg-[radial-gradient(circle,_#0E7BF8_0%,_#0E7BF8cc_30%,_transparent_90%)] blur-3xl opacity-20"></div>
  </div>

</div>


  </>
  );
}
