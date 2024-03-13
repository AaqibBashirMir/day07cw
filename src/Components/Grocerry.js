import React, {useState} from 'react';
import ItemList from './List';

const InputContainer = () => {

    const [itemsToBuys, setItemsToBuys] = useState([]);

    const [textInputValue, setTextInputValue] = useState("");

    const onClickHandler = ()=>{


        setItemsToBuys((prevData)=>{
            return [...prevData, {
                name : textInputValue,
                purchased : false
            }]
        })

        setTextInputValue("");
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    backgroundColor : "blue",
                    padding: '20px'
                }}
            >
                <h2>Grocery Bud</h2>
                <div>
                    <input 
                        value={textInputValue} 
                        onChange={(e)=>{
                            setTextInputValue(e.target.value)
                        }}
                        type='text'
                    />
                    <button onClick={onClickHandler}>Add Item</button>
                </div>

                <div>
                    {itemsToBuys.map((elem, index)=><ItemList itemsToBuys={itemsToBuys} setItemsToBuys={setItemsToBuys} index={index} itemName={elem.name} isPurchased={elem.purchased} key={index}/>)}
                </div>
            </div>
        </div>
    )

}

export default InputContainer