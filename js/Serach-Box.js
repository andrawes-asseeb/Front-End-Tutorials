
const SearchBtn = document.querySelector(".search-btn")
const SearchBox = document.querySelector(".search-box")
const Closebtn = document.querySelector(".close-btn")
const SearchInput = document.querySelector("input")
const SearchData = document.querySelector(".search-Data")

SearchBtn.onclick = () => {
  SearchBox.classList.add('active')
  SearchInput.classList.add('active')
  SearchBtn.classList.add('active')
  Closebtn.classList.add('active')
  if(SearchInput.value != "") {
    SearchData.innerHTML = `You Typed " ${SearchInput.value} "`
  } else {
    SearchData.innerHTML = ''
  }
}

SearchInput.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    SearchData.innerHTML = `You Typed " ${SearchInput.value} "`
  }
})

Closebtn.onclick = () => {
  SearchBox.classList.remove('active')
  SearchInput.classList.remove('active')
  SearchInput.value = ''
  SearchBtn.classList.remove('active')
  Closebtn.classList.remove('active')
}

