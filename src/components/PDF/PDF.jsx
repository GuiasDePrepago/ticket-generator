import React, { useState } from 'react';
import "./PDF.css";

function PDF({
            logo, 
            empresa, 
            rfcEmpresa, 
            calleEmpresa, 
            coloniaEmpresa, 
            cpEmpresa,
            ciudadEmpresa,
            celEmpresa,
            emailEmpresa,
            ticket,
            date,
            nombreCliente,
            emailCliente,
            domicilioCliente,
            coloniaCliente,
            ciudadCliente,
            rfcCliente,
            telCliente,
            celCliente,
            productos,
            vendedor,
        }) {  
    const [subtotal, setSubtotal] = useState() 

    const handleTotal = () => {
        setSubtotal(productos.reduce( (acc, item) => {
            return acc = acc + item.importe; 
        }, 0));
    }

    console.log(subtotal)
    return (
        <>  
            <button onClick={handleTotal}>Calcular Total</button>
            <div className='pdf__container'>
                <div className='pdf__background' style={{
                backgroundImage: `url(${logo})`
                }}></div>
                <div className='pdf__header'>
                    <img src={logo} />
                    <div className='pdf__headerTitles'>
                        <h2>{empresa}</h2>
                        <h2>{rfcEmpresa}</h2>
                        <h3>{calleEmpresa}</h3>
                        <h3>Col: {coloniaEmpresa} C.P.: {cpEmpresa}</h3>
                        <h3>{ciudadEmpresa}</h3>
                        <h3> Cel: {celEmpresa} eMail: {emailEmpresa}</h3>
                    </div>
    
                    <div className='pdf__headerTicket'>
                        <p className='bg--grey'>Ticket</p>
                        <p>{ticket}</p>
                        <p className='bg--grey'>Fecha</p>
                        <p>{date}</p>
                        <p className='bg--grey'>Moneda: MXN</p>
                    </div>
                </div>
    
                <div className='pdf__receptor'>
                    <div className='pdf__receptorTitle'>
                        <h2>RECEPTOR</h2>
                    </div>
                    <div className='pdf__receptorInfo'>
                        <p>Nombre: {nombreCliente}</p>
                        <p>eMail: {emailCliente}</p>
                        <p>Domicilio: {domicilioCliente}</p>
                        <p>Colonia: {coloniaCliente}</p>
                        <p>Ciudad: {ciudadCliente}</p>
                    </div>
                    <div className='pdf__receptorInfo'>
                        <p>R.F.C.: {rfcCliente}</p>
                        <p>Tel: {telCliente}</p>
                        <p>Cel: {celCliente}</p>
                    </div>
                </div>
                
                <div className='pdf__table'> 
                    <table >
                        <thead>
                            <tr>
                                <th>IMG/CLAVE</th>
                                <th>CANT</th>
                                <th>UNIDAD</th>
                                <th>DESCRIPCION</th>
                                <th>P. UNIT.</th>
                                <th>DESCUENTO</th>
                                <th>IMPORTE</th>
                            </tr>
                        </thead>

                        {productos && productos.map(producto => {
                            return (
                            <tbody key={producto.clave}>
                                <tr>
                                    <td>{producto.clave}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.unidad}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>$ {producto.precio}.00</td>
                                    <td>$ {producto.descuento}.00</td>
                                    <td>$ {producto.importe}.00</td>
                                </tr>
                            </tbody>
                            )
                        })}
                    </table>
                </div>
    
                <div className='pdf__footerContainer'>
                    <div className='pdf__info'>
                        <div className='pdf__vendedor'>
                            <h2>Vendedor</h2>
                            <p>{vendedor}</p>
                        </div>
                        <div className='pdf__total'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td>${subtotal}.00</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
    
                    <div className='pdf__footer'>
                        <div>
                            <p>Todos los precios incluyen I.V.A.</p>
                            <p>Pagina 1 de 1</p>
                        </div>
    
                        <p>{date} 4:27:37 PM</p>
                    </div>
                </div>
    
            </div>
        </>
    );
}

export default PDF;