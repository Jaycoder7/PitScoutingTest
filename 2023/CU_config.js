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
      "defaultValue": "1",
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
        "wc": "West Coast<br>",
        "Mechanum": "Mechanum"
      },
      "defaultValue": "Tank"
    },
    { "name": "Number of Auto",
      "code": "na",
      "type": "counter"
    },
    { "name": "Mobility during auto(1)",
      "code": "am1",
      "type": "bool"
    },
    { "name": "Amp score(auto 1)",
      "code": "as1",
      "type": "counter"
    },
    { "name": "Speaker score(auto 1)",
      "code": "ss1",
      "type": "counter"
    },
    { "name": "Mobility during auto(2)",
      "code": "am2",
      "type": "bool"
    },
    { "name": "Amp score(auto 2)",
      "code": "as2",
      "type": "counter"
    },
    { "name": "Speaker score(auto 2)",
      "code": "ss2",
      "type": "counter"
    },
    { "name": "Mobility during auto(3)",
      "code": "am2",
      "type": "bool"
    },
   { "name": "Amp score(auto 3)",
      "code": "as3",
      "type": "counter"
    },
    { "name": "Speaker score(auto 3)",
      "code": "ss3",
      "type": "counter"
    },
    { "name": "Amp Score(TELEOP)",
      "code": "ast",
      "type": "counter"
    },
    { "name": "Speaker Score(TELEOP)",
      "code": "sst",
      "type": "counter"
    },
    { "name": "Score preference",
      "code": "Sp",
      "type": "radio",
      "choices": {
        "amp": "Amp<br>",
        "speaker": "Speaker<br>",
        "both": "Both<br>"
      },
      "defaultValue": "both"
    },
    { "name": "Note Intake From",
      "code": "nif",
      "type": "radio",
      "choices": {
        "Substation": "Score<br>",
        "ground": "Ground<br>",
        "both": "Both<br>",
        "not attempted": "Not Attempted"
      },
      "defaultValue": "both"
    },
  
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "onns": "Onstage (Not Spotlit)<br>",
        "ons": "Onstage(Spotlit)<br>",
        "attempted but failed": "Attempted but failed<br>",
        "not attempted": "Not attempted"
      },
      "defaultValue": "parked"
    },

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
