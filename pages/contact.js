
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    alert("This is a placeholder for EmailJS integration.");
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <input type="text" name="name" placeholder="Name" className="border p-2" />
      <input type="email" name="email" placeholder="Email" className="border p-2" />
      <textarea name="message" placeholder="Message" className="border p-2"></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Send
      </button>
    </form>
  );
}
