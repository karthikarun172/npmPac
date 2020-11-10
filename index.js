/** @format */

module.exports = function Shad(options) {
  let images = document.querySelector("shad");

  if (options.shad_type === "hard") {
    options.shad_type = "0px";
  } else {
    options.shad_type = "15px";
  }

  images.forEach((image) => {
    image.style.boxShadow ===
      `10px 10px ${options.shad_type} 1px rgba(0,0,0,0.12)`;

    if (options.padding) {
      image.style.padding = `1em`;
    }
  });
};
