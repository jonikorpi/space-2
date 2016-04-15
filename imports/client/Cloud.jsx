import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Cloud extends Component {

  render() {
    return (
      <Locator
        altitude={Game.orbitAltitude}
        rotation={[
          _.random(0, 360),
          _.random(0, 360),
          _.random(0, 360),
        ]}
      >
        <Entity
          class="cloud"
          geometry={{
            primitive: "box",
            depth: _.random(0.5, 1.5),
            height: _.random(0.1, 0.2),
            width: _.random(0.5, 1.5),
          }}
          material={{
            color: "#ffffff",
            transparent: true,
            opacity: 0.5,
            shader: "flat",
          }}
        >
        </Entity>
      </Locator>
    );
  }

}