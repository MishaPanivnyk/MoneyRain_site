import * as basicLightbox from 'basiclightbox';
const body = document.querySelector('body');
document.querySelector('.review__video-btn').onclick = () => {
  basicLightbox
    .create(
      `<iframe width="903" height="447" src="https://www.youtube.com/embed/1TPuf-xFmWI" frameborder="0" allowfullscreen></iframe>`
    )
    .show();
  // body.classList.remove('no-scroll');
};
function onClose() {
  body.classList.add('no-scroll');
}
