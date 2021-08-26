import navLinksList from './navLinksList.mjs'
import socialLinksList from './socialLinksList.mjs'

const data = {
    title: {
        text: 'Lectus',
        href: '#'
    },
    shoppingCart: {
        text: 'Cart',
        value: '<i class="fas fa-shopping-cart"></i>',
        href: '#'
    }
}

const template = `
    <header class="flex w-100 pa3 helvetica ttu">
        <div class="title-nav-wrapper w-100 flex justify-between items-center">
            <div class="title-box pa3">
                <a href="${ data.title.href }" class="link dim gray f2">${ data.title.text }</a>
            </div>
            <div class="nav-box ph3">
                ${ navLinksList }
            </div>
        </div>
        <div class="actions-wrapper flex items-center justify-center">
            <div class="social-box ph3">
                ${ socialLinksList }
            </div>
            <div class="cart-box ph3">
                <a href="${ data.shoppingCart.href }" class="link dim orange f3">${ data.shoppingCart.value }</a>
            </div>
        </div>
    </header>
`

export default template
