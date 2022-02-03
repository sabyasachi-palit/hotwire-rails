import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ["output"];
  }
  
  // Called when the class is connected to the HTML element.
  connect(){
    this.clickCount = 0
    this.updateOutput();
  }

  // Called via:
  // data-action="click->hello#addOne"
  addOne() {
    this.clickCount++;
    this.updateOutput();
  }

  // Called via:
  // data-action="click->hello#deleteOne"
  deleteOne() {
    this.clickCount--;
    this.updateOutput();
  }
  
  updateOutput() {
    this.outputTarget.innerText = this.clickCount
  }
}
