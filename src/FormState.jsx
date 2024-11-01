import { useState } from "react";
const FormState = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleForm = (e) => {
        e.preventDefault();
        console.log(name,email)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input onChange={(e)=>setName(e.target.value)} className="border-2" type="text" name="name" /> <br />
                <input onChange={(e)=>setEmail(e.target.value)} className="border-2" type="email" name="email" id="" /><br />
                <input className="border-2" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormState;