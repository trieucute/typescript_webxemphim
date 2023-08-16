// import { Product, getData, ProductData} from "./global.js";

// const productDetail = async () => {
//     const urlRepest = new URLSearchParams(window.location.search)
//     const id = urlRepest.get('id')

//     let productData: ProductData[] = await getData<ProductData>(`http://localhost:3000/api/product/id=${id}`);
//     let detailContainer = document.querySelector('#product-detail');
//     let template = `
//             <div class="detail__container">
//                 <img srcset="/images/${productData[0].img} 2x" alt="">
//                 <div class="detail__content">
//                     <h2>${productData[0].name}</h2>
//                     <p class="detail__price">${productData[0].price.toLocaleString('vi')}đ</p>
//                     <p class="detail__feature">${productData[0].feature}</p>
//                     <button><i class="fa-solid fa-cart-shopping"></i>Cho vào giỏ</button>
//                 </div>
//             </div>
//             <div class="detail__info">
//                 <div class="detail__info--title">Thông tin chi tiết</div>
//                 <p>${productData[0].description}</p>
//             </div>`
//         detailContainer?.insertAdjacentHTML('beforeend', template);
// }
// productDetail()