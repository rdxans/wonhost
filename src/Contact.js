import React, { useState} from "react";

const Contact = () =>  {
    const [data, setData] = useState({
        name: "",
        phone: "",
        msg: "",
    });

    const InputEvent =(event) => {
        const {name, value, msg} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit =(e) => {
        e.preventDefault();
        alert (
            `User Name is : ${data.name}  User Mobile Number is ${data.phone}`
        );
    };

    return (
        <>
            <div className="my-5">
                    <h1 className="text-center my-4"> <u>Contact Us</u> </h1>
            <div className="cintaner container-fluid">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={InputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone No</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent}  aria-describedby="phone" />
                        </div>
                        <div className="mb-3">
                            <label for="text" className="form-label">Massage</label>
                            <textarea type="text" className="form-control" name="msg" value={data.msg} onChange={InputEvent}  aria-describedby="text" />
                        </div>
                        <div className="mb-3 form-check ">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary d-grid gap-2 col-6 mx-auto ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default Contact;
