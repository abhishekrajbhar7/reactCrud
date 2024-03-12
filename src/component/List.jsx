import React, { useState } from 'react'
import Eddit from '../image/eddit.png'
import Delete from '../image/delete.png';
export default function List() {
  const [inputItem, setinputItem] = useState("");
  const [addItems, setaddItems] = useState([]);
  const [toggleItems, settoggleItems] = useState(true);
  const [edditeItems, setedditeItems] = useState(null);
  // add items
  const addItem = () => {
    if (!inputItem) {
        alert("fill the input");
    } else if(inputItem && !toggleItems){
        setaddItems(
          addItems.map((items) =>{
            if (items.id === edditeItems){
              return{ ...items, name:inputItem}
            }
            return items;
          })
        )
          settoggleItems(true)
          setinputItem("")
          setedditeItems(null)
    }
    else {

      const allItems = { id: new Date().getTime().toString(), name:inputItem } 
      setaddItems([...addItems, allItems]);
      setinputItem("");
    }
  }
  // delete items
  const deleteItems = (index) =>{
      const updateItems = addItems.filter((items) => {
        return index !== items.id;
      });
      setaddItems(updateItems)
  }
  // eddit items
  const edditItems = (id) =>{
    const newEdditItems = addItems.find((items) =>{
      return items.id === id;
    })
    settoggleItems(false)
    setinputItem(newEdditItems.name)
    setedditeItems(id)
  }
  return (
    <>
      <div className='row justify-content-md-center'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className='formdiv'>
            <input className='input' type="text" placeholder='Enter Topic 📝'
              value={inputItem}
              onChange={(e) => setinputItem(e.target.value)}
            />
            {
              toggleItems ? <button className='enterbutton' type='submit' onClick={addItem} >Enter</button> :
              <button className='enterbutton' type='submit' onClick={addItem} >Update</button>
            }
            
          </div>
        </div>
        <div className="col-3"></div>
      </div>

      {addItems.map((items) => {
        return (
          <div className='row topicmainDiv justify-content-md-center' key={items.id}>
            <div className="col-5 topicDiv">
              <h1 className='para heading'>{items.name}</h1>
              <div class="row justify-content-between btnDiv">
                <div class="col-6 edditDiv">
                  <button className="edditbtn"><img className='eddit_delete_img' src={Eddit} alt="Eddit" onClick={() => edditItems(items.id)} /></button>
                </div>
                <div class="col-6 deleteDiv">
                  <button className="deletebtn"><img className='eddit_delete_img' src={Delete} alt="Delete" onClick={() => deleteItems(items.id)} /></button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
