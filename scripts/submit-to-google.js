// scripts/submit-to-google.js
// Auto-submit sitemap to Google for faster indexing

const https = require('https')
const { exec } = require('child_process')

const sitemapUrl = 'https://dprs.in/sitemap.xml'
const bingSitemapUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
const googleSearchConsoleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`

console.log('🚀 Submitting sitemap to search engines...')
console.log(`📝 Sitemap URL: ${sitemapUrl}`)

// Submit to Google
https.get(googleSearchConsoleUrl, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Sitemap submitted to Google successfully!')
  } else {
    console.log(`⚠️ Google submission responded with status: ${res.statusCode}`)
  }
}).on('error', (err) => {
  console.log(`❌ Error submitting to Google: ${err.message}`)
})

// Submit to Bing
https.get(bingSitemapUrl, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Sitemap submitted to Bing successfully!')
  } else {
    console.log(`⚠️ Bing submission responded with status: ${res.statusCode}`)
  }
}).on('error', (err) => {
  console.log(`❌ Error submitting to Bing: ${err.message}`)
})

// Optional: Also ping Yandex
const yandexUrl = `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
https.get(yandexUrl, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Sitemap submitted to Yandex successfully!')
  }
}).on('error', () => {})

console.log('✨ Sitemap submission complete!')
console.log('📊 Check Google Search Console for indexing status:')
console.log('   https://search.google.com/search-console')