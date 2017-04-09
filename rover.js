var myRover = {
  position: [0,0],
  direction: 'N',
  land: [10,10],
  route: ['f','f','f','r','f','f','f','l','b','f','l','f','f','f','f','r','f','f','f'],
  obstacles: [{x:3,y:5},{x:4,y:10}],
  };

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
     if (rover.position[0] === rover.land[0]-1) {
      rover.position[0] = 0;
     }
     else {
      rover.position[0]++;
      }
      break;
    case 'E':
      if (rover.position[1] === rover.land[1]-1) {
       rover.position[1] = 0;
      }
      else {
       rover.position[1]++;
       }
      break;
    case 'S':
      if (rover.position[0] === 0) {
        rover.position[0] = rover.land[0];
      }
      else {
      rover.position[0]--;
      }
      break;
    case 'W':
      if (rover.position[1] === 0) {
        rover.position[1] = rover.land [1];
      }
      else {
      rover.position[1]--;
      }
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + "New Rover Direction: " + rover.direction);
}

  function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
      if (rover.position[0] === 0) {
        rover.position[0] = rover.land[0];
      }
      else {
        rover.position[0]--;
      }
        break;
      case 'E':
      if (rover.position[1] === 0) {
        rover.position[1] = rover.land[1];
      }
      else {
        rover.position[1]--;
      }
        break;
      case 'S':
      if (rover.position[0] === rover.land[0]-1) {
       rover.position[0] = 0;
      }
      else {
       rover.position[0]++;
       }
        break;
      case 'W':
      if (rover.position[1] === rover.land[1]-1) {
       rover.position[1] = 0;
      }
      else {
       rover.position[1]++;
       }
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + "New Rover Direction: " + rover.direction);
}

  function turnLeft(rover) {
    switch(rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + "New Rover Direction: " + rover.direction);
  }

  function turnRight(rover) {
    switch(rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'W':
        rover.direction = 'N';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'E':
        rover.direction = 'S';
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + "New Rover Direction: " + rover.direction);
  }

  function existObstacle(rover) {
    for (var i = 0; i < rover.obstacles.length; i++) {
      if (rover.position[0] === rover.obstacles[i].x && rover.position[1] === rover.obstacles[i].y) {
        console.log("There is an obstacle in position: [" + rover.position[0] + ", " + rover.position[1] + "]");
        return true;
      }
    }
  }

  function moveRover(rover) {
    for (var i = 0; i < rover.route.length; i++) {
      switch(rover.route[i]) {
        case 'f':
          goForward(rover);
          break;
        case 'b':
          goBackward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        }
        if (existObstacle(rover)) {
        goBackward(rover);
        break;
        }
      }
    }

  moveRover(myRover);
