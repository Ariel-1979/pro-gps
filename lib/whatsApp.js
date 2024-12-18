const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const encodedMessage = process.env.NEXT_PUBLIC_PHONE_MESSAGE;
export const whatsappURL = `${phoneNumber}?text=${encodedMessage}`;
