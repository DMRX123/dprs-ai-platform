// scripts/submit-to-google.js
const https = require('https')

const sitemapUrl = 'https://dprs.in/sitemap.xml'

console.log('🚀 Submitting sitemap to search engines...')
console.log(`📝 Sitemap URL: ${sitemapUrl}`)

// First verify sitemap exists
https.get(sitemapUrl, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Sitemap found! Submitting to search engines...')
    
    // Submit to Google
    const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    https.get(googleUrl, (googleRes) => {
      console.log(`📤 Google submission: ${googleRes.statusCode}`)
    }).on('error', (err) => {
      console.log(`❌ Google error: ${err.message}`)
    })
    
    // Submit to Bing
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    https.get(bingUrl, (bingRes) => {
      console.log(`📤 Bing submission: ${bingRes.statusCode}`)
    }).on('error', (err) => {
      console.log(`❌ Bing error: ${err.message}`)
    })
    
    // Submit to Yandex
    const yandexUrl = `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    https.get(yandexUrl, (yandexRes) => {
      console.log(`📤 Yandex submission: ${yandexRes.statusCode}`)
    }).on('error', () => {})
    
    console.log('✨ Sitemap submission complete!')
  } else {
    console.log(`❌ Sitemap not found (${res.statusCode}). Run 'npm run build' first.`)
  }
}).on('error', (err) => {
  console.log(`❌ Cannot reach sitemap: ${err.message}`)
  console.log('💡 Make sure you have built the project: npm run build')
})