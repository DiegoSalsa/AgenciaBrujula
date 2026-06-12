import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#551273', // Purple circle background
          borderRadius: '50%',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="480" height="480">
          <path fill="#f3b900" d="M389.38,267.98c33.72,84.02,67.44,168.04,101.16,252.06-25.62,28.78-51.25,57.55-76.87,86.33,34.96-3,69.92-6,104.88-9,63.09,66.91,126.18,133.83,189.27,200.74-35.5-84.96-71-169.91-106.5-254.87,21.32-29.19,42.64-58.38,63.95-87.57l-96.56,22.57c-59.78-70.09-119.55-140.17-179.32-210.26Z"/>
          <path fill="#f3b900" d="M533.17,304.76c-128.82,0-233.25,105.07-233.25,234.68s104.43,234.68,233.25,234.68,233.25-105.07,233.25-234.68-104.43-234.68-233.25-234.68ZM659.92,708.79c-76.5,53.35-193.54,17.69-261.4-79.63-67.86-97.32-60.86-219.46,15.65-272.81,76.5-53.35,193.54-17.69,261.4,79.63,67.86,97.32,60.86,219.46-15.64,272.81Z"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
