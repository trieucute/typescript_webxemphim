var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product, getData, Category, deleteData, updateData } from "./global.js";
const cate_Admin = () => __awaiter(void 0, void 0, void 0, function* () {
    const listcateData = yield getData('http://localhost:3000/category');
    const listcate = listcateData.map((pro) => new Category(pro));
    let cateContainer = document.querySelector('#list_cate');
    listcate.forEach(cate => {
        cateContainer.innerHTML += `
        <tr>
        <td>${cate.id_cate}</td>
        <td>${cate.name_cate}</td>
        <td ><a href="/admin/category/edit/${cate.id_cate}" data-id="${cate.id_cate}" data-name="${cate.name_cate}" ><i class="fa-solid fa-pen-to-square" style="margin-right: 20px;"></i></a>
                <a href="" data-id="${cate.id_cate}" onclick="return confirm('Are you sure you will delete? ')" class="delete_cate"><i class="fa-sharp fa-solid fa-trash"></i></a></td>
    </tr>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
    // xoá
    const deleteButton = document.querySelectorAll('.delete_cate');
    deleteButton.forEach((button) => {
        button.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const itemId = button.dataset.id;
            try {
                const deleteResult = yield deleteData(`http://localhost:3000/category/ad/${itemId}`);
                console.log('Item deleted successfully');
                location.reload();
                // Thêm logic để xóa item khỏi giao diện
            }
            catch (error) {
                console.error('Failed to delete item:', error.message);
            }
        }));
    });
});
cate_Admin();
const cateAdd_Admin = () => __awaiter(void 0, void 0, void 0, function* () {
    const formEl = document.querySelector('#frm_addCate');
    const listcateData = yield getData('http://localhost:3000/category');
    const listcate = listcateData.map((pro) => new Category(pro));
    formEl.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const nameInput = document.getElementById('name_cate');
        const name_cate = nameInput.value.trim();
        if (!name_cate) {
            // Hiển thị thông báo lỗi nếu người dùng không nhập tên category
            alert('Please enter a category name');
            return;
        }
        // Kiểm tra tên category đã tồn tại hay chưa
        const existCategory = listcate.find((category) => category.name_cate === name_cate);
        if (existCategory) {
            alert('Name already exists');
            return;
        }
        const newCategoryData = {
            id_cate: null,
            name_cate: name_cate,
        };
        const newCategory = new Category(newCategoryData);
        try {
            const addedCategory = yield newCategory.addItem(newCategoryData);
            console.log(`Category ${addedCategory.name_cate} added successfully`);
            formEl.reset();
        }
        catch (error) {
            console.error('Failed to add category:', error.message);
        }
    }));
});
cateAdd_Admin();
// const cateEdit_Admin = async (id: string) => {
//     try {
//       // Hiển thị form để sửa đổi Category
//       const formEl = document.querySelector('#frm_editCate') as HTMLFormElement;
//       const nameInput = formEl.querySelector('#name_cate') as HTMLInputElement;
//       nameInput.value = categoryToEdit.name_cate;
//       formEl.addEventListener('submit', async event => {
//         event.preventDefault();
//         const name_cate = nameInput.value.trim();
//         if (!name_cate) {
//           // Hiển thị thông báo lỗi nếu người dùng không nhập tên category
//           alert('Please enter a category name');
//           return;
//         }
//         // Kiểm tra tên category đã tồn tại hay chưa
//         const existCategory = listcateData.find((category) => category.name_cate === name_cate);
//         if (existCategory ) {
//           alert('Name already exists');
//           return;
//         }
//         // Cập nhật Category
//         const updatedCategoryData: CategoryData = {
//           id_cate: existCategory.id_cate,
//           name_cate: name_cate
//         };
//         const updatedCategory = new Category(updatedCategoryData);
//         await updatedCategory.updateData(updatedCategoryData);
//         console.log(`Category ${updatedCategory.name_cate} updated successfully`);
//         // Thoát khỏi trang sửa đổi Category
//         formEl.reset();
//       });  
//     } catch (error) {
//       console.error('Failed to edit category:', error.message);
//     }
//   }
function getUpdateData() {
    return __awaiter(this, void 0, void 0, function* () {
        const cateId = window.location.pathname.split('/')[4];
        const listcateData = yield getData(`http://localhost:3000/category/ad/${cateId}`);
        const listcate = listcateData.map((pro) => new Category(pro));
        // let cateContainer = document.querySelector('#list_cate');
        let name = document.querySelector('#nameEdit_cate');
        let id = document.querySelector('#idEdit_cate');
        // if(listcate.length>0){
        listcate.forEach(cate => {
            name.value = `${cate.name_cate}`;
            id.value = `${cate.id_cate}`;
            const form_edit = document.getElementById('editForm_cate');
            form_edit.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
                event.preventDefault();
                // Hiển thị thông báo lỗi nếu người dùng không nhập tên category
                if (!name.value) {
                    alert('Please enter a category name');
                    return;
                }
                let nameInput = name.value.trim();
                // Kiểm tra tên category đã tồn tại hay chưa
                const cateData = yield getData(`http://localhost:3000/category/`);
                const list = cateData.map((pro) => new Category(pro));
                const exist = list.filter((category) => category.name_cate === nameInput);
                console.log(exist);
                if (exist.length) {
                    alert('Name already exists');
                    return;
                }
                const updatedCategoryData = {
                    id_cate: cate.id_cate,
                    name_cate: nameInput,
                };
                try {
                    yield updateData(`http://localhost:3000/category/ad/${cate.id_cate}`, updatedCategoryData);
                    console.log(`Danh mục ${name.value} đã được cập nhật thành công`);
                    alert('Updated successfully');
                }
                catch (error) {
                    console.error('Không thể cập nhật danh mục:', error.message);
                }
            }));
        });
    });
}
// }
getUpdateData();
const proShow_Admin = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/product/');
    const listPro = listProData.map((pro) => new Product(pro));
    let cateContainer = document.querySelector('#list_products');
    listPro.forEach(pro => {
        cateContainer.innerHTML += `
        <tr>
        <td>${pro.id_pro}</td>
        <td>${pro.name_pro}</td>
        <td><img src="/images/${pro.image}" alt="" width="80px" height="100px"></td>
        <td style="width: 400px; height: 150px;"><div style="overflow-y: scroll;width: 100%;height: 100%;">${pro.description}</div> </td>
        <td>${(pro.special == 1) ? '✔️' : ' '}</td>
        <td>${pro.date.toLocaleString('en-US').split('T')[0]}</td>
        <td>${pro.time}m</td>
        <td>${pro.director}</td>
        <td ><a href="/admin/product/edit/${pro.id_pro}"><i class="fa-solid fa-pen-to-square" style="margin-right: 10px;"></i></a>
                <a href="" data-idpro="${pro.id_pro}" onclick="return confirm('Are you sure you will delete? ')" class='delete_pro'><i class="fa-sharp fa-solid fa-trash"></i></a></td>
    </tr>

        `;
    });
    // xoá
    const delete_proButton = document.querySelectorAll('.delete_pro');
    delete_proButton.forEach((button) => {
        button.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const itemId = button.dataset.idpro;
            try {
                const deleteResult = yield deleteData(`http://localhost:3000/product/ad/${itemId}`);
                console.log('Item deleted successfully');
                location.reload();
                // Thêm logic để xóa item khỏi giao diện
            }
            catch (error) {
                console.error('Failed to delete item:', error.message);
            }
        }));
    });
});
proShow_Admin();
// const proAdd_Admin= async () => {
//     const formpro = document.querySelector('#frm_addPro') as HTMLFormElement;
//     const listproData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/ad/')
//     const listpro = listproData.map((pro) => new Product(pro));
//     formpro.addEventListener('submit', async event => {
//     event.preventDefault();
//     const nameInput = document.getElementById('name_cate') as HTMLInputElement;
//     const name_cate = nameInput.value.trim();
//     const nameProInput = document.getElementById('name_pro') as HTMLInputElement;
//     const name_pro = nameProInput.value.trim();
//     const viewsInput = document.getElementById('views') as HTMLInputElement;
//     const views = viewsInput.value.trim();
//     const Input = document.getElementById('age') as HTMLInputElement;
//     // const age = ageInput.value.trim();
//     // const ageInput = document.getElementById('age') as HTMLInputElement;
//     // const age = ageInput.value.trim();
//     // const ageInput = document.getElementById('age') as HTMLInputElement;
//     // const age = ageInput.value.trim();
//     // const ageInput = document.getElementById('age') as HTMLInputElement;
//     // const age = ageInput.value.trim();
//     // const ageInput = document.getElementById('age') as HTMLInputElement;
//     // const age = ageInput.value.trim();
//     if (!name_cate) {
//         // Hiển thị thông báo lỗi nếu người dùng không nhập tên category
//         alert('Please enter a category name');
//         return;
//       }
//          // Kiểm tra tên category đã tồn tại hay chưa
//         const existCategory = listpro.find((category) => category.name_pro === name_pro);
//         if (existCategory) {
//         alert('Name already exists');
//         return;
//         }
//     const newCategoryData: ProductData = {
//         id_pro: null,
//         name_pro: name_cate,
//       };
//     const newCategory = new Category(newCategoryData);
//     try {
//         const addedCategory = await newCategory.addItem(newCategoryData);
//         console.log(`Category ${addedCategory.name_cate} added successfully`);
//         formpro.reset();
//       } catch (error) {
//         console.error('Failed to add category:', error.message);
//       }
//     })  
// }
// proAdd_Admin()
const getcatePro_Admin = () => __awaiter(void 0, void 0, void 0, function* () {
    const listcateData = yield getData('http://localhost:3000/category');
    const listcate = listcateData.map((pro) => new Category(pro));
    let cateContainer = document.querySelector('#cate_id');
    listcate.forEach(cate => {
        cateContainer.innerHTML += `
        <option value="${cate.id_cate}">${cate.name_cate}</option>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
});
getcatePro_Admin();
function getUpdateDataPro() {
    return __awaiter(this, void 0, void 0, function* () {
        const proId = window.location.pathname.split('/')[4];
        const listproData = yield getData(`http://localhost:3000/product/cate/${proId}`);
        const listpro = listproData.map((pro) => new Product(pro));
        // const categoryData:Category = await getData<CategoryData[]>('http://localhost:3000/category');
        // const categories = categoryData.map((category) => new Category(category));
        const listcateData = yield getData('http://localhost:3000/category');
        const listcate = listcateData.map((pro) => new Category(pro));
        const listCateContainer = document.querySelector('#cateEdit_id');
        let spe = document.getElementById('spe');
        function toDateInputFormat(date) {
            const day = ("0" + date.getDate()).slice(-2);
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();
            return year + "-" + month + "-" + day;
        }
        // let name_cates= document.querySelector('#nameEdit_cates') ;
        listpro.forEach(pro => {
            listcate.forEach(cate => {
                if (pro.id_cate === cate.id_cate) {
                    listCateContainer.innerHTML += ` <option value="${cate.id_cate}" selected>${cate.name_cate}</option>`;
                }
                else {
                    listCateContainer.innerHTML += ` <option value="${cate.id_cate}" >${cate.name_cate}</option>`;
                }
            });
            let id_pro = document.querySelector('#id_proedit');
            let name_pro = document.querySelector('#name_proedit');
            let views = document.querySelector('#viewsedit');
            let description = document.querySelector('#descriptionedit');
            // let special= document.querySelector('#specialedit') as HTMLInputElement;
            let video = document.querySelector(' #videoedit');
            let date = document.querySelector('#dateedit');
            let time = document.querySelector('#timeedit');
            let director = document.querySelector('#directoredit');
            let country = document.querySelector('#countryedit');
            let actor = document.querySelector('#actoredit');
            let age = document.querySelector('#ageedit');
            let categories = document.querySelector('#categoriesedit');
            id_pro.value = `${pro.id_pro}`;
            name_pro.value = `${pro.name_pro}`;
            views.value = `${pro.views}`;
            description.value = `${pro.description}`;
            // special.value=`${pro.special}`;
            video.value = `${pro.video}`;
            time.value = `${pro.time}`;
            director.value = `${pro.director}`;
            actor.value = `${pro.actor}`;
            country.value = `${pro.country}`;
            age.value = `${pro.age}`;
            categories.value = `${pro.categories}`;
            if (pro.special === 1) {
                spe.innerHTML += `
                <input type="radio" name="special" id="specialedit" value="1"  checked> Special
                                        <input type="radio" name="special"  id="specialedit" value="0"> Unspecial`;
            }
            else {
                spe.innerHTML += `  <input type="radio" name="special" id="specialedit" value="1" > Special
                                        <input type="radio" name="special"  id="specialedit" value="0" checked> Unspecial`;
            }
            const dateString = toDateInputFormat(pro.date);
            // Đặt giá trị của trường nhập liệu kiểu 'date'
            date.value = dateString;
            // Chuyển đổi đối tượng Date thành chuỗi định dạng 'dd/mm/yyyy'
            // date.value=`${pro.date.toISOString().slice(0, 10)}`;
            console.log(dateString);
        });
    });
}
// const categoryNames = listpro.name_pro.split(','); // Giả sử danh sách tên lưu dưới dạng một chuỗi các tên, cách nhau bởi dấu phẩy
// let cateContainer = document.querySelector('#list_cate');
// let id= document.querySelector('#idEdit_cate') as HTMLInputElement;
// // if(listcate.length>0){
//     listcate.forEach(cate => {
//         if(cate.id_cate=== )
//         name_cate.innerHTML +=`    
//         <input type="checkbox" name="name_cate" id="name_cate" value="${cate.id_cate}" style='    margin-left: 10px;margin-right: 10px;'>${cate.name_cate}
//         `
//         name.value=`${cate.name_cate}`;
//         id.value=`${cate.id_cate}`;
// const form_edit= document.getElementById('editForm_cate')  as HTMLFormElement;
// form_edit.addEventListener('submit', async event => {
//     event.preventDefault();
//      // Hiển thị thông báo lỗi nếu người dùng không nhập tên category
//     if (!name.value ) {
//         alert('Please enter a category name');
//         return;
//     }
//     let nameInput= name.value.trim()
//      // Kiểm tra tên category đã tồn tại hay chưa
//      const cateData: CategoryData[] = await getData<CategoryData>(`http://localhost:3000/category/`)
//     const list = cateData.map((pro) => new Category(pro))
//      const exist = list.filter((category) => category.name_cate === nameInput);
//      console.log(exist);
//      if (exist.length ) {
//      alert('Name already exists');
//      return;
//      }
//     const updatedCategoryData: CategoryData = {
//         id_cate :  cate.id_cate ,
//         name_cate: nameInput,
//         };
//         try {
//         await updateData(`http://localhost:3000/category/ad/${cate.id_cate}`, updatedCategoryData);
//         console.log(`Danh mục ${name.value} đã được cập nhật thành công`);
//         alert('Updated successfully')
//         } catch (error) {
//         console.error('Không thể cập nhật danh mục:', error.message);
//         }
// })
//     })
// }
// }
getUpdateDataPro();
