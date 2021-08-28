const data = {
    sections: {
        first: {
            title: 'Nulla blandit arcu elit',
            image: './src/assets/images/biandintz.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at venenatis urna. Ut hendrerit metus vitae elementum molestie. Nunc volutpat viverra turpis, vitae mollis diam dignissim at. Nulla blandit arcu elit, id mollis enim lacinia non.'
        },
        second: {
            title: 'Cras porta aliquet augue, sed varius dui tincidunt non',
            text: 'Mauris placerat convallis velit vitae volutpat. Nam rutrum sit amet diam bibendum viverra. Vestibulum sollicitudin arcu placerat, lacinia libero a, ultrices nibh. In hac habitasse platea dictumst. Sed nisl sapien, blandit varius lorem eget, ullamcorper tempus dolor. Phasellus arcu mauris, blandit ac iaculis vel, euismod sed lectus. In congue augue quis turpis imperdiet facilisis. Integer vitae egestas dui. Praesent vel vulputate odio. Duis semper magna id lorem dignissim placerat. Morbi non ante sit amet dui egestas tincidunt vitae sed nunc. Morbi ornare pretium sem a cursus. Donec ut velit nec sem varius vehicula. Proin venenatis vel eros non viverra.',
            button: {
                href: 'about.html',
                text: 'Learn more'
            }
        }
    }
}

const template = `
    <section class="flex-l pa3 items-center">
        <div class="section-title-text-wrapper w-100 w-50-l">
            <div class="section-title-box f1 f-headline-l fw3 dark-gray measure lh-title pa3 tc tl-l">
                ${ data.sections.first.title }</div>
            <div class="section-text-box f4 fw2 dark-gray measure lh-copy tracked pa3 ml-auto mr-auto">
                ${ data.sections.first.text }</div>
        </div>
        <div class="section-image-box pa3 w-100 w-50-l">
            <img src="${ data.sections.first.image }"/></div>
    </section>
    <section class="pa3">
        <div class="f1 fw3 dark-gray measure-narrow tc lh-title pa3 ml-auto mr-auto">
            ${ data.sections.second.title }</div>
        <div class="f4 fw2 dark-gray measure lh-copy tracked pa3 ml-auto mr-auto">
            ${ data.sections.second.text }</div>
        <div class="pa3 tc">
            <a href="${ data.sections.second.button.href }" class="link dim near-white bg-near-black pa3">${ data.sections.second.button.text }</a></div>
    </section>
`

export default template
