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
        assuntos: {
          "P1": ["Sintaxe Básica", "Estruturas de Controle", "Funções", "Tipos de Dados", "Arrays", "Ponteiros", "Estruturas e Uniões", "Entrada e Saída", "Alocação Dinâmica de Memória", "Manipulação de Strings", "Arquivos", "Bibliotecas Padrão", "Práticas de Codificação", "Depuração", "Projetos Práticos", "Outros", "AB1", "AB2", "Reavaliação"],
          "LÓG": ["Lógica Proposicional", "Lógica de Primeira Ordem", "Tabelas-Verdade", "Leis da Lógica", "Demonstrações Lógicas", "Álgebra Booleana", "Sintaxe e Semântica Lógica", "Raciocínio Dedutivo e Indutivo", "Resolução de Problemas Lógicos", "Lógica de Programação", "Teorema de Gödel", "Lógica Temporal", "Lógica Modal", "Linguagens Formais", "Aplicações em Inteligência Artificial", "Outros", "AB1", "AB2", "Reavaliação"],
          "CSÉ": ["Privacidade de Dados", "Ética na Inteligência Artificial (IA)", "Vigilância Digital", "Cibersegurança e Hacking Ético", "Responsabilidade em TI", "Desigualdades Digitais", "Neutralidade da Rede", "Ética em Big Data", "Propriedade Intelectual e Direitos Autorais", "Ética em Pesquisa em Computação", "Inteligência Artificial e Emprego", "Ética em Jogos e Entretenimento Digital", "Ética em Redes Sociais", "Acesso Universal à Tecnologia", "Ética no Desenvolvimento de Software", "Outros", "AB1", "AB2", "Reavaliação"],
          "MD": ["Teoria dos Conjuntos", "Relações", "Funções", "Álgebra Booleana", "Teoria dos Números", "Relações", "Congruência Linear", "Métodos de provas", "Teorema Chinês do Resto", "Teorema de Fermat", "Introdução a Criptografia", "Teoria dos Conjuntos Finitos", "Álgebra de Boole e Circuitos Lógicos", "Teoria dos Números Criptográficos", "Probabilidade Discreta", "Outros", "AB1", "AB2", "Reavaliação"],
          "CDI": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "ED": ["Arrays", "Listas Ligadas", "Pilhas (Stacks)", "Filas (Queues)", "Árvores", "Árvores Binárias", "Árvores Balanceadas", "Grafos", "Tabelas Hash", "Listas Duplamente Ligadas", "Heaps", "Grafos Direcionados", "Fila de Prioridade", "Árvores B", "Grafos Ponderados", "Outros", "AB1", "AB2", "Reavaliação"],
          "BD": ["Modelo de Dados", "SQL (Structured Query Language)", "Sistemas de Gerenciamento de Banco de Dados (DBMS)", "Normalização", "Chave Primária e Chave Estrangeira", "Índices", "Transações", "NoSQL Databases", "Replicação de Dados", "Sharding", "Banco de Dados em Memória", "Backup e Recuperação", "Segurança de Banco de Dados", "Modelagem de Dados", "Big Data", "Outros", "AB1", "AB2", "Reavaliação"],
          "OAC": ["Arquitetura de Software", "Padrões de Projeto (Design Patterns)", "Arquitetura em Camadas", "Model-View-Controller (MVC)", "Microsserviços", "Arquitetura Orientada a Serviços (SOA)", "Arquitetura de Pipeline", "Padrões de Comunicação", "Injeção de Dependência (DI)", "Arquitetura Monolítica", "Arquitetura de Software Escalável", "Refatoração de Software", "Padrões de Arquitetura de Segurança", "Arquitetura Orientada a Eventos (EDA)", "Arquitetura de Software Distribuído", "Outros", "AB1", "AB2", "Reavaliação"],
          "GA": ["Sistemas de Coordenadas", "Pontos, Linhas e Planos", "Distância e Comprimento de Segmentos de Reta", "Equações de Retas", "Ângulos e Inclinações", "Circunferências", "Parábolas, Elipses e Hipérboles", "Translação e Rotação", "Sistemas de Equações Lineares", "Vetores no Plano e no Espaço", "Produto Escalar e Produto Vetorial", "Plano Cartesiano Tridimensional", "Retas e Planos no Espaço", "Superfícies de Revolução e Cilindros", "Coordenadas Polares e Cilíndricas", "Coordenadas Esféricas e Cônicas", "Outros", "AB1", "AB2", "Reavaliação"],
          "REDC": ["Topologias de Rede", "Protocolos de Rede", "Modelo OSI", "Arquiteturas de Rede", "Endereçamento IP", "Roteamento", "Switches e Roteadores", "Protocolos de Roteamento", "Redes Sem Fio", "Segurança de Rede", "Virtualização de Rede", "Redes de Área Local (LAN)", "Redes de Área Ampla (WAN)", "Redes de Data Center", "Monitoramento e Gerenciamento de Rede", "Outros", "AB1", "AB2", "Reavaliação"],
          "TG": ["Grafos e Subgrafos", "Grafos Dirigidos", "Grafos Não-dirigidos", "Grafos Ponderados", "Grafos Conexos e Desconexos", "Árvores e Florestas", "Grafos Bipartidos", "Caminhos e Ciclos", "Grafos Eulerianos e Hamiltonianos", "Matriz de Adjacência e Lista de Adjacência", "Algoritmos de Busca", "Algoritmos de Caminho Mínimo", "Algoritmos de Fluxo Máximo", "Grafos Planos", "Aplicações em Redes Sociais", "Outros", "AB1", "AB2", "Reavaliação"], 
          "PROB": ["Probabilidade", "Variáveis Aleatórias", "Distribuição de Probabilidade", "Distribuições de Probabilidade Comuns", "Teorema do Limite Central", "Amostragem e Estimação", "Intervalos de Confiança", "Testes de Hipóteses", "Correlação e Regressão", "Estatísticas Descritivas", "Amostragem Aleatória Simples", "Experimentos Aleatórios", "Análise de Séries Temporais", "Estatística Bayesiana", "Aplicações em Ciência e Indústria", "Outros", "AB1", "AB2", "Reavaliação"], 
          "ÁLG": ["Vetores", "Espaços Vetoriais", "Operações Vetoriais", "Independência Linear", "Base e Dimensão", "Transformações Lineares", "Matrizes", "Espaço Nulo e Espaço Coluna", "Sistemas de Equações Lineares", "Determinantes", "Autovalores e Autovetores", "Diagonalização", "Espaços Ortogonais", "Decomposição QR", "Álgebra Linear Numérica", "Outros", "AB1", "AB2", "Reavaliação"], 
          "P2": ["Padrões de Projeto (Design Patterns)", "Arquiteturas de Software", "Desenvolvimento Orientado a Objetos (OOD)", "Testes de Software", "Gerenciamento de Configuração", "Documentação de Software", "Desenvolvimento Ágil", "Controle de Qualidade de Código", "Integração Contínua e Desdobramento Contínuo (CI/CD)", "Gestão de Equipe de Desenvolvimento", "Desenvolvimento de Interfaces de Programação de Aplicativos (APIs)", "Desenvolvimento de Aplicações Web e Móveis", "Segurança de Software", "Usabilidade e Experiência do Usuário (UX/UI)", "Empacotamento e Distribuição de Software", "Outros", "AB1", "AB2", "Reavaliação"],
          "P3": ["Frameworks de Desenvolvimento Web", "Desenvolvimento de Aplicações de Uma Página (SPA)", "APIs RESTful", "Gerenciamento de Estado no Front-End", "Desenvolvimento de Aplicativos Web Progressivos (PWAs)", "Segurança em Aplicações Web", "Banco de Dados no Back-End", "Autenticação e Autorização", "Desenvolvimento Full-Stack", "Arquitetura de Microsserviços", "Desenvolvimento Responsivo", "Testes Automatizados", "Hospedagem e Implantação", "Controle de Versão Avançado", "Desenvolvimento de Aplicações Web em Tempo Real", "Outros", "AB1", "AB2", "Reavaliação"],
          "PAA": ["Análise de Complexidade", "Algoritmos de Ordenação", "Algoritmos de Busca", "Algoritmos de Grafos", "Algoritmos de Programação Dinâmica", "Algoritmos de Fluxo Máximo", "Algoritmos de Geometria Computacional", "Algoritmos Greedy", "Algoritmos de Correspondência", "Algoritmos de Compressão de Dados", "Algoritmos de Aproximação", "Algoritmos em Cadeias de Caracteres", "Algoritmos Distribuídos", "Algoritmos Paralelos", "Problemas NP-Completos e Teoria da Complexidade", "Outros", "AB1", "AB2", "Reavaliação"],
          "TCOMP": ["Autômatos", "Linguagens Formais", "Hierarquia de Chomsky", "Problemas de Decisão", "Complexidade Computacional", "Teorema de Church-Turing", "Redutibilidade", "Máquinas Não-determinísticas", "Teoria da Computabilidade", "Teoria da Incompletude de Gödel", "Teoria da Informação", "Teoria da Prova", "Autômatos Celulares", "Teoria dos Jogos Computacionais", "Lógica Matemática", "Outros", "AB1", "AB2", "Reavaliação"],
          "SO": ["Funções Básicas do SO", "Multi tarefa", "Multi Processamento", "Interface com o Usuário", "Gerenciamento de Arquivos", "Segurança e Controle de Acesso", "Sistemas de Arquivos", "Gestão de Memória", "Sistemas de Arquivos Distribuídos", "Rede e Comunicação", "Inicialização do Sistema", "Desempenho e Otimização", "Manutenção e Atualizações", "Sistemas Operacionais Móveis", "Virtualização", "Outros", "AB1", "AB2", "Reavaliação"],
          "COMPI": ["Fases do Compilador", "Análise Léxica", "Análise Sintática", "Análise Semântica", "Tabela de Símbolos", "Geração de Código Intermediário", "Otimização de Código", "Geração de Código de Máquina", "Compiladores vs. Interpretadores", "Linguagens de Programação", "Bibliotecas e APIs", "Depuração", "Compiladores Just-in-Time (JIT)", "Compiladores de Linguagem de Montagem", "Compiladores de Alto Desempenho", "Outros", "AB1", "AB2", "Reavaliação"],
          "IA": ["Aprendizado de Máquina (Machine Learning)", "Redes Neurais Artificiais", "Processamento de Linguagem Natural (PLN)", "Visão Computacional", "Robótica Inteligente", "Agentes Inteligentes", "Aprendizado Profundo (Deep Learning)", "Algoritmos de IA", "Ética em IA", "IA e Medicina", "IA e Automóveis Autônomos", "IA na Indústria", "IA na Educação", "IA na Finança", "Futuro da IA", "Outros", "AB1", "AB2", "Reavaliação"],
          "CG": ["Rasterização e Vetorização", "Modelagem 3D", "Renderização", "Texturização", "Animação", "Realidade Virtual (VR) e Realidade Aumentada (AR)", "Gráficos de Jogos", "Simulação", "Visualização de Dados", "Edição de Imagens", "Técnicas de Pintura Digital", "Computação Gráfica em Medicina", "Computação Gráfica em Design Industrial", "Computação Gráfica em Animação por Computador (CGI)", "Tendências em Computação Gráfica", "Outros", "AB1", "AB2", "Reavaliação"],
          "PDS": ["Requisitos de Software", "Arquitetura de Software", "Modelagem de Dados", "Linguagem de Programação", "Design de Interface de Usuário (UI/UX)", "Desenvolvimento de Código", "Teste de Software", "Controle de Versão e Gerenciamento de Código", "Ciclo de Desenvolvimento de Software", "Documentação de Software", "Segurança de Software", "Testes de Aceitação do Usuário (UAT)", "Implantação e Integração", "Manutenção de Software", "Gerenciamento de Projeto de Software", "Outros", "AB1", "AB2", "Reavaliação"],
          "MET": ["Formulação do Problema de Pesquisa", "Revisão da Literatura", "Definição de Objetivos e Hipóteses", "Seleção de Método de Pesquisa", "Coleta de Dados", "Amostragem", "Procedimentos de Coleta de Dados", "Análise de Dados", "Validade e Confiabilidade", "Interpretação dos Resultados", "Discussão", "Conclusões", "Limitações do Estudo", "Ética na Pesquisa", "Divulgação e Publicação", "Outros", "AB1", "AB2", "Reavaliação"],
          "ND": ["Regras e Leis", "Justiça", "Igualdade perante a Lei", "Presunção de Inocência", "Devido Processo Legal", "Direitos Humanos", "Responsabilidade Civil e Criminal", "Contratos", "Propriedade", "Jurisprudência", "Órgãos Jurídicos", "Advogados e Juízes", "Princípio do Contraditório", "Prescrição", "Legislação e Poder Legislativo", "Outros", "AB1", "AB2", "Reavaliação"],
          "C3": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "AM": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "REAP": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "PDI": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "VISC": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "AMÁQ": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "RNAP": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "CEVO": ["Introdução à Computação Evolucionária", "Algoritmos Genéticos", "Programação Genética", "Estratégias Evolucionárias", "Evolução Diferencial", "Algoritmos Evolucionários Multiobjetivo", "Algoritmos Evolucionários Paralelos", "Aprendizado de Máquina Evolucionário", "Otimização de Hiperparâmetros", "Aplicações Práticas", "Algoritmos Evolucionários em Jogos e Simulações", "Evolução de Redes Neurais Artificiais", "Computação Quântica e Evolucionária", "Teoria da Computação Evolucionária", "Tendências em Computação Evolucionária", "Outros", "AB1", "AB2", "Reavaliação"],
          "SDG": ["Álgebra de Boole", "Portas Lógicas", "Sistemas de Numeração", "Circuitos Combinacionais", "Multiplexadores e Demultiplexadores", "Decodificadores e Codificadores", "Flip-Flops e Registradores", "Contadores e Temporizadores", "Sistemas de Lógica Programável", "Memória Digital", "Sistemas de Clock e Sincronização", "Projeto de Circuitos Digitais", "Arquitetura de Processadores", "Microcontroladores", "Sistemas Digitais em FPGA", "Outros", "AB1", "AB2", "Reavaliação"],
          "FPGA": ["Introdução aos FPGAs", "Linguagens de Descrição de Hardware (HDLs)", "Arquitetura de FPGA", "Síntese Lógica", "Implementação e Roteamento", "Circuitos Lógicos Programáveis", "IP Cores (Intellectual Property Cores)", "Design Reconfigurável", "Processadores Embutidos em FPGAs", "Interfaceamento com Periféricos", "Sistemas Embarcados com FPGAs", "FPGA em Aplicações de Comunicação", "FPGA em Processamento de Sinal", "FPGA em Computação de Alto Desempenho (HPC)", "Tendências em FPGA", "Outros", "AB1", "AB2", "Reavaliação"],
          "SE": ["Introdução a Sistemas Embarcados", "Microcontroladores", "Arquitetura de Computadores Embarcados", "Programação de Baixo Nível", "Sistemas Operacionais Embarcados", "Periféricos e Interfaces", "Comunicação sem Fio", "Economia de Energia", "Desenvolvimento de Firmware", "Segurança em Sistemas Embarcados", "Depuração e Testes", "Design de Sistemas Embarcados", "Sistemas Embarcados em Tempo Real", "Sistemas Embarcados em Automóveis", "Tendências em Sistemas Embarcados", "Outros", "AB1", "AB2", "Reavaliação"],
          "MICR": ["Introdução a Microcontroladores", "Arquitetura de Microcontroladores", "Programação de Microcontroladores", "Periféricos de Microcontroladores", "Comunicação Serial", "Interrupções e Temporização", "Memória de Programa e Dados", "Conversão Analógico-Digital (ADC)", "PWM (Modulação por largura de pulso)", "Interface com Sensores", "Sistemas de Controle Embarcados", "Microcontroladores em Eletrônica de Consumo", "Aplicações Automotivas", "Microcontroladores em Dispositivos Médicos", "Desenvolvimento de Projetos com Microcontroladores", "Outros", "AB1", "AB2", "Reavaliação"],
          "CLP": ["Introdução às Linguagens de Programação", "Sintaxe e Semântica", "Tipos de Dados", "Variáveis e Constantes", "Estruturas de Controle", "Funções e Procedimentos", "Escopo de Variáveis", "Recursão", "Programação Orientada a Objetos", "Manipulação de Exceções", "Programação Funcional", "Paradigmas de Linguagens de Programação", "Compilação vs. Interpretação", "Gerenciamento de Memória", "Linguagens de Programação Populares", "Outros", "AB1", "AB2", "Reavaliação"],
          "SDI": ["Álgebra de Boole", "Portas Lógicas", "Sistemas de Numeração", "Circuitos Combinacionais", "Multiplexadores e Demultiplexadores", "Decodificadores e Codificadores", "Flip-Flops e Registradores", "Contadores e Temporizadores", "Sistemas de Lógica Programável", "Memória Digital", "Sistemas de Clock e Sincronização", "Projeto de Circuitos Digitais", "Arquitetura de Processadores", "Microcontroladores", "Sistemas Digitais em FPGA", "Outros", "AB1", "AB2", "Reavaliação"],
          "IHM": ["Fundamentos da Segurança de Sistemas", "Políticas de Segurança", "Criptografia", "Autenticação e Autorização", "Firewalls e IDS/IPS", "Vulnerabilidades e Exploits", "Gestão de Identidade e Acesso", "Segurança de Redes", "Segurança em Sistemas Operacionais", "Segurança em Aplicações Web", "Segurança em Dispositivos Móveis", "Gestão de Incidentes de Segurança", "Conformidade e Regulamentações", "Segurança em Nuvem", "Tendências em Segurança", "Outros", "AB1", "AB2", "Reavaliação"],
          "Gp": ["Introdução à Ciência de Dados", "Coleta de Dados", "Limpeza e Pré-processamento de Dados", "Análise Exploratória de Dados (EDA)", "Estatística", "Aprendizado de Máquina (Machine Learning)", "Big Data", "Processamento de Linguagem Natural (NLP)", "Aprendizado Profundo (Deep Learning)", "Mineração de Dados", "Visualização de Dados", "Modelagem Preditiva", "Ética e Privacidade de Dados", "Deploy de Modelos", "Casos de Uso em Ciência de Dados", "Outros", "AB1", "AB2", "Reavaliação"],
          "SEG": ["Limites e Continuidade", "Derivadas e Regras de derivação", "Aplicações de Derivada", "Teorema do Valor médio e Rolle", "Regra de L'Hôpital", "Aplicações", "Definição da Integral Definida", "Propriedades da Integral Definida", "Teorema Fundamental do Cálculo", "Regras de Integração", "Aplicações da Integral Definida", "Cálculo de Áreas e Volumes", "Integral Imprópria", "Séries e Sequências", "Equações Diferenciais", "Outros", "AB1", "AB2", "Reavaliação"],
          "CD": ["Introdução à Ciência de Dados", "Coleta de Dados", "Limpeza e Pré-processamento de Dados", "Análise Exploratória de Dados (EDA)", "Estatística", "Aprendizado de Máquina (Machine Learning)", "Big Data", "Processamento de Linguagem Natural (NLP)", "Aprendizado Profundo (Deep Learning)", "Mineração de Dados", "Visualização de Dados", "Modelagem Preditiva", "Ética e Privacidade de Dados", "Deploy de Modelos", "Casos de Uso em Ciência de Dados", "Outros", "AB1", "AB2", "Reavaliação"],
        }

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
        assuntos: {
          "INGL":["Assunto 1", "Assunto 2"],
          "P1":["Assunto 1", "Assunto 2"],
          "MD":["Assunto 1", "Assunto 2"],
          "C1":["Assunto 1", "Assunto 2"],
          "GA":["Assunto 1", "Assunto 2"],
          "IENG":["Assunto 1", "Assunto 2"],
          "LÓGC":["Assunto 1", "Assunto 2"],
          "ESTR":["Assunto 1", "Assunto 2"],
          "FÍSI":["Assunto 1", "Assunto 2"],
          "CÁL2":["Assunto 1", "Assunto 2"],
          "ÁLGE":["Assunto 1", "Assunto 2"],
          "CIDI":["Assunto 1", "Assunto 2"],
          "DESE":["Assunto 1", "Assunto 2"],
          "LFAU":["Assunto 1", "Assunto 2"],
          "PSOF":["Assunto 1", "Assunto 2"],
          "FÍS2":["Assunto 1", "Assunto 2"],
          "CÁL3":["Assunto 1", "Assunto 2"],
          "MDPQ":["Assunto 1", "Assunto 2"],
          "SIDG":["Assunto 1", "Assunto 2"],
          "QUTE":["Assunto 1", "Assunto 2"],
          "PEES": ["Assunto 1", "Assunto 2"],
          "ENGS": ["Assunto 1", "Assunto 2"],
          "CÁL4": ["Assunto 1", "Assunto 2"],
          "VACO": ["Assunto 1", "Assunto 2"],
          "OAC": ["Assunto 1", "Assunto 2"],
          "FÍEX": ["Assunto 1", "Assunto 2"],
          "PAA": ["Assunto 1", "Assunto 2"],
          "CIEL": ["Assunto 1", "Assunto 2"],
          "REDC": ["Assunto 1", "Assunto 2"],
          "SISE": ["Assunto 1", "Assunto 2"],
          "INAR": ["Assunto 1", "Assunto 2"],
          "SIOP": ["Assunto 1", "Assunto 2"],
          "TEGR": ["Assunto 1", "Assunto 2"],
          "PRCO": ["Assunto 1", "Assunto 2"],
          "ELET": ["Assunto 1", "Assunto 2"],
          "METN": ["Assunto 1", "Assunto 2"],
          "SICO": ["Assunto 1", "Assunto 2"],
          "CSÉE": ["Assunto 1", "Assunto 2"],
          "EMPE": ["Assunto 1", "Assunto 2"],
          "FETR": ["Assunto 1", "Assunto 2"],
          "BADA": ["Assunto 1", "Assunto 2"],
          "NODI": ["Assunto 1", "Assunto 2"],
          "SICO": ["Assunto 1", "Assunto 2"],
          "MCAE": ["Assunto 1", "Assunto 2"],
          "INEL": ["Assunto 1", "Assunto 2"],
          "PDIS": ["Assunto 1", "Assunto 2"],
          "CGPI": ["Assunto 1", "Assunto 2"],
          "SIEM": ["Assunto 1", "Assunto 2"],
          "SIDI": ["Assunto 1", "Assunto 2"],
          "AUIN": ["Assunto 1", "Assunto 2"],
          "ROBÓ": ["Assunto 1", "Assunto 2"],
          "MÉSO": ["Assunto 1", "Assunto 2"],
          "CLP": ["Assunto 1", "Assunto 2"],
          "SEVE": ["Assunto 1", "Assunto 2"],
          "COMI": ["Assunto 1", "Assunto 2"],
          "PRLP": ["Assunto 1", "Assunto 2"],
          "GEPJ": ["Assunto 1", "Assunto 2"],
          "LAPR": ["Assunto 1", "Assunto 2"],
          "FLIB": ["Assunto 1", "Assunto 2"],
          "DBON": ["Assunto 1", "Assunto 2"],
          "PDPS": ["Assunto 1", "Assunto 2"],
          "TECÉ": ["Assunto 1", "Assunto 2"],
          "LAED": ["Assunto 1", "Assunto 2"],
          "TSID": ["Assunto 1", "Assunto 2"],
          "LAEL": ["Assunto 1", "Assunto 2"],
          "LACE": ["Assunto 1", "Assunto 2"],
          "REPE": ["Assunto 1", "Assunto 2"],
          "ITIN": ["Assunto 1", "Assunto 2"],
          "IA2": ["Assunto 1", "Assunto 2"],
          "DCQC": ["Assunto 1", "Assunto 2"],
        }
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
        '8º Período': { backgroundColor: '#7394FD', color: 'white' },
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