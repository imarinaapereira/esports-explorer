 function createCard(){
  return`  <div class="card">
  <h2> 24/11 <span> quinta</span></h2>
    <ul>
      <li>
      <img src="https://th.bing.com/th?q=Senegal+Bandeira&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1" alt="Bandeira de Senegal">
      <strong>7:00</strong>
      <img src="https://th.bing.com/th?q=Camaroes+Pais+Bandeira&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1" alt=" Bandeira de Camaroes">
     </li>
  <li>
  <img src="https://th.bing.com/th?q=Armenia+Bandeira&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1" alt="Bandeira de Armenia">
  <strong>16:00</strong>
  <img src="https://th.bing.com/th?q=Bandeira+Do+Brasil+PNG&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1" alt="Bandeira do Brasil">
  </li>

  <li>
  <img src="https://th.bing.com/th?q=Polonia+Bandeira&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1"   alt="Bandeira da Polonia">
  <strong>16:00</strong>
  <img src="https://th.bing.com/th?q=Bandeira+Reino+Unido&w=42&h=42&c=7&rs=1&p=0&o=5&dpr=1.5&pid=1.7&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1" alt="Bandeira do Reino Unidof1221f">
  </li>

  </ul>
  </div>`
 }
    document.querySelector("#app").innerHTML=`
   <header>
    <img src="API/assets/img.pjt.jpeg" alt="imagem de fundo">
   </header>

   <main class="cards">
   ${createCard()}
   ${createCard()}

   </main>

`