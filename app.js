const nav = document.querySelector("[data-nav='menu']")
const mainPage = document.querySelector('[data-js="main-page"]')
const actualScreen = document.querySelector('[data-screen="initial"]')
const ifrnLogo = document.querySelector('[data-logo="ifrn-logo"]')

ifrnLogo.addEventListener('click', () => {
  const initialScreenNotExists = actualScreen.dataset.screen !== 'initial'

  if (initialScreenNotExists) {
    actualScreen.firstElementChild.remove()
    actualScreen.setAttribute('class', 'napne-logo')

    const img = document.createElement('img')
    img.setAttribute('src', './imgs/pagina.png')

    actualScreen.dataset.screen = 'initial'
    actualScreen.append(img)
  }
})

nav.addEventListener('click', e => {
  const clickedElement = e.target.parentElement.dataset.button

  if (clickedElement === 'noticias') {
    actualScreen.firstElementChild.remove()
    actualScreen.removeAttribute('class', 'napne-logo')

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const div = document.createElement('div')

    p.setAttribute('class', 'p-text')
    h1.setAttribute('class', 'noticias-screen')

    h1.textContent = 'Notícias'
    p.innerHTML += `
    <div class="row">
      <div class="column">
        <img src="./imgs/noticia1.jpeg" style="width: 60%">
      </div>
      <div class="column">
        <img src="./imgs/noticia2.jpeg" style="width: 60%">
      </div>
      <div class="column">
        <img src="./imgs/noticia3.jpeg" style="width: 80%; height: 100%">
      </div>
    </div>
    `
    actualScreen.dataset.screen = 'noticias'

    div.append(h1, p)
    actualScreen.append(div)
  }

  if (clickedElement === 'apresentacao') {
    actualScreen.firstElementChild.remove()
    actualScreen.removeAttribute('class', 'napne-logo')

    const p = document.createElement('p')
    const div = document.createElement('div')

    p.setAttribute('class', 'p-text')
  
    actualScreen.dataset.screen = 'apresentacao'
    div.innerHTML += `  
  <div class="c">
    <div class="b">
      <div class="a">
        <img class='ab' src="./imgs/img1.png">
        <img class='ab' src="./imgs/img2.png">
        <img class='ab' src="./imgs/img3.png">
        <img class='ab' src="./imgs/img4.png">
        <img class='ab' src="./imgs/img5.png">
        <img class='ab' src="./imgs/img6.png">
        <img class='ab' src="./imgs/img7.png">
        <img class='ab' src="./imgs/img8.png">
        <img class='ab' src="./imgs/img9.png">
        <img class='ab' src="./imgs/img10.png">
        <img class='ab' src="./imgs/img11.png">
        <img class='ab' src="./imgs/img12.png">
        <img class='ab' src="./imgs/img13.png">
        <img class='ab' src="./imgs/img14.png">
        <img class='ab' src="./imgs/img15.png">
        <img class='ab' src="./imgs/img16.png">
        <img class='ab' src="./imgs/img17.png">
        <img class='ab' src="./imgs/img18.png">
        <img class='ab' src="./imgs/img19.png">
        <img class='ab' src="./imgs/img20.png">
        <img class='ab' src="./imgs/img21.png">
        <img class='ab' src="./imgs/img22.png">
      </div>
    </div>
  </div>
  `
    actualScreen.append(div)
  }

  if (clickedElement === 'contato') {
    actualScreen.firstElementChild.remove()
    actualScreen.removeAttribute('class', 'napne-logo')

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const div = document.createElement('div')

    p.setAttribute('class', 'p-text')
    h1.setAttribute('class', 'proposta-screen')

   
    actualScreen.dataset.screen = 'contato'
    
    div.innerHTML += `
  <div class="margin"><div class="fonttt">Contatos</div></div>
  <div class="fontp"><p> ⠀⠀⠀⠀Para entrar em contato conosco basta ligar para o número de qualquer um dos profissionais do Napne.
   Os seus contatos estão disponivéis logo abaixo.</p></div>
  <div class="margin">
  <table id="customers">
  <tr>
    <th>Nome</th>
    <th>Função</th>
    <th>Contato</th>
  </tr>
  <tr>
    <td>Marclzéia Melo de Souza Queiro</td>
    <td>Coordenadora/Pedagoga</td>
    <td>(84) 98808 8182</td>
  </tr>
  <tr>
    <td>Maria Alexandra Ribeiro Pinto</td>
    <td>Representante docente</td>
    <td>(84) 99952 2857</td>
  </tr>
  <tr>
    <td>Anna Nery Dantas Camacho Varela</td>
    <td>Representante docente</td>
    <td>(84) 99411 5687</td>
  </tr>
  <tr>
    <td>Glaudénia Alves De Moura</td>
    <td>Psicóloga</td>
    <td>(84) 99945 7326</td>
  </tr>
  <tr>
    <td>Magnólia Maria da Rocha Melo</td>
    <td>Assistente Social</td>
    <td>(84) 98825 1417</td>
  </tr>
  <tr>
    <td>Suely Katiana Lima Costa Guerra</td>
    <td>Psicopedagoga</td>
    <td>(84) 99198 0725</td>
  </tr>
  <tr>
    <td>Maria Leania Mendes</td>
    <td>Psicopedagoga</td>
    <td>(84) 98795 2587</td>
  </tr>
  <tr>
    <td>Karine Menezes Ribeiro</td>
    <td>Assistente Educacional Inclusivo</td>
    <td>(84) 99625 9291</td>
  </tr>
  <tr>
    <td>Vanuzia Maria De Medeiros</td>
    <td>Ledora</td>
    <td>(84) 99943 8367</td>
  </tr>
  <tr>
    <td>Bartira Raranaya Ge Pontess</td>
    <td>Cuidadora</td>
    <td>(84) 98719 2759</td>
  </tr>
  <tr>
    <td>Alexandre Fagner Garcia Medeiros Rocha</td>
    <td>Intérprete de Lingua de Sinais</td>
    <td>(84) 98200 8568</td>
  </tr>
  <tr>
    <td> Maria Sara Izidio Da Silva</td>
    <td>Intérprete de Lingua de Sinais</td>
    <td>(84) 98856 6589</td>
  </tr>
  <tr>
    <td>Elisberta De Oliveira Araujo</td>
    <td>Intérprete de Lingua de Sinais</td>
    <td>(84) 99947 1341</td>
  </tr>
  </table>
  </div>
  <br>
  <div class="fontp">
  <table><thead><tr>Também conheça nosso instagram:</tr>
  <tr><a href="https://www.instagram.com/napne.mo/?igshid=MmU2YjMzNjRlOQ%3D%3D"><img src='./imgs/insta.png' width="50"></img></a> </tr>
  </thead>
  </table>
  </div>
  `
    div.append(h1, p)
    actualScreen.append(div)
    
    scrollTo(0, 400)
  }


  if (clickedElement === 'regimento') {
    actualScreen.firstElementChild.remove()
    actualScreen.removeAttribute('class', 'napne-logo')

    const h1 = document.createElement('h1')
    const a = document.createElement('a')
    const div = document.createElement('div')
    const a2 = document.createElement('a')

    a.setAttribute('class', 'p-text')
    a.setAttribute('href', './docs/Regimento Interno_ NAPNE IFRN_aprovado Consup(1).pdf')
    a2.setAttribute('class', 'p-text')
    a2.setAttribute('href', './docs/regimento.pdf')

    div.innerHTML += `
    <div class="margin"><div class="fonttt">Regimento</div></div>
    <div class="fontp"><p> ⠀⠀⠀⠀O Napne é um departamento do IFRN. No campus Mossoró não é excessão, 
    trabalhamos sobre um regimento que possui varios artigos. Com o intuito de garantir que a
    pluralidade no campus seja mantida de forma que todos os estudantes que tenha necessidades
    especiais, tenham essas necessidades sanadas e atendidas da melhor forma possivel.<br>⠀⠀⠀⠀O Napne visa pela transparencia, dessa forma o nosso regimento interno está disponibilizado
    de forma que qualquer aluno ou docente possa acessa-lo e se tornar ciente 
    de seus direitos e toda a extensão que o Nanpe pode prestar.</p></div>
    <div><a href="./docs/regimento1.pdf" style="text-decoration-line:none;"><p class="link">Clique para baixar o regimento</p></a></div>
    <div class="fontp"><p> ⠀⠀⠀⠀O Napne como qualquer instituição de assistencia publica, opera
    seguindo duas leis que são frutos de muita luta pelos direitos das pessoas com necessidades
    especiais. </p></div>
    <div><a href="./docs/regimento1.pdf" style="text-decoration-line:none;"><p class="link">Clique aqui para baixar as leis</p></a></div>  
    `
    div.append(h1, a, a2)
    actualScreen.append(div)
  }
})
