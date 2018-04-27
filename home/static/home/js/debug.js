(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["ScrollMagic"], factory);
  } else if (typeof exports === "object") {
    factory(require("scrollmagic"));
  } else {
    factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
  }
})(this, function(ScrollMagic) {
  "use strict";
  var NAMESPACE = "debug.addIndicators";
  var console = window.console || {},
    err = Function.prototype.bind.call(
      console.error || console.log || function() {},
      console
    );
  if (!ScrollMagic) {
    err(
      "(" +
        NAMESPACE +
        ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
    );
  }
  var FONT_SIZE = "0.85em",
    ZINDEX = "9999",
    EDGE_OFFSET = 15;
  var _util = ScrollMagic._util,
    _autoindex = 0;
  ScrollMagic.Scene.extend(function() {
    var Scene = this,
      _indicator;
    var log = function() {
      if (Scene._log) {
        Array.prototype.splice.call(
          arguments,
          1,
          0,
          "(" + NAMESPACE + ")",
          "->"
        );
        Scene._log.apply(this, arguments);
      }
    };
    Scene.addIndicators = function(options) {
      if (!_indicator) {
        var DEFAULT_OPTIONS = {
          name: "",
          indent: 0,
          parent: undefined,
          colorStart: "green",
          colorEnd: "red",
          colorTrigger: "blue"
        };
        options = _util.extend({}, DEFAULT_OPTIONS, options);
        _autoindex++;
        _indicator = new Indicator(Scene, options);
        Scene.on("add.plugin_addIndicators", _indicator.add);
        Scene.on("remove.plugin_addIndicators", _indicator.remove);
        Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);
        if (Scene.controller()) {
          _indicator.add();
        }
      }
      return Scene;
    };
    Scene.removeIndicators = function() {
      if (_indicator) {
        _indicator.remove();
        this.off("*.plugin_addIndicators");
        _indicator = undefined;
      }
      return Scene;
    };
  });
  ScrollMagic.Controller.addOption("addIndicators", false);
  ScrollMagic.Controller.extend(function() {
    var Controller = this,
      _info = Controller.info(),
      _container = _info.container,
      _isDocument = _info.isDocument,
      _vertical = _info.vertical,
      _indicators = { groups: [] };
    var log = function() {
      if (Controller._log) {
        Array.prototype.splice.call(
          arguments,
          1,
          0,
          "(" + NAMESPACE + ")",
          "->"
        );
        Controller._log.apply(this, arguments);
      }
    };
    if (Controller._indicators) {
      log(
        2,
        "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."
      );
    }
    this._indicators = _indicators;
    var handleBoundsPositionChange = function() {
      _indicators.updateBoundsPositions();
    };
    var handleTriggerPositionChange = function() {
      _indicators.updateTriggerGroupPositions();
    };
    _container.addEventListener("resize", handleTriggerPositionChange);
    if (!_isDocument) {
      window.addEventListener("resize", handleTriggerPositionChange);
      window.addEventListener("scroll", handleTriggerPositionChange);
    }
    _container.addEventListener("resize", handleBoundsPositionChange);
    _container.addEventListener("scroll", handleBoundsPositionChange);
    this._indicators.updateBoundsPositions = function(specificIndicator) {
      var groups = specificIndicator
          ? [
              _util.extend({}, specificIndicator.triggerGroup, {
                members: [specificIndicator]
              })
            ]
          : _indicators.groups,
        g = groups.length,
        css = {},
        paramPos = _vertical ? "left" : "top",
        paramDimension = _vertical ? "width" : "height",
        edge = _vertical
          ? _util.get.scrollLeft(_container) +
            _util.get.width(_container) -
            EDGE_OFFSET
          : _util.get.scrollTop(_container) +
            _util.get.height(_container) -
            EDGE_OFFSET,
        b,
        triggerSize,
        group;
      while (g--) {
        group = groups[g];
        b = group.members.length;
        triggerSize = _util.get[paramDimension](group.element.firstChild);
        while (b--) {
          css[paramPos] = edge - triggerSize;
          _util.css(group.members[b].bounds, css);
        }
      }
    };
    this._indicators.updateTriggerGroupPositions = function(specificGroup) {
      var groups = specificGroup ? [specificGroup] : _indicators.groups,
        i = groups.length,
        container = _isDocument ? document.body : _container,
        containerOffset = _isDocument
          ? { top: 0, left: 0 }
          : _util.get.offset(container, true),
        edge = _vertical
          ? _util.get.width(_container) - EDGE_OFFSET
          : _util.get.height(_container) - EDGE_OFFSET,
        paramDimension = _vertical ? "width" : "height",
        paramTransform = _vertical ? "Y" : "X";
      var group, elem, pos, elemSize, transform;
      while (i--) {
        group = groups[i];
        elem = group.element;
        pos = group.triggerHook * Controller.info("size");
        elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
        transform =
          pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";
        _util.css(elem, {
          top:
            containerOffset.top +
            (_vertical ? pos : edge - group.members[0].options.indent),
          left:
            containerOffset.left +
            (_vertical ? edge - group.members[0].options.indent : pos)
        });
        _util.css(elem.firstChild.firstChild, {
          "-ms-transform": transform,
          "-webkit-transform": transform,
          transform: transform
        });
      }
    };
    this._indicators.updateTriggerGroupLabel = function(group) {
      var text =
          "trigger" +
          (group.members.length > 1 ? "" : " " + group.members[0].options.name),
        elem = group.element.firstChild.firstChild,
        doUpdate = elem.textContent !== text;
      if (doUpdate) {
        elem.textContent = text;
        if (_vertical) {
          _indicators.updateBoundsPositions();
        }
      }
    };
    this.addScene = function(newScene) {
      if (
        this._options.addIndicators &&
        newScene instanceof ScrollMagic.Scene &&
        newScene.controller() === Controller
      ) {
        newScene.addIndicators();
      }
      this.$super.addScene.apply(this, arguments);
    };
    this.destroy = function() {
      _container.removeEventListener("resize", handleTriggerPositionChange);
      if (!_isDocument) {
        window.removeEventListener("resize", handleTriggerPositionChange);
        window.removeEventListener("scroll", handleTriggerPositionChange);
      }
      _container.removeEventListener("resize", handleBoundsPositionChange);
      _container.removeEventListener("scroll", handleBoundsPositionChange);
      this.$super.destroy.apply(this, arguments);
    };
    return Controller;
  });
  var Indicator = function(Scene, options) {
    var Indicator = this,
      _elemBounds = TPL.bounds(),
      _elemStart = TPL.start(options.colorStart),
      _elemEnd = TPL.end(options.colorEnd),
      _boundsContainer =
        options.parent && _util.get.elements(options.parent)[0],
      _vertical,
      _ctrl;
    var log = function() {
      if (Scene._log) {
        Array.prototype.splice.call(
          arguments,
          1,
          0,
          "(" + NAMESPACE + ")",
          "->"
        );
        Scene._log.apply(this, arguments);
      }
    };
    options.name = options.name || _autoindex;
    _elemStart.firstChild.textContent += " " + options.name;
    _elemEnd.textContent += " " + options.name;
    _elemBounds.appendChild(_elemStart);
    _elemBounds.appendChild(_elemEnd);
    Indicator.options = options;
    Indicator.bounds = _elemBounds;
    Indicator.triggerGroup = undefined;
    this.add = function() {
      _ctrl = Scene.controller();
      _vertical = _ctrl.info("vertical");
      var isDocument = _ctrl.info("isDocument");
      if (!_boundsContainer) {
        _boundsContainer = isDocument ? document.body : _ctrl.info("container");
      }
      if (!isDocument && _util.css(_boundsContainer, "position") === "static") {
        _util.css(_boundsContainer, { position: "relative" });
      }
      Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
      Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);
      updateTriggerGroup();
      updateBounds();
      setTimeout(function() {
        _ctrl._indicators.updateBoundsPositions(Indicator);
      }, 0);
      log(3, "added indicators");
    };
    this.remove = function() {
      if (Indicator.triggerGroup) {
        Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
        Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);
        if (Indicator.triggerGroup.members.length > 1) {
          var group = Indicator.triggerGroup;
          group.members.splice(group.members.indexOf(Indicator), 1);
          _ctrl._indicators.updateTriggerGroupLabel(group);
          _ctrl._indicators.updateTriggerGroupPositions(group);
          Indicator.triggerGroup = undefined;
        } else {
          removeTriggerGroup();
        }
        removeBounds();
        log(3, "removed indicators");
      }
    };
    var handleBoundsParamsChange = function() {
      updateBounds();
    };
    var handleTriggerParamsChange = function(e) {
      if (e.what === "triggerHook") {
        updateTriggerGroup();
      }
    };
    var addBounds = function() {
      var v = _ctrl.info("vertical");
      _util.css(_elemStart.firstChild, {
        "border-bottom-width": v ? 1 : 0,
        "border-right-width": v ? 0 : 1,
        bottom: v ? -1 : options.indent,
        right: v ? options.indent : -1,
        padding: v ? "0 8px" : "2px 4px"
      });
      _util.css(_elemEnd, {
        "border-top-width": v ? 1 : 0,
        "border-left-width": v ? 0 : 1,
        top: v ? "100%" : "",
        right: v ? options.indent : "",
        bottom: v ? "" : options.indent,
        left: v ? "" : "100%",
        padding: v ? "0 8px" : "2px 4px"
      });
      _boundsContainer.appendChild(_elemBounds);
    };
    var removeBounds = function() {
      _elemBounds.parentNode.removeChild(_elemBounds);
    };
    var updateBounds = function() {
      if (_elemBounds.parentNode !== _boundsContainer) {
        addBounds();
      }
      var css = {};
      css[_vertical ? "top" : "left"] = Scene.triggerPosition();
      css[_vertical ? "height" : "width"] = Scene.duration();
      _util.css(_elemBounds, css);
      _util.css(_elemEnd, { display: Scene.duration() > 0 ? "" : "none" });
    };
    var addTriggerGroup = function() {
      var triggerElem = TPL.trigger(options.colorTrigger);
      var css = {};
      css[_vertical ? "right" : "bottom"] = 0;
      css[_vertical ? "border-top-width" : "border-left-width"] = 1;
      _util.css(triggerElem.firstChild, css);
      _util.css(triggerElem.firstChild.firstChild, {
        padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
      });
      document.body.appendChild(triggerElem);
      var newGroup = {
        triggerHook: Scene.triggerHook(),
        element: triggerElem,
        members: [Indicator]
      };
      _ctrl._indicators.groups.push(newGroup);
      Indicator.triggerGroup = newGroup;
      _ctrl._indicators.updateTriggerGroupLabel(newGroup);
      _ctrl._indicators.updateTriggerGroupPositions(newGroup);
    };
    var removeTriggerGroup = function() {
      _ctrl._indicators.groups.splice(
        _ctrl._indicators.groups.indexOf(Indicator.triggerGroup),
        1
      );
      Indicator.triggerGroup.element.parentNode.removeChild(
        Indicator.triggerGroup.element
      );
      Indicator.triggerGroup = undefined;
    };
    var updateTriggerGroup = function() {
      var triggerHook = Scene.triggerHook(),
        closeEnough = 0.0001;
      if (Indicator.triggerGroup) {
        if (
          Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) <
          closeEnough
        ) {
          return;
        }
      }
      var groups = _ctrl._indicators.groups,
        group,
        i = groups.length;
      while (i--) {
        group = groups[i];
        if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
          if (Indicator.triggerGroup) {
            if (Indicator.triggerGroup.members.length === 1) {
              removeTriggerGroup();
            } else {
              Indicator.triggerGroup.members.splice(
                Indicator.triggerGroup.members.indexOf(Indicator),
                1
              );
              _ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
              _ctrl._indicators.updateTriggerGroupPositions(
                Indicator.triggerGroup
              );
            }
          }
          group.members.push(Indicator);
          Indicator.triggerGroup = group;
          _ctrl._indicators.updateTriggerGroupLabel(group);
          return;
        }
      }
      if (Indicator.triggerGroup) {
        if (Indicator.triggerGroup.members.length === 1) {
          Indicator.triggerGroup.triggerHook = triggerHook;
          _ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
          return;
        } else {
          Indicator.triggerGroup.members.splice(
            Indicator.triggerGroup.members.indexOf(Indicator),
            1
          );
          _ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
          _ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
          Indicator.triggerGroup = undefined;
        }
      }
      addTriggerGroup();
    };
  };
  var TPL = {
    start: function(color) {
      var inner = document.createElement("div");
      inner.textContent = "start";
      _util.css(inner, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: color,
        "border-color": color
      });
      var e = document.createElement("div");
      _util.css(e, {
        position: "absolute",
        overflow: "visible",
        width: 0,
        height: 0
      });
      e.appendChild(inner);
      return e;
    },
    end: function(color) {
      var e = document.createElement("div");
      e.textContent = "end";
      _util.css(e, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: color,
        "border-color": color
      });
      return e;
    },
    bounds: function() {
      var e = document.createElement("div");
      _util.css(e, {
        position: "absolute",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": FONT_SIZE
      });
      e.style.zIndex = ZINDEX;
      e.style.display = "none";
      return e;
    },
    trigger: function(color) {
      var inner = document.createElement("div");
      inner.textContent = "trigger";
      _util.css(inner, { position: "relative" });
      var w = document.createElement("div");
      _util.css(w, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: color,
        "border-color": color
      });
      w.appendChild(inner);
      var e = document.createElement("div");
      _util.css(e, {
        position: "fixed",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": FONT_SIZE
      });
      e.style.zIndex = ZINDEX;
      e.style.display = "none";
      e.appendChild(w);
      return e;
    }
  };
});
