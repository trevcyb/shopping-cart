import React from 'react';
import Product from "./Product";
import prs from "./images/SE 245.png";
import ibanez from "./images/RG470AHM.jpg";
import palmer from "./images/p-1300.jpg";
import amp from "./images/MG30GFX.jpg";
import picks from "./images/picks.jpg";

const Shop = () => {

    let productList = [
        {
            productName: "PRS SE 245",
            description: 'The SE 245 will cover all the tones you need in style and is the answer for players who grew up using short scale, single-cutaway guitars.',
            unitCost: 450,
            imagesrc: prs
        },
        {
            productName: "Ibanez RG470AHM",
            description: 'Wizard III Bolt-On Maple Neck, Ash Body, Maple Fingerboard / Black Dot Inlay,24 Jumbo Frets / 25.5" Scale, Double-Locking Tremolo Bridge',
            unitCost: 400,
            imagesrc: ibanez
        },
        {
            productName: "Palmer P-1300",
            description: 'Style: 39" Classical, Body: Linden top, Catalpa back and sides, Fingerboard: Rosewood, Frets: 21 Nickel, Bridge: Basswood, Tuners: Classical, Chrome Machine Heads',
            unitCost: 100,
            imagesrc: palmer
        },
        {
            productName: "Marshall MG30GFX",
            description: '30-watt, 4-channel 1x10" Guitar Combo Amplifier with 3-band EQ, Digital Effects/Reverb, Line In, and Speaker-emulated Line/Headphone Outs',
            unitCost: 200,
            imagesrc: amp
        },
        {
            productName: "Pick Collection",
            description: 'A real Spectrum of Plectrums',
            unitCost: 20,
            imagesrc: picks
        }
    ]

    return (
        <div className="container">
            <h2 className="center-align">Welcome to the Shop!</h2>
            <div className="row">
                {productList.map((product) => (
                    <Product product={product} key={product.productName} />
                ))}
            </div>
        </div>
    )

}

export default Shop