const data = {
    links: [
        { text: 'Instagram', value: '<i class="fab fa-instagram"></i>', href: '#' },
        { text: 'Youtube', value: '<i class="fab fa-youtube"></i>', href: '#' },
        { text: 'Twitter', value: '<i class="fab fa-twitter"></i>', href: '#' }
    ]
}

let linksList = new String

for(const item of data.links)
    linksList += `<li class="dib ph3"><a href="${ item.href }" class="link dim gray">${ item.value }</a></li>`

const template = `
    <ul class="flex list pl0 f4">
        ${ linksList }
    </ul>
`

export default template
