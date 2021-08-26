const data = {
    title: {
        text: 'Stanton',
        href: '#'
    }
}

const template = `
    <header class="flex w-100 pa3 helvetica ttu">
        <div class="title-nav-wrapper w-100 flex justify-between items-center">
            <div class="title-box pa3">
                <a href="${ data.title.href }" class="link dim gray f1">${ data.title.text }</a>
            </div>
            <div class="nav-box ph3">
                <ul class="flex list pl0 f5">
                    <li class="dib ph3"><a href="#" class="link dim gray">Blog</a></li>
                    <li class="dib ph3"><a href="#" class="link dim gray">À propos</a></li>
                    <li class="dib ph3"><a href="#" class="link dim gray">Contact</a></li>
                    <li class="dib ph3"><a href="#" class="link dim gray">Acheter</a></li>
                </ul>
            </div>
        </div>
        <div class="actions-wrapper flex items-center justify-center">
            <div class="social-box ph3">
                <ul class="flex list pl0 f5">
                    <li class="dib ph3"><a href="#" class="link dim gray"><i class="fab fa-instagram"></i></a></li>
                    <li class="dib ph3"><a href="#" class="link dim gray"><i class="fab fa-youtube"></i></a></li>
                    <li class="dib ph3"><a href="#" class="link dim gray"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
            <div class="cart-box ph3">
                <a href="#" class="link dim orange f3"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </header>
`

export default template