import { data } from "../../data/data"

const getProductsByName = ( name = '' ) => {

    name = name.toLocaleLowerCase();
    return data.filter( el => el.nombre.toLocaleLowerCase().includes( name ) );

}

export default getProductsByName;
