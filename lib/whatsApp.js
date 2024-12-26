const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const phoneSOS = process.env.NEXT_PUBLIC_PHONE_SOS;
const encodedMessage = process.env.NEXT_PUBLIC_PHONE_MESSAGE;
const encodedSOS = process.env.NEXT_PUBLIC_PHONE_SOS_MESSAGE;
export const whatsappURL = `${phoneNumber}?text=${encodedMessage}`;
export const whatsappSOS = `${phoneSOS}?text=${encodedSOS}`;
