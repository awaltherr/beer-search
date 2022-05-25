if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/public/sw.js')
        .then(function (reg) {
            console.log('Service Worker Registered', reg)
        })
}