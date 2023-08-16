var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product, getData, Category } from "./global.js";
const cate = () => __awaiter(void 0, void 0, void 0, function* () {
    const listcateData = yield getData('http://localhost:3000/category');
    const listcate = listcateData.map((pro) => new Category(pro));
    let cateContainer = document.querySelector('#nav-menu-shop');
    listcate.forEach(cate => {
        cateContainer.innerHTML += `
        <li class="cat-item-nav" id="catid"><a  href="/films/cate/${cate.id_cate}">${cate.name_cate}</a></li>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
});
cate();
const cateshow = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/product/');
    const listPro = listProData.map((pro) => new Product(pro));
    let cateContainer = document.querySelector('#cate-all');
    listPro.forEach(cate => {
        cateContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="/images/${cate.image}">
            <a class='div-imgpro' href="/films/detail/${cate.id_pro}"><img src="/images/${cate.image}" alt="" class="img-cate-pro"></a>
                <div class="ep">${cate.time}m</div>
                
                <div class="view"><i class="fa fa-eye"></i> ${cate.views}</div>
            </div>
            <div class="product__item__text">
                
                <h5><a href="/films/detail/${cate.id_pro}">${cate.name_pro}</a></h5>
            </div>
        </div>
    </div>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
});
cateshow();
const catesview = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/product/top5');
    const listPro = listProData.map((pro) => new Product(pro));
    let cateContainer = document.querySelector('#topview-cate');
    listPro.forEach(cate => {
        cateContainer.innerHTML += `
        <div class="product__sidebar__view__item set-bg mix day years"
                            data-setbg="/images/${cate.image_des}">
                            <a class='div-imgview' href="/films/detail/${cate.id_pro}"> <img src="/images/${cate.image_des}" alt=""  class="img-cate-view"></a>

                            <div class="ep">${cate.time}m</div>
                            <div class="view"><i class="fa fa-eye"></i>${cate.views}</div>
                            <h5><a href="/films/detail/${cate.id_pro}">${cate.name_pro}</a></h5>
                        </div>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
});
catesview();
const cateshow_theoloai = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = window.location.pathname.split('/')[3];
    const listProData = yield getData(`http://localhost:3000/category/${categoryId}`);
    const listPro = listProData.map((pro) => new Product(pro));
    let cateContainer = document.querySelector('#cate-pro');
    let title = document.querySelector('#section-title-h4');
    listPro.forEach(cate => {
        title.innerHTML = `${cate.name_cate}`;
        cateContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="/images/${cate.image}">
            <a class='div-imgpro' href="/films/detail/${cate.id_pro}"><img src="/images/${cate.image}" alt="" class="img-cate-pro"></a>
                <div class="ep">${cate.time}m</div>
                
                <div class="view"><i class="fa fa-eye"></i> ${cate.views}</div>
            </div>
            <div class="product__item__text">
                
                <h5><a href="/films/detail/${cate.id_pro}">${cate.name_pro}</a></h5>
            </div>
        </div>
    </div>
        `;
        // proContainer?.insertAdjacentHTML('beforeend', template);
    });
});
cateshow_theoloai();
