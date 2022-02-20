<!--
Example Codyhouse Vue component for _1_confetti-button.js.

See demo and code: 
https://codyhouse.co/ds/components/app/confetti-button

In the script tag, we copy and paste the codyhouse component JS file,
as-is into this components mounted() function.

👇 IMPORTANT 👇
To ensure the component has proper styling you must do two things:

1. Place the component's corresponding scss code into
`/assets/css/codyhouse/main/components/COMPONENT_STYLE.scss`

2. Import the added SCSS file in `/assets/css/codyhouse/main/_components.scss`
For example by adding the line:
`@use 'components/COMPONENT_STYLE.scss' as *;

-->
<template>
    <div class="confetti-btn inline-block position-relative js-confetti-btn">
    <button class="confetti-btn__btn btn btn--subtle js-confetti-btn__btn"><slot /></button>

    <svg class="confetti-btn__icon color-accent js-confetti-btn__icon" viewBox="0 0 16 16" aria-hidden="true">
        <circle class="conf-btn-svg-item-0" fill="currentColor" cx="8" cy="8" r="8"/>
        <path class="conf-btn-svg-item-1" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/>
        <path class="conf-btn-svg-item-2" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/>
        <path class="conf-btn-svg-item-3" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/>
        <path class="conf-btn-svg-item-4" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/>
        <path class="conf-btn-svg-item-5" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/>
    </svg>
    </div>
</template>
<script>
    export default {
        mounted() {
            // File#: _1_confetti-button
            // Usage: codyhouse.co/license
            (function() {
            var ConfettiBtn = function(element) {
                this.element = element;
                this.btn = this.element.getElementsByClassName('js-confetti-btn__btn');
                this.icon = this.element.getElementsByClassName('js-confetti-btn__icon');
                this.animating = false;
                this.animationClass = 'confetti-btn--animate';
                this.positionVariables = '--conf-btn-click-';
                initConfettiBtn(this);
                };

            function initConfettiBtn(element) {
                if(element.btn.length < 1 || element.icon.length < 1) return;
                element.btn[0].addEventListener('click', function(event){
                if(element.animating) return;
                element.animating = true;
                setAnimationPosition(element, event);
                Util.addClass(element.element, element.animationClass);
                resetAnimation(element);
                });
            };

            function setAnimationPosition(element, event) { // change icon position based on click position
                
                var btnBoundingRect = element.btn[0].getBoundingClientRect();
                document.documentElement.style.setProperty(element.positionVariables+'x', (event.clientX - btnBoundingRect.left)+'px');
                document.documentElement.style.setProperty(element.positionVariables+'y', (event.clientY - btnBoundingRect.top)+'px');
            };

            function resetAnimation(element) { // reset the button at the end of the icon animation
                
                element.icon[0].addEventListener('animationend', function cb(){
                element.icon[0].removeEventListener('animationend', cb);
                Util.removeClass(element.element, element.animationClass);
                element.animating = false;
                });
            };

            var confettiBtn = document.getElementsByClassName('js-confetti-btn');
            if(confettiBtn.length > 0) {
                for(var i = 0; i < confettiBtn.length; i++) {
                (function(i){new ConfettiBtn(confettiBtn[i]);})(i);
                }
            }
            }());
        }
    }
</script>