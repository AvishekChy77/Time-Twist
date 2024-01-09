import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import animationData from "../../assets/login.json";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, auth } = useContext(AuthContext);
  const goTo = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        })
          .then((res) => {
            toast("Account created succesfully!");
            goTo("/");
            reset();
            console.log(res);
          })
          .catch((error) => {
            // Handle profile update errors
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <Lottie animationData={animationData} autoPlay={true} />
        </div>
        <div className="card md:w-1/2 p-7 max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                {...register("displayName")}
                placeholder="Your name"
                name="displayName"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Photo</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="Your photo url"
                name="photoURL"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                name="email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
                })}
                placeholder="password"
                name="password"
                className="input input-bordered bg-white"
              />
              {errors.password?.type === "required" && (
                <span>Don't forget to choose your Password</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>Password must be atleast 6 characters</span>
              )}
              {errors.password?.type === "pattern" && (
                <span>
                  Add At least one lowercase letter, one uppercase letter, one
                  digit & one special character
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-black hover:text-white hover:bg-black">
                Register
              </button>
            </div>
          </form>

          <p className="flex justify-between">
            <small>Already a member?</small>{" "}
            <Link className=" hover:text-blue-500" to="/login">
              LogIn
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
