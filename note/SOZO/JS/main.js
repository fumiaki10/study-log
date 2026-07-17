function FlexButtons() {
  const ItemButton = document.getElementById("flex-button1")
  const ItemButton2 = document.getElementById("flex-button2")
  const ItemButton3 = document.getElementById("flex-button3")
  const ItemButton4 = document.getElementById("flex-button4")
  const ItemButton5 = document.getElementById("flex-button5")
  const FlexItems = document.getElementById("flex-container")
  const FlexRemoveButtons = function () {
    FlexItems.classList.remove(...FlexItems.classList)
  }

  function showItem(e) {
    if (e.target.nodeName === 'INPUT') {
      FlexRemoveButtons()
      if (e.target.id === "flex_button1")
        FlexItems.classList.add("class", "btn-primary")
      if (e.target.id === "flex_button1")
        FlexItems.classList.add("class", "btn-primary2")
      if (e.target.id === "flex_button1")
        FlexItems.classList.add("class", "btn-primary3")
      if (e.target.id === "flex_button1")
        FlexItems.classList.add("class", "btn-primary4")
      if (e.target.id === "flex_button1")
        FlexItems.classList.add("class", "btn-primary5")
    }
  }


  let flexButton = document.getElementById('buttons');
  flexButton.addEventListener('click', e => showItem(e))



  // ItemButton.addEventListener('click', function () {
  //   FlexRemoveButtons()
  //   FlexItems.classList.add("class", "btn-primary")
  // })
  // ItemButton2.addEventListener('click', function () {
  //   FlexRemoveButtons()
  //   FlexItems.classList.add("class", "btn-primary2")
  // })
  // ItemButton3.addEventListener('click', function () {
  //   FlexRemoveButtons()
  //   FlexItems.classList.add("class", "btn-primary3")
  // })
  // ItemButton4.addEventListener('click', function () {
  //   FlexRemoveButtons()
  //   FlexItems.classList.add("class", "btn-primary4")
  // })
  // ItemButton5.addEventListener('click', function () {
  //   FlexRemoveButtons()
  //   FlexItems.classList.add("class", "btn-primary5")
  // })
}

window.addEventListener('load', FlexButtons)