import React, { useState } from 'react'

function Form(props) {
    const { onSave } = props
    const [text, setText] = useState('')

    return (
        <form onSubmit={e => e.preventDefault()}>
            {/* <div>{text}</div> */}
            <input
                className="task-field"
                placeholder="Informe a tarefa"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="save-button"
                onClick={() => {
                    onSave(text)
                    setText('')
                }}>Salvar</button>
        </form>
    );
}

export default Form;