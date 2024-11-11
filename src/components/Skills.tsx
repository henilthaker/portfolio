import React from 'react'
import { FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiJavascript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { DiJava, DiMysql } from "react-icons/di";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="flex flex-wrap gap-16 justify-center md:grid-cols-4 gap-24">
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaHtml5 className="max-md:w-12 max-md:h-12 w-20 h-20 text-orange-600" />
              <p className="">HTML</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaCss3Alt className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-700" />
              <p className="">CSS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiJavascript className="max-md:w-12 max-md:h-12 w-20 h-20 text-yellow-600 bg-black" />
              <p className="">Javascript</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaReact className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-400" />
              <p className="">ReactJS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaNodeJs className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600" />
              <p className="">NodeJS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <SiExpress className="max-md:w-12 max-md:h-12 w-20 h-20 text-black" />
              <p className="">ExpressJS</p>
            </div>
            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiNextdotjs className="max-md:w-12 max-md:h-12 w-20 h-20 text-black  " />
              <p className="">NextJS</p>
            </div> */}

            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiMongodb className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-500" />
              <p className="">MongoDB</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiFirebase className="max-md:w-12 max-md:h-12 w-20 h-20 text-yellow-500" />
              <p className="">Firebase</p>
            </div>

            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <SiSupabase className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600  " />
              <p className="">Supabase</p>
            </div> */}
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <TbBrandCpp className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600" />
              <p className="">C/C++</p>
            </div>
            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <FaFigma className="max-md:w-12 max-md:h-12 w-20 h-20 text-black  " />
              <p className="">Figma</p>
            </div> */}
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <DiMysql className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600" />
              <p className="">MySQL</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <DiJava className="max-md:w-12 max-md:h-12 w-20 h-20 text-red-600" />
              <p className="">Java</p>
            </div>
          </div>
        </div>
  )
}

export default Skills