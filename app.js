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
    img.setAttribute('src', './imgs/napne.png')

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

    h1.textContent = 'Contato'
    p.textContent = loremIpsum3
    actualScreen.dataset.screen = 'contato'

    div.append(h1, p)
    actualScreen.append(div)
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

    h1.textContent = 'Regimento Interno'
    a.textContent = loremIpsum2
    actualScreen.dataset.screen = 'regimento'
    a2.textContent = 'reigmento 2'

    div.append(h1, a, a2)
    actualScreen.append(div)
  }
})