import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/use-sound/dist/use-sound.esm.js
var import_react = __toESM(require_react());
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useOnMount(callback) {
  (0, import_react.useEffect)(callback, []);
}
var _excluded = ["id", "volume", "playbackRate", "soundEnabled", "interrupt", "onload"];
function useSound(src, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$volume = _ref.volume, volume = _ref$volume === void 0 ? 1 : _ref$volume, _ref$playbackRate = _ref.playbackRate, playbackRate = _ref$playbackRate === void 0 ? 1 : _ref$playbackRate, _ref$soundEnabled = _ref.soundEnabled, soundEnabled = _ref$soundEnabled === void 0 ? true : _ref$soundEnabled, _ref$interrupt = _ref.interrupt, interrupt = _ref$interrupt === void 0 ? false : _ref$interrupt, onload = _ref.onload, delegated = _objectWithoutPropertiesLoose(_ref, _excluded);
  var HowlConstructor = import_react.default.useRef(null);
  var isMounted = import_react.default.useRef(false);
  var _React$useState = import_react.default.useState(null), duration = _React$useState[0], setDuration = _React$useState[1];
  var _React$useState2 = import_react.default.useState(null), sound = _React$useState2[0], setSound = _React$useState2[1];
  var handleLoad = function handleLoad2() {
    if (typeof onload === "function") {
      onload.call(this);
    }
    if (isMounted.current) {
      setDuration(this.duration() * 1e3);
    }
    setSound(this);
  };
  useOnMount(function() {
    import("./howler-PMOKRJVY.js").then(function(mod) {
      if (!isMounted.current) {
        var _mod$Howl;
        HowlConstructor.current = (_mod$Howl = mod.Howl) !== null && _mod$Howl !== void 0 ? _mod$Howl : mod["default"].Howl;
        isMounted.current = true;
        new HowlConstructor.current(_extends({
          src: Array.isArray(src) ? src : [src],
          volume,
          rate: playbackRate,
          onload: handleLoad
        }, delegated));
      }
    });
    return function() {
      isMounted.current = false;
    };
  });
  import_react.default.useEffect(function() {
    if (HowlConstructor.current && sound) {
      setSound(new HowlConstructor.current(_extends({
        src: Array.isArray(src) ? src : [src],
        volume,
        onload: handleLoad
      }, delegated)));
    }
  }, [JSON.stringify(src)]);
  import_react.default.useEffect(function() {
    if (sound) {
      sound.volume(volume);
      sound.rate(playbackRate);
    }
  }, [volume, playbackRate]);
  var play = import_react.default.useCallback(function(options) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (!sound || !soundEnabled && !options.forceSoundEnabled) {
      return;
    }
    if (interrupt) {
      sound.stop();
    }
    if (options.playbackRate) {
      sound.rate(options.playbackRate);
    }
    sound.play(options.id);
  }, [sound, soundEnabled, interrupt]);
  var stop = import_react.default.useCallback(function(id) {
    if (!sound) {
      return;
    }
    sound.stop(id);
  }, [sound]);
  var pause = import_react.default.useCallback(function(id) {
    if (!sound) {
      return;
    }
    sound.pause(id);
  }, [sound]);
  var returnedValue = [play, {
    sound,
    stop,
    pause,
    duration
  }];
  return returnedValue;
}
var use_sound_esm_default = useSound;
export {
  use_sound_esm_default as default,
  useSound
};
//# sourceMappingURL=use-sound.js.map
