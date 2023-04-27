
export const ListItem = ({ productName, isBought }) => {

    if (isBought) {
        return (<li>{productName} ✔</li>)
    } else {
        return <li>{productName}</li>
    }

}