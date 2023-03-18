var config_data = `
{   

  "title": "Scouting App 2023",
  "page_title": "PIT SCOUTING APP",
  "checkboxAs": "YN",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2022flwp",
      "required": "true",
      "disabled": "false"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Weight",
      "code": "w",
      "type": "scouter",
      "defaultValue": "100",
      "required": "true"
    }, 
    { "name": "Drivetrain",
      "code": "DT",
      "type":"radio",
      "choices": {
        "Swerve": "Swerve<br>",
        "Tank": "Tank<br>",
        "Mechanum": "Mechanum"
      },
      "defaultValue": "Tank"
    }
  ],
  "auton": [
    { "name": "Does the robot move?(has auto?)",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Trys to dock?",
      "code": "ad",
      "type":"radio",
      "choices": {
        "docked": "Docked (not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted but failed": "Attempted but failed<br>",
        "Not Attemmpted": "Not attempted"
      },
      "defaultValue": "docked"
    }
  ],
  "teleop": [
    { "name": "High Cube Scored",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Score preference",
      "code": "cif",
      "type": "radio",
      "choices": {
        "Cone": "Cone<br>",
        "Cube": "Cube<br>",
        "both": "Both<br>"
      },
      "defaultValue": "both"
    },
    { "name": "Cargo Intake From",
      "code": "cif",
      "type": "radio",
      "choices": {
        "Substation": "Substation<br>",
        "ground": "Ground<br>",
        "both": "Both<br>",
        "not attempted": "Not Attempted"
      },
      "defaultValue": "both"
    }
  ],
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "docked(not engaged)": "Docked (Not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted but failed": "Attempted but failed<br>",
        "not attempted": "Not attempted"
      },
      "defaultValue": "parked"
    }
  ],
    { "name": "Make good alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
