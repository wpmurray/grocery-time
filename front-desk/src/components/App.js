// import React, { useState, useRef, useEffect } from "react";
// import ItemList from "./ItemList";
// import { v4 as uuidv4 } from 'uuid';

// const LOCAL_STORAGE_KEY = 'listApp.items'

// function App() {
//   const [items, setList] = useState([])
//   const itemNameRef = useRef()

//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if (storedItems) setList( prevItems => [...prevItems, ...storedItems])
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
//   }, [items])

//   function toggleItem(id){
//     const newItems = [...items]
//     const item = newItems.find(item => item.id === id)
//     item.complete = !item.complete
//     setList(newItems)
//   }
  
//   function handleAddItem(e) {
//     const name = itemNameRef.current.value
//     if (name === '') return
//     setList(prevItems => {
//       return [...prevItems, { id: uuidv4(), name: name, complete: false}]
//     })
//     itemNameRef.current.value = null
//   }

//   function handleClearItem(e) {
//     const newItems = items.filter(item => !item.complete)
//     setList(newItems)
//   }

//   return(
//     <>
//       <ItemList items={items} toggleItem={toggleItem}/>
//       <input ref={itemNameRef} type="text" />
//       <button onClick={handleAddItem}>Add Item</button>
//       <button onClick={handleClearItem}>Clear Completed</button>
//       <div>{items.filter(item => !item.complete).length} Left</div>
//     </>
//   )
// }

// export default App;