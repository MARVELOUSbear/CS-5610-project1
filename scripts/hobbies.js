function MainModule() {
  let ret = {};
  const imgList = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg",
    "ski1.jpg",
    "ski2.jpg",
    "ski3.jpg",
    "ski4.jpg",
    "ski5.jpg",
  ];
  const titleList = [
    "Ramen Parlor",
    "Gyu-Kaku Japanese BBQ",
    "Luke's Lobster Back Bay",
    "Haidilao Hot Pot",
    "Friendship BBQ",
    "Lake Tahoe Heavenly Ski Resort",
    "Lake Tahoe Heavenly Ski Resort",
    "Lake Tahoe Heavenly Ski Resort",
    "Lake Tahoe Heavenly Ski Resort",
    "Lake Tahoe Heavenly Ski Resort",
  ];
  const commentList = [
    "https://www.yelp.com/biz/ramen-parlor-san-mateo",
    "https://www.yelp.com/biz/gyu-kaku-japanese-bbq-cupertino",
    "https://www.yelp.com/biz/lukes-lobster-back-bay-boston",
    "https://www.yelp.com/biz/haidilao-hot-pot-cupertino",
    "https://www.yelp.com/biz/friendship-bbq-boston-4",
    "On the lift going to ski resort. Very beautiful Lake Tahoe view.",
    "Clear sky, this spot is where my friend was learning ski.",
    "I am taking a rest up on the hill, enjoying the weather and Lake Tahoe scene.",
    "Let's go down!",
    "About to leave, I am not a beginner!",
  ];

  let galleryAnchor = document.querySelector("#galleryAnchor");

  ret.createGallery = function () {
    function createCard(index) {
      console.log(index);
      let divOut = document.createElement("div");
      let imgUrl = imgList[index];
      divOut.setAttribute("class", "col-md-6 col-lg-4");
      galleryAnchor.appendChild(divOut);

      let divMid = document.createElement("div");
      divMid.setAttribute("class", "card border-0 transform-on-hover");
      divOut.appendChild(divMid);

      let aTag = document.createElement("a");
      aTag.setAttribute("class", "lightbox");
      aTag.setAttribute("href", "images/" + imgUrl);
      divMid.appendChild(aTag);

      let imgTag = document.createElement("img");
      imgTag.setAttribute("class", "card-img-top");
      imgTag.setAttribute("src", "images/" + imgUrl);
      if (index < 5) {
        imgTag.setAttribute("alt", "Food Image");
      } else {
        imgTag.setAttribute("alt", "Ski Image");
      }
      aTag.appendChild(imgTag);

      let divIn = document.createElement("div");
      divIn.setAttribute("class", "card-body");
      divMid.appendChild(divIn);

      if (index < 5) {
        let aTag2 = document.createElement("a");
        aTag2.href = commentList[index];
        let linkText = document.createTextNode(titleList[index]);
        aTag2.appendChild(linkText);
        divIn.appendChild(aTag2);
      } else {
        let smTitle = document.createElement("h6");
        let smTitleText = document.createTextNode(titleList[index]);
        smTitle.appendChild(smTitleText);
        divIn.appendChild(smTitle);

        let desTag = document.createElement("p");
        desTag.setAttribute("class", "text-muted card-text");
        let desText = document.createTextNode(commentList[index]);
        desTag.appendChild(desText);
        divIn.appendChild(desTag);
      }
    }

    for (let i = 0; i < imgList.length; i++) {
      createCard(i);
    }
  };
  return ret;
}

const main = MainModule();

main.createGallery();
