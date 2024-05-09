import React, { useEffect, useState } from 'react';

class TypingObject {
  curPhraseIndex = 0;

  constructor(element, phrases, loop = true, typingSpeed = 100, pause = 1000, deletingSpeed = 50) {
    this.element = element; // Assign the DOM element to be typed into
    this.phrases = phrases; // Assign the array of phrases to be typed
    this.loop = loop;
    this.curPhraseIndex = 0;
    this.typingSpeed = typingSpeed;
    this.pause = pause;
    this.deletingSpeed = deletingSpeed;
  }

  sleep(milliSeconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliSeconds); // A helper function to pause execution for a specified time
    });
  }

  typeAndDelete = async () => {
    let repeat = true;
    while (repeat) {
      let curPhrase = this.phrases[this.curPhraseIndex];
      for (let i = 0; i < curPhrase.length; i++) {
        this.element.innerText = curPhrase.substring(0, i + 1);
        await this.sleep(this.typingSpeed);
      }
      await this.sleep(this.pause);

      for (let i = curPhrase.length; i > 0; i--) {
        this.element.innerText = curPhrase.substring(0, i);
        if (i <= 1) {
          this.element.innerText = '\u00A0';
          continue;
        }
        await this.sleep(this.deletingSpeed);
      }

      if (this.curPhraseIndex === this.phrases.length - 1) {
        if (!this.loop) {
          break;
        }
        this.curPhraseIndex = 0;
      } else {
        this.curPhraseIndex++;
      }
    }
  };
}



const TypingComponent = ({id,clasName, phrases, loop = true, typingSpeed = 100, pause = 1000, deletingSpeed = 50 }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (element) {
      const typingElement = new TypingObject(element, phrases, loop, typingSpeed, pause, deletingSpeed);
      typingElement.typeAndDelete();
    }
  }, [element, phrases, loop, typingSpeed, pause, deletingSpeed]);

  return <span className={clasName} id={id} ref={setElement} />;
};

export default TypingComponent;
