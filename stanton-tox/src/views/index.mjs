const data = {
    sections: {
        first: {
            title: 'Nulla blandit arcu elit',
            image: './src/assets/images/biandintz.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at venenatis urna. Ut hendrerit metus vitae elementum molestie. Nunc volutpat viverra turpis, vitae mollis diam dignissim at. Nulla blandit arcu elit, id mollis enim lacinia non.'
        },
        second: {
            title: 'Cras porta aliquet augue, sed varius dui tincidunt non',
            text: 'Mauris placerat convallis velit vitae volutpat. Nam rutrum sit amet diam bibendum viverra. Vestibulum sollicitudin arcu placerat, lacinia libero a, ultrices nibh. In hac habitasse platea dictumst. Sed nisl sapien, blandit varius lorem eget, ullamcorper tempus dolor. Phasellus arcu mauris, blandit ac iaculis vel, euismod sed lectus. In congue augue quis turpis imperdiet facilisis. Integer vitae egestas dui. Praesent vel vulputate odio. Duis semper magna id lorem dignissim placerat. Morbi non ante sit amet dui egestas tincidunt vitae sed nunc. Morbi ornare pretium sem a cursus. Donec ut velit nec sem varius vehicula. Proin venenatis vel eros non viverra.'
        }
    }
}

const template = `
    <section class="flex pa3 items-center">
        <div class="section-title-text-wrapper w-50">
            <div class="section-title-box f-headline fw3 dark-gray measure lh-title pa3">
                ${ data.sections.first.title }</div>
            <div class="section-text-box f4 fw2 dark-gray measure lh-copy tracked pa3">
                ${ data.sections.first.text }</div>
        </div>
        <div class="section-image-box w-50 pa3">
            <img src="${ data.sections.first.image }"/></div>
    </section>
    <section class="pa3">
        <div class="f1 fw3 dark-gray measure-narrow tc lh-title pa3 ml-auto mr-auto">
            ${ data.sections.second.title }</div>
        <div class="f4 fw2 dark-gray measure lh-copy tracked pa3 ml-auto mr-auto">
            ${ data.sections.second.text }</div>
        <div class="pa3 tc">
            <a href="about.html" class="link dim moon-gray bg-dark-gray pa3">En savoir plus</a></div>
    </section>
`

export default template
