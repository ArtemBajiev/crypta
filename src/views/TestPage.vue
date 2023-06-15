<template >
    <div>
    <div class="parallax-wrap" @mousemove="Parallax">
  <span value="-15"></span>
  <span value="5"></span>
  <span value="30"></span>
  <span value="-5"></span>
  <span value="15"></span>
  <h2>Parallax effect</h2>
</div>
    </div>
</template>
<script>
export default {
  methods: {
    Parallax(event) {
      let xOld = 0;
      // eslint-disable-next-line no-unused-vars
      const yOld = 0;
      if (window.matchMedia('(min-width: 768px)')) {
        document.querySelectorAll('.parallax-wrap span').forEach((item) => {
          const position = item.getAttribute('value');
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
          if (x > xOld) {
            for (let i = 0; i <= (x - xOld); i + 1) {
              // eslint-disable-next-line no-loop-func
              xOld += 1;
            }
          }
          // eslint-disable-next-line no-param-reassign
          item.style.transform = `translateX(${xOld}px) translateY(${y}px)`;
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
    // Variables
$size-ball: 20px;

// Style

.parallax-wrap {

  width: 100%;
  height: 100vh;

}

@mixin ball($top: 50%, $left: 50%, $color: yellow, $zindex: 3){
  top: $top;
  left: $left;
  background: $color;
  z-index: $zindex;
}

.parallax-wrap span {
  position: absolute;
  height: $size-ball;
  width: $size-ball;
  border-radius: 100%;
  &:nth-child(1){
    @include ball(70%, 70%, blue);
  }
  &:nth-child(2){
    @include ball(60%, 80%, yellow);
  }
  &:nth-child(3){
    @include ball(40%, 60%, green);
  }
  &:nth-child(4){
    @include ball(70%, 40%, red);
  }
  &:nth-child(5){
    @include ball(40%, 30%, purple);
  }
}

</style>
