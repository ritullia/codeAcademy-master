import { recipies } from "./duomenys/recipies"
import { Receptas } from "./Receptas"

export const Receptai = () => {

    return (
        <>
        <h1>Receptai</h1>
        {recipies.map(recipie => <Receptas receptas={recipie} />)}
        </>
    )
}