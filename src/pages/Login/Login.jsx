import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginanimation from "../../assets/loginAnimation.json"
import { Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    
        signIn(email, password)
          .then((result) => {
            console.log(result.user);
            Swal.fire("Good job!", "Log in Successfully!", "success");
            navigate(location?.state ? location.state : "/");
          })
    
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Please check your email and password",
            });
          });
      };
    return (
        <div>

             <div className="flex flex-col mt-10 justify-center items-center"></div>
             <Typography variant="h6" sx={
            {   fontWeight: '700', 
                fontSize: {
                sm: '24px', 
                md: '42px', 
              },
                display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                marginTop: '40px',
                color:'#08193C'

         }}>
        Employee and HR Login to SouthTech
          </Typography>
      <div className="p-4 my-10 flex md:flex-row flex-col">
        <div className="mb-12  md:mb-0 md:w-8/12 lg:w-6/12">
          <Lottie className="h-[70%]" animationData={loginanimation}></Lottie>
        </div>
            
             <div>
             <form onSubmit={handleLogin}>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                required
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                required
                id=""
                placeholder="Password"
              />
            </div>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "16px",
              backgroundColor: "#e53935",
              "&:hover": { backgroundColor: "#c62828" },
            }}
          >
            Log in
          </Button>
            <a
              href="#!"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Forgot password?
            </a>

            <p className="mt-5 ">
              Don't have any account? please{" "}
              <Link
                className="text-2xl font-semibold hover:underline hover:text-accent"
                to={"/register"}
              >
                Register
              </Link>{" "}
            </p>
          </form>
             </div>
            
        </div>
        </div>
    );
};

export default Login;