import React, {useState} from "react";

export default function Format() {
    const [count, setCount] = useState(4)
    return (
    <div class="screen">
    
        <div class="top-bar">
            <button id="sidebutton">
            <a href="https://www.flaticon.com/free-icons/hamburger" 
            title="hamburger icons"></a>Menu</button>

            <div class="title-container">
                <div class="top-bar-title">Lotion</div>
                <div class="top-bar-title" ><div class="top-bar-sub">Like Notion, but worse</div></div>
            </div>
            <div></div>
        </div>

        <div class="area-container">
            <div class="left-container">

                <div class="notes-container">
                    <div>Notes</div>
                    <div>+</div>
                </div>

                <div class="notes-storing-container">
                    hello
                </div>
            </div>

            <div class="middle">
                <div>Select a note, or create a new one</div>
            </div>
        </div>
    
    </div>       
    )
}