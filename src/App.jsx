import './App.css';
import Card from './Card.jsx';
import React from 'react';

export default function App() {
  return (
    <>
      <img className='headerImg' src="/royal_themed_divider_cropped.png"></img>
      <h1>J-Fashion Shops</h1>
      <h2>Popular Japanese Fashion (J-Fashion) brands & retailers on the web.</h2>
      <Card 
        image = '/devilinspired_Logo.svg'
        name = "Devil Inspired" 
        link = "https://www.devilinspired.com/"
        numLikes = "32" 
        description = "We're a group of kawaii fashion fevers, especially Lolita Fashion. Started in 2013, we are offering our customers our SELECTED items from indie Lolita and Kawaii brands. All items are original designs."/>
      <Card 
        image = '/HarajukuHearts_Logo.png'
        name = "Harajuku Hearts" 
        link = "https://www.harajukuhearts.com/"
        numLikes = "100" 
        description = "Harajuku Hearts is a Japanese fashion boutique located in the United States that specializes in Japanese street fashion. We carry a variety of clothing and accessories from popular Japanese brands such as Atelier Pierrot, Enchantlic Enchantilly, Listen Flavor, and many others."/>
      <Card 
        image = '/LolitaWardrobe_Logo.png'
        name = "Lolita Wardrobe" 
        link = "https://www.lolitawardrobe.com/"
        numLikes = "100" 
        description = "Lolita Wardrobe is a Taobao reseller. We work with Taobao indie brands closely, and constantly update our website with newest Lolita items from these brands. This is why our prices are lower, why our shipping is fast, and why we have the first hand information of Taobao indie brands."/>
      <Card 
        image = '/BabytheStarsShineBright_Logo.png'
        name = "BABY, THE STARS SHINE BRIGHT" 
        link = "https://shop.baby-aatp.com/"
        numLikes = "100" 
        description = "Established in 1988, &quot;Baby, the Stars Shine Bright&quot; is a Lolita fashion clothing brand founded by Akinori and Fumiyo Isobe in Tokyo, Japan. The sister brand, &quot;Alice and the Pirates,&quot; was created in 2004.  Currently, our company boasts 28 shops across Japan, with flagship stores in both Paris and San Francisco."/>
      <Card 
        image = '/Wunderwelt_Logo.png'
        name = "Wunderwelt" 
        link = "https://www.wunderwelt.jp/en"
        numLikes = "100" 
        description = "Wunderwelt is the first choice for affordable Lolita and Gothic Lolita clothes both used and new. You can obtain sought-after designs by popular brands such as Angelic Pretty, BABY, THE STARS SHINE BRIGHT, and more."/>
      <Card 
        image = '/LaceMarket_Logo.png'
        name = "Lace Market" 
        link = "https://egl.circlly.com/"
        numLikes = "100" 
        description = "Welcome to Lace Market, an online marketplace for Lolita fashion, second-hand and new! This project was created to provide the online Lolita community with a more robust and cohesive marketplace for the sales of Lolita fashion items and related goods."/>
      <Card 
        image = '/AngelicPretty_Logo.png'
        name = "Angelic Pretty" 
        link = "https://www.angelicpretty-usa.com/"
        numLikes = "100" 
        description = "Angelic Pretty, founded in 1979, is a brand dedicated to bringing alive the hopes and dreams of the fairy-tale princesses that you dreamed about when you were young. We bring you fantastic styles of clothing adorned in frills, lace, ribbons, and more."/>
      <Card 
        image = '/DandyPuppeteer_Logo.png'
        name = "Dandy Puppeteer" 
        link = "https://www.dandypuppeteer.com/"
        numLikes = "100" 
        description = "Dandy Puppeteer is an indie brand that specializes in Japanese Lolita & Ouji Fashion. Our handmade products include jewelry, clothing, and accessories. Dandy aims to create an inclusive space that embraces the idea that alternative fashion can be worn by anyone."/>
      <Card 
        image = '/Modakawa_Logo.jpeg'
        name = "Modakawa" 
        link = "https://www.modakawa.com/"
        numLikes = "100" 
        description = "“Modakawa” comes from MODA (fashion) and KAWAII (cute), which perfectly represents our ambition: to provide and share the latest kawaii fashion trends to cosplayers, anime lovers, comics fans, and gamers."/>
      <Card 
        image = '/LolitaCollective_LogoPink.png'
        name = "Lolita Collective" 
        link = "https://store.lolitacollective.com/"
        numLikes = "100" 
        description = "Lolita Collective was created by a group of American Midwest-based designers in 2013 as a way to sell their hand-crafted items together at conventions. With time, the concept has expanded to include over 80 indie designers and clothing producers from all over the world."/>
      <Card 
        image = '/MyLolitaDress_Logo.png'
        name = "My Lolita Dress" 
        link = "https://www.my-lolita-dress.com/"
        numLikes = "100" 
        description = "We are a group of experienced tailors and lovers of Lolita clothes, with the passion and experience to bring you local brands from China. We hope to bring high quality Lolita clothes worldwide, at fair and affordable prices."/>
      <Card 
        image = '/GlitzyWonderland_Logo.png'
        name = "Glitzy Wonderland" 
        link = "https://www.glitzywonderland.com/"
        numLikes = "100" 
        description = "Welcome to Glitzy Wonderland, your ultimate destination for Lolita, Gothic, Punk, and Cosplay clothing, shoes, socks, and accessories at affordable prices. We offer worldwide free shipping and accept secure payments via PayPal and Western Union."/>
    </>
  )
}


