<template>
  <div id="app" class="main-view">
    <div id="nav" class="main-nav">
      <div class="main-nav__item">
        <router-link to="/" class="main-nav__link">Фильмы</router-link>
      </div>
      <div class="main-nav__item">
        <router-link to="/actors" class="main-nav__link">Актеры</router-link>
      </div>
      <div class="main-nav__item">
        <router-link to="/ships" class="main-nav__link">Корабли</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  line-height: 1;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*MAIN*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
main {
  display: block;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-width: 0px;
  padding: 0px;
  margin: 0px;
}

html {
  height: 100%;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
}

input,
textarea {
  color: #333;
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
}

input[type="button"],
input[type="submit"],
button {
  cursor: pointer;
}

td {
  margin: 0px;
  padding: 0px;
}

form {
  padding: 0px;
  margin: 0px;
}

a {
  transition: all 0.3s;
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a,
span,
div,
button {
  outline: none !important;
}

input[type="submit"],
input[type="button"],
button {
  -webkit-appearance: none;
  outline: none;
}

* {
  box-sizing: border-box;
}
ul {
  list-style: none;
}
*:before,
*:after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-view {
  padding: 50px 40px;
}

.main-nav {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 40px;
  &__item {
    padding: 0 15px;
  }
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: #2c3e50;
    transition: all 0.3s;
    font-size: 20px;
    line-height: 25px;
    &:hover {
      color: cadetblue;
    }
  }
}
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 45px;
  line-height: 50px;
  font-weight: 700;
  padding: 15px 0;
}
.search {
  margin-bottom: 50px;
  &__input {
    width: 100%;
    max-width: 450px;
    border: 1px solid #000;
    padding: 0 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    height: 40px;
    text-align: center;
  }
}
</style>
