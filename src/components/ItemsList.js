import ItemDetail from "./ItemDetail.js";

const ItemsList = ({items}) => {
    return (
        <div className="items">
            {items.map((item) => (
                <ItemDetail key={item._id} item={item}></ItemDetail>
            ))}
        </div>
    );
}

export default ItemsList;