import { useState } from "react";
import Button from "./Button";


function BackGround(){
    const [color,setColor] = useState("olive")

    const divStyle = {
        backgroundColor : color,
        width : "100vw",
        height : "100vh",
        margin : "0px",
        padding : "0px",
        boxSizing : "border-box",
        display : "flex",
        alignItems: "flex-end"
    }

    const divStyle1 = {
        width : '80vw',
        height : '100px',
        backgroundColor : 'white',
        borderRadius : '20px',
        margin : "0px 0px 50px 160px",
        display : "flex",
        alignItems : "center",
        justifyContent : "space-around"
    }


    return (
        <div style={divStyle}>
            <div style={ divStyle1 }>
                <Button bColor = "Olive" sColor = { setColor } />
                <Button bColor = "Pink" sColor = { setColor } />
                <Button bColor = "Purple" sColor = { setColor } />
                <Button bColor = "Gray" sColor = { setColor } />
                <Button bColor = "Lavender" sColor = { setColor } />
                <Button bColor = "Red" sColor = { setColor } />
            </div>
        </div>
    );
}

export default BackGround;