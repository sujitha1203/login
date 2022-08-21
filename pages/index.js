import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../helpers/firebase";
import { useRouter } from "next/router";


  
    export const Form = () => {

        const [email, setemail] = useState("")
        const [password, setpassword] = useState("")
        const router = useRouter();
        const [user, loading, error] = useAuthState(auth);
        const [isLoading, setIsLoading] = useState(false)
    
       
    
    
        const responseBody = { email: "", password: ""}
    
        const onSubmitHandler = (event) => {
            event.preventDefault();
    
            if (email === "" || password === "" ) {
                seterror("Please enter all fields")
                return
            }
            responseBody.email = email
            responseBody.password = password
            
    
    
            console.log(JSON.stringify(responseBody))
        }
        const inputChangeHandler = (setFunction, event) => {
            setFunction(event.target.value)
        }

  

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Pixel Glass Login" />
            </Head>
            <main>
                <section className="grid justify-items-center grid-flow-col mt-8 lg:mt-36">
                    <div
                        className="absolute top-0 w-full h-screen "
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://www.beautifulhomes.com/content/dam/beautifulhomes/images/202009/this-home-in-mumbai-is-just-the-inspiration-art-lovers-need/Home-banner-BH-SaloniDoshi-0807.jpg" +
                                ")",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 bg-opacity-50 border-0">
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <div className="flex justify center">
                                        <div className="text-2xl mt-8 text-center mb-3 font-bold text-gray-900">
                                            Sign In
                                        </div>
                                        <form onSubmit={onSubmitHandler} >
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Email"
                                                    style={{
                                                        transition:
                                                            "all .15s ease",
                                                    }}
                                                    onChange={(e) => inputChangeHandler(setemail, e)}
                                                    required
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Password"
                                                    style={{
                                                        transition:
                                                            "all .15s ease",
                                                    }}
                                                    onChange={(e) => inputChangeHandler(setpassword, e)}
                                                    required
                                                />
                                            </div>

                                            <div className="text-center mt-6">
                                                <input 
                                                    className="font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="submit"
                                                    variant="primary"
                                                    style={{
                                                        transition:
                                                            "all .15s ease",
                                                    }}
                                                    loading={isLoading}
                                                    value="sigin"
                                            />
                                                    
                                            
                                            </div>
                                            <div className="flex flex-wrap">
                                                <div className="w-1/2">
                                                    <Link href="/register">
                                                        <small className="text-gray-700 cursor-pointer hover:text-gray-500">
                                                            New User?
                                                        </small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Form;