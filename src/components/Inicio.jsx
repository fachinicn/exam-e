import React from "react";
import Checkbox from "./Checkbox";

const Inicio = () => {
  return (
    <form className="flex justify-center items-center">
      <label className="block mb-4 text-lg font-medium text-gray-900 border-2 border-black rounded-2xl w-1/2 mx-auto">
        Selecione os exames que deseja consultar:
        <Checkbox value="testo-total" title="Testosterona Total" />
        <Checkbox value="testo-livre" title="Testosterona Livre" />
        <Checkbox value="estradiol" title="Estradiol" />
        <Checkbox value="prolactina" title="Prolactina" />
        <Checkbox value="Insulina" title="Insulina" />
        <Checkbox value="shbg" title="SHBG" />
        <Checkbox value="fsh" title="FSH" />
        <Checkbox value="tgo" title="TGP" />
        <Checkbox value="insulina" title="Insulina" />
        <Checkbox value="sodio" title="Sódio" />
        <Checkbox value="glicose" title="Glicose" />
        <Checkbox value="Vitamina-d" title="Vitamina D" />
        <Checkbox value="vitamina-b12" title="Vitamina B12" />
        <Checkbox value="gama-gt" title="Gama Glutamil" />
        <Checkbox value="ferro" title="Ferro" />
        <Checkbox value="hemoglobina-glicada" title="Hemoglobina Glicada" />
        <Checkbox value="hemograma" title="Hemograma" />
        <Checkbox value="tgo" title="TGO" />
        <Checkbox value="creatinina" title="Creatinina" />
        <Checkbox value="ureia" title="Ureia" />
        <Checkbox value="triglicerideos" title="Triglicerídeos" />
        <Checkbox value="colesterol-total" title="Colesterol Total" />
        <Checkbox value="hdl" title="HDL" />
        <Checkbox value="ldl" title="LDL" />
        <Checkbox value="potassio" title="Potássio" />
        <Checkbox value="cortisol" title="Cortisol" />
        <Checkbox value="tsh" title="TSH" />
        <Checkbox value="ferritina" title="Ferritina" />
        <Checkbox value="lh" title="LH" />
        <Checkbox value="magnesio" title="Magnésio" />
        <Checkbox value="acido-folico" title="Ácido Fólico" />
      </label>
      <div className="space-y-2 inline-flex items-center">
        <span></span>
      </div>
    </form>
  );
};

export default Inicio;
