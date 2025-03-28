"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#d19932] opacity-[1]"
        >
          <SparklesIcon className="text-[#d19932] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Development Engineer
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='font-bold text-[60px] bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text'
        >
            Skills
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className=' text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText
