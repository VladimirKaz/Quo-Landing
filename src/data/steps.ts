interface  Steps {
  title: string;
  description: string;
  icon: string;
}

export const steps: Steps[] = [
  {
    title: "Create account",
    description: "Create free account for your transaction. It's pretty much easier and don't worry we care about your safety",
    icon: `
      <svg width="86" height="79" viewBox="0 0 86 79" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M59.5242 78.1319H4.3675C1.95539 78.1319 0 76.1765 0 73.7644V2.84542C0 1.27398 1.27398 0 2.84542 0H68.4576C70.0291 0 71.3031 1.27398 71.3031 2.84542V66.353C71.3031 72.8583 66.0295 78.1319 59.5242 78.1319V78.1319Z" fill="url(#paint0_linear_1_182)" />
  <path d="M71.3032 20.8824L39.4827 52.703L64.0212 77.2415C68.2952 75.4744 71.3032 71.266 71.3032 66.3536V20.8824Z" fill="url(#paint1_linear_1_182)" />
  <path d="M0 9.03796H71.3031V29.2811H0V9.03796Z" fill="url(#paint2_linear_1_182)" />
  <path d="M58.5095 30.9411H9.81067C9.22161 30.9411 8.74414 30.4637 8.74414 29.8746V28.4203C8.74414 27.8312 9.22161 27.3538 9.81067 27.3538H58.5097C59.0987 27.3538 59.5762 27.8312 59.5762 28.4203V29.8746C59.5762 30.4637 59.0986 30.9411 58.5095 30.9411Z" fill="url(#paint3_linear_1_182)" />
  <path d="M58.5095 38.6265H9.81067C9.22161 38.6265 8.74414 38.149 8.74414 37.5599V36.1056C8.74414 35.5165 9.22161 35.0391 9.81067 35.0391H58.5097C59.0987 35.0391 59.5762 35.5165 59.5762 36.1056V37.5599C59.5762 38.149 59.0986 38.6265 58.5095 38.6265Z" fill="url(#paint4_linear_1_182)" />
  <path d="M35.4674 46.3104H9.81067C9.22161 46.3104 8.74414 45.8329 8.74414 45.2439V43.7896C8.74414 43.2005 9.22161 42.723 9.81067 42.723H35.4674C36.0565 42.723 36.534 43.2005 36.534 43.7896V45.2439C36.534 45.8328 36.0565 46.3104 35.4674 46.3104Z" fill="url(#paint5_linear_1_182)" />
  <path d="M0 57.839V73.7647C0 76.1768 1.95539 78.1322 4.3675 78.1322H59.5242C66.0295 78.1322 71.3031 72.8586 71.3031 66.3533V57.839H0Z" fill="url(#paint6_linear_1_182)" />
  <path d="M8.73493 64.259V73.7646C8.73493 76.1767 6.77954 78.1321 4.36743 78.1321H68.2591C74.7644 78.1321 80.038 72.8585 80.038 66.3532V64.259C80.038 62.6876 78.764 61.4136 77.1926 61.4136H11.5805C10.0089 61.4136 8.73493 62.6876 8.73493 64.259V64.259Z" fill="url(#paint7_linear_1_182)" />
  <path d="M8.73493 64.259V73.7646C8.73493 76.1767 6.77954 78.1321 4.36743 78.1321H68.2591C74.7644 78.1321 80.038 72.8585 80.038 66.3532V64.259C80.038 62.6876 78.764 61.4136 77.1926 61.4136H11.5805C10.0089 61.4136 8.73493 62.6876 8.73493 64.259V64.259Z" fill="url(#paint8_linear_1_182)" />
  <path d="M68.4576 0H2.84542C1.27398 0 0 1.27398 0 2.84542V17.737H71.3031V2.84542C71.3031 1.27398 70.0291 0 68.4576 0V0Z" fill="url(#paint9_linear_1_182)" />
  <path d="M84.4646 8.30804L83.8732 7.71663C82.7292 6.57265 80.8743 6.57265 79.7302 7.71663L70.9182 16.5286L75.6524 21.2628L84.4644 12.4509C85.6087 11.3069 85.6087 9.45202 84.4646 8.30804Z" fill="url(#paint10_linear_1_182)" />
  <path d="M73.2854 18.8952L75.6525 21.2623L82.7543 14.1604L80.3872 11.7933L73.2854 18.8952Z" fill="url(#paint11_linear_1_182)" />
  <path d="M43.3249 52.491L41.2671 53.0642C39.7524 53.4859 38.6947 52.4283 39.1166 50.9137L39.6898 48.8559C40.6488 45.4128 42.6873 42.0246 45.4809 39.2311L46.5308 38.1811L73.0077 13.0425C73.891 12.1591 75.1243 11.9601 75.7621 12.5978L79.4156 16.4186C80.0533 17.0563 79.8542 18.2896 78.9709 19.173L53.999 45.6505L52.9496 46.7C50.156 49.4935 46.768 51.5321 43.3249 52.491Z" fill="url(#paint12_linear_1_182)" />
  <path d="M43.3249 52.4912L41.2671 53.0644C39.7524 53.4862 38.6947 52.4285 39.1166 50.9139L39.6898 48.8562C40.6488 45.413 42.6873 42.0249 45.4809 39.2313L46.527 38.1852L50.7504 40.7356L53.9959 45.6541L52.9497 46.7002C50.156 49.4937 46.768 51.5323 43.3249 52.4912Z" fill="url(#paint13_linear_1_182)" />
  <path d="M80.7171 16.2143L75.9665 11.4636C75.2158 10.713 73.9989 10.713 73.2482 11.4636L46.5271 38.1848L53.996 45.6536L80.7171 18.9325C81.4678 18.182 81.4678 16.9649 80.7171 16.2143V16.2143Z" fill="url(#paint14_linear_1_182)" />
  <path d="M80.9213 16.418L78.3417 13.8384L61.2822 30.8978L65.0167 34.6323L80.4766 19.1724C81.3599 18.289 81.559 17.0559 80.9213 16.418Z" fill="url(#paint15_linear_1_182)" />
  <path d="M77.4286 11.7938L61.2822 27.9402C60.4652 28.7573 60.4652 30.0819 61.2822 30.8989C62.0993 31.7159 63.424 31.7159 64.2409 30.8989L80.3873 14.7525C81.2043 13.9354 81.2043 12.6108 80.3873 11.7938C79.5703 10.9768 78.2455 10.9768 77.4286 11.7938V11.7938Z" fill="url(#paint16_linear_1_182)" />
  <defs>
    <linearGradient id="paint0_linear_1_182" x1="-3.42711" y1="-0.458398" x2="77.4141" y2="80.3827" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF4FF" />
      <stop offset="1" stop-color="#CFE7FD" />
    </linearGradient>
    <linearGradient id="paint1_linear_1_182" x1="71.2027" y1="52.6025" x2="57.9442" y2="39.344" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AAADC" stop-opacity="0" />
      <stop offset="1" stop-color="#8AAADC" />
    </linearGradient>
    <linearGradient id="paint2_linear_1_182" x1="35.6515" y1="27.7754" x2="35.6515" y2="17.2237" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AAADC" stop-opacity="0" />
      <stop offset="1" stop-color="#8AAADC" />
    </linearGradient>
    <linearGradient id="paint3_linear_1_182" x1="8.74414" y1="29.1475" x2="59.5762" y2="29.1475" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5A5A5A" />
      <stop offset="1" stop-color="#464646" />
    </linearGradient>
    <linearGradient id="paint4_linear_1_182" x1="8.74414" y1="36.8327" x2="59.5762" y2="36.8327" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5A5A5A" />
      <stop offset="1" stop-color="#464646" />
    </linearGradient>
    <linearGradient id="paint5_linear_1_182" x1="8.74414" y1="44.5166" x2="36.534" y2="44.5166" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5A5A5A" />
      <stop offset="1" stop-color="#464646" />
    </linearGradient>
    <linearGradient id="paint6_linear_1_182" x1="35.6515" y1="58.6902" x2="35.6515" y2="79.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AAADC" stop-opacity="0" />
      <stop offset="1" stop-color="#8AAADC" />
    </linearGradient>
    <linearGradient id="paint7_linear_1_182" x1="42.2029" y1="61.4136" x2="42.2029" y2="77.6837" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF4FF" />
      <stop offset="1" stop-color="#CFE7FD" />
    </linearGradient>
    <linearGradient id="paint8_linear_1_182" x1="42.2029" y1="69.0979" x2="42.2029" y2="80.661" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AAADC" stop-opacity="0" />
      <stop offset="1" stop-color="#8AAADC" />
    </linearGradient>
    <linearGradient id="paint9_linear_1_182" x1="35.6515" y1="1.84363" x2="35.6515" y2="18.9081" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7E07D" />
      <stop offset="1" stop-color="#E69642" />
    </linearGradient>
    <linearGradient id="paint10_linear_1_182" x1="78.2049" y1="13.0056" x2="80.6736" y2="15.4744" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7E07D" />
      <stop offset="1" stop-color="#E69642" />
    </linearGradient>
    <linearGradient id="paint11_linear_1_182" x1="80.7079" y1="19.2157" x2="76.4417" y2="14.9496" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D52C1C" stop-opacity="0" />
      <stop offset="0.28" stop-color="#D12C1E" stop-opacity="0.28" />
      <stop offset="0.5735" stop-color="#C42C23" stop-opacity="0.574" />
      <stop offset="0.8721" stop-color="#AF2B2C" stop-opacity="0.872" />
      <stop offset="1" stop-color="#A42B31" />
    </linearGradient>
    <linearGradient id="paint12_linear_1_182" x1="54.707" y1="29.8173" x2="62.1748" y2="37.285" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF4FF" />
      <stop offset="1" stop-color="#CFE7FD" />
    </linearGradient>
    <linearGradient id="paint13_linear_1_182" x1="41.4217" y1="43.1029" x2="48.8894" y2="50.5706" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8AAADC" stop-opacity="0" />
      <stop offset="1" stop-color="#8AAADC" />
    </linearGradient>
    <linearGradient id="paint14_linear_1_182" x1="60.5864" y1="23.938" x2="68.0541" y2="31.4058" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DC4955" />
      <stop offset="1" stop-color="#C4237C" />
    </linearGradient>
    <linearGradient id="paint15_linear_1_182" x1="75.2981" y1="27.8506" x2="71.5757" y2="24.1282" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8A1958" stop-opacity="0" />
      <stop offset="1" stop-color="#8A1958" />
    </linearGradient>
    <linearGradient id="paint16_linear_1_182" x1="69.3859" y1="19.8975" x2="71.5673" y2="22.0789" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF4FF" />
      <stop offset="1" stop-color="#CFE7FD" />
    </linearGradient>
  </defs>
</svg>
    `,
  },
   {
    title: "Enter Recipient Info",
    description: "Create free account for your transaction. It's pretty much easier and don't worry we care about your safety",
    icon: `
      <svg width="79" height="84" viewBox="0 0 79 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.0127 26.7188C17.0127 23.784 19.0498 21.3251 21.7874 20.6788C22.5192 20.5061 23.2186 21.0719 23.2186 21.8237V31.6137C23.2186 32.3655 22.5192 32.9314 21.7874 32.7586C19.0498 32.1125 17.0127 29.6537 17.0127 26.7188V26.7188Z" fill="url(#paint0_linear_1_225)" />
  <path d="M61.8819 26.7184C61.8819 23.7836 59.8448 21.3247 57.1073 20.6785C56.3755 20.5057 55.676 21.0716 55.676 21.8234V31.6134C55.676 32.3652 56.3755 32.931 57.1073 32.7582C59.8448 32.1122 61.8819 29.6533 61.8819 26.7184V26.7184Z" fill="url(#paint1_linear_1_225)" />
  <path d="M72.7118 73.1729H6.18262V70.5337C6.18262 56.4532 17.5971 45.0387 31.6775 45.0387H47.2166C61.2971 45.0387 72.7115 56.4532 72.7115 70.5337V73.1729H72.7118Z" fill="url(#paint2_linear_1_225)" />
  <path d="M61.2944 49.2765V73.173H72.712V70.5339C72.712 61.6576 68.1749 53.8422 61.2944 49.2765Z" fill="url(#paint3_linear_1_225)" />
  <path d="M26.7821 43.6423C26.7821 43.6423 23.0916 45.4875 24.2658 46.9973C25.1296 48.1078 29.5327 52.3945 31.8011 54.5844C32.5532 55.3103 33.7465 55.298 34.4856 54.5589L39.4471 49.5974L26.7821 43.6423Z" fill="url(#paint4_linear_1_225)" />
  <path d="M52.1124 43.6425C52.1124 43.6425 55.8029 45.4876 54.6287 46.9974C53.7649 48.1079 49.3618 52.3946 47.0934 54.5845C46.3413 55.3105 45.148 55.2981 44.4089 54.559L39.4473 49.5977L52.1124 43.6425Z" fill="url(#paint5_linear_1_225)" />
  <path d="M39.4473 49.5806C29.5332 49.5806 21.4963 41.5437 21.4963 31.6298V22.4242C21.4963 12.5101 29.5332 4.47339 39.4471 4.47339C49.3612 4.47339 57.3979 12.5103 57.3979 22.4242V31.6298C57.3983 41.5437 49.3614 49.5806 39.4473 49.5806V49.5806Z" fill="url(#paint6_linear_1_225)" />
  <path d="M40.4389 36.145H38.4554C36.8026 36.145 35.5511 34.6514 35.8406 33.024L36.9775 26.6327H41.9166L43.0535 33.024C43.3432 34.6512 42.0917 36.145 40.4389 36.145Z" fill="url(#paint7_linear_1_225)" />
  <path d="M73.8894 83.1761H5.36191C4.39364 83.1761 3.60864 82.3911 3.60864 81.4228V77.1733H75.6426V81.4228C75.6426 82.3911 74.8577 83.1761 73.8894 83.1761V83.1761Z" fill="url(#paint8_linear_1_225)" />
  <path d="M77.9972 78.2541H0.897398C0.401753 78.2541 0 77.8524 0 77.3567V74.07C0 73.5744 0.401753 73.1726 0.897398 73.1726H77.9972C78.4929 73.1726 78.8946 73.5744 78.8946 74.07V77.3567C78.8946 77.8524 78.4929 78.2541 77.9972 78.2541Z" fill="url(#paint9_linear_1_225)" />
  <path d="M62.5497 40.2466H16.3449C15.3328 40.2466 14.5125 41.0671 14.5125 42.0791V70.7014C14.5125 72.0663 15.6188 73.1726 16.9837 73.1726H61.9109C63.2758 73.1726 64.3822 72.0663 64.3822 70.7014V42.0792C64.3822 41.0671 63.5618 40.2466 62.5497 40.2466V40.2466Z" fill="url(#paint10_linear_1_225)" />
  <path d="M39.4473 61.1181C41.8822 61.1181 43.8561 59.1442 43.8561 56.7093C43.8561 54.2744 41.8822 52.3005 39.4473 52.3005C37.0125 52.3005 35.0386 54.2744 35.0386 56.7093C35.0386 59.1442 37.0125 61.1181 39.4473 61.1181Z" fill="url(#paint11_linear_1_225)" />
  <path d="M14.5125 62.819V70.7013C14.5125 72.0661 15.6188 73.1725 16.9837 73.1725H61.9109C63.2758 73.1725 64.3822 72.0661 64.3822 70.7013V62.819H14.5125Z" fill="url(#paint12_linear_1_225)" />
  <path d="M31.4899 30.5832C30.0492 30.5832 28.8811 29.4153 28.8811 27.9744V26.6365C28.8811 25.1958 30.049 24.0277 31.4899 24.0277C32.9307 24.0277 34.0987 25.1956 34.0987 26.6365V27.9744C34.0987 29.4151 32.9307 30.5832 31.4899 30.5832Z" fill="url(#paint13_linear_1_225)" />
  <path d="M47.405 30.5827C45.9642 30.5827 44.7961 29.4148 44.7961 27.9739V26.636C44.7961 25.1953 45.964 24.0272 47.405 24.0272C48.8457 24.0272 50.0138 25.1951 50.0138 26.636V27.9739C50.0136 29.4146 48.8457 30.5827 47.405 30.5827V30.5827Z" fill="url(#paint14_linear_1_225)" />
  <path d="M51.7836 1.97331C47.5147 1.97331 44.0542 5.67281 44.0542 10.2362C44.0542 12.3842 44.5749 14.4003 45.4889 16.1504C47.4327 19.8692 51.1505 22.3822 55.416 22.3822C58.1269 22.3822 60.3269 20.0382 60.3359 17.1402C60.3453 14.1511 60.3553 10.9952 60.3553 10.9952C60.3553 6.01252 56.5769 1.97314 51.916 1.97314H51.7836V1.97331Z" fill="url(#paint15_linear_1_225)" />
  <path d="M43.2017 1.91108H24.3763C22.5487 1.91108 20.7591 1.35389 19.2173 0.305066C18.0145 -0.513115 16.4407 0.410466 16.4407 1.93459V11.3355C16.4407 17.4367 21.0673 22.3825 26.7743 22.3825H34.4091C38.8454 22.3825 42.8003 20.1712 45.3572 16.7224C47.2506 14.1741 48.3801 10.9501 48.3801 7.44689C48.3801 4.38947 46.0616 1.91108 43.2017 1.91108V1.91108Z" fill="url(#paint16_linear_1_225)" />
  <defs>
    <linearGradient id="paint0_linear_1_225" x1="18.8388" y1="24.0358" x2="23.8302" y2="29.0273" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDCBD" />
      <stop offset="1" stop-color="#FFA9B1" />
    </linearGradient>
    <linearGradient id="paint1_linear_1_225" x1="53.7416" y1="23.0873" x2="60.7264" y2="30.0719" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDCBD" />
      <stop offset="1" stop-color="#FFA9B1" />
    </linearGradient>
    <linearGradient id="paint2_linear_1_225" x1="39.4472" y1="52.7652" x2="39.4472" y2="71.9063" gradientUnits="userSpaceOnUse">
      <stop stop-color="#537983" />
      <stop offset="1" stop-color="#3E5959" />
    </linearGradient>
    <linearGradient id="paint3_linear_1_225" x1="72.6349" y1="61.2248" x2="64.9634" y2="61.2248" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3E5959" stop-opacity="0" />
      <stop offset="1" stop-color="#384949" />
    </linearGradient>
    <linearGradient id="paint4_linear_1_225" x1="33.7043" y1="44.6661" x2="29.0912" y2="52.0471" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE99A0" />
      <stop offset="1" stop-color="#FD4755" />
    </linearGradient>
    <linearGradient id="paint5_linear_1_225" x1="45.6745" y1="45.4469" x2="49.6167" y2="51.7375" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE99A0" />
      <stop offset="1" stop-color="#FD4755" />
    </linearGradient>
    <linearGradient id="paint6_linear_1_225" x1="21.4965" y1="27.0269" x2="57.3983" y2="27.0269" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDCBD" />
      <stop offset="1" stop-color="#FFA9B1" />
    </linearGradient>
    <linearGradient id="paint7_linear_1_225" x1="39.4472" y1="29.6654" x2="39.4472" y2="36.4612" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFA9B1" stop-opacity="0" />
      <stop offset="0.9972" stop-color="#FFA78F" />
    </linearGradient>
    <linearGradient id="paint8_linear_1_225" x1="39.6256" y1="87.3959" x2="39.6256" y2="77.1672" gradientUnits="userSpaceOnUse">
      <stop stop-color="#883F2E" />
      <stop offset="1" stop-color="#6D3326" />
    </linearGradient>
    <linearGradient id="paint9_linear_1_225" x1="39.4473" y1="74.1612" x2="39.4473" y2="78.3233" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CA6E59" />
      <stop offset="1" stop-color="#883F2E" />
    </linearGradient>
    <linearGradient id="paint10_linear_1_225" x1="34.0181" y1="44.3827" x2="46.671" y2="72.5269" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF5F6" />
      <stop offset="1" stop-color="#CBE5E8" />
    </linearGradient>
    <linearGradient id="paint11_linear_1_225" x1="44.5105" y1="61.7725" x2="37.1622" y2="54.4242" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF5F6" stop-opacity="0" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint12_linear_1_225" x1="39.4473" y1="67.2849" x2="39.4473" y2="73.3543" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CBE5E8" stop-opacity="0" />
      <stop offset="1" stop-color="#7CA1B1" />
    </linearGradient>
    <linearGradient id="paint13_linear_1_225" x1="28.8813" y1="27.3054" x2="34.0987" y2="27.3054" gradientUnits="userSpaceOnUse">
      <stop stop-color="#537983" />
      <stop offset="1" stop-color="#3E5959" />
    </linearGradient>
    <linearGradient id="paint14_linear_1_225" x1="44.7961" y1="27.305" x2="50.0136" y2="27.305" gradientUnits="userSpaceOnUse">
      <stop stop-color="#537983" />
      <stop offset="1" stop-color="#3E5959" />
    </linearGradient>
    <linearGradient id="paint15_linear_1_225" x1="44.8956" y1="3.98474" x2="55.2224" y2="14.3114" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D78878" />
      <stop offset="1" stop-color="#CA6E59" />
    </linearGradient>
    <linearGradient id="paint16_linear_1_225" x1="16.4407" y1="11.1911" x2="48.3801" y2="11.1911" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D78878" />
      <stop offset="1" stop-color="#CA6E59" />
    </linearGradient>
  </defs>
</svg>
    `,
  },
  {
    title: "Send money",
    description: "Create free account for your transaction. It's pretty much easier and don't worry we care about your safety",
    icon: `
      <svg width="63" height="90" viewBox="0 0 63 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M57.3527 89.1098H5.48889C2.45748 89.1098 0 86.6523 0 83.6209V5.49011C0 2.4587 2.45748 0.0012207 5.48889 0.0012207H57.3527C60.3841 0.0012207 62.8416 2.4587 62.8416 5.49011V83.6211C62.8416 86.6523 60.3841 89.1098 57.3527 89.1098V89.1098Z" fill="url(#paint0_linear_1_210)" />
  <path d="M55.3431 86.4518H7.49851C4.6725 86.4518 2.38159 84.1609 2.38159 81.3349V7.77598C2.38159 4.94997 4.6725 2.65906 7.49851 2.65906H55.3433C58.1693 2.65906 60.4602 4.94997 60.4602 7.77598V81.3351C60.46 84.1609 58.1691 86.4518 55.3431 86.4518Z" fill="url(#paint1_linear_1_210)" />
  <path d="M53.2152 5.3186H40.3988C40.0111 5.3186 39.6967 5.63282 39.6967 6.02066C39.6967 7.10214 38.8201 7.97881 37.7386 7.97881H25.1031C24.0216 7.97881 23.145 7.10214 23.145 6.02066C23.145 5.63301 22.8307 5.3186 22.4429 5.3186H9.62651C7.01259 5.3186 4.8938 7.43759 4.8938 10.0513V79.0584C4.8938 81.6723 7.01278 83.7911 9.62651 83.7911H53.215C55.8289 83.7911 57.9477 81.6721 57.9477 79.0584V10.0513C57.9479 7.43759 55.8289 5.3186 53.2152 5.3186V5.3186Z" fill="url(#paint2_linear_1_210)" />
  <path d="M43.8516 74.8402H18.9899C17.7929 74.8402 16.8225 73.8698 16.8225 72.6728V68.8479C16.8225 67.6509 17.7929 66.6805 18.9899 66.6805H43.8516C45.0486 66.6805 46.0189 67.6509 46.0189 68.8479V72.6728C46.0189 73.8698 45.0486 74.8402 43.8516 74.8402Z" fill="url(#paint3_linear_1_210)" />
  <path d="M29.1507 1.2219L18.5357 17.3053C17.3421 19.1139 18.6392 21.524 20.8059 21.524H25.7691V34.5226C25.7691 35.969 26.9416 37.1413 28.3878 37.1413H34.4543C35.9006 37.1413 37.073 35.9688 37.073 34.5226V21.524H42.0361C44.2031 21.524 45.5001 19.1139 44.3064 17.3053L33.6912 1.2219C32.616 -0.407302 30.2259 -0.407302 29.1507 1.2219V1.2219Z" fill="url(#paint4_linear_1_210)" />
  <path d="M31.4209 62.6099C41.8774 62.6099 50.3541 54.1333 50.3541 43.6768C50.3541 33.2203 41.8774 24.7437 31.4209 24.7437C20.9644 24.7437 12.4878 33.2203 12.4878 43.6768C12.4878 54.1333 20.9644 62.6099 31.4209 62.6099Z" fill="url(#paint5_linear_1_210)" />
  <path d="M31.4208 58.4033C39.5537 58.4033 46.1466 51.8104 46.1466 43.6776C46.1466 35.5447 39.5537 28.9518 31.4208 28.9518C23.288 28.9518 16.6951 35.5447 16.6951 43.6776C16.6951 51.8104 23.288 58.4033 31.4208 58.4033Z" fill="url(#paint6_linear_1_210)" />
  <path d="M49.8976 47.8229L37.5195 35.4448C36.8834 34.4892 35.1798 34.0979 33.7964 33.9566C33.6967 33.8273 32.7608 32.9306 32.7049 32.8617C32.516 32.6292 32.1553 32.4584 31.794 32.4584C31.1876 32.4584 30.7464 32.8168 30.7464 33.2027V33.9746C27.8242 34.388 25.2329 36.0696 25.2329 39.5707C25.2329 41.243 25.902 42.3883 26.8754 43.234C26.8754 43.234 30.7135 47.0809 30.7464 47.1168V49.7156C28.7064 49.3573 27.7691 47.7307 26.6111 47.7307C25.5635 47.7307 24.7366 49.109 24.7366 50.0463C24.7366 50.7319 25.1458 51.4087 25.8387 51.987L35.9222 62.0706C42.8808 60.3737 48.3319 54.832 49.8976 47.8229V47.8229Z" fill="url(#paint7_linear_1_210)" />
  <path d="M32.7579 41.4717V37.4467C34.5498 37.5846 35.0737 38.4668 35.9832 38.4668C37.1963 38.4668 37.6924 36.9507 37.6924 36.2063C37.6924 34.3042 34.4668 33.863 32.7577 33.808V33.1187C32.7577 32.7328 32.2339 32.3744 31.7101 32.3744C31.1036 32.3744 30.6624 32.7328 30.6624 33.1187V33.8906C27.7402 34.304 25.1489 35.9856 25.1489 39.4867C25.1489 43.0154 28.1261 44.2007 30.6624 45.1657V49.6317C28.6224 49.2733 27.6851 47.6467 26.5272 47.6467C25.4795 47.6467 24.6526 49.025 24.6526 49.9623C24.6526 51.7267 27.3543 53.4359 30.6624 53.546V54.2353C30.6624 54.6212 31.1034 54.9796 31.7101 54.9796C32.2339 54.9796 32.7577 54.6212 32.7577 54.2353V53.4359C35.983 52.9121 38.1886 50.8445 38.1886 47.4262C38.1888 43.7044 35.2664 42.4088 32.7579 41.4717V41.4717ZM30.9384 40.81C29.8908 40.369 29.174 39.8727 29.174 39.0733C29.174 38.4116 29.6978 37.7776 30.9384 37.5296V40.81ZM32.4823 49.6039V45.9099C33.4747 46.3784 34.1637 46.9575 34.1637 47.8672C34.1639 48.8596 33.4194 49.3834 32.4823 49.6039Z" fill="url(#paint8_linear_1_210)" />
  <path d="M0 74.7024V83.6201C0 86.6515 2.45748 89.109 5.48889 89.109H57.3527C60.3841 89.109 62.8416 86.6515 62.8416 83.6201V74.7024H0Z" fill="url(#paint9_linear_1_210)" />
  <defs>
    <linearGradient id="paint0_linear_1_210" x1="6.90199" y1="20.0367" x2="63.797" y2="76.9315" gradientUnits="userSpaceOnUse">
      <stop stop-color="#537983" />
      <stop offset="1" stop-color="#3E5959" />
    </linearGradient>
    <linearGradient id="paint1_linear_1_210" x1="60.8295" y1="73.9641" x2="-20.4434" y2="-7.30895" gradientUnits="userSpaceOnUse">
      <stop stop-color="#537983" />
      <stop offset="1" stop-color="#3E5959" />
    </linearGradient>
    <linearGradient id="paint2_linear_1_210" x1="16.4948" y1="29.6289" x2="62.1618" y2="75.2959" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EEF5F6" />
      <stop offset="1" stop-color="#CBE5E8" />
    </linearGradient>
    <linearGradient id="paint3_linear_1_210" x1="31.4207" y1="64.513" x2="31.4207" y2="77.3902" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C1E9AF" />
      <stop offset="1" stop-color="#4FC123" />
    </linearGradient>
    <linearGradient id="paint4_linear_1_210" x1="22.2802" y1="10.9245" x2="37.0873" y2="25.7313" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE99A0" />
      <stop offset="1" stop-color="#FD4755" />
    </linearGradient>
    <linearGradient id="paint5_linear_1_210" x1="21.8587" y1="34.1148" x2="43.2918" y2="55.5477" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE177" />
      <stop offset="1" stop-color="#FE9738" />
    </linearGradient>
    <linearGradient id="paint6_linear_1_210" x1="38.8581" y1="51.1148" x2="22.188" y2="34.4449" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE177" />
      <stop offset="1" stop-color="#FE9738" />
    </linearGradient>
    <linearGradient id="paint7_linear_1_210" x1="43.5062" y1="51.7822" x2="26.1986" y2="43.5587" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE9738" stop-opacity="0" />
      <stop offset="1" stop-color="#F46700" />
    </linearGradient>
    <linearGradient id="paint8_linear_1_210" x1="27.6704" y1="39.6948" x2="36.4288" y2="48.4532" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE9738" />
      <stop offset="1" stop-color="#F46700" />
    </linearGradient>
    <linearGradient id="paint9_linear_1_210" x1="31.4208" y1="80.0226" x2="31.4208" y2="89.5546" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3E5959" stop-opacity="0" />
      <stop offset="1" stop-color="#384949" />
    </linearGradient>
  </defs>
</svg>
    `,
  },
];