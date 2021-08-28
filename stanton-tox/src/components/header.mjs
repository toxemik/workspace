import navLinksList from './navLinksList.mjs'
import socialLinksList from './socialLinksList.mjs'

const data = {
    title: {
        text: 'Stanton',
        href: 'index.html'
    },
    shoppingCart: {
        text: 'Cart',
        value: '<i class="fas fa-shopping-cart"></i>',
        href: '#'
    },
    burgerButton: {
        text: 'Burger',
        value: '<i class="fas fa-bars"></i>'
    }
}

const template = `
    <header class="flex w-100 pa3 helvetica ttu items-center bg-dark-gray">
        <div class="header-title-nav-wrapper w-100 flex justify-between items-center">
            <div class="header-title-box pa3">
                <a href="${ data.title.href }" class="link dim near-white f2 fw2 tracked">
                    ${ data.title.text }</a></div>
            <div class="header-nav-box dn dib-l ph3">
                ${ navLinksList }</div>
        </div>
        <div class="actions-wrapper flex items-center justify-center">
            <div class="header-social-box ph3 dn dib-l">
                ${ socialLinksList }</div>
            <div class="header-cart-box ph3 dn dib-l">
                <a href="${ data.shoppingCart.href }" class="link dim blue f3">
                    ${ data.shoppingCart.value }</a></div>
        </div>
        <a href="#" class="link dim near-white f3 dib dn-l">${ data.burgerButton.value }</a>
    </header>
`

export default template
