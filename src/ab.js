import React from 'react'


function BehaviorSubject(id, username, password) {
  this.id = id;
  this.username = username;
  this.password = password;
}

const BehaviorSubjectone = new BehaviorSubject('1', 'ninjadave', 'password')
  
  export {BehaviorSubject};
  