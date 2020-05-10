import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* import your css and js files from cdn by adding link or style src tags respectively */}
          <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700"
          rel="stylesheet"
          />
          <link href="assets/css/font-awesome.css" rel="stylesheet"/>
        
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="modal"></div>
          <Main />
          <NextScript />
        </body>
        <script src="assets/js/jquery.js"></script>,
        <script src="assets/js/Bootstrap/bootstrap.bundle.js"></script>
        <script src="assets/js/js-plugins/crum-mega-menu.js"></script>
        <script src="assets/js/js-plugins/froala_editor.min.js"></script>
        <script src="assets/js/js-plugins/imagesLoaded.js"></script>
        <script src="assets/js/js-plugins/isotope.pkgd.min.js"></script>
        <script src="assets/js/js-plugins/jquery.magnific-popup.js"></script>
        <script src="assets/js/js-plugins/jquery.matchHeight.js"></script>
        <script src="assets/js/js-plugins/leaflet.js"></script>
        <script src="assets/js/js-plugins/MarkerClusterGroup.js"></script>
        <script src="assets/js/js-plugins/select2.js"></script>
        <script src="assets/js/js-plugins/smooth-scroll.js"></script>
        <script src="assets/js/js-plugins/swiper.min.js"></script>
        <script src="assets/js/js-plugins/TimeCircles.js"></script>
        <script src="assets/js/js-plugins/ajax-pagination.js"></script>
        <script src="assets/js/js-plugins/segment.js"></script>
        <script src="assets/js/js-plugins/sticky-sidebar.js"></script>
        <script src="assets/js/main.js"></script>,
        <script defer src="assets/fonts/fontawesome-all.js"></script>
      </Html>
    );
  }
}

export default CustomDocument;