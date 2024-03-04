fetch("../components/header/header.html")
  .then((res) => {
    if (res.ok) {
      return res.text();
    }
  })
  .then((htmlSnippt) => {
    header.innerHTML = htmlSnippt;
  });
