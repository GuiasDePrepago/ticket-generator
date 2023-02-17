import React, { useState } from 'react'
import Form from './components/Form/Form';
import PDF from './components/PDF/PDF';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './App.css'

function App() {
  const [logo, setLogo] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [rfcEmpresa, setRfcEmpresa] = useState("")
  const [calleEmpresa, setCalleEmpresa] = useState("")
  const [coloniaEmpresa, setColoniaEmpresa] = useState("")
  const [cpEmpresa, setCpEmpresa] = useState("")
  const [ciudadEmpresa, setCiudadEmpresa] = useState("")
  const [celEmpresa, setCelEmpresa] = useState("")
  const [emailEmpresa, setEmailEmpresa] = useState("")
  const [ticket, setTicket] = useState("")
  const [date, setDate] = useState("")
  const [nombreCliente, setNombreCliente] = useState("")
  const [emailCliente, setEmailCliente] = useState("")
  const [domicilioCliente, setDomicilioCliente] = useState("")
  const [coloniaCliente, setColoniaCliente] = useState("")
  const [ciudadCliente, setCiudadCliente] = useState("")
  const [rfcCliente, setRfcCliente] = useState("")
  const [telCliente, setTelCliente] = useState("")
  const [celCliente, setCelCliente] = useState("")
  const [clave, setClave] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [unidad, setUnidad] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [descuento, setDescuento] = useState("")
  const [productos, setProductos] = useState([])
  const [vendedor, setVendedor] = useState("")
  const [subtotal, setSubtotal] = useState(0)

  

  const logoHandler = (e) => {
    let file = e.target.files[0];
    setLogo(URL.createObjectURL(file))
  }

  const handleProduct = (e) => {
    e.preventDefault()
    let arr = [{
      clave: clave,
      cantidad: cantidad,
      unidad: unidad,
      descripcion: descripcion,
      precio: precio,
      descuento: descuento,
      importe: (precio - descuento) * cantidad
    }]
    
    setProductos(current => [...current, ...arr]);
  }

  return (
    <div className="App">
      <div className='app__form'>
        <form action="">
          <p>logo</p>
          <TextField className='app__input' style={{ margin: '1%'}} type="file" id="outlined-basic" variant="outlined" onChange={logoHandler} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="empresa" variant="outlined" onChange={(e) => setEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="RFC Empresa" variant="outlined" onChange={(e) => setRfcEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Calle Empresa" variant="outlined" onChange={(e) => setCalleEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Colonia Empresa" variant="outlined" onChange={(e) => setColoniaEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Codigo Postal Empresa" variant="outlined" onChange={(e) => setCpEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Ciudad Empresa" variant="outlined" onChange={(e) => setCiudadEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Cel Empresa" variant="outlined" onChange={(e) => setCelEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Email Empresa" variant="outlined" onChange={(e) => setEmailEmpresa(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Numero de Ticket" variant="outlined" onChange={(e) => setTicket(e.target.value)} />
          <TextField className='app__input'
            style={{ margin: '1%'}}
            id="date"
            label="Fecha"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Nombre Cliente" variant="outlined" onChange={(e) => setNombreCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Email Cliente" variant="outlined" onChange={(e) => setEmailCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Domicilio Cliente" variant="outlined" onChange={(e) => setDomicilioCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Colonia Cliente" variant="outlined" onChange={(e) => setColoniaCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Ciudad Cliente" variant="outlined" onChange={(e) => setCiudadCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="RFC Cliente" variant="outlined" onChange={(e) => setRfcCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Telefono Cliente" variant="outlined" onChange={(e) => setTelCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Celular Cliente" variant="outlined" onChange={(e) => setCelCliente(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Vendedor" variant="outlined" onChange={(e) => setVendedor(e.target.value)} />
        </form>
        <form className='app__productForm' onSubmit={handleProduct} >
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="IMG/CLAVE" variant="outlined" onChange={(e) => setClave(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Cantidad" variant="outlined" onChange={(e) => setCantidad(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Unidad" variant="outlined" onChange={(e) => setUnidad(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Descripcion" variant="outlined" onChange={(e) => setDescripcion(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Precio Unitario" variant="outlined" onChange={(e) => setPrecio(e.target.value)} />
          <TextField className='app__input' style={{ margin: '1%'}} id="outlined-basic" label="Descuento" variant="outlined" onChange={(e) => setDescuento(e.target.value)} />
          <Button type="submit" className='app__productButton' variant="contained">
            Subir Producto
          </Button>
        </form>
      </div>

      <PDF 
        logo={logo} 
        empresa={empresa} 
        rfcEmpresa={rfcEmpresa} 
        calleEmpresa={calleEmpresa} 
        coloniaEmpresa={coloniaEmpresa} 
        cpEmpresa={cpEmpresa} 
        ciudadEmpresa={ciudadEmpresa} 
        celEmpresa={celEmpresa}
        emailEmpresa={emailEmpresa}
        ticket={ticket} 
        date={date} 
        nombreCliente={nombreCliente}
        emailCliente={emailCliente}
        domicilioCliente={domicilioCliente}
        coloniaCliente={coloniaCliente}
        ciudadCliente={ciudadCliente}
        rfcCliente={rfcCliente}
        telCliente={telCliente}
        celCliente={celCliente}
        productos={productos}
        vendedor={vendedor}
      />
    </div>
  )
}

export default App
