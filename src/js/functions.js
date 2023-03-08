export function createImages(items) {
  return items
    .map((element) => {
      return `

          <a class="gallery__item" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
          </a>
          `;
    })
    .join("");
}
