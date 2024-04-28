/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
// const redirects = require('./redirects.json');

// Properly there is a bug in nextjs, so we need this fix
// we have to handle the persian part exept the paranthesis
// with encodeURL and also escape () because it is a special character for regex and nextjs
// https://nextjs.org/docs/api-reference/next.config.js/redirects

// const convertToUrl = path => {
//   const contentWithoutParanthesis = path.split('(')[0];
//   let content = '';
//   if (path.split('(').length > 1) {
//     content = ('(' + path.split('(')[1]).replace('(', '\\(').replace(')', '\\)');
//   }

//   return encodeURI(contentWithoutParanthesis) + content;
// };

const nextConfig = {
  reactStrictMode: false,
  i18n,
  // async redirects() {
  //   return redirects.map(({ from, to }) => {
  //     return {
  //       source: convertToUrl(from),
  //       destination: to,
  //       permanent: true,
  //     };
  //   });
  // },
};

module.exports = nextConfig;
