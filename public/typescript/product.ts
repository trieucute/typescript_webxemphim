import { Product, getData, ProductData, Category, CategoryData } from "./global.js";
const specialProduct= async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/special')
    const listPro = listProData.map((pro) => new Product(pro))
    let proContainer = document.querySelector('#favoritesmovie');
    listPro.forEach(pro => {
        proContainer.innerHTML += `
        <a  href="/films/detail/${pro.id_pro}" class="content-row-product favoritesmovie" >
        <div class="des-content">
       <div class="img-content">  
            <img src="/images/${pro.image_des}" alt="">
        </div>
        <div class="overplay-des"></div>
       <div class="block-description">
            <h6>${pro.name_pro}</h6>
            <div class="age-allow"><span class=" badge">${pro.age}+</span><span class="move-times">${pro.time}m</span></div>
            
            <div class="btn-playnow">
                <div class="hover"><span><i class="fa-solid fa-play"></i> Play now</span></div>

            </div>
       </div>
       <div class="block-social-info">
            <ul>
                <li><span><i class="fa-solid fa-volume-xmark"></i></span></li>
                <li><span><i class="fa-solid fa-heart"></i></span></li>
                <li><span><i class="fa-solid fa-plus"></i></span></li>
            </ul>
       </div>
    </div>
    </a>
        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
specialProduct()

const newProduct= async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/date')
    const listPro = listProData.map((pro) => new Product(pro))
    let proContainer = document.querySelector('#upcomingmovie');
    listPro.forEach(pro => {
        proContainer.innerHTML += `
        <a  href="/films/detail/${pro.id_pro}" class="content-row-product upcomingmovie" >
        <div class="des-content">
       <div class="img-content">  
            <img src="/images/${pro.image_des}" alt="">
        </div>
        <div class="overplay-des"></div>
       <div class="block-description">
            <h6>${pro.name_pro}</h6>
            <div class="age-allow"><span class=" badge">${pro.age}+</span><span class="move-times">${pro.time}m</span></div>
            
            <div class="btn-playnow">
                <div class="hover"><span><i class="fa-solid fa-play"></i> Play now</span></div>

            </div>
       </div>
       <div class="block-social-info">
            <ul>
                <li><span><i class="fa-solid fa-volume-xmark"></i></span></li>
                <li><span><i class="fa-solid fa-heart"></i></span></li>
                <li><span><i class="fa-solid fa-plus"></i></span></li>
            </ul>
       </div>
    </div>
    </a>
        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
newProduct()


const viewsProduct= async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/top5')
    const listPro = listProData.map((pro) => new Product(pro))
    let proContainer = document.querySelector('#top5view');
    let slide= document.querySelector('#slide-cards');
    let i :number=1;
    listPro.forEach(pro => {
        slide.innerHTML+=`<div class="mySlides_pro" >

        <img src="/images/${pro.image_des}" style="width:100%">
      </div>`;
        proContainer.innerHTML += `
        <div class="column relative demo"  onclick="currentSlide(${i++})" id="">
        <img class=" cursor" src="/images/${pro.image_des}" style="width:100%" >
        <div class="contents-card-slide">
          <!-- <div class="overplay-des"></div> -->
                  <div class="block-descriptions " style="">
                  
                      <h6>${pro.name_pro}</h6>
                      <div class="age-allow"><span class=" badge">${pro.age}+</span><span class="move-times">${pro.time}m</span></div>
                      <div class="btn-playnow">
                          <a class="hover" href="/films/detail/${pro.id_pro}"><span><i class="fa-solid fa-play"></i> Play now</span></a>
                      </div>
                
              </div>
        </div>
      </div>

        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
viewsProduct()



const avaProduct= async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/avatar')
    const listPro = listProData.map((pro) => new Product(pro))
    let proContainer = document.querySelector('#special-sieupham');
    listPro.forEach(ava => {
        proContainer.innerHTML = `
        <div class="avatar2">
      
        <div class="row-avatar">
           
            <div class="big-title"><h1>${ava.name_pro}</h1></div>
            


<div class="star-grade"><i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-regular fa-star"></i> <span style="padding-left: 15px;">8.0 (lmdb)</span></div>

            <div class="text-top slider-text " style="padding-top: 10px;"><span class="badge">${ava.age}+</span><span class="ml-3">${ava.time}m</span></div>
            <div class="text-mid  slider-text">
               
                <p> ${ava.description}></p>
            </div>
            <div class="elementor-button-wrapper  slider-text" >
                <div class="btn-playnow"><a href="" class="hover"><span><i class="fa-solid fa-play"></i> Play now</span></a></div>
                <a href="" class="elementor-button-link">
                    <span>More details</span>
                </a>
            </div>
        </div>
      <div class="img-avatar"><img src="/images/avatar2.1.jpg" alt=""></div>
      
    </div>

        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
avaProduct()

function start(item){
    var start='';
        if(item==1){
            
            start=`a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>`;
        }else{
            start=` <a href="#"><i class="fa fa-star"></i></a>
          
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>`
        }
        return start;
}

const detailProduct= async () => {
    const proId = window.location.pathname.split('/')[3];
    const listProData: ProductData[] = await getData<ProductData>(`http://localhost:3000/product/${proId}`)
    const listPro = listProData.map((pro) => new Product(pro))
  

    
    let proContainer = document.querySelector('#detail-pro');
    let breadcrumb= document.querySelector('#breadcrumb');
    console.log(listPro);
    listPro.forEach(p=> {
        
        breadcrumb.innerHTML=`    <a href="/"><i class="fa fa-home"></i> Home</a>
        <a href="/films/">Categories</a>
    
        <span>${p.name_pro}</span>
       `;
        proContainer.innerHTML = `
        <div class="col-lg-3" style="width: 30%; margin-right: 20px;">
                    <div class="anime__details__pic set-bg" data-setbg="" style="height: auto !important;">
                        <img src="/images/${p.image}" alt="" width="100%"     >
                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                        <div class="view"><i class="fa fa-eye"></i> ${p.views}</div>
                    </div>
                </div>
                <div class="col-lg-9" style="width: 68%;">
                    <div class="anime__details__text">
                        <div class="anime__details__title">
                            <h3>${p.name_pro}</h3>
                    
                        </div>
                        <div class="anime__details__rating">
                            <div class="rating">
                                ${start(p.special)}
                            </div>
                            <span>1.029 Votes</span>
                        </div>
                        <p>${p.description}</p>
                        <div class="anime__details__widget">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                     
                                        <li><span>Genre:</span>${p.categories} </li>
                                        <li><span>Director</span>${p.director} </li>
                                        <li><span>Date aired:</span>${p.date.toLocaleString('en-US').split('T')[0]}</li>
                                        <li><span>Country:</span> ${p.country}</li>
                                        <li style="width: 400px;"><span>Star:</span> ${p.actor}</li>

                                        <!-- <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li> -->
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li><span>Ages:</span> ${p.age}+</li>
                                        <!-- <li><span>Rating:</span> 8.5 / 161 times</li> -->
                                        <li><span>Duration:</span> ${p.time}m</li>
                                        <li><span>Status:</span> Airing</li>

                                        <li><span>Quality:</span> HD</li>
                                        <li><span>Views:</span>${p.views} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="anime__details__btn">
                            <a href="#" class="follow-btn"><i class="fa fa-heart-o"></i> Follow</a>
                            <a href="/films/detail/${p.id_pro}/watching" class="watch-btn"><span>Watch Now</span> <i
                                class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
detailProduct()

const watchingProduct= async () => {
    const proId = window.location.pathname.split('/')[3];
    const listProData: ProductData[] = await getData<ProductData>(`http://localhost:3000/product/${proId}`)
    const listPro = listProData.map((pro) => new Product(pro))
  

    
    let proContainer = document.querySelector('#video');
    let breadcrumb= document.querySelector('#breadcrumb');
    console.log(listPro);
    listPro.forEach(p=> {
        
        breadcrumb.innerHTML=`    <a href="/"><i class="fa fa-home"></i> Home</a>
        <a href="/films/">Categories</a>
    
        <span>${p.name_pro}</span>
       `;
        proContainer.innerHTML = `
        <iframe width="1150" height="550" src="${p.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
watchingProduct()


const catesnewcom= async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/product/special')
    const listPro = listProData.map((pro) => new Product(pro))
    let cateContainer = document.querySelector('#topnew-cate');
    listPro.forEach(cate => {
        cateContainer.innerHTML += `
        <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                        <img src="/images/${cate.image}" alt="">

                    </div>
                    <div class="product__sidebar__comment__item__text">
                        <ul>
                            <li>Active</li>
                            <li>Movie</li>
                        </ul>
                        <h5><a href="/films/detail/${cate.id_pro}">${cate.name_pro}</a></h5>
                        <span><i class="fa fa-eye"></i> ${cate.views} Viewes</span>
                    </div>
                </div>
        `
        // proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
catesnewcom()


