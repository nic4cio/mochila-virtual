import styled from 'styled-components';

export const InputArquivo = styled.input`
    display: none;
`;

export const dadosCursos = {
    "Curso": {
        periodos: ["Período"],
        disciplinas: [],
    },
    "CC": {
        periodos: [
        "Período",
        "1º Período",
        "2º Período",
        "3º Período",
        "4º Período",
        "5º Período",
        "6º Período",
        "7º Período",
        "Computação Visual",
        "Sistemas Inteligentes",
        "Sistemas de Computação",
        "Sistemas de Informação",
        ],
        disciplinas: {
        "1º Período": ["P1", "LÓG", "CSÉ", "MD", "CDI"],
        "2º Período": ["ED", "BD", "OAC", "GA"],
        "3º Período": ["REDC", "TG", "PROB", "ÁLG"],
        "4º Período": ["P2", "P3", "PAA", "TCOMP"],
        "5º Período": ["SO", "COMPI", "IA", "CG"],
        "6º Período": ["PDS"],
        "7º Período": ["MET", "ND"],
        "Computação Visual": ["C3", "AM", "REAP", "PDI", "VISC"],
        "Sistemas Inteligentes": ["C3", "AMÁQ", "RNAP", "CEVO", "CD"],
        "Sistemas de Computação": ["C3", "SDG", "FPGA", "SE", "MICR"],
        "Sistemas de Informação": ["CLP", "SDI", "IHM", "Gp", "SEG"],
        },
    },
    "EC": {
        periodos: [
        "Período",
        "1º Período",
        "2º Período",
        "3º Período",
        "4º Período",
        "5º Período",
        "6º Período",
        "7º Período",
        "8º Período",
        "Eletivas",
        "Eletivas 2",
        ],
        disciplinas: {
        "1º Período": ["INGL", "P1", "MD", "C1", "GA", "IENG"],
        "2º Período": ["LÓGC", "ESTR", "FÍSI", "CÁL2", "ÁLGE", "CIDI", "DESE"],
        "3º Período": ["LFAU", "PSOF", "FÍS2", "CÁL3", "MDPQ", "SIDG", "QUTE"],
        "4º Período": ["PEES", "ENGS", "CÁL4", "VACO", "OAC", "FÍEX"],
        "5º Período": ["PAA", "CIEL", "REDC", "SISE", "INAR", "SIOP", "TEGR"],
        "6º Período": ["PRCO", "ELET", "METN", "SICO", "CSÉE", "EMPE", "FETR"],
        "7º Período": ["BADA", "NODI", "SICO", "MCAE", "INEL", "PDIS"],
        "8º Período": ["CGPI", "SIEM", "SIDI", "AUIN", "ROBÓ", "MÉSO"],
        "Eletivas": ["CLP", "SEVE", "COMI", "PRLP", "GEPJ", "LAPR", "FLIB", "DBON", "PDPS", "TECÉ"],
        "Eletivas 2": ["LAED", "TSID", "LAEL", "LACE", "REPE", "ITIN", "IA2", "DCQC"],
        },
    },
};
  
export const corPorCursoPeriodo = {
    'CC': {
        '1º Período': { backgroundColor: '#FF7474', color: 'white' },
        '2º Período': { backgroundColor: '#8979FD', color: 'white' },
        '3º Período': { backgroundColor: '#F27FEF', color: 'white' },
        '4º Período': { backgroundColor: '#87E4FE', color: 'white' },
        '5º Período': { backgroundColor: '#FCD878', color: 'white' },
        '6º Período': { backgroundColor: '#90FCDF', color: 'white' },
        '7º Período': { backgroundColor: '#E9FD7A', color: 'white' },
        'Computação Visual': { backgroundColor: '#7394FD', color: 'white' },
        'Sistemas Inteligentes': { backgroundColor: '#F8B076', color: 'white' },
        'Sistemas de Computação': { backgroundColor: '#F27ED6', color: 'white' },
        'Sistemas de Informação': { backgroundColor: '#F24430', color: 'white' },
    },
    'EC': {
        '1º Período': { backgroundColor: '#FF7474', color: 'white' },
        '2º Período': { backgroundColor: '#8979FD', color: 'white' },
        '3º Período': { backgroundColor: '#F27FEF', color: 'white' },
        '4º Período': { backgroundColor: '#87E4FE', color: 'white' },
        '5º Período': { backgroundColor: '#FCD878', color: 'white' },
        '6º Período': { backgroundColor: '#90FCDF', color: 'white' },
        '7º Período': { backgroundColor: '#E9FD7A', color: 'white' },
        'Eletivas': { backgroundColor: '#F8B076', color: 'white' },
        'Eletivas 2': { backgroundColor: '#F8B076', color: 'white' },
    },
};
  
export const OpcaoDisciplina = styled.option`
  background-color: #343434;
  width: 80px;
  height: 50px;
  padding-top: 13px;
  margin-right: 5px;
  font-weight: bold;
  border-radius: 13px;
  text-align: center;
  float: left;

  ${(props) =>
    corPorCursoPeriodo[props.curso] &&
    corPorCursoPeriodo[props.curso][props.periodo] &&
    `
      background-color: ${corPorCursoPeriodo[props.curso][props.periodo].backgroundColor};
      color: ${corPorCursoPeriodo[props.curso][props.periodo].color};
    `}

  ${(props) =>
    props.curso === 'CC' &&
    props.selecionado &&
    `
      background-color: #FFF;
      color: black;
    `}
  ${(props) =>
    props.curso === 'EC' &&
    props.selecionado &&
    `
    background-color: #FFF;
    color: black;
    `}
`;