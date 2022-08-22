let card = document.getElementById("card");
let img = document.getElementById("img");
let date = document.getElementById("date");
let title = document.getElementById("title");
let area = document.getElementById("area");

const data = [
  {
    img: "https://akcdn.detik.net.id/api/wm/2022/08/18/adrien-rabiot_169.jpeg?wid=54&w=650&v=1&t=jpeg",
    title: "Ini berita",
    createdAt: "20  juni 2022",
    area: "bekasi",
  },
  {
    img: "https://akcdn.detik.net.id/api/wm/2022/08/18/adrien-rabiot_169.jpeg?wid=54&w=650&v=1&t=jpeg",
    title: "Ini berita",
    createdAt: "20  juni 2022",
    area: "bekasi",
  },
  {
    img: "https://akcdn.detik.net.id/api/wm/2022/08/18/adrien-rabiot_169.jpeg?wid=54&w=650&v=1&t=jpeg",
    title: "Ini berita",
    createdAt: "20  juni 2022",
    area: "bekasi",
  },
  {
    img: "https://akcdn.detik.net.id/api/wm/2022/08/18/adrien-rabiot_169.jpeg?wid=54&w=650&v=1&t=jpeg",
    title: "Ini berita",
    createdAt: "20  juni 2022",
    area: "bekasi",
  },
];

for (let i = 0; i < data.length; i++) {
  img.src = data[i].img;
  title.innerHTML = data[i].title;
  date.innerHTML = data[i].createdAt
}
