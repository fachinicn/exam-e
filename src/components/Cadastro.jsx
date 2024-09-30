import React, { useState } from "react";
import axios from "axios";

const Cadastro = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form>
          {/* Campo de Usuário */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuário
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              placeholder="Digite seu usuário"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {/* Botão de Login */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Entrar
            </button>
          </div>

          {/* Botão para Esqueci a Senha */}
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Esqueci minha senha
            </a>
          </div>

          {/* Botão para Cadastro */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Não tem uma conta?</p>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
