const subsector = [
  "aplikasi",
  "pegembangan permainan",
  "arsitektur",
  "desain interior",
  "desain komunikasi visual",
  "desain produk",
  "feysen",
  "film, animasi, dan video",
  "fotografi",
  "kriya",
  "kuliner",
  "musik",
  "penerbitan",
  "periklanan",
  "seni pertunjukan",
  "seni rupa",
  "televisi dan radio",
];
for (let i = 0; i < subsector.length; i++) {
  let card = document.createElement("div");
  document.getElementById("subsector").appendChild(card);
  card.classList.add(
    "px-2",
    "py-1",
    "w-full",
    "border",
    "bg-white",
    "lg:text-sm",
    "2xl:text-2xl",
    "capitalize"
  );
  card.append(`${i + 1}. ${subsector[i]}`);
}
