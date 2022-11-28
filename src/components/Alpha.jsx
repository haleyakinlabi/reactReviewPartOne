import React, {useState} from "react";

const Alpha = (props) => {
    const [userInput, setUserInput] = useState("")
    const handleChange = (event) => {
    setUserInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setProductName(userInput)
    }

    return (
        <div>
            <h1>Alpha</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange =
                {handleChange}/>
                <button>Change Product</button>
            </form>
        </div>
    )
}

export default Alpha