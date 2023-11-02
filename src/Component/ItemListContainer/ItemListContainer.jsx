const ItemListContainer = ({despedida}) => {
    const EstilosSaludo = {
        fontSize: "60px", 
        color: "tomato",
        padding: "10px",
        textAlign: "center"
    }
    return (
        <div style = {EstilosSaludo}>
            {despedida}
            
        </div>
    )
}

export default ItemListContainer;