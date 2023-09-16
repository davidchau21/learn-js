// Học tagged Template literals
// Nội dung bài học:

function highlight ([first, ...strings],...values) {
    return values.reduce(function (acc, currentVl){
     return [...acc, `<span>${currentVl}</span>`, strings.shift()]
    },[first]
    );
 }
 var brand ='F8';
 var course ='JavaScript';
 const html = highlight`Học lập trình ${course} tại ${brand} !`;
 // Bài toán ở đây là tôi muốn highlight những chữ bên trong nội suy này lên ,ta có thể gói nó lại trong một thẻ span rồi ta tự css. 
 //Ý tưởng : trong phầm tham số ta sẽ tách nó thành 2 phần , đối số đầu tiên nó sẽ là destructuring , và đối số thứ 2 sẽ là rest parameter
 // Dùng reduce với thằng Values và  cái biến được khởi tạo ban đầu sẽ là first 
 console.log(html.join(''));
//  document.getElementById('box').innerHTML= html.join('');