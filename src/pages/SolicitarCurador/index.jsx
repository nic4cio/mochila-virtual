import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import styled from 'styled-components';
import "./style.css";

const SolicitarCurador = () => {
  window.scrollTo(0, 0); //Reinicia o scroll

  // const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const handleAlertaEnviar = () => {

        alert("Form enviado!")
        // setMostrarAlerta(true);
        // setTimeout(() => {
        //     setMostrarAlerta(false);
        // }, 4000); 
    };
  
  // const CustomButton = styled.button`
  //   color: #FFF;
  //   background-color: #DE6B6B;
  //   font-weight: bold;
  //   padding: 5px;
  //   border-radius: 15px;
  //   font-size: 20px;
  //   outline: none;
  //   border: none;
  // `;

  const FileInput = styled.input`
    display: none;
  `;

  const SubjectOption = styled.option`
    background-color: #343434;
    width: 60px;
    height: 40px;
    padding-top: 8px;
    margin-right: 5px;
    font-weight: bold;
    border-radius: 13px;
    text-align: center;
    float: left;

    ${(props) =>
      props.course === 'CC' &&
      props.period === '1º Período' &&
      `
        background-color: #FF7474;
        color: white;
      `}

    ${(props) =>
      props.course === 'CC' &&
      props.period === '2º Período' &&
      `
        background-color: #8979FD;
        color: white;
      `}

    ${(props) =>
      props.course === 'CC' &&
      props.selected &&
      `
        background-color: #FFF;
        color: black;
      `}
  `;

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("Curso");
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

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setSelectedCourse(selectedCourse);
    setSelectedPeriod("Selecione o período");
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
    setSelectedSubjects([]);
  };

  const coursesData = {
    "Curso": {
      periods: ["Selecione o período"],
      subjects: [],
    },
    "CC": {
      periods: ["Selecione o período", "1º Período", "2º Período", "3º Período", "4º Período", "5º Período", "6º Período", "7º Período", "Computação Visual", "Sistemas Inteligentes", "Sistemas de Computação", "Sistemas de Informação"],
      subjects: {
        "1º Período": [
          "P1",
          "LÓG",
          "CSÉ",
          "MD",
          "CDI"
        ],
        "2º Período": [
          "ED",
          "BD",
          "OAC",
          "GA"
        ]
      },
    },
  };

  const handleSubjectClick = (course, period, subject) => {
    const subjectIndex = selectedSubjects.findIndex(
      (item) => item.course === course && item.period === period && item.subject === subject
    );
    if (subjectIndex === -1) {
      setSelectedSubjects([
        ...selectedSubjects,
        { course, period, subject }
      ]);
    } else {
      setSelectedSubjects([
        ...selectedSubjects.slice(0, subjectIndex),
        ...selectedSubjects.slice(subjectIndex + 1)
      ]);
    }
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

            <select value={selectedCourse} onChange={handleCourseChange}>
              {Object.keys(coursesData).map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <select value={selectedPeriod} onChange={handlePeriodChange}>
              {coursesData[selectedCourse].periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>

            {selectedPeriod !== "Selecione o período" && (
              <div>
                <div className="subtitulo-dados">Selecione as disciplinas:</div>
                <div className="subject-container">
                  {coursesData[selectedCourse].subjects[selectedPeriod].map((subject) => (
                    <SubjectOption
                      key={subject}
                      value={subject}
                      course={selectedCourse}
                      period={selectedPeriod}
                      selected={selectedSubjects.some((item) => item.course === selectedCourse && item.period === selectedPeriod && item.subject === subject)}
                      onClick={() => handleSubjectClick(selectedCourse, selectedPeriod, subject)}
                    >
                      {subject}
                    </SubjectOption>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="arquivo" className='subtitulo-dados'>Anexe seu histórico analítico:</label><br />
              <button type="button" className="custom-button" onClick={handleButtonClick}>
                Selecionar arquivo
              </button>
              <FileInput
                type="file"
                id="arquivo"
                name="arquivo"
                accept=".pdf"
                onChange={handleFileChange}
                ref={fileInputRef} 
              />
              {selectedFile && <div className='arquivo-selecionado'><span className='branco'>Arquivo selecionado:</span> {selectedFile.name}</div>}
            </div>

            <div className="subtitulo-dados">Escreva razões de porque você gostaria de ser curador</div>
            <textarea className="text-area" name="comentario" rows="4" cols="25"></textarea><br />

            <button className="enviar" onClick={handleAlertaEnviar}>Enviar</button>
          </form>

          {/* Vai ser mostrado no alerta
          {mostrarAlerta && (
              <div className="alertaEnviar">
              Formulário enviado
              </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SolicitarCurador;
