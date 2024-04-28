const GTM_ID = 'GTM-KZZKR4G';

interface TagMakerArgs {
  gtmId: string;
}

const scriptTag = ({ gtmId }: TagMakerArgs) => {
  const dom = document.createElement('script');
  dom.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
  return dom;
};

const noScriptTag = ({ gtmId }: TagMakerArgs) => {
  const dom = document.createElement('noscript');
  dom.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  return dom;
};

export const initTagManager = (gtmId: string = GTM_ID) => {
  const { head, body } = document;
  head.insertBefore(scriptTag({ gtmId }), head.childNodes[0]);
  body.insertBefore(noScriptTag({ gtmId }), body.childNodes[0]);
};
