import"./hoisted.BNQ-gKOm.js";const r="https://dummyjson.com/products/category-list",n="https://dummyjson.com/products/category/",d="https://dummyjson.com/products/",e=document.querySelector("#botonesCategoria"),c=document.querySelector("#muestraProductos"),i=document.querySelector("#detalle"),g=document.querySelector("#titulo");addEventListener("DOMContentLoaded",()=>{u(),l("beauty")});const u=async()=>{try{const t=await fetch(r);if(t.status===200){const a=await t.json();console.log("datos de la ctegoria"),console.log(a),p(a)}else console.log("error del api")}catch(t){console.log(t)}};function p(t){let a="";t.map(o=>a+=`
                    <a class="btn btn-outline-info btn-sm m-2" href="#" id=${o}>${o} </a>
                `),e.innerHTML=a}e.addEventListener("click",t=>{t.preventDefault(),console.log(t.target.id),t.target&&t.target.tagName==="A"&&l(t.target.id)});const l=async t=>{try{const a=n+t,o=await fetch(a);if(o.status===200){const s=await o.json();console.log(s),h(s.products,t)}else console.log("error del api")}catch(a){console.log(a)}};function h(t,a){g.innerHTML=`Categoria (${t.length})  (${a})`;let o="";t.map(s=>o+=`
               <div class="col-md-4 col-lg-3 col-lg-2 mb-4">
                    <div class="card h-100">
                        <div class="card-header p-0">
                            <img src=${s.thumbnail} class="card-img-top img-thumbnail" alt="..." loading="lazy">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title small">${s.title}</h5>
                            <h5 class="card-title small text-danger">Precio: ${s.price}$</h5>
                        </div>
                        <div class="card-footer text-center">
                            <a  href="#" class="btn btn-outline-success btn-sm d-grid" data-bs-toggle="modal" data-bs-target="#exampleModal" id=${s.id}>Detalle</a>
                        </div>
                    </div>
                </div>
             `),c.innerHTML=o}c.addEventListener("click",t=>{m(t.target.id)});const m=async t=>{try{const a=d+t,o=await fetch(a);if(o.status===200){const s=await o.json();b(s)}else console.log("error del api")}catch(a){console.log(a)}};function b(t){console.log("entrando en render detalle");let a=`
                <div class="row py-2">
                    <div class="col-md-5">
                        <img src=${t.thumbnail} class="card-img-top img-thumbnail" alt="..." loading="lazy">
                    </div>
                    <div class="col-md-7">
                        <h3>${t.category}</h3>
                        <h3>Marca: <span class="fw-bold">${t.brand}</span></h3>
                        <h4>Stock: <span class="badge bg-info">${t.stock}</span></h4>
                        <h4>Garantia: <span class="fw-bold">${t.warrantyInformation}</span></h4>
                        <h4>SKU: <span class="fw-bold">${t.sku}</span></h4>
                        <p>${t.description}</p>
                        <h3 class="text-danger">Precio: <span class="fw-bold">${t.price}$</span></h3>
                    </div>
                </div>
             `;i.innerHTML=a}
