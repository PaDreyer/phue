// vue.config.js
module.exports = {
    // Where compiled SPA is placed
    outputDir: "./../backend/build/frontend",

    // Where compiled Index.html is placed (relative to outputDir)
    indexPath: "./index.html",

    // Code splitting and other crazy things are possible
    // plugins etc are placed here
    configureWebpack: {

    },

    // Dev Server Settings
    devServer: {
        // Where the page is served
        host: "localhost",
        port: 8080,

        // Redirect all Network requests, incoming on localhost:8080/api, to localhost:9090
        // ws => websockets enabled
        // changeOrigin => i think you dont want to see your own proxy
        proxy: {
            '^/api': {
                target: 'http://localhost:7070',
                ws: true,
                changeOrigin: false
            },
        },
    },
}