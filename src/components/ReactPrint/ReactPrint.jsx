import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';

import PDF from '../PDF/PDF';

const ReactPrint = ({children}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ticket',
    onAfterPrint: () => alert("ticket impreso")
  })

  return (
    <>
        <div ref={componentRef}>
            {children}
        </div>
        <Button 
        type="submit" 
        color='success' 
        onClick={handlePrint} 
        className='printButton' 
        variant="contained"
        style={{
            margin: "5%"
        }}
        >
            Imprimir ticket
        </Button>
    </>
  );
};

export default ReactPrint