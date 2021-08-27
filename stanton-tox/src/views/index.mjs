const data = {
    sections: [
        {
            title: 'Nulla blandit arcu elit',
            image: 'https://fr-academic.com/pictures/frwiki/66/Biandintz_eta_zaldiak_-_modified2.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at venenatis urna. Ut hendrerit metus vitae elementum molestie. Nunc volutpat viverra turpis, vitae mollis diam dignissim at. Nulla blandit arcu elit, id mollis enim lacinia non.'
        }
    ]
}

const template = `
    <section class="flex pa3 items-center">
        <div class="section-title-text-wrapper w-50">
            <div class="section-title-box f-headline fw3 dark-gray measure lh-title pa3">
                ${ data.sections[0].title }
            </div>
            <div class="section-text-box f5 fw2 dark-gray measure lh-copy tracked pa3">
                ${ data.sections[0].text }
            </div>
        </div>
        <div class="section-image-box w-50 pa3">
            <img src="${ data.sections[0].image }"/>
        </div>
    </section>
`

export default template
