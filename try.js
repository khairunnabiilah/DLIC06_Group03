function Submit(){
  var inName, inContact, inComing, inSelect, inBring, inAdd;
  inName = document.getElementById("inName").value;
  inContact = document.getElementById("inContact").value;
  inComing = document.getElementById("inComing").value;
  inSelect = document.getElementById("inBring").value;
  inAdd = document.getElementById("inAdd").value;
//submit = document.getElementById("submit").;

 putName = document.getElementById('name');
 putContact = document.getElementById('contact');
 putComing = document.getElementById('coming');
 putBring = document.getElementById('bring');
 putNum = document.getElementById('num');

putName.innerHTML = inName;
putContact.innerHTML = inContact;
putComing.innerHTML = inComing;
putBring.innerHTML = inBring;
putNum.innerHTML = inAdd;
}
