
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

// add the progress
let ourSkills = document.querySelector("#boot");

window.onscroll = function() {
  // skills ofSetTop
  let skillOfSetTop = ourSkills.offsetTop;
  // skills outer height 
  let skillOuterHeight = ourSkills.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scroll top
  let windowScrollTop = this.scrollY;
  
  if ( windowScrollTop > ( skillOfSetTop + skillOuterHeight - windowHeight ) ) {
    allSkills = document.querySelectorAll(".about .level span");
    allSkills.forEach( skill => {
      skill.style.width = skill.dataset.progress;
    })
  }
}

