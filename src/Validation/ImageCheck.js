function isEvening(time) {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes, seconds] = time.split(":").map(Number);
  //  Yeah -DRY is not working here.HEehheh ) I`m seriously try to refactor. mb ill do it later
  const Time = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: true,
    18: true,
    19: true,
    20: true,
    21: true,
    22: true,
    23: true,
  };
  return Time[hours];
}
function ImageCheck(num, WeatherDescription, WeatherDetail, date) {
  let temp = parseFloat(num);
  // console.log(WeatherDetail, date, WeatherDescription);
  if (temp < -2) {
    if (WeatherDescription === "Snow" || WeatherDescription === "Clouds") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="143.23"
          height="100"
          viewBox="0 0 55 53"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(0 -2)">
              <rect width="55" height="55" />
              <path
                fill="#D5DCE2"
                d="M43.2134605,24.852 C45.5344605,25.921 47.0324605,28.257 47.0324605,30.805 C47.0324605,34.419 44.0964605,37.359 40.4874605,37.359 L20.4594605,37.359 C16.2824605,37.359 12.8824605,33.959 12.8824605,29.783 C12.8824605,26.707 14.8074605,23.878 17.6724605,22.743 L18.5224605,22.405 L18.7004605,21.511 C19.4654605,17.692 22.8454605,14.921 26.7334605,14.921 C29.0044605,14.921 31.1924605,15.874 32.7374605,17.536 L33.4344605,18.286 L34.4214605,18.01 C34.9844605,17.852 35.5554605,17.772 36.1194605,17.772 C39.3164605,17.772 42.0044605,20.266 42.2404605,23.449 L42.3134605,24.438 L43.2134605,24.852 Z M42.0944605,12.966 C47.0844605,13.943 50.8514605,18.335 50.8524605,23.61 C50.8524605,26.118 49.9934605,28.42 48.5644605,30.257 C48.3624605,27.316 46.5794605,24.671 43.8724605,23.424 L43.8134605,23.397 L43.8084605,23.333 C43.5594605,19.974 41.1274605,17.252 37.9794605,16.458 L37.9384605,16.066 C37.6564605,13.312 35.7264605,10.792 32.9004605,9.486 C31.6674605,8.918 30.3264605,8.618 29.0224605,8.618 C28.0404605,8.618 27.0884605,8.784 26.2164605,9.105 C24.9354605,8.047 23.4664605,7.299 21.9134605,6.896 C23.9494605,4.118 27.2254605,2.306 30.9344605,2.306 C36.9344605,2.306 41.8164605,7.034 42.0944605,12.966 Z M11.3114605,29.783 C11.3114605,30.76 11.4684605,31.7 11.7544605,32.584 C11.5014605,32.585 11.3354605,32.585 11.3234605,32.584 C7.00646053,31.991 3.73746053,28.073 4.20446053,23.504 C4.52646053,20.339 6.78646053,17.701 9.74246053,16.528 L10.2754605,16.317 C10.3124605,16.303 10.3384605,16.271 10.3464605,16.232 L10.4534605,15.696 C10.9994605,12.969 12.6214605,10.503 15.0694605,9.182 C18.6554605,7.246 22.7564605,8.1 25.5234605,10.58 C25.6624605,10.704 25.7864605,10.838 25.9134605,10.969 C27.6404605,9.992 30.0204605,9.888 32.2424605,10.913 C34.6394605,12.02 36.1604605,14.119 36.3754605,16.227 C36.2894605,16.223 36.2074605,16.202 36.1214605,16.202 C35.4144605,16.202 34.6994605,16.302 33.9984605,16.498 L33.9344605,16.516 L33.8884605,16.466 C32.0474605,14.486 29.4394605,13.351 26.7344605,13.351 C22.0974605,13.351 18.0714605,16.652 17.1604605,21.203 L17.1484605,21.261 L17.0934605,21.283 C13.6344605,22.653 11.3114605,26.069 11.3114605,29.783 Z"
              />
            </g>
            <g transform="translate(0 -2)">
              <rect width="55" height="55" />
              <path
                fill="#38C0E0"
                d="M21.576,43.745 C21.753,43.788 21.866,43.971 21.821,44.149 L21.804,44.213 C21.761,44.39 21.579,44.502 21.402,44.457 L19.097,43.895 L19.66,46.201 C19.706,46.379 19.594,46.559 19.413,46.604 L19.349,46.618 C19.172,46.663 18.99,46.552 18.947,46.374 L18.392,44.11 L16.741,45.752 C16.61,45.88 16.401,45.88 16.27,45.749 L16.222,45.702 C16.095,45.571 16.095,45.36 16.225,45.229 L17.872,43.595 L15.618,43.044 C15.44,43.002 15.326,42.822 15.373,42.641 L15.387,42.577 C15.432,42.397 15.615,42.289 15.792,42.332 L18.099,42.895 L17.533,40.589 C17.489,40.413 17.602,40.228 17.78,40.186 L17.844,40.17 C18.024,40.126 18.206,40.236 18.249,40.414 L18.799,42.674 L20.452,41.036 C20.582,40.907 20.794,40.907 20.922,41.039 L20.97,41.086 C21.101,41.216 21.098,41.426 20.97,41.556 L19.32,43.192 L21.576,43.745 Z M37.36,51.602 C37.537,51.645 37.65,51.828 37.604,52.006 L37.587,52.07 C37.544,52.247 37.362,52.359 37.185,52.314 L34.88,51.752 L35.443,54.058 C35.489,54.236 35.377,54.416 35.196,54.461 L35.132,54.475 C34.955,54.52 34.773,54.409 34.73,54.231 L34.175,51.967 L32.524,53.609 C32.393,53.737 32.184,53.737 32.053,53.606 L32.005,53.559 C31.878,53.428 31.878,53.217 32.008,53.086 L33.655,51.452 L31.401,50.901 C31.223,50.859 31.109,50.679 31.156,50.498 L31.17,50.434 C31.215,50.254 31.398,50.146 31.575,50.189 L33.882,50.752 L33.316,48.446 C33.273,48.27 33.386,48.085 33.564,48.043 L33.628,48.027 C33.808,47.983 33.99,48.093 34.033,48.271 L34.583,50.531 L36.236,48.893 C36.366,48.764 36.578,48.764 36.706,48.896 L36.754,48.943 C36.885,49.073 36.882,49.283 36.754,49.413 L35.104,51.049 L37.36,51.602 Z M27.332,51.602 C27.509,51.645 27.622,51.828 27.576,52.006 L27.559,52.07 C27.516,52.247 27.334,52.359 27.157,52.314 L24.852,51.752 L25.415,54.058 C25.461,54.236 25.349,54.416 25.168,54.461 L25.104,54.475 C24.927,54.52 24.745,54.409 24.702,54.231 L24.147,51.967 L22.496,53.609 C22.365,53.737 22.156,53.737 22.025,53.606 L21.977,53.559 C21.85,53.428 21.85,53.217 21.98,53.086 L23.627,51.452 L21.373,50.901 C21.195,50.859 21.081,50.679 21.128,50.498 L21.142,50.434 C21.187,50.254 21.37,50.146 21.547,50.189 L23.854,50.752 L23.288,48.446 C23.245,48.27 23.358,48.085 23.536,48.043 L23.6,48.027 C23.78,47.983 23.962,48.093 24.005,48.271 L24.555,50.531 L26.208,48.893 C26.338,48.764 26.55,48.764 26.678,48.896 L26.726,48.943 C26.857,49.073 26.854,49.283 26.726,49.413 L25.076,51.049 L27.332,51.602 Z M16.068,51.602 C16.245,51.645 16.357,51.828 16.313,52.006 L16.296,52.07 C16.253,52.247 16.071,52.359 15.894,52.314 L13.589,51.752 L14.152,54.058 C14.197,54.236 14.085,54.416 13.904,54.461 L13.84,54.475 C13.663,54.52 13.481,54.409 13.438,54.231 L12.883,51.967 L11.232,53.609 C11.101,53.737 10.892,53.737 10.761,53.606 L10.713,53.559 C10.586,53.428 10.586,53.217 10.716,53.086 L12.363,51.452 L10.109,50.901 C9.931,50.859 9.817,50.679 9.864,50.498 L9.878,50.434 C9.923,50.254 10.106,50.146 10.283,50.189 L12.59,50.752 L12.024,48.446 C11.981,48.27 12.094,48.085 12.272,48.043 L12.336,48.027 C12.516,47.983 12.698,48.093 12.741,48.271 L13.291,50.531 L14.944,48.893 C15.074,48.764 15.286,48.764 15.414,48.896 L15.462,48.943 C15.593,49.073 15.59,49.283 15.462,49.413 L13.812,51.049 L16.068,51.602 Z M42.869,43.745 C43.046,43.788 43.158,43.971 43.113,44.149 L43.096,44.213 C43.053,44.39 42.871,44.502 42.694,44.457 L40.389,43.895 L40.952,46.201 C40.998,46.379 40.886,46.559 40.705,46.604 L40.641,46.618 C40.464,46.663 40.282,46.552 40.239,46.374 L39.684,44.11 L38.033,45.752 C37.902,45.88 37.693,45.88 37.562,45.749 L37.514,45.702 C37.387,45.571 37.387,45.36 37.517,45.229 L39.164,43.595 L36.91,43.044 C36.732,43.002 36.618,42.822 36.665,42.641 L36.679,42.577 C36.724,42.397 36.907,42.289 37.084,42.332 L39.391,42.895 L38.825,40.589 C38.782,40.413 38.895,40.228 39.073,40.186 L39.137,40.17 C39.317,40.126 39.499,40.236 39.542,40.414 L40.092,42.674 L41.745,41.036 C41.875,40.907 42.087,40.907 42.215,41.039 L42.263,41.086 C42.394,41.216 42.391,41.426 42.263,41.556 L40.613,43.192 L42.869,43.745 Z M32.223,43.745 C32.399,43.788 32.512,43.971 32.467,44.149 L32.45,44.213 C32.407,44.39 32.225,44.502 32.048,44.457 L29.743,43.895 L30.306,46.201 C30.352,46.379 30.24,46.559 30.059,46.604 L29.995,46.618 C29.818,46.663 29.636,46.552 29.593,46.374 L29.038,44.11 L27.387,45.752 C27.256,45.88 27.047,45.88 26.916,45.749 L26.868,45.702 C26.741,45.571 26.741,45.36 26.871,45.229 L28.518,43.595 L26.264,43.044 C26.086,43.002 25.972,42.822 26.019,42.641 L26.033,42.577 C26.078,42.397 26.261,42.289 26.438,42.332 L28.745,42.895 L28.179,40.589 C28.136,40.413 28.249,40.228 28.427,40.186 L28.491,40.17 C28.671,40.126 28.853,40.236 28.896,40.414 L29.446,42.674 L31.099,41.036 C31.229,40.907 31.441,40.907 31.569,41.039 L31.617,41.086 C31.748,41.216 31.745,41.426 31.617,41.556 L29.967,43.192 L32.223,43.745 Z"
              />
            </g>
          </g>
        </svg>
      );
    }
  }
  if (temp > -6) {
    if (WeatherDescription === "Rain") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="143.23"
          height="100"
          viewBox="0 0 55 55"
        >
          <g fill="none" fill-rule="evenodd">
            <rect width="55" height="55" />
            <path
              fill="#FFCE00"
              d="M27.841,9.173 C27.818,9.149 27.792,9.129 27.77,9.104 C27.859,9.058 27.954,9.01 28.038,8.965 C28.896,8.592 29.807,8.319 30.759,8.17 C31.599,8.037 32.462,7.998 33.322,8.057 C36.367,8.262 39.151,9.644 41.159,11.946 C43.164,14.247 44.155,17.189 43.943,20.235 C43.917,20.64 43.86,21.037 43.791,21.431 C43.786,21.416 43.778,21.403 43.774,21.39 C43.146,19.472 41.803,17.883 40.052,16.955 C40.039,16.947 40.027,16.938 40.013,16.93 C39.822,16.83 39.616,16.757 39.416,16.673 C39.221,16.59 39.031,16.5 38.829,16.433 C38.654,16.377 38.47,16.343 38.291,16.298 C38.052,16.239 37.814,16.177 37.567,16.142 C37.517,16.135 37.473,16.118 37.423,16.111 C37.469,15.099 37.073,14.029 37.068,14.016 C36.384,12.197 35.083,10.722 33.303,9.75 C32.24,9.17 31.097,8.877 29.905,8.877 C29.216,8.877 28.519,8.981 27.849,9.181 L27.841,9.173 Z M26.484,7.936 C25.943,7.507 25.374,7.141 24.784,6.829 L24.501,1.715 L29.632,6.733 C28.518,6.989 27.47,7.412 26.484,7.936 Z M33.432,6.428 C32.688,6.377 31.943,6.411 31.203,6.486 L34.455,0.075 L36.389,6.985 C35.437,6.694 34.449,6.496 33.432,6.428 Z M37.887,7.547 L43.898,3.625 L42.108,10.579 C40.899,9.276 39.468,8.254 37.887,7.547 Z M43.131,11.811 L50.29,11.414 L45.281,16.532 C44.895,14.84 44.167,13.24 43.131,11.811 Z M45.528,18.122 L51.931,21.366 L45.01,23.307 C45.307,22.357 45.505,21.368 45.574,20.347 C45.625,19.598 45.601,18.855 45.528,18.122 Z"
            />
            <path
              fill="#D5DCE2"
              d="M11.659,29.635 C11.659,30.611 11.816,31.552 12.102,32.435 C10.891,32.218 9.915,31.95 9.915,31.95 C6.36,30.707 3.866,27.187 4.216,23.141 C4.5,19.853 6.787,17.073 9.855,15.855 L10.537,15.584 L10.74,14.576 C11.773,9.413 17.052,5.948 22.473,7.543 C24.099,8.021 25.536,9.002 26.691,10.243 L27.342,10.944 C27.342,10.944 27.387,10.97 27.456,11.013 C29.028,10.26 30.888,10.223 32.551,11.131 C34.101,11.978 35.087,13.213 35.598,14.57 C35.653,14.717 35.889,15.564 35.848,16.097 C35.345,16.138 34.841,16.211 34.345,16.35 L34.281,16.368 L34.235,16.318 C32.394,14.338 29.786,13.203 27.081,13.203 C22.444,13.203 18.418,16.504 17.507,21.055 L17.497,21.113 L17.441,21.135 C13.982,22.505 11.659,25.921 11.659,29.635 Z M43.561,24.704 C45.881,25.772 47.379,28.108 47.38,30.658 C47.38,34.272 44.444,37.212 40.835,37.212 L20.807,37.212 C16.63,37.212 13.23,33.812 13.23,29.636 C13.23,26.56 15.155,23.731 18.02,22.596 L18.87,22.258 L19.048,21.364 C19.813,17.545 23.193,14.774 27.081,14.774 C29.352,14.774 31.54,15.727 33.085,17.389 L33.782,18.139 L34.769,17.863 C35.332,17.706 35.903,17.625 36.467,17.625 C39.664,17.625 42.352,20.118 42.588,23.303 L42.661,24.29 L43.561,24.704 Z"
            />
            <g>
              <rect width="55" height="55" />
              <path
                fill="#009EFF"
                d="M19.1,45.229 C17.777,47.783 14.758,46.112 16.028,43.647 C17.106,41.552 19.696,40.285 19.696,40.285 C19.696,40.285 20.147,43.201 19.1,45.229 Z M26.171,53.163 C24.848,55.717 21.829,54.046 23.099,51.581 C24.177,49.486 26.767,48.219 26.767,48.219 C26.767,48.219 27.218,51.135 26.171,53.163 Z M39.37,45.229 C38.047,47.783 35.028,46.112 36.298,43.647 C37.376,41.552 39.966,40.285 39.966,40.285 C39.966,40.285 40.416,43.201 39.37,45.229 Z"
              />
              <path
                fill="#38C0E0"
                d="M30.873,43.853 C31.05,43.897 31.162,44.08 31.117,44.257 L31.1,44.321 C31.057,44.498 30.875,44.61 30.698,44.565 L28.393,44.003 L28.956,46.309 C29.002,46.487 28.89,46.667 28.709,46.712 L28.645,46.726 C28.468,46.771 28.286,46.66 28.243,46.482 L27.688,44.218 L26.037,45.86 C25.906,45.988 25.697,45.988 25.566,45.857 L25.518,45.81 C25.391,45.679 25.391,45.468 25.521,45.337 L27.168,43.703 L24.914,43.152 C24.736,43.11 24.622,42.93 24.669,42.749 L24.683,42.685 C24.728,42.505 24.911,42.397 25.088,42.44 L27.395,43.003 L26.829,40.697 C26.786,40.521 26.899,40.336 27.077,40.294 L27.141,40.278 C27.321,40.234 27.503,40.344 27.546,40.522 L28.096,42.782 L29.749,41.144 C29.879,41.015 30.091,41.015 30.219,41.147 L30.267,41.194 C30.398,41.324 30.395,41.534 30.267,41.664 L28.617,43.3 L30.873,43.853 Z M37.943,51.679 C38.12,51.722 38.233,51.906 38.187,52.083 L38.17,52.147 C38.127,52.324 37.945,52.436 37.768,52.391 L35.463,51.829 L36.026,54.135 C36.072,54.313 35.96,54.493 35.779,54.538 L35.715,54.552 C35.538,54.597 35.356,54.486 35.313,54.308 L34.758,52.044 L33.107,53.686 C32.976,53.814 32.767,53.814 32.636,53.683 L32.588,53.636 C32.461,53.505 32.461,53.294 32.591,53.163 L34.238,51.529 L31.984,50.978 C31.806,50.936 31.692,50.756 31.739,50.575 L31.753,50.511 C31.798,50.331 31.981,50.223 32.158,50.266 L34.465,50.829 L33.899,48.523 C33.856,48.347 33.969,48.162 34.147,48.12 L34.211,48.104 C34.391,48.06 34.573,48.17 34.616,48.348 L35.166,50.608 L36.819,48.97 C36.949,48.841 37.161,48.841 37.289,48.973 L37.337,49.02 C37.468,49.15 37.465,49.36 37.337,49.49 L35.687,51.126 L37.943,51.679 Z M17.674,51.679 C17.851,51.722 17.963,51.906 17.919,52.083 L17.902,52.147 C17.859,52.324 17.677,52.436 17.5,52.391 L15.195,51.829 L15.758,54.135 C15.804,54.313 15.692,54.493 15.511,54.538 L15.447,54.552 C15.27,54.597 15.088,54.486 15.045,54.308 L14.49,52.044 L12.839,53.686 C12.708,53.814 12.499,53.814 12.368,53.683 L12.32,53.636 C12.193,53.505 12.193,53.294 12.323,53.163 L13.97,51.529 L11.716,50.978 C11.538,50.936 11.424,50.756 11.471,50.575 L11.485,50.511 C11.53,50.331 11.713,50.223 11.89,50.266 L14.197,50.829 L13.631,48.523 C13.587,48.347 13.7,48.162 13.878,48.12 L13.942,48.104 C14.122,48.06 14.304,48.17 14.347,48.348 L14.897,50.608 L16.55,48.97 C16.68,48.841 16.892,48.841 17.02,48.973 L17.068,49.02 C17.199,49.15 17.196,49.36 17.068,49.49 L15.418,51.126 L17.674,51.679 Z"
              />
            </g>
          </g>
        </svg>
      );
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="143.23"
      height="100"
      viewBox="0 0 55 38"
    >
      <g fill="#000000" fill-rule="evenodd" transform="translate(0 -1)">
        <rect width="55" height="55" fill="none" />
        <path
          fill="#FFCE00"
          d="M28.367,8.787 C31.34,9.017 34.046,10.392 35.985,12.659 C37.921,14.924 38.862,17.808 38.626,20.782 C38.232,25.927 34.238,30.208 29.135,30.962 C28.311,31.083 27.468,31.112 26.63,31.048 C20.491,30.567 15.888,25.185 16.365,19.05 C16.763,13.907 20.757,9.626 25.862,8.872 C26.684,8.75 27.528,8.722 28.367,8.787 Z M33.971,30.884 C34.204,30.746 34.433,30.6 34.656,30.446 C34.725,30.399 34.8,30.359 34.868,30.311 L35.189,37.321 L30.223,32.374 C31.459,32.103 32.626,31.649 33.701,31.044 C33.793,30.993 33.881,30.938 33.971,30.884 Z M26.506,32.638 C27.234,32.695 27.964,32.67 28.687,32.601 L25.449,38.836 L23.625,32.062 C24.543,32.355 25.504,32.559 26.506,32.638 Z M18.075,28.493 C19.219,29.749 20.608,30.774 22.179,31.498 L16.261,35.275 L18.075,28.493 Z M15.036,22.65 C15.408,24.338 16.115,25.91 17.092,27.285 L10.091,27.605 L15.036,22.65 Z M14.774,18.926 C14.716,19.662 14.737,20.387 14.805,21.097 L8.583,17.87 L15.353,16.046 C15.054,16.97 14.851,17.932 14.774,18.926 Z M17.186,12.455 C16.699,13.125 16.271,13.839 15.918,14.595 L12.141,8.683 L18.927,10.495 C18.621,10.774 18.333,11.072 18.054,11.38 C18.032,11.405 18.011,11.432 17.987,11.457 C17.736,11.74 17.498,12.033 17.271,12.337 C17.242,12.376 17.215,12.416 17.186,12.455 Z M21.031,8.946 C20.793,9.088 20.561,9.236 20.334,9.392 C20.268,9.436 20.197,9.474 20.132,9.52 L19.811,2.51 L24.776,7.459 C23.54,7.731 22.372,8.184 21.297,8.789 C21.208,8.839 21.12,8.894 21.031,8.946 Z M28.489,7.197 C27.762,7.14 27.034,7.165 26.312,7.232 L29.547,1 L31.373,7.768 C30.445,7.475 29.483,7.273 28.489,7.197 Z M32.829,8.331 L38.737,4.557 L36.923,11.331 C35.754,10.048 34.366,9.037 32.829,8.331 Z M37.912,12.544 L44.909,12.223 L39.968,17.176 C39.607,15.519 38.91,13.949 37.912,12.544 Z M40.195,18.73 L46.418,21.957 L39.64,23.789 C39.939,22.864 40.143,21.901 40.219,20.904 C40.276,20.172 40.26,19.446 40.195,18.73 Z M36.068,29.336 C37.325,28.191 38.351,26.799 39.073,25.224 L42.863,31.147 L36.068,29.336 Z"
        />
      </g>
    </svg>
  );
}
export { ImageCheck };
