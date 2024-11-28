import React,{useState} from 'react'
import ButtonVariant2 from '../../../components/ButtonVariant2'
import ButtonVariant3 from '../../../components/ButtonVariant3'
import ButtonVariant4 from '../../../components/ButtonVariant4'
import { Icons } from '../../../icons/icons'
type Props = {
  activeButton:string|null;
  setSubBarNavHeaderActive:React.Dispatch<React.SetStateAction<boolean>>
}

const ViewBarNavTop:React.FC<Props> = ({activeButton,setSubBarNavHeaderActive}) => {
    const [buttonActive,setButtonActive]=useState<string|null>(null);
    const expandButtonHandler=()=>{
      setButtonActive((prev)=>prev==="expandButton"?"":"expandButton")
      setSubBarNavHeaderActive((prev)=>!prev);
    }
  return (
    <div className='flex items-center h-12 text-sm capitalize'>
        <div className='flex items-center pl-2 h-12 gap-2'>
          {activeButton==="overview"?
            <ButtonVariant2 onClick={()=>setButtonActive((prev)=>prev==="showHide"?'':"showHide")}>
              <Icons.SliderHorizontal className='text-[14px] relative top-[4px]'/>
              {buttonActive==="showHide"?"show":"hide"}
              
            </ButtonVariant2>
          : 
          <>
            <ButtonVariant2>
              <Icons.SearchIcon className='text-[16px] relative top-[2px]'/>
              search  
            </ButtonVariant2>
            <ButtonVariant2 onClick={()=>setButtonActive((prev)=>prev==="filterHide"?'':"filterHide")}>
              <Icons.SliderHorizontal className='text-[14px] relative top-[4px]'/>
              {buttonActive==="filterHide"?"hide":"filter"}
            </ButtonVariant2>
            <ButtonVariant2 isActive={buttonActive==="customize"} onClick={()=>setButtonActive((prev)=>prev==='customize'?'':'customize')}>
              <Icons.SettingsIcon  className='text-[16px] relative top-[3px]'/>
              customize
            </ButtonVariant2>
          </>
          }
          <div className='w-[1px] h-4 mx-[2px] bg-grayv3'></div>
          {activeButton==="overview"?
          <ButtonVariant3>
            Add card
          </ButtonVariant3>
          :
          <div className='flex'>
            <ButtonVariant3 doubleButtonLeft={true}>
                Add Task
            </ButtonVariant3>
            <ButtonVariant3 doubleButtonRight={true} onClick={()=>setButtonActive((prev)=>prev==="AddTaskDoubleRightButton"?"":"AddTaskDoubleRightButton")}>
            <Icons.ArrowDownIcon className={`text-[12px] relative top-[1px] transition-transform ease-in-out
                ${buttonActive==="AddTaskDoubleRightButton"?"rotate-180":''}`}/>
            </ButtonVariant3>
          </div>
        }
          <ButtonVariant4  onClick={()=>setButtonActive((prev)=>prev==="expandButton"?"":"expandButton")}>
            <Icons.ArrowDownIcon className={`text-[16px] relative top-[1px] transition-transform ease-in-out
               ${buttonActive==="expandButton"?"rotate-180":''} `}/>
          </ButtonVariant4>
        </div>
      </div>
  )
}

export default ViewBarNavTop