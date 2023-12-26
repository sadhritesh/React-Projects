function Button(props){
    let buttonStyle = {
        width : "100px",
        height : "40px",
        backgroundColor : props.bColor,
        borderRadius : "10px"
    }
    return (
        <button style={ buttonStyle } onClick={()=>props.sColor(props.bColor)}>
            {props.bColor}
        </button>
    );
}

export default Button;