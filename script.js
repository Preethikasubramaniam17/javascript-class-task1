// document.head.innerHTML ='<title>Dom class</title>';
// // document.body.innerHTML +='<p>Hello world</p>'
// // document.body.innerHTML +="Hello world1"

// let z=document.createElement('p')
// document.body.append(z)
// z.textContent='welcome to dom class'
// create parent
// let div =document.createElement('div')
// div.style.width='200px';
// div.style.height='200px';
// div.style.background='red';
// document.body.append(div);
// // append child and append child into parent
// let para=document.createElement('p');
// para.textContent='div para';
// para.style.color='skyblue';
// para.style.fontSize='25px';
// div.appendChild(para);

// // set attribute and get attribute
// let link=document.createElement('a');
// document.body.append(link);
// link.textContent='home'
// link.setAttribute('href','#');
// console.log(link.getAttribute('href'))
// link.removeAttribute('href');

// link.href='#';
// link.remove();

// let img=document.createElement('img');

// img.src='https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?rs=1&pid=ImgDetMain';
// img.style.width= '300px';
// img.style.height='150px';
// img.style.borderRadius='30px';

// document.body.append(img);


// // prompt
// // let a=prompt('enter first value');
// // let b=prompt('enter second value');
// // document.write(parseInt(a)+parseInt(b));

// accessing Element
// let input =document.createElement('p');
// input.id='username';
// document.body.append(input);
// let c =document.getElementById('username');

// c.textContent='This is the Text Content';
// document.body.append(c);
// c.style.color='red';
// c.style.fontSize='45px';

// let elements= document.getElementsByClassName('highlight');
// console.log(elements);
// for(let i=0; i<elements.length;i++){
//     elements[i].style.background='orange';
// }

// let query=document.querySelector('all');
// query.style.color='yellow';

// let all = document.
// querySelectorAll('p');
// console.log(all);

// for(let i=0;i<all.length;i++){
//     all[i].style.color='yellow'
// }

// let paranew =document
// createElement('p')
// paranew.classname='highlight';
// document.body.append(paranew)

let tag=document.getElementsByClassName('ol');

console.log(tag[0].textContent);
console.log(tag[0].innerText);






