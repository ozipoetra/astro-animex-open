function togglePreference(){
   const theme_switch = document.getElementById("theme-switch");
  if (theme_switch.checked) {
  DarkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","dark");
   }
   else {
     DarkReader.disable();
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","light");
   }
 }

 if (localStorage.getItem("my-theme") == "dark") {
   // Use dark theme.
  document.getElementById("theme-switch").setAttribute("checked", "checked");
  DarkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
 } else if (localStorage.getItem("my-theme") == "light") {
   DarkReader.disable();
 } else {
   // Use default theme.
  DarkReader.auto({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
  if (DarkReader.isEnabled() == true) {
    document.getElementById("theme-switch").setAttribute("checked", "checked");
  }
 }