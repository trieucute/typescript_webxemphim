var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Category {
    constructor({ id_cate, name_cate }) {
        this.id_cate = id_cate;
        this.name_cate = name_cate;
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
    addItem(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:3000/category/ad/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const message = yield response.text();
                throw new Error(`Failed to add new product: ${message}`);
            }
            const newProduct = yield response.json();
            return newProduct;
        });
    }
}
export class Product {
    constructor({ id_pro, name_pro, image, image_des, video, description, date, time, director, actor, country, views, special, age, id_cate, name_cate, categories }) {
        this.id_pro = id_pro;
        this.name_pro = name_pro;
        this.image = image;
        this.image_des = image_des;
        this.video = video;
        this.description = description;
        this.date = date;
        this.director = director;
        this.time = time;
        this.actor = actor;
        this.age = age;
        this.views = views;
        this.special = special;
        this.id_cate = id_cate;
        this.name_cate = name_cate;
        this.categories = categories;
        this.country = country;
    }
}
// export interface ProductData_cate {
//     readonly id_pro:number;
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
//     id_cate:number
//     special:number
//     name_cate:string
//     categories:string
// }
// export class Product_cate{
//     readonly id_pro:number;
//     name_pro: string;
//     image:string;
//     image_des: string;
//     video:string;
//     description: string;
//     date:Date;
//     time: number;
//     special:number
//     director: string;
//     actor: string;
//     country: string;
//     views: number;
//     age: number
//     id_cate:number
//     name_cate:string;
//     constructor({id_pro,name_pro, image, image_des,video,description,date,
//         time, director,actor,country,views,age,id_cate,name_cate, special}: ProductData_cate){
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
//         this.special= special;
//         this.country= country
//         this.id_cate= id_cate;
//         this.name_cate= name_cate;
//     }
// }
export const getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = yield response.json();
        if (!Array.isArray(data)) {
            return [data];
        }
        // If data is an array, return it as is
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
export function deleteData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete data');
        }
        return 'Data deleted successfully';
    });
}
;
export function updateData(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
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
    });
}
;
