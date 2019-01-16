<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App with JS Functions in SASS!"/>
    <table style="width: 100%;">
      <tr
        v-for="color in [
          'neutral-grey',
          'cool-grey',
          'warm-grey',
          'hue-15',
          'red',
          'burnt-orange',
          'orange',
          'brown',
          'tan',
          'olive',
          'hue-120',
          'hue-135',
          'green',
          'hue-165',
          'sea-green',
          'teal',
          'aqua',
          'hue-225',
          'sky-blue',
          'hue-255',
          'hue-270',
          'navy',
          'blue',
          'indigo',
          'purple',
          'magenta',
          'pink',
          'rose',
        ]"
        :class="color"
      >
        <th
        >{{color}}</th>
        <td
          v-for="value in [
            5, 10, 20, 30, 40, 50, 60, 70, 80,
            90, 95,
          ]"
          :class="`Color ${color}-${value}`"
          :style="`
            color: ${value >= 40 ? 'white' : 'black' };
          `"
        >{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
$red: chromatic-hcl(60, 80, 50);

@function color-scale($hue, $max-chroma, $lightness: 50) {
  $scale: chromatic-scale(
    chromatic-hcl($hue, chroma-scale($max-chroma, 0), 100),
    chromatic-hcl($hue, chroma-scale($max-chroma, 10), 90),
    chromatic-hcl($hue, chroma-scale($max-chroma, 20), 80),
    chromatic-hcl($hue, chroma-scale($max-chroma, 30), 70),
    chromatic-hcl($hue, chroma-scale($max-chroma, 40), 60),
    chromatic-hcl($hue, chroma-scale($max-chroma, 50), 50),
    chromatic-hcl($hue, chroma-scale($max-chroma, 60), 40),
    chromatic-hcl($hue, chroma-scale($max-chroma, 70), 30),
    chromatic-hcl($hue, chroma-scale($max-chroma, 80), 20),
    chromatic-hcl($hue, chroma-scale($max-chroma, 90), 10),
    chromatic-hcl($hue, chroma-scale($max-chroma, 100), 0),
    (mode: "hcl", stops: 101)
  );
  @return map-get($scale, $lightness);
}


// greys
@function neutral-grey($value: 50) {
  @return color-scale(0, 0, $value);
}

@function cool-grey($value: 50) {
  // cool color
  $color: chromatic-temperature(10000);
  $hue: chromatic-color-get($color, "hcl.h");
  $max-chroma: 3;
  @return color-scale($hue, $max-chroma, $value);
}

@function warm-grey($value: 50) {
  // warm color
  $color: chromatic-temperature(5000);
  $hue: chromatic-color-get($color, "hcl.h");
  $max-chroma: 3;
  @return color-scale($hue, $max-chroma, $value);
}

// colors
@function hue-15($value: 50) {
  @return color-scale(15, 80, $value);
}

@function red($value: 50) {
  @return color-scale(30, 80, $value);
}

@function burnt-orange($value: 50) {
  @return color-scale(45, 80, $value);
}

@function orange($value: 50) {
  @return color-scale(60, 80, $value);
}

@function brown($value: 50) {
  @return color-scale(75, 80, $value);
}

@function tan($value: 50) {
  @return color-scale(90, 80, $value);
}

@function olive($value: 50) {
  @return color-scale(105, 80, $value);
}

@function hue-120($value: 50) {
  @return color-scale(120, 80, $value);
}

@function hue-135($value: 50) {
  @return color-scale(135, 80, $value);
}

@function green($value: 50) {
  @return color-scale(150, 80, $value);
}

@function hue-165($value: 50) {
  @return color-scale(165, 80, $value);
}

@function sea-green($value: 50) {
  @return color-scale(180, 80, $value);
}

@function teal($value: 50) {
  @return color-scale(195, 80, $value);
}

@function aqua($value: 50) {
  @return color-scale(210, 80, $value);
}

@function hue-225($value: 50) {
  @return color-scale(225, 80, $value);
}

@function sky-blue($value: 50) {
  @return color-scale(240, 80, $value); // cerulean? azure?
}

@function hue-255($value: 50) {
  @return color-scale(255, 80, $value);
}

@function hue-270($value: 50) {
  @return color-scale(270, 80, $value);
}

@function navy($value: 50) {
  @return color-scale(260, 50, $value); // muted blue?
}

@function blue($value: 50) {
  @return color-scale(285, 80, $value);
}

@function indigo($value: 50) {
  @return color-scale(300, 80, $value);
}

@function purple($value: 50) {
  @return color-scale(315, 80, $value);
}

@function magenta($value: 50) {
  @return color-scale(330, 80, $value);
}

@function pink($value: 50) {
  @return color-scale(345, 80, $value);
}

@function rose($value: 50) {
  @return color-scale(360, 80, $value); // fuscia?
}

@each $value in (5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,) {

  .neutral-grey-#{$value} {
    background-color: neutral-grey($value);
  }

  .cool-grey-#{$value} {
    background-color: cool-grey($value);
  }

  .warm-grey-#{$value} {
    background-color: warm-grey($value);
  }

  .hue-15-#{$value} {
    background-color: hue-15($value);
  }

  .red-#{$value} {
    background-color: red($value);
  }

  .burnt-orange-#{$value} {
    background-color: burnt-orange($value);
  }

  .orange-#{$value} {
    background-color: orange($value);
  }

  .brown-#{$value} {
    background-color: brown($value);
  }

  .tan-#{$value} {
    background-color: tan($value);
  }

  .olive-#{$value} {
    background-color: olive($value);
  }

  .hue-120-#{$value} {
    background-color: hue-120($value);
  }

  .hue-135-#{$value} {
    background-color: hue-135($value);
  }

  .green-#{$value} {
    background-color: green($value);
  }

  .hue-165-#{$value} {
    background-color: hue-165($value);
  }

  .sea-green-#{$value} {
    background-color: sea-green($value);
  }

  .teal-#{$value} {
    background-color: teal($value);
  }

  .aqua-#{$value} {
    background-color: aqua($value);
  }

  .hue-225-#{$value} {
    background-color: hue-225($value);
  }

  .sky-blue-#{$value} {
    background-color: sky-blue($value);
  }

  .hue-255-#{$value} {
    background-color: hue-255($value);
  }

  .hue-270-#{$value} {
    background-color: hue-270($value);
  }

  .navy-#{$value} {
    background-color: navy($value);
  }

  .blue-#{$value} {
    background-color: blue($value);
  }

  .indigo-#{$value} {
    background-color: indigo($value);
  }

  .purple-#{$value} {
    background-color: purple($value);
  }

  .magenta-#{$value} {
    background-color: magenta($value);
  }

  .pink-#{$value} {
    background-color: pink($value);
  }

  .rose-#{$value} {
    background-color: rose($value);
  }
  
}

.Color {
  height: 32px;
  min-width: 64px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cool-grey(60);
  margin-top: 60px;
}
</style>
