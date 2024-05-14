import { ChangeEventHandler, useRef, useState } from 'react';
import { Input, Button } from '../../ui'

type Props = {
    select_shipping: () => void;
    skip_shipping: () => void;
} 

type AddressFormData = {
    street: string;
    city: string;
    country: string;
}

export const AddressForm = ({ select_shipping, skip_shipping }: Props) => {

    const nextStep = (e) =>{
        e.preventDefault()
        select_shipping()
    }

    const prevStep = (e) =>{
        e.preventDefault()
        skip_shipping()
    }

    const [formData, setFormData] = useState<AddressFormData>({
        street: '',
        city: '',
        country: '',
    })

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        setFormData({
            ...formData,
            [id]: value,
        })
        console.log(formData)
    }

    return(
        <form className='p-4 my-2  bg-gray-200 w-full'>
            <Input type="text"  label="street"  />
            <Input type="text" label="city"  />
            <Input type="text"  label="country" />
            {/* <button
                className="button"
                onClick={(e) => nextStep(e)}
            >
                select_shipping
            </button>
            <button
                className="button"
                onClick={(e) => prevStep(e)}
            >
                skip_shipping
            </button> */}
        </form>
    )
}