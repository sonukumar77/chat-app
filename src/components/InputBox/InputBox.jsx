import "./InputBox.css"
const InputBox = ({ input, setInput, handleOnSubmit }) => {

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}
export default InputBox;