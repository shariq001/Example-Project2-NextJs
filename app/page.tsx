import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import React from 'react'

const Home = () => {
  return (
    <div className="sm:w-[320px] md:w-[768px] lg:w-[1152px] x:w-[1440px] 2xl:w-[1536px] ">
      {/* Section 1 */}
      <div className="bg-[#043873] bg-[url('/Images/Element1.png')] bg-cover bg-center text-white flex justify-around p-[100px] items-center sm:flex-col sm:justify-between sm:items-center sm:gap-[50px] sm:px-[25px] md:flex md:flex-col md:items-center lg:flex-row 2xl:px-[100px]">
        {/* Left Section */}
        <div className="w-[50vw] sm:text-center sm:flex sm:flex-col sm:items-center sm:w-[100%]">
          <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] sm:mb-[20px] md:text-[54px] md:leading-[65.35px]">Get More Done with Whitepace</h1>
          <p className="mb-[40px] sm:text-[18px] sm:mb-[20px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[4px] text-white" 
          ></FontAwesomeIcon></button></a>
        </div>

        {/* Right Section */}
        <div className="w-[50vw] sm:w-[100%] md:w-[551px]">
          <div className="bg-[#c4defd] w-[650px] h-[600px] sm:w-[270px] sm:h-[191px] md:w-[551px] md:h-[367px] "></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white bg-[url('/Images/BACKGROUND.png')] bg-no-repeat text-black p-[100px] sm:px-[25px] sm:flex sm:flex-col sm:items-center md:gap-[200px] lg:gap-[50px] 2xl:px-[100px]">
        {/* first */}
        <div className="flex justify-around p-[50px] items-center gap-[20px] sm:flex sm:flex-col sm:justify-between sm:items-center sm:gap-[50px] sm:px-[25px] lg:flex-row lg:items-center lg:justify-center lg:gap-[60px]">
          {/* Left */}
          <div className="w-[50vw] sm:w-[100%] sm:flex sm:flex-col sm:items-center text-center">
            <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Project Management</h1>
            <p className="mb-[40px] text-black sm:text-[18px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
            <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Get Started <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button></a>
          </div>

          {/* Right */}
          <div className="w-[50vw]  sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[560px] lg:h-[384px]">
            <div className="bg-[#c4defd] w-[650px] h-[600px] sm:w-[270px] sm:h-[191px] md:w-[551px] md:h-[367px]"></div>
          </div>
        </div>

        {/* Second */}
        <div className="flex justify-around p-[50px] items-center gap-[20px] sm:flex-col sm:items-center sm:gap-[100px] md:gap-[250px] lg:flex-row lg:items-center lg:gap-[50px]">
          {/* left */}
          <div className="w-[50vw]  sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[560px] lg:h-[367px]">
            <Image src='/Images/Work Together Image.png' width={500} height={500} alt="Work-Together"  className="md:w-[551px] md:h-[367px]"/>
          </div>

          {/* Right */}
          <div className="w-[50vw] sm:w-[100%] sm:flex sm:flex-col sm:items-center text-center sm:px-[0px]">
            <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Work Together</h1>
            <p className="mb-[40px] text-black sm:text-[18px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
            <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Try it now <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button></a>
          </div>
        </div>
      </div>

      {/* Section 3*/}
      <div className="bg-[#043873] bg-[url('/Images/Element1.png')] bg-cover bg-center text-white flex justify-around p-[100px] items-center sm:flex-col sm:items-center sm:gap-[50px] sm:px-[25px] md:flex-col md:h-[800px] md:justify-start md:py-[70px] lg:flex-row lg:h-[500px] 2xl:px-[100px]">
        {/* Left Section */}
        <div className="w-[50vw] sm:w-[100%] text-center sm:flex sm:flex-col sm:items-center">
          <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Use as Extension</h1>
          <p className="mb-[40px] sm:text-[18px]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
          <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Let&apos;s Go <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button></a>
        </div>

        {/* Right Section */}
        <div className="w-[50vw] sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[560px] lg:h-[367px]">
          <div className="bg-[#c4defd] w-[650px] h-[600px] sm:w-[270px] sm:h-[191px] md:w-[551px] md:h-[367px]"></div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-white text-black p-[100px] sm:flex sm:flex-col sm:items-center lg:items-center lg:px-[25px] 2xl:px-[100px]">
        {/* first */}
        <div className="flex justify-around p-[50px] items-center gap-[50px] sm:flex-col sm:items-center md:gap-[250px] lg:flex-row lg:gap-[100px]">
          {/* Left */}
          <div className="w-[50vw] sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[560px] lg:h-[367px]">
            <div className="bg-[#c4defd] w-[700px] h-[600px] sm:w-[270px] sm:h-[191px] md:w-[551px] md:h-[367px]"></div>
          </div>

          {/* Right */}
          <div className="w-[50vw] sm:w-[100%] text-center sm:flex sm:flex-col sm:items-center lg:w-[100%]">
            <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Customize it to your needs</h1>
            <p className="mb-[40px] text-black sm:text-[18px]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Let&apos;s Go <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button></a>
          </div>
        </div>

        {/* Second */}
        <div className="p-[100px] sm:px-[25px] sm:flex sm:flex-col sm:items-center">
          {/* First */}
          <div className="text-center sm:w-[300px] sm:px-[25px] lg:w-[100%]">
            <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Choose Your Plan</h1>
            <p className="text-black sm:text-[18px]">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
          </div>

          {/* Second */}
          <div className="flex justify-center gap-[20px] items-center pt-[100px] sm:flex-col lg:flex-row">
            {/* Card 1 */}
            <div className="border-[#ffe492] border-[1px] p-[30px] w-[500px] rounded-[7px] sm:w-[290px]">
              <h3 className="text-[24px] mb-[10px]">Free</h3>
              <h2 className="font-bold text-[32px] mb-[10px]">$0</h2>
              <p className="mb-[10px] text-black">Capture ideas and find them quickly</p>
              <p className="text-[16px] mb-[10px] text-black"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />Sync unlimited devices</p>
              <p className="text-[16px] mb-[10px] text-black"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />10 GB monthly uploads</p>
              <p className="text-[16px] mb-[10px] text-black"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />200 MB max. note size</p>
              <p className="text-[16px] mb-[10px] text-black flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px]" />Customize Home dashboard and access extra widgets</p>
              <p className="text-[16px] mb-[10px] text-black flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px]" />Connect primary Google Calendar account</p>
              <p className="text-[16px] mb-[15px] text-black flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px]" />Add due dates, reminders, and notificatios to your tasks</p>
              <button className="border-[#ffe492] border-[1px] rounded-[7px] px-[30px] py-[10px] font-[400] duration-[0.5s] hover:bg-[#ffe492] hover:duration-[0.5s]">Get Started</button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#043873] text-white py-[80px] px-[30px] w-[500px] rounded-[7px] sm:w-[290px]">
              <h3 className="text-[24px] mb-[10px]">Personal</h3>
              <h2 className="font-bold text-[32px] mb-[10px] text-[#ffe492]">$11.99</h2>
              <p className="mb-[10px] ">Keep home and family on track</p>
              <p className="text-[16px] mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] text-[#ffe492]" />Sync unlimited devices</p>
              <p className="text-[16px] mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] text-[#ffe492]" />10 GB monthly uploads</p>
              <p className="text-[16px] mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] text-[#ffe492]" />200 MB max. note size</p>
              <p className="text-[16px] mb-[10px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px] text-[#ffe492]" />Customize Home dashboard and access extra widgets</p>
              <p className="text-[16px] mb-[10px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] text-[#ffe492] mt-[3px]" />Connect primary Google Calendar account</p>
              <p className="text-[16px] mb-[15px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px] text-[#ffe492]" />Add due dates, reminders, and notificatios to your tasks</p>
              <button className="bg-[#4f9cf9] rounded-[7px] px-[30px] py-[10px] font-[400] duration-[0.5s] hover:px-[50px] hover:duration-[0.5s]">Get Started</button>
            </div>

            {/* Card 3 */}
            <div className="border-[#ffe492] border-[1px] p-[30px] w-[500px] rounded-[7px] sm:w-[290px]">
              <h3 className="text-[24px] mb-[10px]">Organization</h3>
              <h2 className="font-bold text-[32px] mb-[10px]">$49.99</h2>
              <p className="mb-[10px] text-black">Capture ideas and find them quickly</p>
              <p className="text-[16px] text-black mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />Sync unlimited devices</p>
              <p className="text-[16px] text-black mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />10 GB monthly uploads</p>
              <p className="text-[16px] text-black mb-[10px]"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px]" />200 MB max. note size</p>
              <p className="text-[16px] text-black mb-[10px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px]" />Customize Home dashboard and access extra widgets</p>
              <p className="text-[16px] text-black mb-[10px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[4px]" />Connect primary Google Calendar account</p>
              <p className="text-[16px] text-black mb-[15px] flex"><FontAwesomeIcon icon={faCircleCheck} className="mr-[10px] mt-[5px]" />Add due dates, reminders, and notificatios to your tasks</p>
              <button className="border-[#ffe492] border-[1px] rounded-[7px] px-[30px] py-[10px] font-[400] duration-[0.5s] hover:bg-[#ffe492] hover:duration-[0.5s]">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-[#043873] bg-[url('/Images/BACKGROUND.png')] bg-no-repeat text-white p-[100px] text-center sm:px-[25px] 2xl:px-[100px]">
        <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Your work, everywhere you are</h1>
        <p className="mb-[25px] text-[18px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <button className="bg-[#4f9cf9] rounded-[7px] px-[30px] py-[10px] font-[400] ">Try Taskey <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button>
      </div>

      {/* Section 6 */}
      <div className="bg-white text-black p-[100px] sm:px-[25px] md:flex md:flex-col md:gap-[250px] 2xl:px-[100px]">
        {/* first */}
        <div className="flex justify-around p-[50px]  items-center gap-[20px] sm:px-[0px] sm:flex-col sm:gap-[50px] lg:flex-row lg:items-center lg:gap-[80px] lg:pb-0">
            {/* Left */}
            <div className="w-[50vw] sm:w-[100%] text-center sm:flex sm:flex-col sm:items-center sm:px-[0px] lg:w-[562px] lg:h-[314px]">
              <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">100% your data</h1>
              <p className="mb-[40px] text-black text-[18px]">The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
              <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Read More <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
            ></FontAwesomeIcon></button></a>
            </div>

            {/* Right */}
            <div className="w-[50vw] sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[562px] lg:h-[314px]">
              <Image src='/Images/Element.png' width={500} height={500} alt="Work-Together" className="md:w-[551px] md:h-[367px] lg:w-[562px] lg:h-[314px]"/>
            </div>
        </div>

        <div className="text-center flex flex-col justify-center p-[50px] lg:pt-0">
          <h1 className="text-[64px] font-bold leading-[70px] text-center mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Our sponsors</h1>
          <ul className="flex justify-between items-center m-[50px] sm:flex-col sm:gap-[50px] sm:m-[25px] lg:flex-row">
            <li><Image src='/Images/Apple.png' width={50} height={100} alt="Work-Together" className="sm:w-[30px] md:w-[55px] md:h-[68px]"/></li>
            <li><Image src='/Images/Microsoft.png' width={150} height={100} alt="Work-Together" className="sm:w-[80px]  md:w-[150px] md:h-[68px]" /></li>
            <li><Image src='/Images/Slack.png' width={150} height={100} alt="Work-Together" className="sm:w-[80px]  md:w-[150px] md:h-[68px]"/></li>
            <li><Image src='/Images/Group 246.png' width={150} height={100} alt="Work-Together" className="sm:w-[80px]  md:w-[150px] md:h-[68px]"/></li>
          </ul>
        </div>
      </div>

      {/* Section 6 */}
      <div className="bg-[#043873] bg-[url('/Images/Element1.png')] bg-cover bg-center text-white flex justify-around p-[100px] items-center sm:flex-col sm:gap-[80px] sm:items-center text-center sm:px-[25px] md:gap-[250px] lg:flex-row lg:gap-[50px] lg:justify-center 2xl:px-[100px]">
        {/* left Section */}
        <div className="w-[50vw] sm:w-[270px] sm:h-[191px] md:w-[551px] lg:w-[528px] lg:h-[427px]">
          <Image src='/Images/Apps.png' width={500} height={500} alt="Work-Together" className="md:w-[551px] md:h-[367px] lg:w-[528px] lg:h-[427px] "/>
        </div>

        {/* right Section */}
        <div className="w-[50vw] sm:w-[100%] sm:flex sm:flex-col sm:items-center lg:w-[50vw]">
          <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Work with Your Favorite Apps Using whitepace</h1>
          <p className="mb-[40px] text-[18px]">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          <a href=""><button className='bg-[#4f9cf9] px-[20px] py-[15px] rounded-[5px] flex items-center text-white'>Read More <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
            ></FontAwesomeIcon></button></a>
        </div>
      </div>

      {/* Section 7 */}
      <div className="text-center bg-white text-black p-[100px] flex flex-col items-center sm:px-[25px] sm:items-center sm:flex 2xl:px-[100px]">
        <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">What Our Client Says</h1>
        <div className="flex justify-center gap-[30px] p-[50px] sm:flex-col sm:px-0 sm:items-center md:flex-row md:flex-wrap">
          {/* Card 1 */}
          <div className="rounded-[7px] shadow-sm shadow-gray-600 p-[20px] w-[400px] flex flex-col justify-center sm:w-[270px]">
            <Image src='/Images/Quote.png' width={60} height={100} alt="Work-Together" className="mb-[25px]" />
            <p className="mb-[25px] text-black text-start">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            <hr className="border-b-[1px] border-black"/>

            <div className="flex justify-center flex-row py-[25px] items-center sm:flex-col sm:gap-[20px]">
              <div className="bg-black rounded-[50px] w-[80px] h-[60px] sm:w-[60px]"></div>
              <div className="p-2">
                <h2 className="text-[23px] font-bold">Oberon Shaw, MCH</h2>
                <p className="text-black">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[7px] bg-[#4f9cf9] text-white p-[20px] w-[400px] flex flex-col  justify-center sm:w-[270px]">
            <Image src='/Images/Quote.png' width={60} height={100} alt="Work-Together" className="mb-[25px]" />
            <p className="mb-[25px] text-white text-start">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            <hr />

            <div className="flex justify-center flex-row py-[25px] items-center sm:flex-col sm:gap-[20px]">
              <div className="bg-white rounded-[50px] w-[80px] h-[60px] sm:w-[60px]"></div>
              <div className="p-2">
                <h2 className="text-[23px] font-bold">Oberon Shaw, MCH</h2>
                <p className="text-white">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[7px] bg-[#4f9cf9] text-white p-[20px] w-[400px] flex flex-col justify-center sm:w-[270px]">
            <Image src='/Images/Quote.png' width={60} height={100} alt="Work-Together" className="mb-[25px]" style={{ color: "white" }} />
            <p className="mb-[25px] text-white text-start">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            <hr />

            <div className="flex justify-center flex-row py-[25px] items-center sm:flex-col sm:gap-[20px]">
              <div className="bg-white rounded-[50px] w-[80px] h-[60px] sm:w-[60px]"></div>
              <div className="p-2">
                <h2 className="text-[23px] font-bold">Oberon Shaw, MCH</h2>
                <p className="text-white">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Image src='/Images/Slider.png' width={50} height={50} alt="Slider" />
      </div>

      {/* Section 8 */}
      <div className="bg-[#043873] bg-[url('/Images/Element1.png')] bg-center bg-repeat-y text-white p-[100px] text-center flex flex-col items-center sm:px-[10px] 2xl:px-[100px]">
        {/* First */}
        <div className="w-[500px] mb-[50px] sm:w-[100%]">
          <h1 className="text-[64px] font-bold leading-[70px] mb-[25px] sm:text-[36px] sm:leading-[43px] md:text-[54px] md:leading-[65.35px]">Try Whitepace today</h1>
          <p className="mb-[25px] sm:text-[18px]">Get started for free.<br /> Add your whole team as your needs grow.</p>
          <button className="bg-[#4f9cf9] rounded-[7px] px-[30px] py-[10px] font-[400] mb-[25px]">Try Taskey free <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button>
          <p className="mb-[25px]">On a big team? Contact sales</p>
          <ul className="flex justify-center gap-[25px] items-center">
            <li><Image src='/Images/apple-black-logo 2.png' width={50} height={30} alt="Apple Logo" /></li>
            <li><Image src='/Images/Group.png' width={50} height={30} alt="Apple Logo" /></li>
            <li><Image src='/Images/android-logo 1.png' width={50} height={30} alt="Apple Logo" /></li>
          </ul>
        </div>

        {/* Second */}
        <div className="flex justify-around pt-[100px] items-center sm:flex-col sm:gap-[50px] sm:items-center lg:flex-row lg:gap-10">
          <div className="w-[255px] sm:flex sm:flex-col sm:items-center lg:w-[177px]">
            <Image src='/Images/Logo.png' width={150} height={50} alt="Logo" className="mb-[15px]"/>
            <p className="">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
          </div>

          <div className="w-[255px] lg:w-[177px]">
            <p className="font-bold mb-[15px]">Product</p>
            <p className="text-[#ffe492] mb-[15px]">Overview</p>
            <p className="mb-[15px]">Pricing</p>
            <p className="mb-[15px]">Customer stories</p>
          </div>

          <div className="w-[255px] lg:w-[177px]">
            <p className="font-bold mb-[15px]">Resources</p>
            <p className="mb-[15px]">Blogs</p>
            <p className="mb-[15px]">Guides & tutorials</p>
            <p className="mb-[15px]">Help center</p>
          </div>

          <div className="w-[255px] lg:w-[177px]">
            <p className="font-bold mb-[15px]">Company</p>
            <p className="mb-[15px]">About us</p>
            <p className="mb-[15px]">Careers</p>
            <p className="mb-[15px]">Media kit</p>
          </div>

          <div className="w-[255px] lg:w-[177px]">
            <h2 className="text-[28px] font-bold mb-[15px]">Try It Today</h2>
            <p className="mb-[15px]">Get started for free.
            Add your whole team as your needs grow.</p>
            <button className="bg-[#4f9cf9] rounded-[7px] px-[30px] py-[10px] font-[400] mb-[25px]">Start today <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right ml-[10px] mt-[2px] text-white" 
          ></FontAwesomeIcon></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home