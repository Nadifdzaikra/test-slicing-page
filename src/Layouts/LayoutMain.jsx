import Button from '../Components/Button';
import { GoCheckCircleFill } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaShoePrints, FaLaptop, FaMobileAlt } from 'react-icons/fa';
import { InputField } from '../Components/inputField';
import { Header } from './../Components/Header';
import { MdOutlineArrowOutward } from "react-icons/md";

const cardData = [
   {
      title: "Shoes",
      icon: FaShoePrints,
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "../../public/Image/shoes.png"
   },
   {
      title: "Laptop",
      icon: FaLaptop,
      description: "A powerful machine for all your needs.",
      image: "../../public/Image/laptop.png"
   },
   {
      title: "Mobile Phone",
      icon: FaMobileAlt,
      description: "Stay connected wherever you go.",
      image: "../../public/Image/mobile.png"
   },
   {
      title: "Shoes",
      icon: FaShoePrints,
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "../../public/Image/shoes.png"
   },
   {
      title: "Laptop",
      icon: FaLaptop,
      description: "A powerful machine for all your needs.",
      image: "../../public/Image/laptop.png"
   },
   {
      title: "Mobile Phone",
      icon: FaMobileAlt,
      description: "Stay connected wherever you go.",
      image: "../../public/Image/mobile.png"
   }
];

const customerData = [
   {
      title: "Shoes",
      icon: FaShoePrints,
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "../../public/Image/shoes.png"
   },
   {
      title: "Laptop",
      icon: FaLaptop,
      description: "A powerful machine for all your needs.",
      image: "../../public/Image/laptop.png"
   },
   {
      title: "Mobile Phone",
      icon: FaMobileAlt,
      description: "Stay connected wherever you go.",
      image: "../../public/Image/mobile.png"
   },
];
const reviewData = [
   {
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! The quality exceeded my expectations."
   },
   {
      name: "Jane Smith",
      rating: 4,
      comment: "Very good! Could be better with some minor improvements."
   },
   {
      name: "Michael Brown",
      rating: 5,
      comment: "Highly recommend! Excellent customer service and fast shipping."
   },
   {
      name: "Emily Johnson",
      rating: 3,
      comment: "It's decent, but I had some issues with the packaging."
   }
];

// const elements = document.getElementsByTagName("section");

// for (let i = 0; i < elements.length; i++) {
//    elements[i].classList.add("bg-red-200");
// }
const scrollToSection = (section) => {
   console.log(section)
   // if (section === 'contact') {
   //    heroSection.current.scrollIntoView({ behavior: 'smooth' });
   // } else if (section === 'blog') {
   //    featuresSection.current.scrollIntoView({ behavior: 'smooth' });
   // }
};
// useEffect(() => {
//    document.documentElement.style.overflowX = "hidden";
//    document.body.style.overflowX = "hidden";
// }, []);
function LayoutMain({ children }) {
   return (
      <div>
         <Header scrollToSection={scrollToSection} className="lg:sticky top-0 z-50lg:mb-24 p-5 z-20" />
         <div className="min-h-screen w-full px-5 lg:px-16 xl:px-32 relative overflow-x-hidden">
            {/* Header */}

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 w-full h-fit items-center relative align-middle p-10 lg:p-20 lg:my-10">
               {/* Left Content */}
               <div className=" w-full">
                  <p className="text-lg uppercase text-stone-500">55,000+ trusted businesses</p>

                  <h1 className="font-light text-[clamp(2rem,5vw,6rem)] leading-tight py-6">
                     Build your next project faster.
                  </h1>

                  <p className="text-lg md:max-w-md">
                     Use Sublime to streamline your processes, save time and effort and
                     increase your sales exponentially.
                  </p>

                  <div className="rounded-full p-1 outline-1 outline-double my-4 w-fit flex place-items-center">
                     <InputField
                        type="email"
                        placeholder="Enter your mail address"
                        MoreClass="input-ghost outline-none focus:outline-none focus:ring-0 focus:border-transparent max-lg:input-xs input-sm"
                     />
                     <Button transparent={false} MoreClass="join-item rounded-full max-lg:btn-sm">Get Started</Button>
                  </div>

                  <div className="flex gap-5">
                     <div className="flex items-center justify-center gap-2">
                        <GoCheckCircleFill />
                        On Demand Support
                     </div>
                     <div className="flex items-center justify-center gap-2">
                        <GoCheckCircleFill />
                        Seamless Cloud Technology
                     </div>
                  </div>
               </div>

               {/* Absolute Image */}
               <img
                  src="../../public/Image/Group2.png"
                  className="h-fit w-[50vw] hidden lg:block ml-10 lg:absolute inset-x-2/4 right-[-20vw] max-w-none shadow-[-5vw_0_10vw_-3vw_rgba(234,179,8,0.7)] z-10"
               />
            </div>

            {/* Stats Section */}
            <div className="max-lg:block p-5 md:p-16 grid grid-cols-2 text-md w-full text-semibold  border-y-2 border-stone-300 border-opacity-30 my-10 items-center ">
               <section className='max-lg:text-center max-lg:w-full '>
                  <h1 className="text-5xl">15,000+ happy <br /> customers.</h1>
                  <p className="lg:text-xl">Using Sublime everyday and loving it!</p>
               </section>
               <section className="max-md:block grid grid-cols-3 text-center justify-center uppercase font-semibold w-full">
                  <div>
                     <h1 className="text-6xl my-2">24K</h1>
                     <p>Trusted Reviews</p>
                  </div>
                  <div>
                     <h1 className="text-6xl my-2">96%</h1>
                     <p>Customer Satisfaction</p>
                  </div>
                  <div>
                     <h1 className="text-6xl my-2">32K</h1>
                     <p>Expanses Saved</p>
                  </div>
               </section>
            </div>
            <div className="flex max-lg:flex-col gap-5 p-5 md:p-16 justify-between text-md w-full text-semibold  items-center ">
               <section >
                  <p className="uppercase">Sublime Product</p>
                  <h1 className="text-5xl text-wrap">
                     Provide Powerful <br /> Solutions at all times.
                  </h1>
               </section>
               <section className='self-end lg:w-1/2'>

                  <div className="flex gap-2">
                     <MdOutlineRadioButtonUnchecked />
                     <MdOutlineRadioButtonUnchecked />
                  </div>
                  <p className='text-lg'>
                     Supercharge your productivity and optimize with Sublime. Our intuitive interface and robust feature for you.
                  </p>
               </section>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:p-20 p-5 relative'>
               <div className="absolute bg-gradient-to-r from-green-300 to-yellow-300 bg-opacity-50 rounded-full z-1 w-full h-[250px] translate-y-[100%] blur-[120px]"></div>

               {cardData.map((item, index) => (
                  <div key={index} className="card w-full h-80 shadow-xl bg-white/50 backdrop:blur-md ">
                     <div className="card-body flex flex-col ">
                        <item.icon className='w-12 h-12' />
                        {/* <img className='w-20' src={item.image} alt={item.title} /> */}
                        <h2 className="my-2 text-3xl">{item.title}</h2>
                        <p className='text-lg'>{item.description}</p>
                        <Button transparent={true} MoreClass="join-item rounded-full max-lg:btn-sm w-fit" ><MdOutlineArrowOutward className='w-6 h-6' /></Button>

                     </div>
                  </div>
               ))}
            </div>
            {/* 3 */}
            <div className="flex justify-center w-full h-fit items-center relative align-middle p-10 lg:p-20 lg:my-20 ">
               {/* Left Content */}
               <div className=" w-full lg:w-1/2 flex-col flex gap-5 pr-10">
                  <img src="../../public/Image/Group4.png" className="h-fit w-20" />

                  <h1 className="font-light text-[clamp(2rem,3vw,3.3rem)] leading-tight py-6">
                     Provide powerful
                     solutions at all times.
                  </h1>

                  <p className="text-md lg:text-lg">
                     Use Sublime to streamline your processes, save time and effort
                     and increase your sales exponentially.
                  </p>


                  <div className="flex gap-5">
                     <div className="flex items-center justify-center gap-2">
                        <GoCheckCircleFill />
                        On Demand Support
                     </div>
                     <div className="flex items-center justify-center gap-2">
                        <GoCheckCircleFill />
                        Seamless Cloud Technology
                     </div>
                  </div>
                  <Button transparent={true} MoreClass="btn-outline join-item rounded-full max-lg:btn-sm btn-sm w-fit">Get Started <MdOutlineArrowOutward className='w-6 h-6' />  </Button>
               </div>
               <img
                  src="../../public/Image/Group.png"
                  className="max-lg:hidden h-fit w-[30vw] shadow-[-5vw_0_10vw_-3vw_rgba(234,179,8,0.7),2vw_0_20vw_-5vw_rgba(34,197,94,0.7)] z-10"
               />
            </div>
            {/* 4 */}

            <div className="flex max-lg:flex-col gap-5 p-5 md:p-16 justify-between text-md w-full text-semibold  items-center ">

               <section className='flex max-lg:flex-col gap-10'>
                  <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                     <div className="avatar">
                        <div className="w-16 lg:w-24">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                     </div>
                     <div className="avatar">
                        <div className="w-16 lg:w-24">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                     </div>
                     <div className="avatar">
                        <div className="w-16 lg:w-24">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                     </div>
                  </div>
                  <h1 className="text-5xl text-wrap">
                     Powerful <br /> Customer Support.
                  </h1>
               </section>
               <section className='self-end'>

                  <div className="flex gap-2">
                     <MdOutlineRadioButtonUnchecked />
                     <MdOutlineRadioButtonUnchecked />
                  </div>
               </section>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 lg:p-20 p-5 relative bg-white/60 backdrop:blur-md w-fit h-fit z-10 '>
               <div className="absolute bg-gradient-to-r from-green-300 to-yellow-300 bg-opacity-50 rounded-full z-1 w-full inset-y-0 h-[250px] translate-y-1/2 blur-[120px]"></div>

               {customerData.map((item, index) => (
                  <div key={index} className="card bg-base-100 w-full h-80 shadow-xl bg-white/70 backdrop-blur-md">
                     <div className="m-auto p-10 h-fit text-center flex flex-col justify-center items-center">
                        <item.icon className='w-12 h-12' />
                        {/* <img className='w-20' src={item.image} alt={item.title} /> */}
                        <h2 className="my-5 text-3xl">{item.title}</h2>
                        <p className='text-lg'>{item.description}</p>
                     </div>
                  </div>

               ))}
            </div>
            {/* 5 */}
            <div className="max-md:text-center grid md:grid-cols-2 lg:grid-cols-3 w-full h-fit items-center relative align-middle p-10 lg:my-20 gap-20">
               <div className="absolute bg-gradient-to-r from-green-300 to-yellow-300 bg-opacity-90 rounded-full z-1 w-[800px] -top-20 left-[20%] h-40 -translate-y-1/2 blur-[100px]"></div>

               {/* Left Content */}
               <div className="md:col-span-2 lg:col-span-3 w-full flex-col flex gap-5 items-center m-auto">
                  {/* <img src="../../public/Image/Group5.png" className="h-fit w-20" /> */}
                  <div className="flex gap-2">
                     <MdOutlineRadioButtonUnchecked />
                     <MdOutlineRadioButtonUnchecked />
                  </div>
                  <h1 className=" text-[clamp(2rem,3vw,3.3rem)] leading-tight py-6 max-w-lg font-semibold text-center">
                     Power your business with Sublime
                  </h1>

                  <p className="text-md lg:text-lg max-w-xl">
                     Sublime seamlessly integrates with your existing infrastructure,
                     allowing you to effortlessly connect and consolidate data from various sources.
                  </p>


               </div>

               <div className="w-full flex-col flex gap-5 pr-10 ">
                  <img src="../../public/Image/Group6.png" className="h-fit w-20" />

                  <p className="text-md lg:text-lg">
                     Simple Systems
                     Sublime is easy to use and even easy to
                     integrate with existing systems.
                  </p>
                  <img src="../../public/Image/Group7.png" className="h-fit w-20" />

                  <p className="text-md lg:text-lg">
                     Easily Customized
                     Need a more custom solution? Done -
                     let's chat about it.
                  </p>
               </div>


               <img
                  src="../../public/Image/Group3.png"
                  className="max-lg:hidden h-fit w-[40vw] shadow-[-5vw_0_10vw_-3vw_rgba(234,179,8,0.7),2vw_0_20vw_-5vw_rgba(34,197,94,0.7)] z-10"
               />


               <div className="w-full flex-col flex gap-5 pr-10 ">
                  <img src="../../public/Image/Group4.png" className="h-fit w-20" />

                  <p className="text-md lg:text-lg">
                     Increased Efficiency
                     Our workflows are streamlined, optimised
                     and built to perform.
                  </p>
                  <img src="../../public/Image/Group5.png" className="h-fit w-20" />

                  <p className="text-md lg:text-lg">
                     Great Communication
                     We're here for you at any time of the day
                     and would love to hear from you.
                  </p>
               </div>


            </div>
            {/* 6 */}
            <div className="max-md:text-center g w-full h-fit items-center relative align-middle p-5 lg:my-20 gap-20">
               {/* Left Content */}
               <div className="grid md:grid-cols-3 w-full gap-5 items-center place-items-center text-center  m-auto">
                  {/* <img src="../../public/Image/Group5.png" className="h-fit w-20" /> */}
                  <MdOutlineRadioButtonUnchecked className='max-md:hidden' />
                  <section>
                     <p className="text-xl font-semibold uppercase text-stone-600">55,000+ trusted businesses</p>
                     <h1 className="text-[clamp(1.2rem,3vw,2.5rem)] leading-tight py-6 font-semibold text-center">
                        Check out what <br />
                        our customers have to say
                     </h1>

                  </section>

                  <MdOutlineRadioButtonUnchecked className='max-md:hidden' />


               </div>
               <div className="absolute bg-gradient-to-r from-green-400 to-yellow-300  rounded-full z-1 bottom-[50%] w-[700px] h-40 translate-x-[50%] translate-y-[20%] blur-[100px]"></div>

               <div className="grid md:grid-cols-2 lg:w-1/2 m-auto gap-5 auto-rows-auto my-10 ">
                  {reviewData.map((review, index) => (
                     <div
                        key={index}
                        className={`card bg-base-100 w-full shadow-xl p-5  backdrop-blur-md bg-white/30
        ${index % 3 === 0 ? "row-span-1 h-60" : "row-span-2 h-80"}`}
                     >
                        <div className="card-body flex flex-col justify-center h-full">
                           {/* Nama Reviewer */}
                           <h2 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold">{review.name}</h2>

                           {/* Rating Bintang */}
                           <div className="flex text-yellow-500 my-2">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                 <span key={i}>⭐</span>
                              ))}
                           </div>

                           {/* Komentar */}
                           <p className="text-[clamp(1rem,1.5vw,1.3rem)]  text-gray-700">{review.comment}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="grid grid-flow-row w-full items-center place-items-center  text-center m-auto gap-10">
                  {/* <img src="../../public/Image/Group5.png" className="h-fit w-20" /> */}
                  <section className=''>
                     <p className="text-lg font-semibold uppercase text-stone-900">clients using sublime</p>

                  </section>

                  <section className='justify-center place-content-center items-center gap-10 flex flex-wrap w-full'>
                     <img src="../../public/Image/tribal.png" className="h-fit w-32 saturate-50" />
                     <img src="../../public/Image/peng.png" className="h-fit w-32 saturate-50" />
                     <img src="../../public/Image/veroxfloop.png" className="h-fit w-32 saturate-50" />
                     <img src="../../public/Image/invouce2go.png" className="h-fit w-32 saturate-50" />

                  </section>
               </div>
            </div>
            {/* 7 */}
            <div className=" relative w-full">
               <div className="absolute bg-gradient-to-r from-green-600 to-yellow-300 bg-opacity-90 rounded-full -z-10 bottom-[10px] right-[70%] w-1/2 h-40  translate-x-full translate-y-[20%] blur-[90px]"></div>

               {/* Konten dengan backdrop blur */}
               <div className="md:flex justify-center w-full h-fit items-center relative align-middle p-10 lg:p-20 lg:my-20  backdrop-opacity-0 rounded-lg">
                  {/* Left Content */}
                  <div className=" w-full lg:w-1/2 flex-col flex gap-5 pr-10">

                     <h1 className="font-semibold text-[clamp(2rem,3vw,3.3rem)] leading-tight py-6">
                        Start your <br />7-day free trial
                     </h1>

                     <div className="flex max-md:flex-wrap gap-5 place-items-center">
                        <div className="flex items-center justify-center gap-2">
                           <GoCheckCircleFill />
                           Free 7-day trial
                        </div>
                        <div className="flex items-center justify-center gap-2">
                           <GoCheckCircleFill />
                           No credit card required
                        </div>
                     </div>
                  </div>
                  <div className='grid grid-rows-2 grid-flow-col lg:w-1/2'>
                     <div className="flex gap-2 items-center">
                        <MdOutlineRadioButtonUnchecked className='max-md:hidden' />
                        <MdOutlineRadioButtonUnchecked className='max-md:hidden' />

                     </div>
                     <div className="flex gap-5">
                        <Button transparent={false} MoreClass=" rounded-full max-lg:btn-sm btn-md w-fit ">Learn more  </Button>
                        <div className="flex items-center justify-center gap-2 font-semibold lg:text-lg">
                           4.80/5 <br /> From 300+ Customer Reviews
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* 8 */}
            <footer className="bg-white  py-10">
               <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center p-10">
                  {/* Kolom 1 - Judul, Deskripsi, dan Kontak */}
                  <div>
                     <div className="flex">
                        <a className="text-2xl pr-2 font-semibold" to="/">Sublime</a>
                        <BsStars className="text-3xl" />

                     </div>
                     <p className=" mt-2 lg:max-w-80 text-gray-400 text-lg">
                        Powering business to streamline processes and grow sales.
                     </p>
                     <button className="mt-4 px-4 py-2 bg-black/10 rounded-full text-gray-800 hover:bg-yellow-400 transition font-semibold">
                        +62 812-3456-7890
                     </button>
                  </div>

                  {/* Kolom 2 & 3 - Grid dalam Grid */}
                  <div className="grid grid-cols-2 gap-10 text-gray-400 font-semibold">
                     {/* Product Section */}
                     <div>
                        <h3 className="text-xl font-semibold mb-3 uppercase">Product</h3>
                        <ul className="space-y-2 uppercase">
                           <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
                           <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
                           <li><a href="#" className="hover:text-yellow-400 transition">Pricing</a></li>
                           <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
                           <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
                        </ul>
                     </div>

                     {/* Feature Section */}
                     <div>
                        <h3 className="text-xl font-semibold mb-3 uppercase ">Feature</h3>
                        <ul className="space-y-2 capitalize">
                           <li><a href="#" className="hover:text-green-400 transition">Blog Detail</a></li>
                           <li><a href="#" className="hover:text-green-400 transition">Login</a></li>
                           <li><a href="#" className="hover:text-green-400 transition">Sign Up</a></li>
                           <li><a href="#" className="hover:text-green-400 transition">404 Page</a></li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Footer Bawah */}
               <div className="mt-10 text-center text-gray-400 font-semibold text-sm pt-5 md:flex w-full md:justify-between items-center space-y-2 capitalize">
                  <p>
                     © 2025 Company Name. All rights reserved.
                  </p>
                  <div className='md:grid md:grid-cols-2'>
                     <p>Legal</p>
                     <p>Terms & conditions
                     </p>
                  </div>
               </div>
            </footer>
         </div >
      </div>
   )
}
export default LayoutMain