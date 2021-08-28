const data = {
    
}

const template = `
    <div id="navLinksPanel" class="fixed dn vh-100 w-100 bg-near-black o-90">
        <div id="modalItems" class="flex flex-column h-100 items-center justify-center">
            <i id="closeModal" class="fa fa-times fa-2x blue pointer" onclick="hideModal()" aria-hidden="true"></i>
            <ul id="modalNavLinks" class="helvetica list pl0 tc">
                <li class="f3 fw4 tracked ttu pv4"><a href="#" class="link dim blue">à propos</a></li>
                <li class="f3 fw4 tracked ttu pv4"><a href="#" class="link dim blue">articles</a></li>
                <li class="f3 fw4 tracked ttu pv4"><a href="#" class="link dim blue">templates</a></li>
            </ul>
        </div>
    </div>
`

export default template
