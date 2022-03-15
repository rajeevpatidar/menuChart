import React, { useState } from "react";
import "./Menu.css";
const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {
                items.map((menuitem) => {
                    const { id, title, img, price, desc } = menuitem
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div>
                                <header>
                                    <h4>{title}</h4>
                                    <h4>{price}</h4>
                                </header>
                                <hr />
                            <p className="menu-desc">{desc}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
export default Menu