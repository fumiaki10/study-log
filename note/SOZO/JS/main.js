function FlexButtons() {
  const FlexItems = document.getElementById("flex-container")
  const FlexRemoveButtons = function () {
    FlexItems.classList.remove(...FlexItems.classList)
  }

  function showItem(e) {
    FlexRemoveButtons()
    FlexItems.classList.add(e.target.dataset.class)
  }


  let flexButton = document.getElementById('buttons');
  flexButton.addEventListener('click', e => showItem(e))
}

window.addEventListener('load', FlexButtons)