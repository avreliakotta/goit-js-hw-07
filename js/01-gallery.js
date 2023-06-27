  import { galleryItems } from './gallery-items.js';
// Change code below this line



//  console.log(createGalleryItems(galleryItems));

function createGalleryItems(arr){
   return arr.map(({preview, original, description})=>{return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;
   }).join('');
  }; 
  
  const galleryContainer= document.querySelector('.gallery');
  const galleryMarkup=createGalleryItems(galleryItems);
  galleryContainer.insertAdjacentHTML('beforeend',galleryMarkup);
  galleryContainer.addEventListener('click',onClick);
  
  function onClick(event){
    event.preventDefault();
    console.dir(event.target);
    if(!event.target.classList.contains('gallery__image')){
      return
    }else{
      const url= event.target.dataset.source;
       const instance = basicLightbox.create(`
      <img src="${url}" width="1200" height="900">
  `);
     instance.show()
     document.addEventListener('keydown',(event)=>{
      if(event.code ==='Escape'){
        instance.close();
      }
     });
    }
    }
 
  
    
 

  
  


 
