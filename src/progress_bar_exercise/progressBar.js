import React from "react";
const ProgressBar = (props) => {
    const {bgcolor, completed } = props;
    
    const containerStyl = {
        height: '6px',
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }
    const fillerStyl = {
        height: '100%',
        width: `${completed}%`,
        //backgroundColor: bgcolor, `
        backgroundImage: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }

      const labelStyl = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '5px',
      }

      return (
          <div style = {containerStyl}>
              <div style = {fillerStyl}>
                  <span style = {labelStyl}>
                      {`${completed}%`}
                  </span>
              </div>
          </div>
      );
}

export default ProgressBar;