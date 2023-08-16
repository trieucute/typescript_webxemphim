// import {  Product } from "./global";

// export async function getProduct(apiUrl:string) {

//   const product_List : Product[]=[];

//   // const apiUrl = "http://localhost:3000/product/<%=id%>";
//   const response: Response = await fetch(apiUrl);

//   const product:any = await response.json();
//   // console.log(product);
  
//   const products: Product={
//    id_pro: product.id_pro,
//    name_pro: product.name_pro,
//    image: product.image,
//    image_des: product.image_des,
//    video: product.video,
//    description: product.description,
//    date: new Date(product.date),
//    time: product.time,
//    director: product.director,
//    actor: product.actor,
//    country: product.country,
//    views: product.views,
//    age: product.age
//   }
//   product_List.push(products);
//   console.log(products.name_pro);
  
//   return product_List
// }


// async function displayProductList(): Promise<void> {
//   const apiUrl = "http://localhost:3000/product/1";

//   const productList = await getProduct(apiUrl);

//   for (const product of productList) {
//     const container = document.getElementById('content') as HTMLDivElement;
//     container.classList.add("product-container");
//     container.innerHTML=` ten: ${product.name_pro}`;
//     // document.body.appendChild(container);
//   }

// }
// displayProductList();
// console.log(displayProductList());
// export async function getProducts(apiUrl: string): Promise<Product[]> {

//   const productList: Product[] = [];

//   const response: Response = await fetch(apiUrl);

//   const products: any[] = await response.json();
  
//   for (const product of products) {
//     const productItem: Product = {
//       id_pro: product.id_pro,
//       name_pro: product.name_pro,
//       image: product.image,
//       image_des: product.image_des,
//       video: product.video,
//       description: product.description,
//       date: new Date(product.date),
//       time: product.time,
//       director: product.director,
//       actor: product.actor,
//       country: product.country,
//       views: product.views,
//       age: product.age
//     };

//     productList.push(productItem);
//     console.log(productItem.name_pro);
//   }
  
//   return productList;
// }
// async function displayProductLists(apiUrl:string): Promise<void> {
//   console.log(apiUrl);
  
//   const productLists = await getProducts(apiUrl);
// console.log(productLists);
//   productLists.forEach(item=> {
//     console.log(item.id_pro);
    
//     const container = document.getElementById('contents') as HTMLDivElement;
//     container.classList.add("product-container");
//     container.innerHTML+=`<a  href="/detail/${item.id_pro}" class="content-row-product " >
//     <div class="des-content">
//    <div class="img-content">  
//         <img src="/images/${item.image_des}" alt="">
//     </div>
//     <div class="overplay-des"></div>
//    <div class="block-description">
//         <h6>${item.name_pro}</h6>
//         <div class="age-allow"><span class=" badge">${item.age}+</span><span class="move-times">${item.time}m</span></div>
        
//         <div class="btn-playnow">
//             <div class="hover"><span><i class="fa-solid fa-play"></i> Play now</span></div>

//         </div>
//    </div>
//    <div class="block-social-info">
//         <ul>
//             <li><span><i class="fa-solid fa-volume-xmark"></i></span></li>
//             <li><span><i class="fa-solid fa-heart"></i></span></li>
//             <li><span><i class="fa-solid fa-plus"></i></span></li>
//         </ul>
//    </div>
// </div>
// </a>`;
//   });

//   let a= document.getElementById('content-row-product') as HTMLElement ;
//   a.classList.add('favoritesmovie');
// }
// const apiUrl = "http://localhost:3000/product";

// displayProductLists(apiUrl);
// // console.log(displayProductLists());