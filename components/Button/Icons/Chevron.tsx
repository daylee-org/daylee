interface Props {
  onClick?(event: any): void;
}
export function Chevron({ onClick }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="-5 -2 23 23"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.1548 9.99994L6.07739 3.92253L7.2559 2.74402L14.5118 9.99994L7.2559 17.2559L6.07739 16.0774L12.1548 9.99994Z" />
    </svg>
  );
}
