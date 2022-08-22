let wrapper = document.getElementById("wrapper");
let card = document.getElementById("card");

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

function generateContent() {
  wrapper.appendChild(card);
  for (let i = 0; i < data.length; i++) {
    let thumbnail = document.createElement("img");
    let wrapperContent = document.createElement("div");
    let date = document.createElement("p");
    let title = document.createElement("h1");
    let area = document.createElement("h3");
    card.appendChild(thumbnail);
    card.appendChild(wrapperContent);
    wrapperContent.appendChild(date);
    wrapperContent.appendChild(title);
    wrapperContent.appendChild(area);
    thumbnail.classList.add("rounded-t-2xl", "justify-start", "w-full");
    wrapperContent.classList.add("pt-3", "pl-3", "w-11/12", "pb-5");
    date.classList.add("text-gray-400", "lg:text-sm");
    title.classList.add("font-bold");
    area.classList.add(
      "text-blue-900",
      "font-semibold",
      "justify-end",
      "lg:text-sm",
      "pt-3"  
    );

    thumbnail.src = data[i].img;
    title.append(data[i].title);
    date.append(data[i].createdAt);
    area.append(data[i].area);
  }
}

generateContent();
