import React from "react";

const GlobalSvgSelector = ({ id }) => {
  switch (id) {
    case "header-logo":
      return (
        <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              {`.a{fill:#e5e4e4;stroke:#818180;}`}
              {`.a,.b,.d{stroke - linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
              {`.b{fill:#ffed09;stroke:#d38509;}`}
              {`.c{fill:#1c1c1c;}`}
              {`.d{fill:none;stroke:#1c1c1c;}`}
            </style>
          </defs>
          <title/>
          <path className="a" d="M50,26H46.88a18,18,0,1,0-35.7.41A10,10,0,0,0,14,46H50a10,10,0,0,0,0-20Z"/>
          <polygon className="b" points="48 33 42 48 47 48 47 58 55 44 48.17 43.83 48 33"/>
          <polygon className="b" points="14 35 8 50 13 50 13 60 21 46 14.17 45.83 14 35"/>
          <circle className="c" cx="20" cy="24" r="2"/>
          <circle className="c" cx="36" cy="24" r="2"/>
          <path className="c" d="M36,30.8h0a6.4,6.4,0,0,1-6.4,6.4H28.4A6.4,6.4,0,0,1,22,30.8H36Z"/>
          <line className="d" x1="33" x2="39" y1="24" y2="20"/>
          <line className="d" x1="23.58" x2="17.58" y1="24" y2="20"/>
        </svg>
      )
    case "header-theme":
      return (
        <svg width="30px" height="30px" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="switch" transform="translate(-434 -65)">
            <path id="Path_85" data-name="Path 85" d="M465,71a5,5,0,0,1-5,5H440a5,5,0,0,1,0-10h20A5,5,0,0,1,465,71Z" fill="none" stroke="#f1d17c" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_86" data-name="Path 86" d="M465,85a5,5,0,0,1-5,5H440a5,5,0,0,1,0-10h20A5,5,0,0,1,465,85Z" fill="none" stroke="#498efc" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
            <circle id="Ellipse_26" data-name="Ellipse 26" cx="1" cy="1" r="1" transform="translate(439 70)" fill="none" stroke="#498efc" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
            <circle id="Ellipse_27" data-name="Ellipse 27" cx="1" cy="1" r="1" transform="translate(459 84)" fill="none" stroke="#f1d17c" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
          </g>
        </svg>
      )
    case "01d":
      return (
        <svg id="01d" className="01d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <defs>
          <linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fbbf24"/>
            <stop offset=".45" stop-color="#fbbf24"/>
            <stop offset="1" stop-color="#f59e0b"/>
          </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="10.5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
          </path>
        </svg>
      )
    case "01n":
      return (
        <svg id="01n" className="01n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/>
          </path>
        </svg>
      )
    case "02d":
      return (
        <svg id="02d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
          </path>
        </svg>
      )
    case "02n":
      return (
        <svg id="02n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        </svg>
      )
    case "03d":
      return (
        <svg id="03d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#f3f7fe"/>
              <stop offset=".45" stop-color="#f3f7fe"/>
              <stop offset="1" stop-color="#deeafb"/>
            </linearGradient>
          </defs>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
          </path>
        </svg>
      )
    case "03n":
      return (
        <svg id="03n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#c1c9d7"/>
              <stop offset=".45" stop-color="#c1c9d7"/>
              <stop offset="1" stop-color="#c1c9d7"/>
            </linearGradient>
          </defs>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        </svg>
      )
    case "04d":
      return (
        <svg id="04d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#f8af18" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="#9ca3af" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#9ca3af" stroke="#848b98" stroke-miterlimit="10" stroke-width=".5" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
          </path>
        </svg>
      )
    case "04n":
      return (
        <svg id="04n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#9ca3af" stroke="#848b98" stroke-miterlimit="10" stroke-width=".5" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z">
            <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
          </path>
        </svg>
      )
    case "09d":
      return (
        <svg id="09d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <defs>
          <linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f3f7fe"/>
            <stop offset=".45" stop-color="#f3f7fe"/>
            <stop offset="1" stop-color="#deeafb"/>
          </linearGradient>
          <linearGradient id="f" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#4286ee"/>
            <stop offset=".45" stop-color="#4286ee"/>
            <stop offset="1" stop-color="#0950bc"/>
          </linearGradient>
          <linearGradient id="c" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlinkHref="#a"/>
          <linearGradient id="f" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlinkHref="#a"/>
          </defs>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="none" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="none" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="none" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
        </svg>
      )
    case "09n":
      return (
        <svg id="09n" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
        </svg>
      )
    case "10d":
      return (
        <svg id="10d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
        </svg>
      )
    case "10n":
      return (
        <svg id="10n" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
        </svg>
      )
    case "11d":
      return (
        <svg id="11d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="#f6a823" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#f6a823" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
          </path>
        </svg>
      )
    case "11n":
      return (
        <svg id="11n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </path>
          <path fill="#4286ee" stroke="#4286ee" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
          </path>
        </svg>
      )
    case "13d":
      return (
        <svg id="13d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="#f6a823" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <g>
            <circle cx="31" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="none" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
            <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
          <g>
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="none" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
            <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
          <g>
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="none" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
            <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
        </svg>
      )
    case "13n":
      return (
        <svg id="13n" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <g>
            <circle cx="31" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="#deeafb" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
            <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
          <g>
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="#deeafb" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
            <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
          <g>
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#deeafb" stroke-miterlimit="10"/>
            <path fill="#deeafb" stroke="#deeafb" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
            <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
            <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
          </g>
        </svg>
      )
    case "50d":
      return (
        <svg id="50d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <circle cx="19" cy="24" r="5" fill="#fbbf24" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
          <path fill="#f6a823" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17">
            <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/>
          </path>
          <path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#D7CCCCFF" stroke="#D7CCCCFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
            <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
          </path>
          <path fill="#D7CCCCFF" stroke="#D7CCCCFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
            <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
          </path>
        </svg>
      )
    case "50n":
      return (
        <svg id="50n" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
          <path fill="#4286ee" stroke="#4286ee" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z">
            <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/>
          </path>
          <path fill="#5eafcf" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <path fill="#D7CCCCFF" stroke="#D7CCCCFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
            <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
          </path>
          <path fill="#D7CCCCFF" stroke="#D7CCCCFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
            <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
          </path>
        </svg>
      )
    default:
      return null;
  }
};

export default GlobalSvgSelector;
