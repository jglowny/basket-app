import { Text, Button } from "../../ui";
type ProductProps = {
    id: string;
    name: string;
    price: string;
    delivery: string;
}

export const Cart = ({id, name, price, delivery}: ProductProps) => {
    
    return(
        <li key={id} className="flex space-x-4">
                    <Text className="text-black">
                        {id}
                    </Text>
                    <Text className="text-black">
                        Name: {name},
                    </Text>
                    <Text className="text-black">
                        price: {price} {' '}
                    </Text>
                    <Text className="text-black">
                        delivery: {delivery}
                    </Text>
                    <Button label="usuń" />
                </li>
    )
}