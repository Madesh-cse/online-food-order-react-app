import { forwardRef} from "react"
import classes from './Modal.module.css'
import { useState } from "react"
import { useRef } from "react"
import {useImperativeHandle} from 'react'
import SortBy from "./SortByComponent"
import Cusines from "./CusinesComponent"
import MoreFilter from "./MoreFilter"
import RangeFilter from "./RangeFilter"


const Modal = forwardRef(function ModalApp({title},ref){

    const dialogRef = useRef(null)

    const [ModalContent,setModalContent] = useState(1)

    const[Value,setValue] = useState('Popularity')

    const[Count,setCount] = useState(false)

    function HandleClick(event){

        setValue(event.target.value)
    }

    function HandleCount(){
        setCount((PrevState)=>PrevState+1)
    }

    useImperativeHandle(ref,()=>({

        openModal:()=>{
            if(dialogRef.current){
                dialogRef.current.showModal()
            }
        },
        closeModal:()=>{
            if(dialogRef.current){
                dialogRef.current.close()
            }
        }
    }))

    return(
        <>
          <dialog className={classes.FilterModal} ref={dialogRef} >
            <div className={classes.ModalTitle}>
             <h2>{title}</h2>
             <button onClick={()=>dialogRef.current.close()} className={classes.close}>X</button>
            </div>
            <hr className={classes.modalline}/>
            <div className={classes.ModalContentTab}>
                <ul>
                    <li onClick={()=>setModalContent(1)} >Sort by
                        <p className={classes.topic}>{Value}</p>
                    </li>
                    <li onClick={()=>setModalContent(2)}>Cusines
                     {Count?<p className={classes.topic}>{Count} is Selected</p>: <p className={classes.topic}>{Count} is Selected</p>} 
                    </li>
                    <li onClick={()=>setModalContent(3)}>Rating</li>
                    <li onClick={()=>setModalContent(4)}>Cost for Two</li>
                    <li onClick={()=>setModalContent(5)}>More Filter</li>
                </ul>
                <div className={classes.ModalContent}>
                    <div className={classes.ModalContent1}>
                        {ModalContent === 1 ? <div className={classes.ModalValue}>
                            <SortBy HandleClick = {HandleClick} Value = {Value}/>
                        </div>:''}
                    </div>
                    <div className={classes.ModalContent1}>
                        {ModalContent === 2 ? <div>
                           <Cusines HandleCount={HandleCount} count = {Count}/>
                        </div>:''}
                    </div>
                    <div className={classes.ModalContent1}>
                        {ModalContent === 3 ? <div>
                           <RangeFilter/>
                        </div>:''}
                    </div>
                    <div className={classes.ModalContent1}>
                        {ModalContent === 4 ? <div>
                            <h2>content5</h2>
                        </div>:''}
                    </div>
                    <div className={classes.ModalContent1}>
                        {ModalContent === 5 ? <div>
                           <MoreFilter/>
                        </div>:''}
                    </div>
                </div>
            </div>
            <hr className={classes.modalline}/>
            <div className={classes.ModalFinalBtn}>
                <button className={classes.ModalClearBtn}>Clear all</button>
                <button className={classes.ModalSaveBtn} onClick={()=>dialogRef.current.close()} >Apply</button>
            </div>
        </dialog>
        </>
    )

})

export default Modal;