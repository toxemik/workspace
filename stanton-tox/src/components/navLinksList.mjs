const data = {
    links: [
        { text: 'Home',     href: 'index.html' },
        { text: 'About',    href: 'about.html' }
    ]
}

let linksList = new String

for(const item of data.links)
    linksList += `
        <li class="dib ph3">
            <a href="${ item.href }" class="link dim near-white fw2 tracked">
                ${ item.text }</a>
        </li>
    `

const template = `
    <ul class="flex list pl0 f5 nowrap">
        ${ linksList }
    </ul>
`

export default template
