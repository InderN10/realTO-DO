export const Button = (props) => {
    const { style, handleChange ,tittle , id} = props

    return (
        <button style={style}
            onClick={handleChange} id={id}>{tittle}</button>
    )
}