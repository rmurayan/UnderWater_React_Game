import { Dimensions } from 'react-native'
import Matter from 'matter-js'

import Fish from '../components/Fish'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'

import { getAnchorSizePosPair } from '../utils/ramdom'
import Shark from '../components/Shark'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const BOTTOM = 51

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let engine = Matter.Engine.create({
    enableSleeping: false
  })

  let world = engine.world

  engine.gravity.y = 0.4

  const anchorSizePosA = getAnchorSizePosPair()
  const anchorSizePosB = getAnchorSizePosPair(windowWidth * 0.99)

  return {
    physics: { engine, world },
    Fish: Fish(world, { x: 120, y: 300 }, { height: 45, width: 60 }),
    Shark: Shark(world, { x: 70, y: 300 }, { height: 80, width: 100 }),

    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'grey',
      anchorSizePosA.anchorTop.pos,
      anchorSizePosA.anchorTop.size,
      true
    ),

    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'grey',
      anchorSizePosA.anchorBottom.pos,
      anchorSizePosA.anchorBottom.size,
      false
    ),

    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'gold',
      anchorSizePosB.anchorTop.pos,
      anchorSizePosB.anchorTop.size,
      true
    ),

    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'gold',
      anchorSizePosB.anchorBottom.pos,
      anchorSizePosB.anchorBottom.size,
      false
    ),

    Floor: Floor(
      world,
      { x: windowWidth / 2, y: windowHeight -60 },
      { height: BOTTOM + 100, width: windowWidth },
    ),
    FloorTop: Floor(
      world,
      { x: windowWidth / 2, y: 60 },
      { height: BOTTOM + 100, width: windowWidth }, 
      true
    )
  }
}
