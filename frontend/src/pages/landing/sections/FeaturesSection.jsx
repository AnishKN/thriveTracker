// import React from 'react';
// import WOW from 'react-wow';
// import 'animate.css';

// const FeaturesSection = () => {
//   return (
//     <section id="features" className="py-20">
//       <div className="container mx-auto px-4">
//         <WOW animation="fadeInUp">
//           <h2 className="text-3xl font-bold text-center mb-12">ThriveTracker Features</h2>
//         </WOW>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <WOW animation="fadeInUp" delay="0.2s">
//             <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-4">Automated Data Collection</h3>
//                 <p className="text-gray-600">Streamlines data collection through digital quizzes, surveys, and integration with existing educational tools.</p>
//               </div>
//             </div>
//           </WOW>
//           <WOW animation="fadeInUp" delay="0.4s">
//             <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-4">Full Spectrum Data Capture</h3>
//                 <p className="text-gray-600">Records a wide range of metrics including academic performance, IQ, EQ, and other relevant factors, providing a holistic view of student development.</p>
//               </div>
//             </div>
//           </WOW>
//           <WOW animation="fadeInUp" delay="0.6s">
//             <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-4">Early Identification of At-Risk Students</h3>
//                 <p className="text-gray-600">Uses predictive analytics to identify students at risk of dropping out or underperforming, enabling timely interventions.</p>
//               </div>
//             </div>
//           </WOW>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from "react";

const Service = () => {
  return (
    <section id="features" className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              We offer the tools and insights you need to empower educators, support students, and enhance academic success.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Comprehensive Student Monitoring"
            details="Gain a complete view of each student's academic journey, including their academic records, IQ, EQ, attendance, and behavioral metrics. Our unified dashboard provides educators with a holistic understanding of student performance."
            icon={
              
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                  fill="white"
                />
              </svg>
            }
          />
          <ServiceCard
            title="Predictive Analytics"
            details="Utilize advanced machine learning algorithms to predict which students are at risk of dropping out or underperforming. Early identification allows for timely and effective interventions to help keep students on track."
            icon={
              <svg width="36"
              height="36" viewBox="0 -35.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0)"> <path d="M159.524 0.393145C156.399 0.123788 154.058 0.750571 152.37 2.30179C150.171 4.32164 149.108 7.85474 149.031 13.4077C147.212 15.4816 145.399 17.5445 143.593 19.5965C139.42 24.3401 135.106 29.2446 130.918 34.0834C126.73 38.9222 122.505 43.8811 118.419 48.6762C116.665 50.7333 114.91 52.7923 113.152 54.8533C112.677 54.843 112.182 54.8083 111.663 54.7723C110.128 54.5701 108.57 54.6493 107.064 55.0063C105.06 55.6145 103.869 55.0462 102.107 53.6307C92.4085 45.8476 83.3948 39.8002 74.55 35.1446C73.8555 34.8254 73.2439 34.3489 72.7624 33.752C72.2816 33.1552 71.9436 32.4542 71.7758 31.704C71.0743 29.0054 69.3499 26.6922 66.9731 25.2626C64.5969 23.833 61.7583 23.4013 59.0692 24.0605C56.3348 24.7041 53.9423 26.364 52.3692 28.7085C50.7961 31.0531 50.1584 33.9097 50.5836 36.7075C50.6933 37.4468 50.826 38.1861 50.9536 38.89L51.056 39.4685L15.5387 73.8969C15.3582 73.8795 15.1783 73.8596 14.9991 73.8409C14.4072 73.7767 13.7946 73.7124 13.1805 73.6963C7.30631 73.5259 3.69542 76.116 1.80964 81.8503C0.395138 86.151 1.94355 89.9895 3.23178 92.5031C4.10457 94.3089 5.43379 95.8517 7.0859 96.9748C8.73803 98.0985 10.6546 98.7639 12.6428 98.9034C12.843 98.9143 13.0427 98.9195 13.2422 98.9201C15.156 98.8912 17.0327 98.382 18.7028 97.4396C20.3728 96.4965 21.7836 95.1497 22.8082 93.5201C25.8693 88.8825 26.3451 84.5362 24.2534 80.2489L58.7173 47.1571L68.318 44.1679L96.7993 63.863C97.0238 68.0989 98.0703 71.2753 100.173 74.1232C101.397 75.8724 103.174 77.1517 105.213 77.7521C107.252 78.3519 109.432 78.2368 111.398 77.4262C117.081 75.2495 120.237 70.4261 120.088 64.1697L154.653 20.8963C159.556 21.8606 163.362 21.4107 165.969 19.5528C167.985 18.1186 169.212 15.895 169.615 12.9436C169.846 11.4554 169.772 9.93496 169.397 8.4767C169.022 7.01851 168.354 5.65349 167.434 4.46625C166.462 3.27794 165.259 2.30335 163.898 1.60274C162.538 0.902131 161.049 0.490445 159.524 0.393145Z" fill="#ffffff"></path> </g> <defs> <clipPath id="clip0"> <rect width="169" height="99" fill="white" transform="translate(0.777344)"></rect> </clipPath> </defs> </g></svg>
              
            }
          />
          <ServiceCard
            title="Personalized Interventions"
            details="Create tailored support strategies for each student based on their unique needs and performance data. Personalized interventions ensure that every student receives the attention and resources they need to succeed."
            icon={
              <svg width="36"
              height="36" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 480a224 224 0 1 0-224-224 224 224 0 0 0 224 224z m0-384a160 160 0 1 1-160 160 160 160 0 0 1 160-160zM989.44 947.84a32 32 0 0 0-6.72-10.56 37.12 37.12 0 0 0-10.56-6.72 32 32 0 0 0-34.88 6.72 36.8 36.8 0 0 0-6.72 10.56 26.56 26.56 0 0 0-2.56 12.16 32 32 0 0 0 2.24 12.16 39.04 39.04 0 0 0 7.04 10.56 32 32 0 0 0 34.88 6.72 37.12 37.12 0 0 0 10.56-6.72 32 32 0 0 0 6.72-34.88zM832 928h-160a32 32 0 0 0 0 64h160a32 32 0 0 0 0-64z" fill="#ffffff"></path><path d="M941.44 862.08a32 32 0 0 0 18.56-41.6 480 480 0 0 0-926.4 137.28 32 32 0 0 0 32 34.24H544a32 32 0 0 0 0-64H101.44a416 416 0 0 1 800-84.48 32 32 0 0 0 40 18.56z" fill="#ffffff"></path></g></svg>
              
            }
          />
          <ServiceCard
            title="Real-Time Insights"
            details="Access up-to-date information on student progress and engagement with real-time data processing. Proactive decision-making is made possible through immediate insights into student performance."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                  fill="white"
                />
                <path
                  d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                  fill="white"
                />
              </svg>
            }
          />
          <ServiceCard
            title="Advanced Reporting Tools"
            details="Generate detailed reports and visualizations to track progress and identify trends. Our reporting tools provide actionable insights for educators and administrators to make data-driven decisions."
            icon={
              <svg width="36"
              height="36" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 463 463"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m359.5,16h-96c-0.089,0-0.176,0.01-0.264,0.013-7.203-9.708-18.746-16.013-31.736-16.013s-24.533,6.305-31.736,16.013c-0.088-0.003-0.175-0.013-0.264-0.013h-96c-26.191,0-47.5,21.309-47.5,47.5v352c0,26.191 21.309,47.5 47.5,47.5h256c26.191,0 47.5-21.309 47.5-47.5v-352c0-26.191-21.309-47.5-47.5-47.5zm-128-1c13.51,0 24.5,10.991 24.5,24.5v8c0,4.142 3.357,7.5 7.5,7.5h32c4.687,0 8.5,3.813 8.5,8.5s-3.813,8.5-8.5,8.5h-128c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5h32c4.143,0 7.5-3.358 7.5-7.5v-8c0-13.509 10.99-24.5 24.5-24.5zm-64,72h128c12.958,0 23.5-10.542 23.5-23.5 0-0.168-0.009-0.333-0.013-0.5h40.513c0.275,0 0.5,0.224 0.5,0.5v352c0,0.276-0.225,0.5-0.5,0.5h-256c-0.275,0-0.5-0.224-0.5-0.5v-352c0-0.276 0.225-0.5 0.5-0.5h40.513c-0.004,0.167-0.013,0.332-0.013,0.5 0,12.958 10.542,23.5 23.5,23.5zm224.5,328.5c0,17.92-14.579,32.5-32.5,32.5h-256c-17.921,0-32.5-14.58-32.5-32.5v-352c0-17.92 14.579-32.5 32.5-32.5h89.431c-0.604,2.74-0.931,5.582-0.931,8.5v0.5h-24.5c-7.023,0-13.332,3.101-17.641,8h-46.359c-8.547,0-15.5,6.953-15.5,15.5v352c0,8.547 6.953,15.5 15.5,15.5h256c8.547,0 15.5-6.953 15.5-15.5v-352c0-8.547-6.953-15.5-15.5-15.5h-46.359c-4.31-4.899-10.619-8-17.641-8h-24.5v-0.5c0-2.918-0.328-5.76-0.931-8.5h89.431c17.921,0 32.5,14.58 32.5,32.5v352z"></path> <path d="m231.5,63c4.143,0 7.5-3.358 7.5-7.5v-16c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142 3.357,7.5 7.5,7.5z"></path> <path d="m223.5,175h96c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-96c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5z"></path> <path d="m138.196,162.197c-2.929,2.929-2.929,7.678 0,10.606l16,16c1.465,1.464 3.385,2.197 5.304,2.197s3.839-0.732 5.304-2.197l32-32c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607,0l-26.697,26.697-10.696-10.697c-2.93-2.929-7.678-2.929-10.608,0z"></path> <path d="m223.5,255h96c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-96c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5z"></path> <path d="m186.196,226.197l-26.696,26.697-10.696-10.697c-2.93-2.929-7.678-2.929-10.607,0s-2.929,7.678 0,10.606l16,16c1.465,1.464 3.385,2.197 5.304,2.197s3.839-0.732 5.304-2.197l32-32c2.929-2.929 2.929-7.678 0-10.606-2.931-2.929-7.679-2.929-10.609,0z"></path> <path d="m223.5,335h96c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-96c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5z"></path> <path d="m186.196,306.197l-26.696,26.697-10.696-10.697c-2.93-2.929-7.678-2.929-10.607,0s-2.929,7.678 0,10.606l16,16c1.465,1.464 3.385,2.197 5.304,2.197s3.839-0.732 5.304-2.197l32-32c2.929-2.929 2.929-7.678 0-10.606-2.931-2.929-7.679-2.929-10.609,0z"></path> </g> </g> </g></svg>
              
            }
          />
          <ServiceCard
            title="Role-Based Access"
            details="Ensure appropriate access for all users with role-based dashboards. Super users, faculty, and students each have tailored interfaces, providing the right tools and information to each user group."
            icon={
              <svg width="36"
              height="36" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.52 491.52" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M460.8,317.44v-30.72c0-39.525-32.155-71.68-71.68-71.68c-11.003,0-21.394,2.565-30.72,7.014 c-6.325-3.441-12.906-6.425-19.865-8.509l-17.205-5.085l-75.57,75.57l-75.57-75.57l-17.25,5.095 c-9.338,2.802-17.984,6.845-25.896,11.819l-39.289-39.289L71.08,191.01C28.565,203.765,0,242.155,0,286.54v82.1h78.51v30.72 h208.21v61.44h204.8V317.44H460.8z M389.12,235.52c28.23,0,51.2,22.97,51.2,51.2v30.72h-102.4v-30.72 C337.92,258.49,360.89,235.52,389.12,235.52z M78.51,348.16H20.48v-61.62c0-35.27,22.7-65.78,56.44-75.9l4.965-1.465 l28.841,28.841C90.569,257.199,78.51,284.123,78.51,313.6V348.16z M286.72,378.88H98.99V313.6 c0-37.365,24.045-69.69,59.795-80.415l5.535-1.635l81.44,81.44l81.44-81.44l5.495,1.625c2.166,0.649,4.234,1.545,6.335,2.363 c-13.302,13.021-21.59,31.142-21.59,51.182v30.72h-30.72V378.88z M471.04,440.32H307.2v-102.4h163.84V440.32z"></path> </g> </g> <g> <g> <rect x="348.16" y="358.4" width="102.4" height="20.48"></rect> </g> </g> <g> <g> <rect x="368.64" y="399.36" width="61.44" height="20.48"></rect> </g> </g> <g> <g> <path d="M245.76,44.85c-12.551,0-24.37,3.186-34.699,8.786C197.906,39.173,179.259,30.72,159.4,30.72 c-38.545,0-69.9,31.36-69.9,69.905s31.355,69.905,69.9,69.905c10.352,0,20.452-2.284,29.694-6.629 c13.404,16.479,33.818,27.039,56.666,27.039c40.275,0,73.045-32.77,73.045-73.045C318.805,77.62,286.035,44.85,245.76,44.85z M178.411,146.153c-5.992,2.502-12.414,3.897-19.011,3.897c-27.25,0-49.42-22.17-49.42-49.425S132.15,51.2,159.4,51.2 c13.342,0,25.886,5.434,35.091,14.745c-13.427,13.253-21.776,31.639-21.776,51.95 C172.715,127.909,174.747,137.455,178.411,146.153z M245.76,170.46c-28.985,0-52.565-23.58-52.565-52.565 s23.58-52.565,52.565-52.565s52.565,23.58,52.565,52.565S274.745,170.46,245.76,170.46z"></path> </g> </g> </g></svg>
              
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};

