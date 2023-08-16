export interface CategoryData {
    id_cate:number
    name_cate: string
  
}

export class Category {
    id_cate: number
    name_cate: string
   
    constructor({id_cate,name_cate}: CategoryData){
        this.id_cate = id_cate
        this.name_cate = name_cate
   
    }
    // editItem(data: object) {
    //     fetch(`http://localhost:3000/apipro/${this.id_pro}`, {
    //       method: "PUT",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //   }
//     async updateItem(data: CategoryData) {
//         const response = await fetch("http://localhost:3000/category/ad/", {
//           method: "PU",
//           body: JSON.stringify(data),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
    
//         if (!response.ok) {
//           const message = await response.text();
//           throw new Error(`Failed to add new product: ${message}`);
//         }
    
//         const newProduct = await response.json();
//         return newProduct;
//       }
// }

    async addItem(data: CategoryData) {
        const response = await fetch("http://localhost:3000/category/ad/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          const message = await response.text();
          throw new Error(`Failed to add new product: ${message}`);
        }
    
        const newProduct = await response.json();
        return newProduct;
      }
}


export interface ProductData {
    readonly id_pro:number;
    name_pro: string;
    image:string;
    image_des: string;
    video:string;
    description: string;
    date:Date;
    time: number;
    director: string;
    actor: string;
    country: string;
    views: number;
    special:number
    age: number
    id_cate:number
    categories:string
    name_cate:string;
}

export class Product{
    readonly id_pro:number;
    name_pro: string;
    image:string;
    image_des: string;
    video:string;
    description: string;
    date:Date;
    time: number;
    director: string;
    actor: string;
    country: string;
    views: number;
    special:number
    age: number
    id_cate:number
    name_cate:string;
    categories:string
    constructor({id_pro,name_pro, image, image_des,video,description,date,
        time, director,actor,country,views,special ,age, id_cate, name_cate,categories}: ProductData){
        this.id_pro= id_pro;
        this.name_pro= name_pro;
        this.image= image;
        this.image_des= image_des;
        this.video= video;
        this.description= description;
        this.date= date;
        this.director= director;
        this.time= time;
        this.actor= actor;
        this.age=age;
        this.views= views;
        this.special= special;
        this.id_cate= id_cate;
        this.name_cate= name_cate;
        this.categories= categories;
        
        this.country= country
    }

   
}
export const getData = async <T>(url:string): Promise<T[]> => {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json() as T[];
        
        if (!Array.isArray(data)) {
            return [data as T];
          }
        
          // If data is an array, return it as is
          return data as T[];

      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
}

export async function deleteData(url: string): Promise<string> {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete data');
    }
  
    return 'Data deleted successfully';
  };
  export async function updateData(url: string, data: any): Promise<string> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
  
    return 'Data updated successfully';
  };