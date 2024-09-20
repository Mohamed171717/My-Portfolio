
// add active class
let linkList = document.querySelectorAll('.page .sidebar a');
// let prev = localStorage.getItem('linkId');
// if( prev ) document.getElementById( prev ).classList.add('active');

  for( let i = 0; i < linkList.length; i++ ) {
    linkList[i].onclick = function() {
      for( let j = 0; j < linkList.length; j++ ) {
        linkList[j].classList.remove('active');
      }
      this.classList.add('active');
      // localStorage.setItem( "linkId", this.id )
    }
}

