# Desafio Cognitiva Brasil - Frontend

Este projeto simula uma interface de chat, inspirada na experiência de uso do GPT/Gemini, onde os usuários podem enviar uma pergunta e visualizar as respostas geradas por diferentes Modelos de Linguagem de Grande Escala (LLMs). A interface se comunica com o back-end responsável por fazer as chamadas às APIs dos LLMs, capturando as respostas e permitindo uma comparação baseada em critérios como clareza, precisão, criatividade e consistência gramatical.

---

## Funcionalidades

- **Interface de Chat:** Layout semelhante ao GPT/Gemini para uma experiência amigável e intuitiva.
- **Integração com Back-end:** Comunicação com a API que processa as requisições para os LLMs.
- **Exibição de Respostas:** Visualização das respostas dos diferentes modelos e sua comparação.
- **Autoavaliação Assistida por IA:** Mecanismo para ranquear as respostas baseado em critérios pré-definidos.

---

## Tecnologias Utilizadas

- **Next.js** – Framework React para renderização server-side e desenvolvimento de aplicações web.
- **React** – Biblioteca para construção de interfaces de usuário.
- **CSS / Styled Components** – Para estilização e layout da interface.
- **APIs REST** – Integração com o back-end que conecta aos LLMs.

---

## Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou Yarn para gerenciamento de pacotes

---

## Instalação e Execução

**Instale as dependências:**

   Utilizando npm:
   ```bash
   npm install
   ```
   ou utilizando Yarn:
   ```bash
   yarn install
   ```

5. **Execute o projeto em modo de desenvolvimento:**

   Utilizando npm:
   ```bash
   npm run dev
   ```
   ou utilizando Yarn:
   ```bash
   yarn dev
   ```

## Observações

- **Limites de Consumo das APIs:**  
  Devido ao alto consumo das APIs dos LLMs, em alguns casos a interface pode não retornar respostas. No entanto, o funcionamento está correto em ambiente local enquanto os limites de consumo não são excedidos.
  
- **Simulação de Chat:**  
  Esta interface foi criada para simular a experiência de um chat ao estilo GPT/Gemini, permitindo a visualização e comparação das respostas dos modelos.

---

Desenvolvido como parte do desafio técnico para a Cognitiva Brasil.  
Confira também o repositório do back-end e demais instruções no [GitHub do projeto](https://github.com/MatheusGODZILLA/desafio-cognitiva-llm).
