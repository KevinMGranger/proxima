var about_config = require('sdk/preferences/service')
var buttons = require('sdk/ui/button/toggle');

var button = buttons.ToggleButton({
  id: "proxima_toggle",
  label: "Toggle Proxy",
  icon: './off.svg',
  onChange: function() {
    this.state('window', null);
    this.set(!this.checked);
  }
});

button.set = function(setting) {
    this.checked = setting;

    if (setting) {
      this.label = "Turn proxy off";
      this.icon = './on.svg'
    } else {
      this.label = "Turn proxy on";
      this.icon = './off.svg'
    }

    setProxySetting(this.checked);
}


button.set(getProxySetting() == 1)

function getProxySetting() {
  return about_config.get('network.proxy.type');
}

function setProxySetting(setting) {
  console.log("Setting proxy to ", setting);

  about_config.set('network.proxy.type', setting ? 1 : 0);
}
