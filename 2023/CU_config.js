var config_data = `
{
  "title": "Scouting App 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
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
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qual match": "Quals<br>",
        "double elims": "Double Elimination<br>",
        "finals": "Finals"
      },
      "defaultValue": "qual match",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "red1": "Red-1",
        "blue1": "Blue-1<br>",
        "red2": "Red-2",
        "blue2": "Blue-2<br>",
        "red3": "Red-3",
        "blue3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
	@@ -104,9 +104,9 @@ var config_data = `
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "High Cube Scored",
      "code": "tuh",
	@@ -136,10 +136,10 @@ var config_data = `
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "code": "lnk",
      "type": "bool"
	@@ -157,9 +157,9 @@ var config_data = `
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
	@@ -172,11 +172,11 @@ var config_data = `
        "not attempted": "Not attempted"
      },
      "defaultValue": "parked"
    },
    { "name": "# of alliance bots docked/engaged",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
	@@ -222,14 +222,14 @@ var config_data = `
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Avoided coopertition",
      "code": "coo",
      "type": "bool"
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
    },
    { "name": "Confidence Rating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "very confident": "Very Confident<br>",
        "average": "Average<br>",
        "not confident": "Not Confident"
        },
      "defaultValue": "average"
    }
  ]
}`;
