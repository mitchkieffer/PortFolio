const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        "Resume":[
            {"Description": "I will be in search for a computer science career. Something that can apply my love for problem solving and creating. I understand that I will need a lot more experience to get the job that I am in search for, but I am excited to start the journey."}
          ],
          "WorkHistory":[
            {
                "Company": "Sun Printing",
                "Dates": "01/2018 - Current",
                "jobPosition": "Administrative Assistant",
                "jobDescription": "Inventory is a big part of the job. Creating spreadsheets and using Quick Books religiously."
            },
            {
                "Company": "Coca Cola",
                "Dates": "07/2015 - 09/2017",
                "jobPosition": "Order Builder",
                "jobDescription": "Creating orders for current vendors. Keeping count of inventory.Create new ways to be more productive and more eﬃcient."
            },
            {
                "Company": "GreenWood Hills",
                "Dates": "01/2012 - 07/2014",
                "jobPosition": "Bag Staff",
                "jobDescription": "Communicate with members to establish a great golﬁng community. Assist members with cleaning of golf clubs and cater to their needs."
            }
          ],
        "Education":[
            {"schoolName": "North Central Technical College",
             "Degree": "Associates Degree Software Development"
            }
        ]
    })
});

module.exports = router;