const onClickadd = () => {

	const textbox = document.getElementById("add-text")
	const text = textbox.value
	textbox.value = ""

	const div = document.createElement("div")
	const li = document.createElement("li")
	const p = document.createElement("p")
	p.textContent = text

	const del = document.createElement("button")
	del.textContent = "削除"	
	p.appendChild(del)
	console.log(del)


	del.addEventListener("click",()=>{
		p.textContent = del
		document.getElementById("adds").removeChild(li)
	})

	li.appendChild(div)
	div.appendChild(p)
	
	document.getElementById("adds").appendChild(li)

}

const memo = document.getElementById("addtarget")
memo.addEventListener("click",()=>onClickadd())
//console.log(b)
