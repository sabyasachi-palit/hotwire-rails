import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ["query", "output"];
  }
  
  // Called when the class is connected to the HTML element.
  connect(){
    console.log("Connected");
  }

  search(){
    const value = this.queryTarget.value
    
    if (value.length >= 3) {
      fetch('/search?query='+value, {
        headers: { accept: 'application/json'}
      }).then((response) => response.json())
      .then(data => { 
        var searchResultHtml = "";
        var searchResultArray = Object.values(data)[0].data.suggestions
        if (searchResultArray.length > 0) {
          searchResultArray.forEach(poi => {
            searchResultHtml += this.poiTemplate(poi)
          });
        } else {
          searchResultHtml = '<div><ul><li>No result found</li></ul></div>'
        }
        this.outputTarget.innerHTML = searchResultHtml;
       });
    } else {
      this.outputTarget.innerHTML = '<div><ul><li>Minimum 3 characters needed for search</li></ul></div>';
    }
  }

  poiTemplate(poi) {
    return `<div>
    <ul>
    <li>${poi.name}</li>
    </ul>
    </div> `
  }
}
