document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
let charity = {
  data: [
    {
      title: "Chiến dịch trồng cây",
      description:
        "Mỗi đóng góp giúp trồng thêm cây xanh và bảo vệ môi trường.",
      progress: "Đã được quyên góp: 2.000.000₫",
    },
    {
      title: "Quỹ hỗ trợ rừng bị cháy",
      description:
        "Hỗ trợ khắc phục thiệt hại và phục hồi hệ sinh thái sau hỏa hoạn.",
      progress: "Đã được quyên góp: 5.000.000₫",
    },
    {
      title: "Ngày hội xanh cộng đồng",
      description:
        "Tạo sân chơi cho cộng đồng tham gia làm sạch môi trường và bảo vệ rừng.",
      progress: "Đã được quyên góp: 10.000.000₫",
    },
    {
      title: "Quỹ bảo vệ nguồn nước",
      description:
        "Giúp duy trì và bảo vệ nguồn nước sạch cho các khu vực sinh sống.",
      progress: "Đã được quyên góp: 1.000.000₫",
    },
  ],
};

for (let items of charity.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let container = document.createElement("div");
  container.classList.add("container");

  let title = document.createElement("h5");
  title.classList.add("product-name");
  title.innerHTML = items.title;

  let description = document.createElement("div");
  description.innerHTML = items.description;

  let progress = document.createElement("div");
  progress.innerHTML = items.progress;

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(progress);

  card.appendChild(container);
  document.getElementById("charity-list").appendChild(card);
}
