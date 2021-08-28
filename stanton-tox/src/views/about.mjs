const data = {
    sections: [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu mattis ipsum. Nullam convallis bibendum nisl ut scelerisque. Vestibulum ut venenatis mi. Sed vel orci nisi. Aenean malesuada suscipit est eget convallis.',
            image: './src/assets/images/maison_natale_de_jean_giono.jpg'
        }
    ]
}

const template = `
    <section class="flex-l pa3">
        <div class="section-title-text-wrapper w-100 w-50-l">
            <div class="section-title-box f2 fw2 dark-gray measure lh-title pa3">
                ${ data.sections[0].title }</div>
            <div class="section-text-box f5 fw2 dark-gray measure lh-copy tracked pa3 ml-auto mr-auto">
                <p>
                    Integer eu elementum nibh. Suspendisse ex tellus, sollicitudin a vestibulum in, placerat vitae diam. Aliquam erat volutpat. Aliquam nec hendrerit lorem, ut dapibus elit. Praesent pretium dignissim porta. Nulla hendrerit orci in sem hendrerit dictum. Morbi leo dolor, fringilla et odio in, commodo malesuada nisl. Sed sed accumsan mi. Vivamus arcu justo, rutrum ac est at, blandit maximus tellus. Nunc venenatis mi vel justo interdum, a vestibulum felis eleifend. Aenean ut feugiat dui. Aliquam tempus molestie ipsum. Curabitur porta libero dolor, vitae efficitur diam suscipit ut. Sed sagittis lorem nec eleifend consectetur. Nunc aliquet erat non iaculis commodo.</p>
                <p>
                    Sed luctus sapien ac quam elementum, a faucibus dui accumsan. Nulla at urna in nulla dapibus ornare. Quisque eu consectetur quam. Vestibulum quis magna mauris. Cras ornare, lectus eget malesuada elementum, erat mi eleifend mauris, id vestibulum lacus felis non nisi. Morbi nec mi vitae enim volutpat ultricies at eget lectus. Ut porta iaculis semper. Nullam ornare, sem nec laoreet consectetur, quam tortor venenatis augue, nec condimentum tellus neque vitae dui. Quisque rutrum laoreet augue, quis iaculis risus tincidunt id. Sed elementum viverra mi non interdum. Proin lacinia augue dui, nec sodales ligula vehicula dignissim. Nam ut dolor fringilla, sagittis enim vel, pretium velit. Donec eget efficitur nibh, nec blandit tellus.</p>
            </div>
        </div>
        <div class="section-image-box w-100 w-50-l pa3 tc">
            <img src="${ data.sections[0].image }"/></div>
    </section>
`

export default template
