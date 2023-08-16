// export class Category{
//     id_cate:number;
//     name_cate: string;

//     constructor(id_cate:number, name_cate:string){
//         this.id_cate= id_cate;
//         this.name_cate= name_cate;
//     }
// }
// export class Product{
//     id_pro:number;
//     name_pro: string;
//     image:string;
//     image_des: string;
//     video:string;
//     description: string;
//     date:Date;
//     time: number;
//     director: string;
//     actor: string;
//     country: string;
//     views: number;
//     age: number
//     constructor(id_pro:number,name_pro: string, image:string, image_des: string,video:string,description: string,date:Date,
//         time: number, director: string,actor: string,country: string,views: number,age: number){
//         this.id_pro= id_pro;
//         this.name_pro= name_pro;
//         this.image= image;
//         this.image_des= image_des;
//         this.video= video;
//         this.description= description;
//         this.date= date;
//         this.director= director;
//         this.time= time;
//         this.actor= actor;
//         this.age=age;
//         this.views= views;
//         this.country= country
//     }
//     static async getProducts(apiUrl: string) {

//         const productList: Product[] = [];
      
//         const response: Response = await fetch(apiUrl);
      
//         const products: any[] = await response.json();
        
//         for (const product of products) {
//           const productItem: Product = {
//             id_pro: product.id_pro,
//             name_pro: product.name_pro,
//             image: product.image,
//             image_des: product.image_des,
//             video: product.video,
//             description: product.description,
//             date: new Date(product.date),
//             time: product.time,
//             director: product.director,
//             actor: product.actor,
//             country: product.country,
//             views: product.views,
//             age: product.age
//           };
      
//           productList.push(productItem);
//           console.log(productItem.name_pro);
//         }
        
//         return productList;
//       }

//     }
// // export  async function getProductList(apiUrl:string) {

// //     const product_List : Product[]=[];
  
// //     // const apiUrl = "http://localhost:3000/product/";
// //     const response: Response = await fetch(apiUrl);
  
// //     const product:any = await response.json();
// //     const products: Product={
// //      id_pro: product.id_pro,
// //      name_pro: product.name_pro,
// //      image: product.image,
// //      image_des: product.image_des,
// //      video: product.video,
// //      description: product.description,
// //      date: new Date(product.date),
// //      time: product.time,
// //      director: product.director,
// //      actor: product.actor,
// //      country: product.country,
// //      views: product.views,
// //      age: product.age
// //     }
// //     product_List.push(products);
// //     console.log(products.name_pro);
    
// //     return product_List
// //   }
  