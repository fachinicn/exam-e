import React from "react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  const irParaExames = () => {
    navigate("/exames");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-black rounded-2xl shadow-xl bg-gray-100 h-96 w-96">
        <img src="/assets/Exam-E.png" alt="Logo Exam-E" />
        <div className="font-sans font-thin w-80 mx-auto pt-6">
          <p>
            Olá, seja bem vindo(a) ao{" "}
            <span className="text-red-500 font-bold">Exam-E!</span>
          </p>
          <p>O seu médico online.</p>
          <p>
            Aqui você pode consultar o resultados dos seus exames de sangue,
            para isso, basta clicar no botão abaixo!
          </p>
          <div className="rounded-lg relative top-14 bg-red-500 font-bold text-xl h-14 flex justify-center items-center hover:scale-110 transition duration-300">
            <button onClick={irParaExames}>Checar meus Exames</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
