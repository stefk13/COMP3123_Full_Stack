const cssColor = {
    color: 'magenta',
    backgroundColor: 'black'
}
function Name(props) {
    return (
        <>
            <h2 style={{color: 'red'}}>Hello, {props.fnm} {props.lnm}</h2>
            <h3 style={cssColor}>Test CSS Object</h3>
        </>
    )
}

export default Name