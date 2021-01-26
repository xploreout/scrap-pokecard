const axios = require('axios');
const cheerioModule = require('cheerio');
const cheerio = require('cheerio')

async function getPokemon (){
  try {
    const {data} = await axios.get('https://limitlesstcg.com/cards/viv/?show=all&display=full&sort=set&cpp=all')
    const $ = cheerio.load(data);
    const cards = []

    $('.card-page-main').each((index, element)=> {
      const $element = $(element);
      const title = $element.find('.card-text-name').text()

      const imgUrl = $element.find('.card-picture.card-image-img').attr('src')

      const priceUsd = $element.find('.card-price.usd').text()
      const priceEuro = $element.find('.card-price.euro').text()

      cards.push({title, imgUrl, priceUsd, priceEuro});

      
    })
    return cards
  } catch (error) {
    console.log(error)
  }
  
}
module.exports = getPokemon