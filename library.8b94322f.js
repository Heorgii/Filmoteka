!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("jnxsx"),i("5xtVg"),i("15Ogw"),i("5JnJR");var a=i("l1RgP"),l=i("lqkWQ"),r=i("iG60z"),o=(i("l1RgP"),i("iMXa0")),s=i("94krt"),c=(a=i("l1RgP"),i("2rpNs")),d=(0,a.default)();var g=(0,a.default)();var u=(0,a.default)();u.btn.addEventListener("click",l.onClickMenu),window.onscroll=function(){(0,r.default)()},u.menuList.addEventListener("click",(function(e){if("A"===e.target.nodeName){var t=["watched","queue"],n=g.btnQueue.classList.contains("--active-btn")?t[1]:t[0],i=(0,o.getFromStorage)(n),a=e.target.dataset.action,l=document.querySelectorAll(".mobile-menu-link");console.log("sortByGenre ~ value",a);for(var r=0;r<l.length;r+=1)a===l[r].dataset.action?l[r].classList.add("active"):l[r].classList.remove("active");var u,f=[];i.forEach((function(e){e.genre_ids.includes(Number(a))?((0,s.removeMarkupMovieCard)(),g.title.classList.add("is-hidden"),f.push(e)):(0,s.removeMarkupMovieCard)()})),u=f.map((function(e){var t=e.id,n=e.poster_path,i=e.genre_ids,a=e.title,l=e.release_date,r=(0,c.getGenresLocalStorege)(i);return'\n                  <li class="gallery__item" data-id="'.concat(t,'">\n                          ').concat(n?'<img src="https://image.tmdb.org/t/p/w500'.concat(n,'"'):'<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"','\n                          class="gallery__item-image" \n                          alt="').concat(a,'" width="250"\n                          loading="lazy"\n                          />\n                          <div class="gallery__item-description">\n                          <p class="gallery__item-description-title"> ').concat(a,'</p>\n                          <p class="gallery__item-description-genres"> ').concat(r," | ").concat(null==l?void 0:l.slice(0,4),"</p>\n                      </div>\n                  </li> ")})).join(""),d.galleryList.insertAdjacentHTML("beforeend",u),f.length||g.title.classList.remove("is-hidden")}})),i("lSt1Q"),i("iNWLi"),i("9VC5X")}();
//# sourceMappingURL=library.8b94322f.js.map