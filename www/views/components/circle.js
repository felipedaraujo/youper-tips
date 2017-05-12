(function (angular) {
  'use strict';

  angular
    .module('circle', [])
    .component('circle', {
      bindings: {
        title: '<',
        likes: '<',
        titleStyles: '<',
        icon: '<',
        iconStyles: '<',
        circleStyles: '<',
        animation: '<',
        stateToGo: '<',
        toggleLike: '&'
      },
      controller: function ($state, $timeout) {
        const {
          size,
          sizeUnit,
          backgroundColor,
          borderColor,
          borderWidth,
          position,
          axisX,
          axisY
        } = this.circleStyles;

        const {
          titleFontSize,
          titleColor,
          fontWeight,
          lineHeight
        } = this.titleStyles || {};

        const {
          iconFontSize,
          iconColor
        } = this.iconStyles || {};

        const hasPosition = position !== undefined;
        const halfSizeUnit = `${size / 2}${sizeUnit}`;
        const transform = hasPosition ? `translate(-${halfSizeUnit}, -${halfSizeUnit})` : null;

        this.styles = {
          circle: {
            'width': `${size}${sizeUnit}`,
            'height': `${size}${sizeUnit}`,
            'background-color': backgroundColor,
            'border': `${borderWidth}px solid ${borderColor}`,
            'position': position,
            'top': axisY,
            'left': axisX,
            'transform': transform
          },
          title: {
            'font-size': `${titleFontSize}px`,
            'font-weight': fontWeight,
            'color': titleColor,
            'line-height': `${lineHeight}px`
          },
          icon: {
            'font-size': `${iconFontSize}px`,
            'color': iconColor
          }
        }

        this.goTo = () => {
          $timeout(() => $state.go(this.stateToGo.name, this.stateToGo.params), 600);
        }

        this.action = () => {
          if (this.stateToGo) {
            this.goTo();
          } else if (this.toggleLike) {
            this.toggleLike();
          }
        }
      },
      template: `
        <div class="circle {{$ctrl.animation}}" ng-style="$ctrl.styles.circle" ng-click="$ctrl.action()">
          <div class="circle-item text-center">
            <span class="title" ng-if="$ctrl.title" ng-style="$ctrl.styles.title">{{ $ctrl.title }}</span>
            <span class="like" ng-if="$ctrl.likes">{{ $ctrl.likes }} {{ $ctrl.likes === 1 ? 'like' : 'likes'}}</span>
            <span class="icon {{$ctrl.icon}}" ng-if="$ctrl.icon" ng-style="$ctrl.styles.icon"></span>
          </div>
        </div>
      `
    });
})(window.angular);
