const express = require("express");
const router = express.Router();

const students = [
  { alumno: "Willy", id: 13 },
  { alumno: "Alan", id: 12 },
  { alumno: "Santiago", id: 26 },
  { alumno: "Gabriel", id: 0 },
  { alumno: "Pablo", id: 88 },
  { alumno: "Raul", id: 56 },
  { alumno: "Kevin", id: 2 },
];

router.get("/:id", (req, res) => {
  let STUDENT_ID = parseInt(req.params.id);
  if (Number.isInteger(STUDENT_ID)) {
    let student = students.find((student) => student.id === STUDENT_ID);
    res.send([student]);
    return;
  }
  res.send(students);
});

module.exports = router;
