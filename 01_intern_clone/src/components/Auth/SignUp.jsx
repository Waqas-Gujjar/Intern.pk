
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
// import GoogleIcon from '../../assets/images/googleIcon.svg';
import { useState } from "react";


function SignUp() {
  const navigate = useNavigate();
 


  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);



  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="flex justify-center lg:py-20 dark:bg-blackColor bg-gray-100  h-screen items-center Urbanist md:mt-10 lg:mt-10  " >
      <div className=" p-10   rounded-xl border border-black  shadow-2xl drop-shadow-2xl bg-white dark:bg-gray-600">
        <div className="text-center mb-4">
          <p className="text-blackColor font-bold text-2xl  ">
            Create Your Account
          </p>
        </div>
        <form>
          <div className="text-blackColor">
            <label>Name:</label>
          </div>
          <div>
            <input
              className="w-72 border border-gray rounded-xl focus:outline-none focus:border-none py-1 px-2"
              type="text"
              
            />
          </div>
          <div className="mt-3 text-blackColor">
            <label>Email:</label>
          </div>
          <div>
            <input
              className="w-72 border border-gray rounded-xl focus:outline-none focus:border-none py-1 px-2"
              type="email"
              
            />
          </div>
          <div className="mt-3 text-blackColor">
            <label>Password:</label>
          </div>
          <div className="flex">
            <input
              className="w-72 border border-gray rounded-xl focus:outline-none focus:border-none py-1 px-2"
              type={type}
             
            />
            <span
              class="flex justify-around items-center"
              onClick={handleToggle}
            >
              <Icon class="absolute mr-10" icon={icon} size={25} />
            </span>
          </div>
          <button
            className="mt-3 py-2.5 w-72 rounded-xl bg-greenColor text-white   transition-all"
            type="submit"
          >
            Sign Up
            
          </button>
        </form>
        <div>
          <Link to="/sign-in">
            <button className="w-72  themeBackground transition-all border border-black rounded-xl mt-3 focus:rounded-xl focus:outline-none active:outline-none active:border-none focus:border-none py-1.5 px-2 hover:bg-black hover:text-white ">
              Already have an account
            </button>
          </Link>
        </div>
        <button
          className="w-72 learn-btn themeBackground transition-all flex border border-black rounded-xl mt-3 focus:rounded-xl focus:outline-none active:outline-none active:border-none focus:border-none py-1.5 px-2 hover:bg-black hover:text-white justify-center items-center"
         
        >
          {/* <img
            className="w-9 pr-2"
            src={GoogleIcon}
            alt=""
          /> */}
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp
