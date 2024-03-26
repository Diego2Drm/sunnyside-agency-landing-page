/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        // background Mobile
        'imageHeader': "url('./images/mobile/image-header.jpg')",
        'imageTransform': "url('./images/mobile/image-transfrom.jpg')",
        'imageStand': "url(./image/mobile/image-stand-out.jpg)",
        'imageGraphicDesign': "url('./image/mobile/image-graphic-design.jpg')",
        'imagePhotography': "url('./image/mobile/image-photography.jpg')",
        'imageGalleryMilkbottles': "url('./image/mobile/image-gallery-milkbottles.jpg')",
        'imageGalleryOrange': "url('./image/mobile/image-gallery-orange.jpg')",
        'imageGalleryCone': "url('./image/mobile/image-gallery-cone.jpg')",
        'imageGallerySugarCubes': "url('./image/mobile/image-gallery-sugar-cubes')",
        // background Desktop
        'imageHeaderDesktop': "url('./images/desktop/image-header.jpg')",
        'imageTransformDesktop': "url('./images/desktop/image-transfrom.jpg')",
        'imageStandDesktop': "url(./image/desktop/image-stand-out.jpg)",
        'imageGraphicDesignDesktop': "url('./image/desktop/image-graphic-design.jpg')",
        'imagePhotographyDesktop': "url('./image/desktop/image-photography.jpg')",
        'imageGalleryMilkbottlesDesktop': "url('./image/desktop/image-gallery-milkbottles.jpg')",
        'imageGalleryOrangeDesktop': "url('./image/desktop/image-gallery-orange.jpg')",
        'imageGalleryConeDesktop': "url('./image/desktop/image-gallery-cone.jpg')",
        'imageGallerySugarCubesDesktop': "url('./image/desktop/image-gallery-sugar-cubes')",
      },
      colors: {
        /* Primary */
        'Sof-red': '#fe7867',
        'Yellow': '#fad400',
        'Dark-desaturated-cyan': '#25564b',  /*(graphic design text)*/
        'Dark-blue': '#19536b',    /* (photography text)*/
        'Dark-moderate-cyan': '#458c7e',/*(footer)*/
        /* Neutral */
        'Very-dark-desaturated-blue': '#23303e',
        'Very-dark-grayish-blue': '#5a636c',
        'Dark-grayish-blue': '#818498',
        'Grayish-blue': '#a7abae',
        'White': '#ffffff',

      }
    },
  },
  plugins: [],
}

