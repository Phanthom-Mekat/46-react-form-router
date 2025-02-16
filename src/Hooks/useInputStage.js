import { useState } from "react"

const useInputStage = (defaultValue=null) =>{
    const [value, setValue] = useState(defaultValue)
    // const handleChange = val =>{
    //     setValue(val.target.value)
    // }
    const onChange = val =>{
        setValue(val.target.value)
    }
    return {
        value,
        onChange
    }
}
export default useInputStage    
