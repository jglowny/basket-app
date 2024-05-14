import './App.css'
import { AddressForm } from './components/AddressForm/AddressForm';
import { ShippingSelectForm } from './components/ShippingSelectForm';
import { Stepper } from './components/Stepper/Stepper';
import { Navigation } from './components/Navigation/Navigation';
import { Basket } from './components/Basket';
import { useState } from 'react';
import { useMachine } from '@xstate/react';

import { checkoutMachine } from './components/checkoutMachine/CheckoutMachine';

export const steps = [

  {
    label: 'Address',
    step: 1,
  },
  {
    label: 'Shipping',
    step: 2,
  },
  {
    label: 'Payment',
    step: 3,
  },
  {
    label: 'Summary',
    step: 4,
  },
]



const products = [
  {id: 1, select: true, name:"Produkt 1", price: "10 PLN", delivery: "true", count: 1, remove: "false"},
  {id: 2, select: true, name:"Produkt 2", price: "10 PLN", delivery: "false", count: 2, remove: "false"},
  {id: 3, select: true, name:"Produkt 3", price: "0 PLN", delivery: "true", count: 3, remove: "false"},
  {id: 4, select: true, name:"Produkt 4", price: "10 PLN", delivery: "true", count: 4, remove: "false"},
  {id: 5, select: false, name:"Produkt 5", price: "10 PLN", delivery: "true", count: 5, remove: "false"},
]


const deliveryMethod = [
  {id: "1", name: "Kurier Pocztex", price: "10 PLN", poland: true, usa: true},
  {id: "2", name: "Kurier UPS", price: "10 10 PLN",  poland: true, usa: false},
]

const payMethod = [
  {id: "1",  name: "PayPall", poland: "true", usa: "true" },
  {id: "3",  name: "Gpay", poland: "true", usa: "true"},
  {id: "2",  name: "Blik",  poland: "true", usa: "false"},
]

function App() {
  const [state, send] = useMachine(checkoutMachine);

  const [activeStep, setActiveStep] = useState(0)
  const [data, setData ] = useState(products);

  const disabledProduct = (index: number) => {
    let newArr = [...data];
    newArr[index -1].select = !newArr[index -1].select
    setData(newArr);
  }
  
  const changeCountProduct = (index: number, action: string) => {
      let newArr = [...data];
      newArr[index -1].count = action === "+"
        ? newArr[index -1].count + 1
        : newArr[index -1].count - 1
      setData(newArr);
  }

  const getCountProduct = (event: any) => {
    let newArr = [...data];
    const value = +event.target.value;
    const index = event.target.dataset.myindex;
    newArr[index -1].count = value;
    setData(newArr);
  }

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const prevStep = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  return (
    <>

<div className=" bg-black">

<p>{state.value}</p>
<Navigation />

{state.matches('cart') && (
  <div className="step">
    <Basket 
      products={data} 
      changeCountProduct={changeCountProduct} 
      disabledProduct={disabledProduct} 
      getCountProduct={getCountProduct}  
      address={() => send({ type: 'address' })}
    />
  </div>
)}

{state.matches('addressed') && (
  <div className="step">
    <AddressForm 
      // select_shipping={() => send({ type: 'select_shipping'})} 
      // skip_shipping={() => send({ type: 'skip_shipping'})} 
    />

    <button
      className="button"
      onClick={() => send({ type: 'select_shipping' })}
    >
      select_shipping
    </button>

    <button
      className="button"
      onClick={() => send({ type: 'skip_shipping' })}
    >
      skip_shipping
    </button>
  </div>
)}

{state.matches('shipping_selected') && (
  <div className="step">
    <h2>shipping_selected</h2>
    <ShippingSelectForm delivery={deliveryMethod} nextStep={nextStep} />

    <button
      className="button"
      onClick={() => send({ type: 'select_payment' })}
    >
      select_payment
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'skip_payment' })}
    >
      skip_payment
    </button>
  </div>
)}

{state.matches('shipping_skipped') && (
  <div className="step">
    <h2>shipping_skipped</h2>
    <h2>Wybór wysyłki</h2>

    <button
      className="button"
      onClick={() => send({ type: 'select_payment' })}
    >
      select_payment
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'skip_payment' })}
    >
      skip_payment
    </button>
  </div>
)}

{state.matches('payment_selected') && (
  <div className="step">
    <h2>shipping_skipped</h2>
    <h2>Wybór płatnośći</h2>

    <button
      className="button"
      onClick={() => send({ type: 'complete' })}
    >
      select_payment
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'select_payment' })}
    >
      skip_payment
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'address' })}
    >
      address
    </button>
  </div>
)}

{state.matches('payment_skipped') && (
  <div className="step">
    <h2>payment_skipped</h2>
    <h2>Wybór płatnośći</h2>

    <button
      className="button"
      onClick={() => send({ type: 'complete' })}
    >
      complete
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'select_shipping' })}
    >
      select_shipping
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'skip_payment' })}
    >
      select_shipping
    </button>
    <button
      className="button"
      onClick={() => send({ type: 'address' })}
    >
      address
    </button>
  </div>
)}

{state.matches('completed') && (
  <div className="step">
    <h2>Podsumowanie</h2>
  </div>
)}

</div>
    </>


  )
}

export default App
