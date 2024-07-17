 document
        .getElementById("expandButton")
        .addEventListener("click", function () {
          var menu = document.getElementById("menu");
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            this.textContent = "页面导航";
          } else {
            menu.classList.add("show");
            this.textContent = "收起选项";
          }
        });