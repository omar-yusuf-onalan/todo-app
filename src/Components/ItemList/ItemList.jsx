import { useState, useEffect } from "react";
import "./ItemList.style.css";

function ItemList() {
    const [items, setItems] = useState([]);

    const takeInput = (event) => {
        setItems((prevItems) => [...prevItems, event.target.value]);
        event.target.value = "";
    };

    useEffect(() => {
        const keyDownHandler = (event) => {
            preventDefault();
            if (event.key === "Enter") {
                event.preventDefault();

                takeInput(event);
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    return (
        <>
            <input type="text" />

            <div className="item-list"></div>

            <div className="item-info"></div>
        </>
    );
}

export default ItemList;
