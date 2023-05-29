import React from "react";



{/* <p>Do you have any questions or want to collaborat?</p> */}
const Contact =() => {
    return (
<form>
    <div>
        <div>
            <label>
                Name
            </label>
        </div>
        <div>
            <input type="text" placeholder=""></input>
            <p>*required</p>
        </div>
    </div>
        <div>
            <label>
                Email
            </label>
            <p>*required</p>
        </div>
        <div>
            <input></input>
        </div>
    

</form>

    )
}


export default Contact;