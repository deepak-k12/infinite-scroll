ol = document.querySelector('#infi-list');

for(let i=1;i<10;i++)
{
  const li = document.createElement('li')
  li.textContent = 'Item '+i
  ol.append(li)
}

ol.addEventListener('scroll',() => {

  const txt = ol.lastElementChild.innerText
  const arr = txt.split(" ")
  let int = Number(arr[1])
  int += 1
  const li = document.createElement('li')
  li.textContent = 'Item '+int
  ol.append(li)

})