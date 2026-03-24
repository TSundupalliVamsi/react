import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Form Submitted");
        console.log(data);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h3 className="mb-4 text-center">Student Form</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="Enter name" 
                    {...register("name", { required: true })} />
                    {errors.name && (<small className="text-danger">Name is required</small>)}
                </div>  

                <div className="mb-3">
                    <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="Enter email" 
                    {...register("email", { required: true })} />
                    {errors.email && (<small className="text-danger">Email is required</small>)}
                </div>

                <div className="mb-3">
                    <input type="number" className={`form-control ${errors.phone ? "is-invalid" : ""}`} placeholder='Enter phone number' 
                    {...register("phone", {required : true})} />
                    {errors.phone && (<small className='text-danger'>Phone number is required</small>)}
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>

            </form>
        </div>
    )
}

export default Form
