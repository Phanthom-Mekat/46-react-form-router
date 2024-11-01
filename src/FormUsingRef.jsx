import { useRef } from "react";

const FormUsingRef = () => {
    const nameRef = useRef()
    const emailRef =useRef()
    const handleForm = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input ref={nameRef} className="border-2" type="text" name="name" /> <br />
                <input ref={emailRef} className="border-2" type="email" name="email" id="" /><br />
                <input className="border-2" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormUsingRef;