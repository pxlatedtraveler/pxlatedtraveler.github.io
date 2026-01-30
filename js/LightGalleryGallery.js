const $galleryContainer = document.getElementById("lg-2d-art");

const customButtons = `<button type="button" id="lg-toolbar-prev" aria-label="Previous slide" class="lg-toolbar-prev lg-icon">  </button><button type="button" id="lg-toolbar-next" aria-label="Next slide" class="lg-toolbar-next lg-icon">  </button>`;

$galleryContainer.addEventListener("lgInit", (event) => {
  const pluginInstance = event.detail.instance;

  // Note append and find are not jQuery methods
  // These are utility methods provided by lightGallery
  const $toolbar = pluginInstance.outer.find(".lg-toolbar");
  $toolbar.prepend(customButtons);
  document.getElementById("lg-toolbar-prev").addEventListener("click", () => {
    pluginInstance.goToPrevSlide();
  });
  document.getElementById("lg-toolbar-next").addEventListener("click", () => {
    pluginInstance.goToNextSlide();
  });
});

lightGallery($galleryContainer, {
  speed: 500,
  controls: false,
  plugins: [lgZoom]
});
