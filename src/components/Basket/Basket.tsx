// import { Input } from "@headlessui/react";
import { Text, Button, Input } from "../../ui";

type Product = {
    id: number;
    name: string;
    price: string;
    delivery: string;
    count: number;
    select: boolean;
}

// type Delivery = {
//     id: string;
//     name: string;
//     price: string;
// }

type ProductProps = {
    products: Product[];
    changeCountProduct: (id: number, operator: string) => void;
    disabledProduct: (id: number) => void;
    getCountProduct: (event: unknown) => void;
    address: () => void;
}

export const Basket = ({ products, changeCountProduct, disabledProduct, getCountProduct, address }: ProductProps) => {
    return(
        <div className="p-4 my-2  bg-gray-200 w-full">
        <ul>
            {products.map(({id, name, price, delivery, count, select}: Product) => (
                <li key={id} className={`flex p-2 space-x-4 bg-red-200 my-5 justify-around ${!select ? "grayscale cursor-default" : ""} `}>
                    <Input className="blur-none" label="" defaultChecked={select} onChange={() =>disabledProduct(id)} type="checkbox"></Input>
                    <Text className="text-black">
                        {id}
                    </Text>
                    <Text className="text-black">
                        Name: {name}
                    </Text>
                    <Text className="text-black">
                        price: {price} {' '}
                    </Text>
                    <Text className="text-black">
                        delivery: {delivery}
                    </Text>
                    <div className="flex space-x-0">
                        <Button disabled={count <= 1 || !select ? true : false} onClick={() => changeCountProduct(id, "-")} label="-" />
                        <Input data-myindex={id} onChange={getCountProduct} disabled={!select} className="text-black w-10 text-center" label=""  value={count} />
                        <Button disabled={!select} onClick={() => changeCountProduct(id, "+")} label="+" />
                    </div>
                </li>
            ))}
            <div className="flex justify-between ">
                <div className="">
                    <Button label="Dodaj produkt" onClick={address} />
                </div>
                <div >
                    <Text className="text-black">Wartość koszyka: 50 PLN</Text>
                    <Button label="Przejdź do formularza zakupu" onClick={address} />
                </div>
                
            </div>
        </ul>
        </div>
    )
}