
export default function EndorseForm() {
  // Replace the URL below with the published link of your Google Form once created
  return (
    <div className="w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdYourFormIdHere/viewform?embedded=true"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full"
      >
        Loading…
      </iframe>
    </div>
  );
}
