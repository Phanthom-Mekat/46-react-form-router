
const Forms = () => {
    const handleForm= (e) =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)

    }
    return (
        <div >
            <form onSubmit={handleForm}>
                <input className="border-2" type="text" name="name" /> <br />
                <input className="border-2" type="email" name="email" id="" /><br />
                <input className="border-2" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Forms;