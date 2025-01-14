import React, { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, Checkbox, CheckPicker } from 'rsuite';
import { AiFillCloseCircle, AiFillCheckCircle }  from 'react-icons/ai';
import './modals.css';

export default function Deadline_Modal(props) {
    const [isRepeating, setIsRepeating] = useState(false);
    const repeating = false;
    const data = [
        'Everyday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ].map(item => ({ label: item, value: item }));
  return (
    <Modal 
        className="DeadlineModal"
        isOpen={props.showDLM} 
        onRequestClose={()=> props.setShowDLM(false)} 
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, .5)'
            },
            content: {
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                background: '#ECE9E9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '15px',
                outline: 'none'
            }
        }}
    >
        <div className="Header">
            <div className="Title">
                <label>Deadline</label>
                <AiFillCloseCircle style={{color: "#ECE9E9"}} size="30" onClick={()=> props.setShowDLM(false)} /> 
            </div>
        </div>
        <div className="Body">
            Repeating task? <Checkbox onChange={() => setIsRepeating(isRepeating ? false : true)}>Yes</Checkbox>
            <div style={{display: isRepeating ? 'block' : 'none'}}>       
                <DatePicker placeholder="Select Date" className="AddDeadline" style={{ width: 200 }} />
            </div>
            <div style={{display: isRepeating ? 'none' : 'block'}}>
                <CheckPicker data={data} style={{ width: 200 }} /> 
            </div>
        </div>
        <div className="Footer">
            <AiFillCheckCircle style={{color: "#55535B"}} size="30" onClick={()=> props.setShowDLM(false)} />
        </div>
    </Modal>
  )
}