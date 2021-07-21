/* eslint-disable react/react-in-jsx-scope */
import React from "react";
const ControlButtons = (props) => {
    const { completed, startClicked, finishClicked } = props;    

    const styl = {
        height: '100%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 'inherit',
        borderColor: 'green',
        borderWidth: '1px',        
        textAlign: 'center',
        transition: 'width 1s ease-in-out',
      }

      const startBtnStyl = {
        padding: 50,
        backgroundColor: 'white',
        color: 'green',
        border: '1px solid rgba(0, 255, 0, 1)',
        borderRadius: 30,
        fontWeight: 'bold'
      }

      const finishBtnStyl = {
        margin: 10,
        padding: 50,
        backgroundColor: 'white',
        color: 'red',
        border: '1px solid rgba(255, 0, 0, 1)',
        borderRadius: 30,
        fontWeight: 'bold'
      }

      return (
        <div style = {styl}>
              <div style = {styl}>
                  <button 
                    style = {startBtnStyl}
                    onClick={()=> props.onClick(0)} 
                     >
                      START REQUEST
                  </button>
              </div>

            <div style = {styl}>
              <button 
                style = {finishBtnStyl}
                onClick={()=> props.onClick(1)} 
                >
                  FINISH REQUEST
              </button>
            </div>
          </div>
      );
}

export default ControlButtons;