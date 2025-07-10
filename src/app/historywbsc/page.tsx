'use client'
import React from 'react'
import Image from 'next/image'

interface TimelineItem {
  year: string
  orangeText: string
  boldText: string
  description: string
  side: 'left' | 'right'
  imageSrc?: string
}

const timelineData: TimelineItem[] = [
    {
        year: "1950",
        orangeText: "FOUNDED IN 1950",
        boldText: "HERBERT BAER & HIS WIFE, HELMA,",
        description: "began the business in the living room apartment in the Uptown neighborhood of Chicago.",
        side: "right",
        imageSrc: "/herb.png"
    },
    {
        year: "1953",
        orangeText: "WORKING TOGETHER",
        boldText: "HERBERT'S BROTHER HANS JOINS THE BUSINESS",
        description: "began the business in the living room apartment in the Uptown neighborhood of Chicago.",
        side: "left",
        imageSrc: "/1953.png"
    },
    {
        year: "1958",
        orangeText: "OFFICE & WAREHOUSE",
        boldText: "COMBINED INTO LARGER FACILITY",
        description: "SKOKIE, IL BECOMES THE NEW HOME FOR THE COMPANY IN 1958.",
        side: "right",
        imageSrc: "/1958.png"
    },
    {
        year: "1988",
        orangeText: "THE BIG MOVE",
        boldText: "CURRENT 123,000 SQ FT STATE-OF-THE-ART",
        description: "corporate office & distribution facility in Vernon Hills, Il",
        side: "left",
        imageSrc: "/1988.png"
    },
    {
        year: "1993",
        orangeText: "ACQUISITIONS",
        boldText: "CLOSURE SALES OF MONTGOMERY & COHOES OF NEW YORK",
        description: "Also added a satellite branch in Conneticut in September, and entered into the surfacing materials product business.",
        side: "right",
        imageSrc: "/1993.png"
    },
    {
        year: "1996",
        orangeText: "ACQUIRED IN JANUARY",
        boldText: "CUSTOM DISTRIBUTORS, INC (CDI) OF TROY, MICHIGAN.",
        description: "",
        side: "left",
        imageSrc: "/1993.png"
    },
    {
        year: "1997",
        orangeText: "JANUARY 1997",
        boldText: "WÜRTH GROUP OF GERMANY, ACQUIRED BAER SUPPLY COMPANY",
        description: "began the business in the living room apartment in the Uptown neighborhood of Chicago.",
        side: "right",
        imageSrc: ""
    },
    {
        year: "1997",
        orangeText: "SEPTEMBER 1997",
        boldText: "ACQUIRED A SURFACING, BOARD & PANEL PRODUCTS",
        description: "distributor in Colomvus, Ohio, & added satellite facilities in the Cleveland & Cincinnati areas.",
        side: "left",
        imageSrc: "/1993.png"
    },
    {
        year: "1998",
        orangeText: "ACQUIRED IN JANUARY",
        boldText: "ACQUIRED ANCHOR SALES/ PYRAMID PRODUCTS",
        description: "With facilities in the St. Louis, Kansas City & Springfield, Missouri markets, and Upstate Plywood of Syracuse, New York.",
        side: "right",
        imageSrc: "/1993.png"
    },
    {
        year: "1999",
        orangeText: "ADDED NEW BRANCH IN MARCH",
        boldText: "LOCATION IN METROPOLITAN BUFFALO",
        description: "which became the upstate New York region's hardware inventory hub.",
        side: "left",
        imageSrc: "/1993.png"
    },
    {
        year: "2007",
        orangeText: "ACQUIRED IN JUNE",
        boldText: "CHANDLER'S PLYWOOD PRODUCTS/CABINET SUPPLIER, INC.",
        description: "which expands Wurth Baer Supply Compan's footprint throughout Kentucky, Southern Ohio, and West Virginia.",
        side: "right",
        imageSrc: "/2007.png"
    },
    {
        year: "2010",
        orangeText: "ACQUIRED IN MARCH",
        boldText: "ROLAND AND ROLAND INC.",
        description: "expanding into Eastern Pennsylvania including the Philidelphia metro area and into the State of New Jersey.",
        side: "left",
        imageSrc: "/1993.png"
    },
    {
        year: "2018",
        orangeText: "ACQUISITION",
        boldText: "AKINS MACHINERY",
        description: "expanding our large machinery business area.",
        side: "right",
        imageSrc: "/2018.png"
    },
    {
        year: "2019",
        orangeText: "JULY 2019 GANNOMAT GRANTED",
        boldText: "WÜRTH BAER SUPPLY COMPANY/ AKINS MACHINERY",
        description: "the exclusive Importer and distributor rights for specific Gannomat machinery in the United States market.",
        side: "left",
        imageSrc: "/2019.png"
    },
    {
        year: "2021",
        orangeText: "ACQUISITION",
        boldText: "HERMANCE MACHINE COMPANY",
        description: "with a facility in Williamsport, Pennsylvania expanding our Machinery division.",
        side: "right",
        imageSrc: "/2021.png"
    },
    {
        year: "2022",
        orangeText: "ACQUIRED IN JULY",
        boldText: "WÜRTH BAER SUPPLY COMPANY/ J&G MACHINERY",
        description: "The addition of J&G Machinery will expand Wurth woodworking machinery sales and service footprint to include the Southeast United States.",
        side: "left",
        imageSrc: "/2022.png"
    },
    {
        year: "2023",
        orangeText: "ACQUISITION",
        boldText: "HOLDAHL COMPANY",
        description: "The Holdahl Company was founded in 1949 by Olaf Holdahl and has been supply products to the woodworking community for more than half a century.",
        side: "right",
        imageSrc: "/2023.png"
    },
    {
        year: "2024",
        orangeText: "ACQUIRED IN FEBRUARY",
        boldText: "RUSSELL PLYWOOD",
        description: "The addition of Russel Plywood geographically expands Wurth's core woodworking business in Pennsylvania, Delaware, and New Jersey.",
        side: "left",
        imageSrc: "/2024.png"
    }
]

export default function HistoryTimeline() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:block min-h-screen bg-white py-12 px-8">
        <div className="max-w-screen-lg mx-auto">
          
        {/* Header */}
        <div className="-mb-60">
          <div className="text-left">
            <h1 className="text-3xl font-light leading-tight border-b border-neutral-300 w-[210px]">
              HISTORY<br />
              OF <span className="text-red-600 font-normal">WÜRTH<br />
              BAER</span> SUPPLY<br />
              COMPANY
            </h1>
            <p className="text-2xl text-black mt-2">1950 TO PRESENT</p>
          </div>
        </div>

        <div className="relative">
          {/* Orange Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-8 bg-orange-400 z-0"
            style={{
              top: 0,
              height: (() => {
                const idx = timelineData.findIndex(item => Number(item.year) >= 1997);
                if (idx === -1) return '100%';
                const percent = (idx / timelineData.length) * 100 - 1; 
                return `calc(${percent > 0 ? percent : 0}% )`;
              })()
            }}
          ></div>
          {/* Red line */}
          {(() => {
            const idx = timelineData.findIndex(item => Number(item.year) >= 1997);
            if (idx === -1) return null;
            return (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-8 bg-red-600 z-10 mt-0"
                style={{
                  top: `calc(${(idx / timelineData.length) * 100 - 1}% )`,
                  height: `calc(100% - ${(idx / timelineData.length) * 100 - 2}% )`
                }}
              ></div>
            );
          })()}

        {/* Timeline */}
        <div className="-space-y-14">
          {timelineData.map((item, index) => (
            <div key={index} className="relative">

              <div className={`flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                
                {/* Left Side of Timeline */}
                {item.side === 'left' && (
                  <div className="w-1/2 pr-4 mt-8">
                    {/* Year */}
                    <div className="text-4xl font-light text-gray-400 mb-1 mr-8 text-right">
                      {item.year}
                    </div>
                    
                    {/* Gray Line with sphere */}
                    <div className="relative">
                      <div className="h-1 bg-gray-300 mb-4 -mt-0.25"></div>
                      <div
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full ${item.year === "1999" ? "-mt-46.25" : item.year === "2019" || item.year === "2022" ? "-mt-20" : "-mt-18"}`}
                      >
                      </div>
                    
                    <div className="flex items-start space-x-4 text-left">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gray-200 overflow-hidden">
                          <Image
                            src={item.imageSrc || '/placeholder.jpg'}
                            alt={`${item.year} milestone`}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <div className={`flex-1${item.year === "1996" ? " mt-5" : ""}`}>
                        <div className="mr-10">
                          <p
                            className={`${
                              Number(item.year) >= 1997
                                ? "text-red-600"
                                : "text-orange-500"
                            } ${item.year === "1988" ? "text-3xl font-extrabold" : "text-lg font-semibold"}`}
                          >
                            {item.orangeText}
                          </p>
                          <p className="text-black font-bold text-md">{item.boldText}</p>
                          <p className="text-black text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {item.year === "1999" && (
                      <>
                        <div className="flex justify-center mt-4 mb-4">
                          <Image
                            src="/arrow.png"
                            alt="Arrow"
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex items-start space-x-4 text-left mt-2">
                          <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-gray-200 overflow-hidden">
                              <Image
                                src="/1993.png"
                                alt="1999 milestone repeat"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mr-10">
                              <p className="text-red-600 text-lg font-semibold">ACQUIRED IN SEPTEMBER</p>
                              <p className="text-black font-bold text-md">K.B. LAMINATE SUPPLY</p>
                              <p className="text-black text-sm leading-relaxed">which facilities in Providence, Rhode Island, Worcester, Massachusetts, and Portland, Maine.</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  </div>
                )}

                {/* Right Side of Timeline */}
                {item.side === 'right' && (
                  <div className="w-1/2 pl-4 mt-8">

                    {/* Year */}
                    <div
                      className={`ml-8 text-left ${
                        item.year === "1997" ? "text-4xl text-red-600 font-extrabold" : "text-4xl font-light text-gray-400"
                      }`}
                    >
                      {item.year}
                    </div>
                    
                    {/* Gray Line with sphere*/}
                    <div className="relative">
                      <div className="h-1 bg-gray-300 mt-0.75 mb-4"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-start space-x-6 text-left">
                      {item.year === "1950" && (
                        <div className="flex flex-col items-start space-y- ml-6">
                          <div className="w-32 h-20 overflow-hidden -mt-2 -mb-1">
                            <Image
                              src="/1950two.png"
                              alt="Baer Supply Company Logo"
                              width={96}
                              height={64}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-orange-500 font-semibold text-lg">{item.orangeText}</p>
                            <p className="text-black font-bold text-md">{item.boldText}</p>
                            <p className="text-black text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      )}

                      {item.year === "1958" && (
                        <div className="flex flex-col items-start w-full ml-10">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <p className="text-orange-500 font-semibold text-lg">OFFICE & WAREHOUSE</p>
                                    <p className="text-black font-bold text-md">COMBINED INTO LARGER FACILITY</p>
                                    <p className="text-black text-sm leading-relaxed mb-2">
                                        Skokie, IL becomes the new home for the company in 1958.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-28 bg-gray-200 overflow-hidden">
                                        <Image
                                            src="/1958.png"
                                            alt="1958"
                                            width={128}
                                            height={96}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                </div>
                            <div className="flex items-start mt-2 w-full">
                                <div className="flex-shrink-0 mr-3 w-32 h-30">
                                    <Image
                                        src="/1958two.png"
                                        alt="1958two"
                                        width={120}
                                        height={120}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="flex-1 mt-4">
                                    <span className="font-bold text-black">Four</span>
                                    <span className="text-black text-sm"> more subsequent facility moves took place over the next 24 years,</span>
                                    <span className="text-orange-500 font-semibold text-md block"> UNTIL THE BIG MOVE...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    
                      
                      {/* Base Content with a few modifications depending on the year */}
                      {item.year !== "1950" && item.year !== "1958" && (
                        <div className="flex-1 ml-10">
                          <div className="">
                            {item.year === "1997" && (
                              <div className="flex justify-start mb-2">
                                <Image
                                  src="/1997.png"
                                  alt="1997 milestone above"
                                  width={280}
                                  height={150}
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <p
                              className={`font-semibold text-lg ${
                                Number(item.year) >= 1997 ? "text-red-600" : "text-orange-500"
                              }`}
                            >
                              {item.orangeText}
                            </p>
                            <p className="text-black font-bold text-md">{item.boldText}</p>
                            <p className="text-black text-[0.95rem] leading-relaxed">{item.description}</p>
                            
                            {item.year === "1997" && (
                              <div className="flex justify-start mt-2">
                                <Image
                                  src="/1997two.png"
                                  alt="1997 milestone below"
                                  width={340}
                                  height={170}
                                  className="object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Image on the right */}
                      {item.year !== "1997" && item.year !== "1958" && (
                        <div className="flex-shrink-0">
                          <div className={` ${(item.year === "1958" || item.year === "1993" || item.year === "1998" || item.year === "2007" || item.year === "2018" || item.year === "2021" || item.year === "2023") ? "w-32 h-32" : "w-34 h-42"}`}>
                            <Image
                              src={item.imageSrc || '/placeholder.jpg'}
                              alt={`${item.year} milestone`}
                              width={100}
                              height={item.year === "1950" ? 168 : 120}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              {/* Arrow from Timeline */}
              <div className="absolute top-16.75 left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-5 h-5 transform rotate-45 ${Number(item.year) >= 1997 ? "bg-red-600" : "bg-orange-400"
                  } ${item.side === "left" ? "-translate-x-2" : "translate-x-2"}`}
                >
                </div>
              </div>
            </div>
            </div>))}
        </div>
      </div>
    </div>
    </div>

      {/* Mobile Design */}
      <div className="block sm:hidden min-h-screen bg-white py-8 px-4">
        <div className="max-w-full mx-auto">

          {/* Mobile Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-light leading-tight">
              HISTORY OF <span className="text-red-600 font-normal">WÜRTH BAER</span> SUPPLY COMPANY
            </h1>
            <p className="text-lg text-black mt-2">1950 TO PRESENT</p>
          </div>

          <div className="relative">
            {/* Central Vertical Time Line */}
            <div
              className="absolute left-6 w-2 bg-orange-400 z-0"
              style={{
                top: 0,
                height: (() => {
                  const idx = timelineData.findIndex(item => Number(item.year) >= 1997);
                  if (idx === -1) return '100%';
                  const percent = (idx / timelineData.length) * 100 - 1;
                  return `calc(${percent > 0 ? percent : 0}%)`;
                })()
              }}
            ></div>
            
            {(() => {
              const idx = timelineData.findIndex(item => Number(item.year) >= 1997);
              if (idx === -1) return null;
              const topPercent = (idx / timelineData.length) * 100 - 2;
              const height = `calc(100% - ${topPercent - 0.5}%)`;
              return (
                <div
                  className="absolute left-6 w-2 bg-red-600 z-10"
                  style={{
                    top: `calc(${topPercent}% )`,
                    height: height
                  }}
                ></div>
              );
            })()}

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-4 top-8">
                    <div className={`w-3 h-3 transform rotate-45 ml-0.5 ${
                      Number(item.year) >= 1997 ? 'bg-red-600' : 'bg-orange-400'
                    } translate-x-2`}></div>
                  </div>

                  <div className="ml-16 bg-white p-4">
                    {/* Timeline Year */}
                    <div className={`text-2xl font-bold mb-2 ${
                      Number(item.year) >= 1997 ? 'text-red-600' : 'text-orange-500'
                    }`}>
                      {item.year}
                    </div>

                    {item.year === "1950" && (
                      <div className="mb-4">
                        <div className="w-24 h-16 mx-auto mb-3">
                          <Image
                            src="/1950two.png"
                            alt="Baer Supply Company Logo"
                            width={96}
                            height={64}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {item.year === "1958" && (
                      <div className="mb-4">
                        <div className="w-20 h-20 mx-auto mb-3">
                          <Image
                            src="/1958two.png"
                            alt="Facility moves icon"
                            width={80}
                            height={80}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center mb-2">
                          <span className="font-bold text-black">Four</span>
                          <span className="text-black text-sm"> more subsequent facility moves took place over the next 24 years, </span>
                          <span className="text-orange-500 font-semibold text-sm block">UNTIL THE BIG MOVE...</span>
                        </div>
                      </div>
                    )}

                    {item.year === "1997" && index === timelineData.findIndex(i => i.year === "1997") && (
                      <div className="mb-4">
                        <div className="w-full max-w-xs mx-auto mb-3">
                          <Image
                            src="/1997.png"
                            alt="1997 milestone"
                            width={280}
                            height={150}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="w-full max-w-xs mx-auto">
                          <Image
                            src="/1997two.png"
                            alt="1997 milestone"
                            width={340}
                            height={170}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      {/* Top Text Red or Orange depending on Year */}
                      <p className={`font-semibold text-sm ${
                        Number(item.year) >= 1997 ? 'text-red-600' : 'text-orange-500'
                      }`}>
                        {item.orangeText}
                      </p>

                      {/* Bold Text */}
                      <p className="text-black font-bold text-sm leading-tight">
                        {item.boldText}
                      </p>

                      {/* Description */}
                      {item.description && (
                        <p className="text-black text-xs leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Image */}
                      {item.imageSrc && item.year !== "1950" && item.year !== "1958" && item.year !== "1997" && (
                        <div className="mt-3">
                          <div className="w-20 h-20 mx-auto bg-gray-200 rounded overflow-hidden">
                            <Image
                              src={item.imageSrc}
                              alt={`${item.year} milestone`}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {item.year === "1999" && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="text-center mb-3">
                          <Image
                            src="/arrow.png"
                            alt="Arrow"
                            width={24}
                            height={24}
                            className="mx-auto object-contain"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-red-600 font-semibold text-sm">ACQUIRED IN SEPTEMBER</p>
                          <p className="text-black font-bold text-sm">K.B. LAMINATE SUPPLY</p>
                          <p className="text-black text-xs leading-relaxed">
                            which facilities in Providence, Rhode Island, Worcester, Massachusetts, and Portland, Maine.
                          </p>
                          <div className="mt-3">
                            <div className="w-20 h-20 mx-auto bg-gray-200 rounded overflow-hidden">
                              <Image
                                src="/1993.png"
                                alt="1999 additional milestone"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}