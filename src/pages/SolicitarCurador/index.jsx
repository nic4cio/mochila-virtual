import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import "./style.css";

import styled from 'styled-components';

const SolicitarCurador = () => {
  const CustomButton = styled.button`
    color: #FFF;
    background-color: #DE6B6B;
    padding: 5px;
    border-radius: 15px;
    font-size: 20px;
    outline: none;
    border: none;
  `;

  const FileInput = styled.input`
    display: none; 
  `;

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("Selecione o período");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Arquivo selecionado:", file);
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
    setSelectedSubjects([]); // Limpa as disciplinas quando o período é alterado
  };

  const periods = ["Selecione o período", "Período 1", "Período 2", "Período 3", "Período 4"];

  const subjectsForPeriod = {
    "Período 1": ["CÁLCULO", "GA", "Outra Disciplina 1", "Outra Disciplina 2", "Outra Disciplina 3"],
    "Período 2": ["CÁLCULO 2", "Física", "Química", "Biologia"],
    "Período 3": ["História", "Geografia", "Inglês", "Educação Física"],
    "Período 4": ["Artes", "Música", "Matemática", "Filosofia"]
  };

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    setSelectedSubjects([...selectedSubjects, selectedSubject]);
  };

  return (
    <div>
      <CabecalhoLogado/>
      <FontePoppins/>

      <div id="tres">
        <div id="um">
          <div className="titulo-curadoria">Solicitar ser curador</div>
          <img src={foto} alt="Foto usuário" className='foto-usuario'/>
        </div>

        <div id="dois">
          <form action="">
            <div className="titulo-dados">Olá, <span className="marrom">Vinícius</span>. Envie os dados abaixo:</div>
            <div className="subtitulo-dados">Em qual matéria você deseja ser curador?</div>

            <select value={selectedPeriod} onChange={handlePeriodChange}>
              {periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>

            {selectedPeriod !== "Selecione o período" && (
              <div>
                <div className="subtitulo-dados">Selecione as disciplinas:</div>
                <div className="subject-container">
                  {subjectsForPeriod[selectedPeriod].map((subject) => (
                    <label key={subject}>
                      <input
                        type="checkbox"
                        value={subject}
                        onChange={handleSubjectChange}
                      />
                      {subject}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="arquivo" className='subtitulo-dados'>Selecione um arquivo PDF:</label><br />
              <CustomButton onClick={handleButtonClick}>Selecionar arquivo</CustomButton>
              <FileInput
                type="file"
                id="arquivo"
                name="arquivo"
                accept=".pdf"
                onChange={handleFileChange}
                ref={fileInputRef} 
              />
              {selectedFile && <div className='subtitulo-dados'>Arquivo selecionado: {selectedFile.name}</div>}
            </div>

            <div className="subtitulo-dados">Escreva razões de porque você gostaria de ser curador</div>
            <textarea className="text-area" name="comentario" rows="4" cols="25"></textarea><br />

            <button className="enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolicitarCurador;
