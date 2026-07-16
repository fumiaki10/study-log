window.addEventListener('load', function () {
  const ItemButton = document.getElementById("flex-button id1")
  const ItemButton2 = document.getElementById("flex-button id2")
  const ItemButton3 = document.getElementById("flex-button id3")
  const ItemButton4 = document.getElementById("flex-button id4")
  const ItemButton5 = document.getElementById("flex-button id5")
  const FlexItems = document.getElementById("flex-container")

  ItemButton.addEventListener('click', function () {
    FlexItems.classList.remove(...FlexItems.classList)
    FlexItems.classList.add("class", "btn-primary")

  })
  ItemButton2.addEventListener('click', function () {
    FlexItems.classList.remove(...FlexItems.classList)
    FlexItems.setAttribute("class", "btn-primary2")

  })
  ItemButton3.addEventListener('click', function () {
    FlexItems.classList.remove(...FlexItems.classList)
    FlexItems.setAttribute("class", "btn-primary3")

  })
  ItemButton4.addEventListener('click', function () {
    FlexItems.classList.remove(...FlexItems.classList)
    FlexItems.setAttribute("class", "btn-primary4")

  })
  ItemButton5.addEventListener('click', function () {
    FlexItems.classList.remove(...FlexItems.classList)
    FlexItems.setAttribute("class", "btn-primary5")

  })
})
