function skillsMember() {
  var member = document.getElementById("member");
  var memberSkill = document.getElementById("memberSkill");
  var memberSkillValue = memberSkill.value;
  var memberSkillValue = parseInt(memberSkillValue);
  var memberSkillValue = memberSkillValue + 1;
  memberSkill.value = memberSkillValue;
  member.innerHTML = memberSkillValue;
}