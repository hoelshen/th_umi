
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'my-app',
      dll: false,
      dva: {
        immer: true
      },
      "sass": {},
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      }
    }],
  ],
  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('a', 'path/to/a');
  
    // 删除进度条插件
    // config.plugins.delete('progress');
    config.module
    .rule('svg')
    .test(/.svg(\?v=\d+.\d+.\d+)?$/)
    .use([
        {
            loader: 'babel-loader'
        },
        {
            loader: '@svgr/webpack',
            options: {
                babel: false,
                icon: true
            }
        }
    ])
    .loader(require.resolve('@svgr/webpack'));    
  },
  "theme": {
    'icon-url': '/src/public/font_icons/iconfont'
  },
  urlLoaderExcludes: [/.svg$/],
}
