import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCriptomonedas = (label, stateInicial, monedas) => {
  const [state, setState] = useState(stateInicial);

  const SeleccionarCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {monedas.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SeleccionarCripto, setState];
};

export default useCriptomonedas;
