function openWhatsApp(style) {
    const phoneNumber = "08163308205"; // Replace with your WhatsApp number
    const message = `I'm interested in ${style} from Bowie Fashion House.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

function openWhatsApp(message) {
    const phoneNumber = "2348163308205"; // Replace with your number in international format (no +)
    const baseMessage = "Hello Bowie Fashion! " + message;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(baseMessage)}`;
    window.open(whatsappLink, '_blank');
}