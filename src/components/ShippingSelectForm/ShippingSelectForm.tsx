import { Button, Text } from "../../ui"

type Props = {
    id: string;
    name: string;
    price: string;
    poland: boolean;
    usa: boolean;
}

export const ShippingSelectForm = ({delivery}: Props) => {
    return(
        <div>
        <Text>Sposób wysyłki</Text>
        <select>
            <option>Wysyłka krajowa</option>
            <option>Wysyłka zagraniczna</option>

        </select>
        <Button label="Przejdź do wyboru płatności"></Button>

        </div>
    )
}