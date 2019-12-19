import React from 'react';

class GearArt extends React.Component {
  constructor(props) {
    super(props)
    this.spawnObject = this.spawnObject.bind(this)
    this.objectHandle = this.objectHandle.bind(this)
    this.objects = {
      "mushroom": [0, window.splashMushroom],
      "star": [0, window.splashStar],
      "flower": [0, window.splashFlower],
    }

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  objectHandle(selection, selectionId) {

    $(".gear-container").append(`<img id="${selectionId}" class="hidden marginify gear-art art-${selection} animated-art" src = ${this.objects[selection][1]} />`);

    const object = document.getElementById(`${selectionId}`)
    object.style.top = "275px"; 
    object.style.left = "405px";

    const jObject = $(`#${selectionId}`);

    if (jObject.hasClass("art-flower")) {
      jObject.removeClass('hidden');
      jObject.addClass('go-flower-go');
    } else if (jObject.hasClass("art-star")) {
      jObject.removeClass('hidden');
      jObject.addClass('go-star-go');
    } else if (jObject.hasClass("art-mushroom")) {

      const randomTop = this.getRandomInt(250, 750);
      object.style.top = `${randomTop}px`;
      const randomLeft = this.getRandomInt(50, 1050);
      object.style.left = `${randomLeft}px`;

      // object.style.opacity = 0

      // object.style.transform = scale(0.2);
      jObject.removeClass('hidden');
      // object.style.transition = "opacity .25s ease -in -out"
      jObject.addClass('go-mushroom-go');
    }
    
 
    
    console.log(object)
  }

  spawnObject () {
    
    const weightedObjects = [
      "mushroom", "mushroom", "mushroom",
      "star",
      "flower", "flower", 
    ]
    const selection = weightedObjects[Math.floor(
      Math.random() * weightedObjects.length
    )]



    const selectionId = `${selection}-${this.objects[selection][0]}`

    this.objectHandle(selection, selectionId);
    this.objects[selection][0]++;
  }

  render() {
    return (
      <div className="gear-container">
        <div className="drop-shadow"></div>
        <img
          id="bomb-1"
          className="marginify gear-art art-bomb animated-art"
          src={window.splashBomb} />
        <img
          id="coin-1"
          className="marginify gear-art art-coin-1 animated-art first-art-hidden"
          src={window.splashCoin} />
        <img
          id="coin-2"
          className="marginify gear-art art-coin-2 animated-art"
          src={window.splashCoin} />
        <img
          id="cartridge-1"
          className="marginify gear-art art-cartridge animated-art first-art-hidden"
          src={window.splashCartridge} />

        <img
          onClick={this.spawnObject}
          className="marginify gear-art art-block second-art-hidden"
          src={window.splashBlock} />

        <img 
          className="marginify gear-art art-potion" 
          src={window.splashPotion} />
        <img 
          className="marginify gear-art art-smartphone" 
          src={window.splashSmartphone} />
        <img 
          className="marginify gear-art art-desktop first-art-hidden" 
          src={window.splashDesktop} />

        <img
          className="marginify gear-art art-phone"
          src={window.splashPhone} />
        <img
          className="marginify gear-art art-controller first-art-hidden"
          src={window.splashController} />

        <img
          className="marginify gear-art art-disc first-art-hidden"
          src={window.splashDisc} />
        <img 
          className="marginify gear-art art-laptop second-art-hidden" 
          src={window.splashLaptop} />
        
      </div>
    )
  }
}

export default GearArt