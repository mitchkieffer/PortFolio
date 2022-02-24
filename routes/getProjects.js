const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        "CodingProjects":[
            {"Description": "Servo Robot Arm"},
            {"Description": "Software Base Mirror"},
            {"Description": "Portfolio Project"},
            {"Description": "Curriculum Modification Project"},
            {"Description": "Zoo Project"}
          ],
          "HomeProjects":[
            {"Description": "Rebuilt camper that has been junked"},
            {"Description": "CAD Projects"},
            {"Description": "Built CNC Router"},
          ],
    })
});

module.exports = router;