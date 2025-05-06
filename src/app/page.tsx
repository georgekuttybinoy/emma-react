'use client';
import Image from "next/image";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';
import GradientText from '@/components/GradientText';

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

    <div className="p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black hover:shadow-lg hover-gradient-border transition">
<h1 className="mt-2 mb-4 font-mdm">Lead Automation</h1>
<p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
    </div>

  <div className="p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black hover:shadow-lg hover-gradient-border transition">
    <h1 className="mt-2 mb-4 font-mdm">Lead Management</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
  </div>

   <div className="p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black hover:shadow-lg hover-gradient-border transition">
    <h1 className="font-mdm mt-2 mb-4">Lead Analytics</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
    </div>

  <div className="p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black hover:shadow-lg hover-gradient-border transition">
    <h1 className="font-mdm mt-2 mb-4">Franchise Management</h1>
    <p className="font-sml">Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. </p>
  </div>
    
  <div className="lg:col-start-2 p-4 max-w-56  h-auto rounded-md hover:scale-110 hover:bg-black hover:shadow-lg hover-gradient-border transition">          
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

<div className="w-full max-w-5xl items-center justify-items-center h-auto border rounded-2xl border-[#232323] py-10 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D] relative">

    <div className="flex flex-col items-center justify-center h-auto text-center w-full max-w-sm sm:max-w-lg md:max-w-lg m-auto"> 
      <h1 className="p-2 mb-2 font-lrg">
        Get Started Now!
      </h1>
      <p className="font-sml text-center">It only takes a moment of your time! Our dedicated team will respond to you promptly.</p>
    </div>

    <div className="flex flex-col  h-auto md:flex-row gap-4 w-full max-w-sm px-3 items-center justify-items-center mt-8 mx-auto">
    <GradientButton className="w-full" onClick={() => alert("button clicked!")}>
    Call us
  </GradientButton>
  <GradientButton className="w-full" onClick={() => alert("button clicked!")}>
    Whats app now
  </GradientButton>

  <div className="w-full max-w-36 m-auto h-auto sm:max-w-54 lg:translate-y-6 md:absolute md:translate-x-84 lg:translate-x-92">
        <img className="h-auto w-full" src="/images/phone.png" alt="phone"/>
      </div>

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
<GradientText
        text="10+"
      />
  <h1 className="text-center font-mdm break-all">Agency Partners</h1>
</div>
<div className="w-0.5 h-16 sm:h-28  mx-auto my-4 bg-gradient-to-b from-[#D4FFEC] via-[#57F2CC] to-[#4596FB] rounded-md"></div>
<div className="flex flex-col m-auto">
<GradientText
        text="50+"
      />
  <h1 className="text-center font-mdm break-all">Active Customers</h1>
</div>

</div>

</div>


<div className="flex flex-col sm:flex-row gap-2">

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
    <GradientButton className="w-full mt-6" onClick={() => alert("button clicked!")}>
      Start Now
    </GradientButton>
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
    <GradientButton className="w-full mt-4" onClick={() => alert("button clicked!")}>
      Contact for Price
    </GradientButton>
  </div>
  
</div>

</div>

</div>

  </div>
  
  <div className="w-full flex items-center justify-center max-w-sm m-0 overflow-hidden h-full sm:max-w-3xl absolute -z-50 top-96 sm:top-32 left-0">
    <div className="w-84 h-84 sm:w-2xl sm:h-[32rem]  rounded-full bg-[radial-gradient(circle,_#0E7BF8_0%,_#0E7BF8cc_30%,_transparent_90%)] blur-3xl opacity-20"></div>
  </div>

</div>
















<div className="container w-full max-w-full h-auto mx-0 items-center justify-items-center mt-32">
    <div className="w-full items-center justify-items-center h-auto border  border-[#232323] py-20 px-4 bg-[#0D0D0D]">
      <div className="w-full max-w-5xl items-center justify-items-center h-auto flex flex-col sm:flex-row gap-16">

<div className="flex flex-col w-full max-w-lg">
<div className="flex justify-center sm:justify-end">
  <img className="h-auto w-20 sm:w-full sm:max-w-36 animate-float" src="/images/phone-screen.png" alt="phone"/>
</div>
</div>

<div className="flex flex-col w-full max-w-lg justify-items-center">
  <h1 className="text-center sm:text-left p-2 mb-2 font-lrg">
    Do not a miss a lead by any chance. access our CRM from any device 
  </h1>
  <p className="text-center sm:text-left font-sml mb-6">Whether you're traveling without a laptop or simply on the go, there's no need to worry when using Emma. Our software is accessible on mobile phones, tablets, laptops, and desktop devices. </p>
  <div className="w-full flex justify-center sm:justify-start h-auto">
  <GradientButton className="w-full max-w-36" onClick={() => alert("button clicked!")}>
    Try Now
  </GradientButton>
</div>     
</div>

</div>
  </div>

</div>




















<div className="container w-full h-auto   m-auto items-center justify-center p-4 sm:p-0 mt-20">

    <div className="flex flex-col items-center justify-center h-auto text-center w-full  sm:max-w-2xl md:max-w-4xl m-auto"> 
      <h1 className="font-lrg p-2 mb-2">
        Join us today and enjoy the satisfaction of our happy customers!
      </h1>
    </div>


    <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-4 justify-items-center mt-16  w-full max-w-5xl m-auto h-auto items-center mx-auto">

      <div className="w-full grid sm:col-start-1 sm:row-start-2 justify-items-center">        
        <img src="/images/person6.jpeg" alt="Image 1" className="w-24 h-24 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
      <div className="w-full grid justify-items-center">
         <img src="/images/person2.jpeg" alt="Image 1" className="w-44 h-44 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
      <div className="w-full grid justify-items-center">
        <img src="/images/person1.jpeg" alt="Image 1" className="w-80 h-60 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
      <div className="w-full grid justify-items-center">
        <img src="/images/person4.jpeg" alt="Image 1" className="w-36 h-36 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
      <div className="w-full grid justify-items-center">
        <img src="/images/person5.jpeg" alt="Image 1" className="w-24 h-24 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
      <div className="w-full grid sm:col-start-4 sm:row-start-2 justify-items-center">
        <img src="/images/person3.jpeg" alt="Image 1" className="w-28 h-20 object-cover rounded-xl hover:scale-110  hover:shadow-cyan-300 hover:shadow-lg" />
      </div>
     
    </div>

</div>






<TestimonialSlider />







<div className="container w-full h-auto   m-auto justify-items-center p-4 sm:p-0 mt-20">

    <div className="flex flex-col items-center justify-center h-auto text-center w-full  sm:max-w-2xl md:max-w-4xl m-auto"> 
        <h1 className="font-lrg p-2 mb-2">
            Connect with us
        </h1>
        <p className="font-sml text-center">Reach out to us during our business hours, 9 AM to 6 PM, or connect with our dedicated support team via email or WhatsApp. We're always here to assist you! </p>

      </div>



<div className="container w-full max-w-5xl h-auto  m-auto justify-items-center p-4 sm:p-0 mt-20 flex flex-col gap-4 sm:flex-row">


    <div className="w-full max-w-sm mx-auto items-center justify-items-center h-auto border rounded border-[#232323] p-4 sm:p-14 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D]">
   
<div className="flex flex-col text-left w-full m-auto space-y-6 sm:space-y-12">
  <p className="font-sml text-left">Feel free to reach out to us by phone  or email  at your convenience:</p>

  <div className="flex flex-row items-start w-full max-w-md mx-auto gap-4">
    <a href="tel:+1234567890" className="text-green-600 hover:text-green-800">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
      </svg>
    </a>
    
    <div className="flex flex-col w-full m-auto h-auto max-w-sm space-y-1"> 
      <p className="font-sml text-left">Our phone: </p>
      <p className="font-sml text-left break-all">+91 9567843340</p>

    </div>
  </div>

  <div className="flex flex-row items-start w-full max-w-md mx-auto gap-4">
    <a href="mailto:example@email.com" className="text-gray-700 hover:text-gray-900">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 16h16V8.238l-8 7.999-8-7.999V20z"/>
      </svg>
    </a>
    <div className="flex sm:flex-col flex-wrap w-full m-auto h-auto max-w-sm space-y-1"> 
      <p className="font-sml text-left">Our Email: </p>
      <p className="font-sml text-left break-all">support@deepnetsoft.com</p>

    </div>
  </div>

  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto py-4">
  
    <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M22,12A10,10,0,1,0,10,22V14H7v-3h3V8.5A3.5,3.5,0,0,1,13.5,5h2.5V8H13.5A.5.5,0,0,0,13,8.5V11h3.5l-.5,3H13v8A10,10,0,0,0,22,12Z"/>
      </svg>
    </a>
  
    <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5ZM17.5 6.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/>
      </svg>
    </a>
  
    <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.03 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.16 4.87a4.27 4.27 0 0 0 1.33 5.7 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.94.07 4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 5.2a8.44 8.44 0 0 1-2.54.7Z"/>
      </svg>
    </a>
  
    <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V24h-4v-6.9c0-1.6 0-3.7-2.2-3.7-2.2 0-2.6 1.7-2.6 3.5V24h-4V8Z"/>
      </svg>
    </a>
  
    <a href="https://youtube.com" target="_blank" className="text-red-600 hover:text-red-800">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.764-42.234-48.429-48.51C456.551 64 288 64 288 64S119.449 64 74.774 75.573c-23.665 6.276-42.148 24.86-48.429 48.51C16 168.417 16 256 16 256s0 87.583 10.345 131.917c6.281 23.65 24.764 42.234 48.429 48.51C119.449 448 288 448 288 448s168.551 0 213.226-11.573c23.665-6.276 42.148-24.86 48.429-48.51C560 343.583 560 256 560 256s0-87.583-10.345-131.917zM232 334V178l142 78-142 78z"/>
      </svg>
    </a>
  
  </div>
  

</div>
 

    </div>











    <div className="w-full max-w-2xl mx-auto items-center justify-items-center h-auto border rounded border-[#232323] py-4 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D]">

        <form className="space-y-1 w-full sm:pl-28 p-4 sm:pr-10 flex flex-col m-auto">
            
            <div className="w-full m-auto flex flex-col sm:flex-row gap-12 mt-5">
                <div className="w-full m-auto">
              <label className="block font-mdm mb-1" htmlFor="name">First Name*</label>
              <input type="text" id="name" name="name" placeholder="Your name"
                     className="w-full font-mdm border-b border-gray-300 focus:outline-none focus:border-cyan-300 bg-transparent" />
            </div>
            <div className="w-full m-auto">
                <label className="block font-mdm mb-1" htmlFor="email">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Your last name"
                       className="w-full font-mdm border-b border-gray-300 focus:outline-none focus:border-cyan-300 bg-transparent" />
              </div>
        </div>
           
        <div className="w-full m-auto flex flex-col sm:flex-row gap-12 mt-5">
            <div className="w-full m-auto">
          <label className="block font-mdm mb-1" htmlFor="name">Phone*</label>
          <input type="tel" id="name" name="name" placeholder="Phone"
                 className="w-full font-mdm border-b border-gray-300 focus:outline-none focus:border-cyan-300 bg-transparent" />
        </div>
        <div className="w-full m-auto">
            <label className="block font-mdm mb-1" htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="you@example.com"
                   className="w-full font-mdm border-b border-gray-300 focus:outline-none focus:border-cyan-300 bg-transparent" />
          </div>
    </div>
          
    <div className="w-full m-auto">
        <label htmlFor="message" className="block font-mdm mt-5">
          Message
        </label>
        <textarea id="message" name="message" rows={4} placeholder="Type your message here..."
          className="w-full font-mdm border-b border-gray-300 bg-transparent focus:outline-none focus:border-cyan-300 resize-y text-base p-1 transition duration-200">
        </textarea>
        </div>
           

        <div className="w-full m-auto flex flex-col sm:flex-row gap-12 mt-5">
            <div className="w-full m-auto">
          <label className="block font-mdm mb-1" htmlFor="name">First Name*</label>
          <input type="number" id="Numbers" name="Numbers" placeholder="Number"
                 className="w-full font-mdm border-b border-gray-300 focus:outline-none focus:border-cyan-300 bg-transparent" />
        </div>
        
        <div className="w-full flex justify-center sm:justify-start mt-6">
      <GradientButton className="w-full max-w-36" onClick={() => alert('button clicked!')}>
        Submit
      </GradientButton>
    </div>

    </div>

          </form>

    </div>

</div>





</div>




<Footer />



  </>
  );
}
