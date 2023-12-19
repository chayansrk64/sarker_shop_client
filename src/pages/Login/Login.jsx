import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = {email, password};

        console.log(formData);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfull!",
                showConfirmButton: false,
                timer: 1500
              });

              navigate(from, { replace: true });
        })

    }




    return (
        <div className='mt-16'>
        <div className="hero min-h-screen bg-base-200">

         <div className="hero-content flex-col w-full">

             <div className="text-center lg:text-left">
                 <h1 className="text-5xl font-bold">Log In Now!</h1>
                 <p className="py-6 text-center">Please fill in the fields below:</p>
             </div>

             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             {/* form start */}
             <form onSubmit={handleLogin} className="card-body">

                 <div className="form-control">
                 <label className="label">
                     <span className="label-text">Email</span>
                 </label>
                 <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                 </div>

                 <div className="form-control">
                 <label className="label">
                     <span className="label-text">Password</span>
                 </label>
                 <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                 <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                 </div>

                 <div className="form-control mt-6">
                 <input className="btn btn-primary" type="submit" value="Log In" />
                 </div>

             </form>
              {/* form end */}
              <p className='px-3'><small>New here? <Link to='/signup' className='text-warning'>Create an Account</Link> </small></p>
              {/* Social login will be render here soon */}
             </div>

         </div>
         </div>
     </div>
    );
};

export default Login;