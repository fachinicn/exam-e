import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div>
      <div className="relative flex justify-center bg-gray-100 h-0">
        <div className="relative">
          <img
            src="/assets/Exam-E.png"
            alt="logo-exam-e"
            className="w-96 h-auto mx-auto relative transform m-0 p-0 top-24"
          />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-0">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Usuário
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="Digite seu usuário"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="Digite sua senha"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                Entrar
              </button>
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Não tem uma conta?</span>
              <button
                type="button"
                className="ml-2 text-sm font-medium text-red-600 hover:text-red-500"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
