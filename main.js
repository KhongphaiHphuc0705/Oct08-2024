//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
// 36.16 - Dom - ví dụ vận dụng
//Chọn phần tử cha
const container = document.getElementById("container");

let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
for (let i = 1; i <= 151; i++) {
  //Tạo 1 khối div để chứa phần tử img và số thứ tự
  const newDiv = document.createElement("div");
  //thêm div vào cuối container
  //và lấy node mới tạo ra gán vào parentDiv
  const parentDiv = container.appendChild(newDiv);
  //Tạo phần tử con, thêm vào trong parentDiv
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  newDiv.addEventListener("mouseover", () => {
    newDiv.style.transform = "scale(1.1)";
    newDiv.style.transition = "transform 0.25s ease";
  });
  newDiv.addEventListener("mouseleave", () => {
    newDiv.style.transform = "scale(1)";
  });
  //Thêm vào trong khối parentDiv
  parentDiv.appendChild(newImg);
  //thêm thẻ span số thứ tự vào trong parentDiv
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  newSpan.setAttribute("class", "text");
  parentDiv.appendChild(newSpan);
}
