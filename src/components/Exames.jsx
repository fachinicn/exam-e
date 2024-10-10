import React from "react";
import Checkbox from "./Checkbox";

const Inicio = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex justify-center items-center w-full p-2">
        <img
          src="/assets/Exam-E.png"
          alt="Logo Exam-E"
          className="mx-auto h-20 w-auto p-0"
        />
      </div>

      <div className="flex justify-center container mx-auto p-1">
        <div className="grid grid-cols-3 gap-4 w-1/2">
          {/* Hormônios */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Hormônios</h3>
            <Checkbox value="testo-total" title="Testosterona Total" />
            <Checkbox value="testo-livre" title="Testosterona Livre" />
            <Checkbox value="estradiol" title="Estradiol" />
            <Checkbox value="prolactina" title="Prolactina" />
            <Checkbox value="shbg" title="SHBG" />
            <Checkbox value="fsh" title="FSH" />
            <Checkbox value="lh" title="LH" />
            <Checkbox value="cortisol" title="Cortisol" />
            <Checkbox value="tsh" title="TSH" />
          </div>

          {/* Vitaminas */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Vitaminas</h3>
            <Checkbox value="vitamina-d" title="Vitamina D" />
            <Checkbox value="vitamina-b12" title="Vitamina B12" />
            <Checkbox value="acido-folico" title="Ácido Fólico" />
          </div>

          {/* Função Renal */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Função Renal</h3>
            <Checkbox value="creatinina" title="Creatinina" />
            <Checkbox value="ureia" title="Ureia" />
          </div>

          {/* Lipídeos */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Lipídeos</h3>
            <Checkbox value="colesterol-total" title="Colesterol Total" />
            <Checkbox value="hdl" title="HDL" />
            <Checkbox value="ldl" title="LDL" />
            <Checkbox value="triglicerideos" title="Triglicerídeos" />
          </div>

          {/* Função Hepática */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Função Hepática</h3>
            <Checkbox value="tgo" title="TGO" />
            <Checkbox value="tgp" title="TGP" />
            <Checkbox value="gama-gt" title="Gama Glutamil" />
          </div>

          {/* Eletrólitos */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Eletrólitos</h3>
            <Checkbox value="sodio" title="Sódio" />
            <Checkbox value="potassio" title="Potássio" />
            <Checkbox value="magnesio" title="Magnésio" />
          </div>

          {/* Metabolismo de Carboidratos e Glicose */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl col-span-2 bg-slate-100">
            <h3 className="text-base font-bold pb-2">
              Metabolismo de Carboidratos e Glicose
            </h3>
            <Checkbox value="glicose" title="Glicose" />
            <Checkbox
              value="hemoglobina-glicada"
              title="Hemoglobina Glicada bg-slate-100"
            />
            <Checkbox value="insulina" title="Insulina" />
          </div>

          {/* Ferro e Hematologia */}
          <div className="border-2 border-black p-4 rounded-lg shadow-xl bg-slate-100">
            <h3 className="text-base font-bold pb-2">Ferro e Hematologia</h3>
            <Checkbox value="ferro" title="Ferro" />
            <Checkbox value="hemograma" title="Hemograma" />
            <Checkbox value="ferritina" title="Ferritina" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
