'use client'
import React, { useState } from 'react'
import { Icons } from '../../../icons/icons'
import ButtonVariant1 from '../../../components/ButtonVariant1'
import ButtonVariant2 from '../../../components/ButtonVariant2'
import ViewBarNavTop from './ViewBarNavTop'
const SubBarNavTop = () => {
  const [activeButton,setActiveButton]=useState<string|null>(null);
  return (
    <nav className=' bg-nav border-grayv5 border-t border-b dark:bg-grayv4 font-sans font-medium flex px-4'>
      <div className='w-full flex items-center h-12 text-sm capitalize '>
        <div className='flex mr-2 h-12 gap-2'>
        <ButtonVariant1 onClick={()=>setActiveButton("overview")} isActive={activeButton==="overview"}>
          <Icons.DashboardIcon className='text-[14px] relative top-[4px]'/>
          overview
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setActiveButton("board")} isActive={activeButton==="board"}>
          <Icons.BoardIcon className='text-[14px] relative top-[4px]'/>
          board
        </ButtonVariant1 >
        <ButtonVariant1 onClick={()=>setActiveButton("list")} isActive={activeButton==="list"}>
          <Icons.ListUlicon className='text-[14px] relative top-[4px]'/>
          list
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setActiveButton("calendar")} isActive={activeButton==="calendar"}>
          <Icons.CalendarIcon className='text-[14px] relative top-[4px] 'style={{strokeWidth:"2.4px"}}/>
          calendar
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setActiveButton("gantt")} isActive={activeButton==="gantt"}>
          <Icons.GantIcon className='text-[14px] relative top-[4px]'/>
          gantt
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setActiveButton("table")} isActive={activeButton==="table"}>
          <Icons.TeableIcon className='text-[14px] relative top-[4px]'/>
          table
        </ButtonVariant1>
        </div>
        <ButtonVariant2 isLineBefore={true}>
          <Icons.PlusIco className='text-[14px] relative top-[4px]'/>
          view
        </ButtonVariant2>
        
      </div>
      <ViewBarNavTop activeButton={activeButton}/>
    </nav>
  )
}
export default SubBarNavTop;