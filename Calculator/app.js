click = 0;
sign = 0;
for(let i = 0; i <10;i++){
    document.getElementById(i).addEventListener('click', function () {
        Addoperand(this.id);
      })
    }
document.getElementById("brackets").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("percent").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("divide").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("multiply").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("minus").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("plus").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("invert").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("dot").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("operate").addEventListener('click', function () {
        Addoperand(this.id);
      })
document.getElementById("operand-remover").addEventListener('click', remove)
document.getElementById("clear").addEventListener("click", clear)