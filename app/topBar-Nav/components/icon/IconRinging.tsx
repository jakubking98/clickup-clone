export default function IconRinging({
  fill = "gray-700",
  size = 20,
}: {
  fill?: string;
  size?: number;
}) {
  return (
    <>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-${fill}`}
        height={size}
        width={size}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="icomoon-ignore"> </g>
          <path
            d="M25.074 21.375v-8.568c0-4.462-3.229-8.162-7.474-8.915v-0.681c0-0.589-0.478-1.066-1.066-1.066h-1.066c-0.589 0-1.066 0.477-1.066 1.066v0.684c-4.237 0.761-7.453 4.458-7.453 8.912v8.568l-3.742 3.029v1.729h25.59v-1.729l-3.721-3.029zM27.729 25.066h-23.457v-0.154l3.742-3.029v-9.077c0-4.41 3.587-7.997 7.997-7.997 4.409 0 7.997 3.587 7.997 7.997v9.075l3.721 3.029v0.155z"
            className={`fill-${fill}`}
          ></path>
          <path
            d="M15.999 29.856c1.473 0 2.669-1.192 2.669-2.666h-5.335c0.001 1.473 1.195 2.666 2.667 2.666z"
            className={`fill-${fill}`}
          ></path>
        </g>
      </svg>
    </>
  );
}
