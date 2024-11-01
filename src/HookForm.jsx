import useInputStage from "./Hooks/useInputStage";

const HookForm = () => {
    // const [name,handleChange] = useInputStage('rojoni')
    const email = useInputStage('aroa@ka.io')
    const handleForm = e=>{
        e.preventDefault()
        console.log('form data',name)
        console.log('form data',email.value)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                {/* <input value={name} onChange={handleChange} className="border-2" type="text" name="name" /> <br /> */}
                <input {...email} className="border-2" type="email" name="email" id="" /><br />
                <input className="border-2" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;