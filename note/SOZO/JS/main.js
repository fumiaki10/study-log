window.addEventListener('load', function () {
  const ItemButton = document.getElementById("flex-button id1")
  const FlexItems = document.getElementById("flex-container")

  ItemButton.addEventListener('click', function () {
    FlexItems.setAttribute("style", "display:flex;")
  })
})

