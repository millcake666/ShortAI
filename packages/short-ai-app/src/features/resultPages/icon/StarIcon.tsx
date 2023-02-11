export const StarIcon = (variant: boolean) => {
  return (
    <div style={{ display: 'flex' }}>
      <svg
        width="37"
        height="35"
        viewBox="0 0 37 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.9375 33.8301C8.67188 34.3926 9.57812 34.2051 10.6406 33.4395L18.7656 27.4707L26.8906 33.4395C27.9531 34.2051 28.875 34.3926 29.6094 33.8301C30.3281 33.2832 30.4844 32.377 30.0625 31.1426L26.8594 21.5957L35.0625 15.7051C36.1094 14.9551 36.5625 14.127 36.2656 13.252C35.9688 12.3926 35.1406 11.9707 33.8438 11.9863L23.7812 12.0488L20.7188 2.45508C20.3281 1.20508 19.6875 0.533203 18.7656 0.533203C17.8594 0.533203 17.2188 1.20508 16.8125 2.45508L13.75 12.0488L3.6875 11.9863C2.39062 11.9707 1.57812 12.3926 1.28125 13.252C0.984375 14.127 1.42188 14.9551 2.48438 15.7051L10.6875 21.5957L7.46875 31.1426C7.04688 32.377 7.20312 33.2832 7.9375 33.8301ZM10.6719 30.0645C10.6562 30.0332 10.6562 30.0176 10.6719 29.9395L13.6406 21.5488C13.9062 20.7832 13.8125 20.2988 13.1094 19.8301L5.76562 14.7988C5.70312 14.7676 5.67188 14.7363 5.6875 14.6895C5.71875 14.6582 5.75 14.6426 5.82812 14.6426L14.7188 14.8457C15.5312 14.877 15.9375 14.6113 16.1719 13.8301L18.6875 5.29883C18.7031 5.20508 18.7344 5.18945 18.7656 5.18945C18.8125 5.18945 18.8281 5.20508 18.8594 5.29883L21.3594 13.8301C21.5938 14.6113 22.0156 14.877 22.8125 14.8457L31.7031 14.6426C31.7969 14.6426 31.8281 14.6582 31.8438 14.6895C31.8594 14.7363 31.8438 14.752 31.7656 14.7988L24.4375 19.8301C23.7188 20.3145 23.625 20.7832 23.8906 21.5488L26.8594 29.9395C26.8906 30.0176 26.8906 30.0332 26.8594 30.0645C26.8281 30.1113 26.7969 30.0801 26.7344 30.0488L19.6875 24.6113C19.0469 24.1113 18.4844 24.1113 17.8594 24.6113L10.8125 30.0488C10.75 30.0801 10.7031 30.1113 10.6719 30.0645Z"
          fill={variant ? '#FFD600' : '#E3E6FC'}
        />
      </svg>
    </div>
  )
}
