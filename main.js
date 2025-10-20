const sideMenu = document.querySelector("aside") 
const menuBtn = document.querySelector("#menu_btn") 
const closeBtn = document.querySelector("#close_btn") 
const themeToggler = document.querySelector(".theme_toggler") 
const themeTogglerch1 = document.querySelector(".theme_toggler span:first-child ") 
const themeTogglerch2 = document.querySelector(".theme_toggler span:last-child") 

// open and close aside in screen mobiles & tabs
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = 'none';
})

// change themeToggler => light & dark mode
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variables')
    
    themeTogglerch1.classList.toggle("active")
    themeTogglerch2.classList.toggle("active")
})

// fill orders in table 
Orders.forEach(order => {
        const tr = document.createElement('tr')
        const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === "Declined"?'danger' 
            :order.shipping === "Pending"? 'warning'
            :order.shipping ==="Delivered"? 'success':'primary'}">${order.shipping}</td>
        <td class="primary">details</td>
    `
    tr.innerHTML =trContent
    document.querySelector('table tbody').appendChild(tr)
});