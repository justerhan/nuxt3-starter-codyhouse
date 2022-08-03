<!--
Example Codyhouse Vue component for _1_confetti-button.js.

See demo and code: 
https://codyhouse.co/ds/components/app/confetti-button

👇 IMPORTANT 👇
To ensure the component has proper styling you must do the follow:
NOTE: CODYHOUSE_COMPONENT is the name of the component file exported from codyhouse website

1. Copy and paste the component's html code into the Vue component's template tag

2. Add the component's SCSS file into:
`/assets/scss/components/CODYHOUSE_COMPONENT.scss`

3. In `/assets/scss/components/_index.scss`, import the component with a 'use' statement.
For example by adding the line:
`@use 'CODYHOUSE_COMPONENT.scss' as *;

4. Copy the component script file to /public/js/codyhouse/components/CODYHOUSE_COMPONENT.js

5. Update the file path in loadComponent() method below...

-->
<template>
    <div class="confetti-btn inline-block position-relative js-confetti-btn">
    <button class="confetti-btn__btn btn btn--subtle js-confetti-btn__btn"><slot></slot></button>

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
            this.loadComponent();
        },

        methods: {
            loadComponent() {
                let s = document.createElement("script");
                // 👇 IMPORTANT 👇 , this is your component file
                s.setAttribute("src", "/js/codyhouse/components/_1_confetti-button.js");
                document.head.appendChild(s);
            }
        }
    }
</script>