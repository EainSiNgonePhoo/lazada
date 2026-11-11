// product.js — URL က ?id=A ကိုဖတ်ပြီး products.json က data ကို render လုပ်သည်

const params = new URLSearchParams(location.search);
const id = params.get('id');

const list = document.getElementById('product-list');

fetch('./dummys/products.json')
    .then(r => r.json())//read.json
    .then(data => {//
        const products = (id && data[id]) ? data[id] : [];

        list.innerHTML = products.map(p => `

              <div class="mt-5">
                    <div>
                         <img src="${p.image}" alt="${p.name}">
                    </div>

                    <div>
                        <p>${p.name}</p>
                    </div>
                    
                    <div>
                        <p>${p.price}</p>
                    </div>
                </div>
    `).join('');
    })
    .catch(err => {
        console.error(err);
    });