const data = {
    text: 'Built with <a href="#" class="link dim orange">tox</a>'
}

const template = `
    <footer class="helvetica pa3 bg-dark-gray">
        <div class="footer-text-box f6 fw1 moon-gray lh-copy tracked pa3 tc">
            ${ data.text }</div></footer>
`

export default template
