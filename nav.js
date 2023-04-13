document.addEventListener("click", begin);
const btn = document.getElementById('globalnav-menutrigger-button');
function begin() {
  if (btn.classList.contains("active")) {
    // 当前处于 active 状态
    btn.classList.remove("active");
    document
    .getElementById("globalnav-anim-menutrigger-bread-top-close")
    .beginElement();
    document
    .getElementById("globalnav-anim-menutrigger-bread-bottom-close")
    .beginElement();
  } else {
    // 执行关闭操作,当前不处于 active 状态
    btn.classList.add("active");
    document
    .getElementById("globalnav-anim-menutrigger-bread-top-open")
    .beginElement();
    document
    .getElementById("globalnav-anim-menutrigger-bread-bottom-open")
    .beginElement();
  }
}
