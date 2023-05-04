import React, { useState } from 'react'
import ProductItems from './ProductItems';

export default function Product() {
  const  articles=[
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Resistors",
            "description": "Product 1 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://static4.arrow.com/-/media/arrow/images/miscellaneous/0/0916-resistor-color-code-main.jpg?mw=734&hash=C01919193FEF22D4CD7A974A4141C1D4",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Capacitors",
            "description": "Product  ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Capacitors_%287189597135%29.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Transistors",
            "description": "Product 2 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2019/10/electronicdesign_29132_transistor_646291934.png?auto=format,compress&fit=crop&h=556&w=1000&q=45",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Inductors",
            "description": "Product 3 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.tutorialspoint.com/basic_electronics/images/inductor.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Varistors",
            "description": "Product 4 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.electronicshub.org/wp-content/uploads/2014/12/Variastor.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "LED",
            "description": "Product 5 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.electronicshub.org/wp-content/uploads/2021/05/Light-Emitting-Diode-Basics.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Thermistors",
            "description": "Product 6 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://www.electricaltechnology.org/wp-content/uploads/2021/11/What-is-a-Thermistor-Types-of-Thermistors-Construction-and-Applications-768x408.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Crystals",
            "description": "Product 7 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://startingelectronics.org/beginners/components/crystal/crystal.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Wire Harness",
            "description": "Product 8 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://5.imimg.com/data5/LR/UA/QG/SELLER-4193037/electric-cable-harness-500x500.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Voltage regulator",
            "description": "Product 9 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://circuitdigest.com/sites/default/files/field/image/Voltage-Regulators.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Ferrite Bead",
            "description": "Product 10 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/7/73/Cable_end.JPG",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Connectors",
            "description": "Product 11 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://img.fruugo.com/product/3/01/138449013_max.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Fuses",
            "description": "Product 12 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/b/be/Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Mic/Speaker",
            "description": "Product 13 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://cdn.shakedeal.com/images/detailed/789/SDPCS0045300_2806-9s.png",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Battery",
            "description": "Product 14 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://components101.com/sites/default/files/components/Different-Types-of-Batteries.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Buzzer",
            "description": "Product 15 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://5.imimg.com/data5/SELLER/Default/2020/11/QJ/BZ/MK/37611021/buzzer-500x500.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Cables/Wires",
            "description": "Product 16 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://w7.pngwing.com/pngs/781/68/png-transparent-electrical-cable-electrical-wires-cable-wiring-diagram-electronics-wire-and-cable-miscellaneous-electronics-electrical-wires-cable-thumbnail.png",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Solder Paste",
            "description": "Product 17 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://rukminim1.flixcart.com/image/416/416/xif0q/soldering-iron/2/f/x/1-mechanic-xg50-soldering-paste-for-smd-rework-electronics-original-imagk3fkzthkpcgg.jpeg?q=70",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "PCB",
            "description": "Product 18 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://circuitdigest.com/sites/default/files/projectimage_tut/Basics-of-PCB.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Mosfet",
            "description": "Product 19 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.tutorialspoint.com/basic_electronics/images/mosfet.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Diodes",
            "description": "Product 20 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.gadgetronicx.com/wp-content/uploads/2020/02/diode-tutorial-1024x649.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Transistor",
            "description": "Product 21 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.tutorialspoint.com/basic_electronics/images/field_effect_transistor.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Antenaa",
            "description": "Product 22 ka description",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/7/76/Antenna.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "LCD/TFT",
            "description": "Product 23 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.haoyuelectronics.com/Attachment/2.4-LCD-Module/2.4-LCD-Module-1.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Switches",
            "description": "Product 24 ka description",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://5.imimg.com/data5/MH/WD/DS/SELLER-1225448/electronic-switches-1000x1000.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        }
    ]
    

    const [toDisplay,settoDisplay]=useState(articles);
     

   
    
  return (
    <div className="container">
    
    <div className='row mx-3 my-3'>
    
        {
         
            
           toDisplay.map((i)=>{
                return <div className="col-sm-4 my-4">
                  
                    <ProductItems title={i.title.slice(0,20)} discription={i.description?i.description.slice(0,50):"this is null"} imageurl={i.urlToImage} url={i.url} />
                    
                </div>
            })
        }
    </div>
    
  </div>
  )
}
