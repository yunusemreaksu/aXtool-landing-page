export default function QuestionMarkCircle({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.0866 17.5922C24.6896 16.1363 25 14.5759 25 13C25 9.8174 23.7357 6.76516 21.4853 4.51472C19.2348 2.26428 16.1826 1 13 1C9.8174 1 6.76515 2.26428 4.51472 4.51472C2.26428 6.76516 1 9.8174 1 13C1 14.5759 1.31039 16.1363 1.91345 17.5922C2.5165 19.0481 3.40042 20.371 4.51472 21.4853C5.62902 22.5996 6.95189 23.4835 8.4078 24.0866C9.86371 24.6896 11.4241 25 13 25C14.5759 25 16.1363 24.6896 17.5922 24.0866C19.0481 23.4835 20.371 22.5996 21.4853 21.4853C22.5996 20.371 23.4835 19.0481 24.0866 17.5922Z"
        fill="#1C64F2"
      />
      <path
        d="M7.97067 9C8.70267 7.44667 10.6773 6.33333 13 6.33333C15.9467 6.33333 18.3333 8.124 18.3333 10.3333C18.3333 12.2 16.6293 13.7667 14.3253 14.2093C13.6027 14.348 13 14.9293 13 15.6667M13 19.6667H13.0133M25 13C25 14.5759 24.6896 16.1363 24.0866 17.5922C23.4835 19.0481 22.5996 20.371 21.4853 21.4853C20.371 22.5996 19.0481 23.4835 17.5922 24.0866C16.1363 24.6896 14.5759 25 13 25C11.4241 25 9.86371 24.6896 8.4078 24.0866C6.95189 23.4835 5.62902 22.5996 4.51472 21.4853C3.40042 20.371 2.5165 19.0481 1.91345 17.5922C1.31039 16.1363 1 14.5759 1 13C1 9.8174 2.26428 6.76516 4.51472 4.51472C6.76516 2.26428 9.8174 1 13 1C16.1826 1 19.2348 2.26428 21.4853 4.51472C23.7357 6.76516 25 9.8174 25 13Z"
        stroke="#E1EFFE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}