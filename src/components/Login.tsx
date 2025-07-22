import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Swal from "sweetalert2";
import { auth } from "../firebase/Config";
export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [constrasenia, setConstrasenia] = useState<string>("");
  const logearse = () => {
    signInWithEmailAndPassword(auth, email, constrasenia)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          Swal.fire("Exito", "Se logeo correctamente");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire(`${errorCode}`, `${errorMessage}`);
      });
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      {/*  <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://miro.medium.com/v2/resize:fit:1080/1*vBi4Ycgdn5t3lu2SvQXuog.gif"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {/*  <!-- Username Input --> */}
        <div className="mb-4 ">
          <label htmlFor="username" className="block text-gray-600">
            Correo Electrónico
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/*  <!-- Password Input --> */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">
            Contraseña
          </label>
          <input
            value={constrasenia}
            onChange={(e) => setConstrasenia(e.target.value)}
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* <!-- Login Button --> */}
        <button
          onClick={logearse}
          type="button"
          className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};
