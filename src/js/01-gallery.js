import { galleryItems } from "./gallery-items";
import { createImages } from "./functions";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const refs = {
  divForInsert: document.querySelector(".gallery"),
};
const galleryForInsert = createImages(galleryItems);
refs.divForInsert.insertAdjacentHTML("beforeend", galleryForInsert);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
