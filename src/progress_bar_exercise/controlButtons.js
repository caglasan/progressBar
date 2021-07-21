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
      
      const startBtnText = startClicked? 'Loading...' : 'START REQUEST'
      const finishBtnText = 'FINISH REQUEST'

      //I would like to have a generic function here to change the borders but this is quick and dirty
      function changeBorder(e) {
          if (e.target.value === 'start' ) 
            e.target.style.border = '2px solid rgba(0, 255, 0, 1)';
          else if (e.target.value === 'finish' ) 
            e.target.style.border = '2px solid rgba(255, 0, 0, 1)';
        
      }

      function changeBorderBack(e) {
        if (e.target.value === 'start' ) 
          e.target.style.border = '1px solid rgba(0, 255, 0, 1)';
        else if (e.target.value === 'finish' ) 
          e.target.style.border = '1px solid rgba(255, 0, 0, 1)';
      
    }

    function changeBorderClick(e) {
        if (e.target.value === 'start' ) {
          e.target.style.border = '3px solid rgba(0, 255, 0, 1)';
          props.onClick(0)
        }
        else if (e.target.value === 'finish' ) {
          e.target.style.border = '3px solid rgba(255, 0, 0, 1)';
          props.onClick(1)
        }
          
    }

      return (
        <div style = {styl}>
              <div style = {styl}>
                  <button 
                    value = 'start'
                    style = {startBtnStyl}
                    onClick={changeBorderClick} 
                    onMouseOver={changeBorder}
                    onMouseLeave={changeBorderBack}
                     >
                      {startBtnText}
                  </button>
              </div>

            <div style = {styl}>
              <button 
                value = 'finish'
                style = {finishBtnStyl}
                onClick={changeBorderClick} 
                onMouseOver={changeBorder}
                onMouseLeave={changeBorderBack}
                >
                  {finishBtnText}
              </button>
            </div>
          </div>
      );
}

export default ControlButtons;