const data = {
    links: [
        { text: 'Blog', href: '#' },
        { text: 'À propos', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Acheter', href: '#' }
    ]
}

let linksList = new String

for(const item of data.links)
    linksList += `<li class="dib ph3"><a href="${ item.href }" class="link dim gray">${ item.text }</a></li>`

const template = `
    <ul class="flex list pl0 f5">
        ${ linksList }
    </ul>
`

export default template
