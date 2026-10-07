const whatsappNumber = "556899851248";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de falar com a equipe da MSM Industrial.",
);

export const siteContact = {
  email: "msm@msmind.com.br",
  location: "Rio Branco - Acre",
  mapEmbedUrl:
    "https://www.google.com/maps?q=MSM%20Industrial%20Rio%20Branco%20AC&output=embed",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=MSM+Industrial+Rio+Branco+AC",
  whatsappDisplay: "(68) 99985-1248",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
};
