const data = {
    links: [
        { text: 'Lorem', href: '#' },
        { text: 'Consectetur', href: '#' },
        { text: 'Vivamus augue', href: '#' },
        { text: 'Imperdiet', href: '#' }
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
