
import React from 'react';

const NRIProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NRI Quota Admission Process</h2>
          <p className="text-gray-600 text-lg">
            A step-by-step guide to securing your medical seat through the NRI quota
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-medical-300"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-medical-700">NEET Examination</h3>
                    <p className="mt-2 text-gray-600">
                      Appear for NEET-UG exam which is mandatory for most medical institutions. 
                      Some deemed universities accept international qualifications.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">1</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-2">
                  <div className="md:hidden font-semibold text-medical-500">May-June</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">May-June</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-2">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div className="md:hidden font-semibold text-medical-500">June-July</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">June-July</div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">2</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-medical-700">College Research</h3>
                  <p className="mt-2 text-gray-600">
                    Research and shortlist medical colleges that offer NRI quota seats. 
                    Check their eligibility criteria, fee structure, and admission process.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-medical-700">Document Preparation</h3>
                    <p className="mt-2 text-gray-600">
                      Collect and prepare all required documents including NRI status proof, 
                      academic certificates, NEET scorecard, and financial documents.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">3</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-2">
                  <div className="md:hidden font-semibold text-medical-500">July-August</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">July-August</div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-2">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div className="md:hidden font-semibold text-medical-500">August-September</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">August-September</div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">4</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-medical-700">Application Submission</h3>
                  <p className="mt-2 text-gray-600">
                    Apply to multiple institutions to increase your chances. 
                    Submit applications along with required documents and application fees.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-medical-700">Selection & Counseling</h3>
                    <p className="mt-2 text-gray-600">
                      Selected candidates will be invited for document verification and counseling. 
                      Some institutions may conduct interviews for final selection.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">5</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-2">
                  <div className="md:hidden font-semibold text-medical-500">September-October</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">September-October</div>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-2">
                  <div className="md:hidden w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                  <div className="md:hidden font-semibold text-medical-500">October-November</div>
                  <div className="hidden md:block">
                    <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">October-November</div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="hidden md:flex w-10 h-10 bg-medical-500 rounded-full items-center justify-center text-white font-bold z-10">6</div>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-medical-700">Fee Payment & Admission</h3>
                  <p className="mt-2 text-gray-600">
                    Pay the requisite fees and complete the admission formalities. 
                    Ensure all documentation is properly submitted for a smooth process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Expert Admission Guidance Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Document Preparation</h4>
                <p className="text-gray-600 text-sm">We assist in preparing and organizing all required documents for NRI quota admission</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M3 10H21M3 7H21M3 18H21M3 15H21M5 7V3H19V7M9 21V18M15 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">College Selection</h4>
                <p className="text-gray-600 text-sm">Expert guidance on selecting the best medical colleges based on your profile</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Application Processing</h4>
                <p className="text-gray-600 text-sm">Complete assistance with filling and submitting applications to multiple institutions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M16 21H18M16 21H8M8 21H6M21 16H3M21 8H16M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Interview Preparation</h4>
                <p className="text-gray-600 text-sm">Professional coaching for college interviews to increase your chances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRIProcess;
