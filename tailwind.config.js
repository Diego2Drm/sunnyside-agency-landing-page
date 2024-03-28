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
        'imageTransform': "url('./images/mobile/image-transform.jpg')",
        'imageStand': "url(./images/mobile/image-stand-out.jpg)",
        'imageGraphicDesign': "url('./images/mobile/image-graphic-design.jpg')",
        'imagePhotography': "url('./images/mobile/image-photography.jpg')",
        'imageGalleryMilkbottles': "url('./images/mobile/image-gallery-milkbottles.jpg')",
        'imageGalleryOrange': "url('./images/mobile/image-gallery-orange.jpg')",
        'imageGalleryCone': "url('./images/mobile/image-gallery-cone.jpg')",
        'imageGallerySugarCubes': "url('./images/mobile/image-gallery-sugar-cubes.jpg')",
        // background Desktop
        'imageHeaderDesktop': "url('./images/desktop/image-header.jpg')",
        'imageTransformDesktop': "url('./images/desktop/image-transfrom.jpg')",
        'imageStandDesktop': "url(./images/desktop/image-stand-out.jpg)",
        'imageGraphicDesignDesktop': "url('./imagse/desktop/image-graphic-design.jpg')",
        'imagePhotographyDesktop': "url('./images/desktop/image-photography.jpg')",
        'imageGalleryMilkbottlesDesktop': "url('./imagse/desktop/image-gallery-milkbottles.jpg')",
        'imageGalleryOrangeDesktop': "url('./images/desktop/image-gallery-orange.jpg')",
        'imageGalleryConeDesktop': "url('./images/desktop/image-gallery-cone.jpg')",
        'imageGallerySugarCubesDesktop': "url('./images/desktop/image-gallery-sugar-cubes.jpg')",
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

