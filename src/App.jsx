import React from "react"
import Categories from "./Categories"
import Menu from "./Menu"
import "./App.css"
import data from "./data"
import { useState } from "react"

const allCategories = ['all',...new Set(data.map((item)=>item.category))]
console.log(allCategories)
const App =()=>{
    const [menuitem,setmenuitem] =useState(data);
    const [categories,setCategories] = useState(allCategories);

    const filterItem = (category)=>{
        if(category==='all'){
            setmenuitem(data);
            return
        }
        const newItem = data.filter((item)=>item.category===category)
        setmenuitem(newItem);
    }
    return(
        <main>
            <section className="menu-section">
                <div className="title">
                    <h1>OUR MENU</h1>
                    <div className="underline"></div>
                </div>
                <Categories categories = {categories} filterItem={filterItem} />
                <Menu items={menuitem}/>     
            </section>
            
        </main>
    )
}
export default App