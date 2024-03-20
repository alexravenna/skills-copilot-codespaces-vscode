function skillsMember() {
  var member = new Member();
  member.skills = ['JavaScript', 'React', 'Angular'];
  member.addSkill('Node');
  console.log(member.skills); // ['JavaScript', 'React', 'Angular', 'Node']
} 