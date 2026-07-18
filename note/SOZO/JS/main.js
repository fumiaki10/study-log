import { flexBtnLayout } from "./layoutData.js"

function FlexButtons() {
  const flexElement = document.getElementById("buttons")

  const FlexItems = document.getElementById("flex-container")
  const FlexRemoveButtons = function () {
    FlexItems.classList.remove(...FlexItems.classList)
  }

  function createButton() {
    let itemsHtml = '';

    flexBtnLayout.forEach(function (value) {
      itemsHtml +=
        `<input type="radio" name="button" data-class=${value.name}>
        <label>${value.label}</label>`;
    });

    // for (let i = 1; i <= flexBtnLayout.length; i++) {
    //   itemsHtml += `<input type="radio" name="button" data-class=flexBtnLayout>`;
    // }

    flexElement.innerHTML = itemsHtml;
  }
  createButton();


  function showItem(e) {
    FlexRemoveButtons()
    FlexItems.classList.add(e.target.dataset.class)
  }


  let flexButton = document.getElementById('buttons');
  flexButton.addEventListener('click', e => showItem(e))
}

window.addEventListener('load', FlexButtons)