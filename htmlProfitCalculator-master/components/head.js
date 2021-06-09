// Use this for reference: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Head extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback(){
  this.innerHTML =
  `   <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width">
      <meta name="author" content="Jessica Feliciano">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/main.css" type="text/css" media="all">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="components/headernav.js" type="text/javascript" defer></script>

      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MPCMW2T');</script>
      <!-- End Google Tag Manager -->`
  }
}

customElements.define('head-script-component', Head);

// It doesn't seem like I can apply this to the <head> tags, likely because of innerHTML
// Will have to do research regarding adding info to <head> tags
